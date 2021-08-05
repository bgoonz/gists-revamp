'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _colorLogger = require('color-logger');

var _colorLogger2 = _interopRequireDefault(_colorLogger);

var _ASTUtil = require('./Util/ASTUtil.js');

var _ASTUtil2 = _interopRequireDefault(_ASTUtil);

var _ESParser = require('./Parser/ESParser');

var _ESParser2 = _interopRequireDefault(_ESParser);

var _PathResolver = require('./Util/PathResolver.js');

var _PathResolver2 = _interopRequireDefault(_PathResolver);

var _DocFactory = require('./Factory/DocFactory.js');

var _DocFactory2 = _interopRequireDefault(_DocFactory);

var _InvalidCodeLogger = require('./Util/InvalidCodeLogger.js');

var _InvalidCodeLogger2 = _interopRequireDefault(_InvalidCodeLogger);

var _Plugin = require('./Plugin/Plugin.js');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = new _colorLogger2.default('ESDoc');

/**
 * API Documentation Generator.
 *
 * @example
 * let config = {source: './src', destination: './esdoc'};
 * ESDoc.generate(config, (results, config)=>{
 *   console.log(results);
 * });
 */
class ESDoc {
  /**
   * Generate documentation.
   * @param {ESDocConfig} config - config for generation.
   */
  static generate(config) {
    (0, _assert2.default)(config.source);
    (0, _assert2.default)(config.destination);

    _Plugin2.default.init(config.plugins);
    _Plugin2.default.onStart();
    config = _Plugin2.default.onHandleConfig(config);

    this._setDefaultConfig(config);
    this._deprecatedConfig(config);

    _colorLogger2.default.debug = !!config.debug;
    const includes = config.includes.map(v => new RegExp(v));
    const excludes = config.excludes.map(v => new RegExp(v));

    let packageName = null;
    let mainFilePath = null;
    if (config.package) {
      try {
        const packageJSON = _fsExtra2.default.readFileSync(config.package, { encode: 'utf8' });
        const packageConfig = JSON.parse(packageJSON);
        packageName = packageConfig.name;
        mainFilePath = packageConfig.main;
      } catch (e) {
        // ignore
      }
    }

    let results = [];
    const asts = [];
    const sourceDirPath = _path2.default.resolve(config.source);

    this._walk(config.source, filePath => {
      const relativeFilePath = _path2.default.relative(sourceDirPath, filePath);
      let match = false;
      for (const reg of includes) {
        if (relativeFilePath.match(reg)) {
          match = true;
          break;
        }
      }
      if (!match) return;

      for (const reg of excludes) {
        if (relativeFilePath.match(reg)) return;
      }

      console.log(`parse: ${filePath}`);
      const temp = this._traverse(config.source, filePath, packageName, mainFilePath);
      if (!temp) return;
      results.push(...temp.results);

      asts.push({ filePath: `source${_path2.default.sep}${relativeFilePath}`, ast: temp.ast });
    });

    // config.index
    if (config.index) {
      results.push(this._generateForIndex(config));
    }

    // config.package
    if (config.package) {
      results.push(this._generateForPackageJSON(config));
    }

    results = this._resolveDuplication(results);

    results = _Plugin2.default.onHandleDocs(results);

    // index.json
    {
      const dumpPath = _path2.default.resolve(config.destination, 'index.json');
      _fsExtra2.default.outputFileSync(dumpPath, JSON.stringify(results, null, 2));
    }

    // ast
    for (const ast of asts) {
      const json = JSON.stringify(ast.ast, null, 2);
      const filePath = _path2.default.resolve(config.destination, `ast/${ast.filePath}.json`);
      _fsExtra2.default.outputFileSync(filePath, json);
    }

    // publish
    this._publish(config);

    _Plugin2.default.onComplete();
  }

  /**
   * set default config to specified config.
   * @param {ESDocConfig} config - specified config.
   * @private
   */
  static _setDefaultConfig(config) {
    if (!config.includes) config.includes = ['\\.(js|es6)$'];

    if (!config.excludes) config.excludes = ['\\.config\\.(js|es6)$'];

    if (!config.index) config.index = './README.md';

    if (!config.package) config.package = './package.json';
  }

  /* eslint-disable no-unused-vars */
  static _deprecatedConfig(config) {}
  // do nothing


  /**
   * walk recursive in directory.
   * @param {string} dirPath - target directory path.
   * @param {function(entryPath: string)} callback - callback for find file.
   * @private
   */
  static _walk(dirPath, callback) {
    const entries = _fsExtra2.default.readdirSync(dirPath);

    for (const entry of entries) {
      const entryPath = _path2.default.resolve(dirPath, entry);
      const stat = _fsExtra2.default.statSync(entryPath);

      if (stat.isFile()) {
        callback(entryPath);
      } else if (stat.isDirectory()) {
        this._walk(entryPath, callback);
      }
    }
  }

  /**
   * traverse doc comment in JavaScript file.
   * @param {string} inDirPath - root directory path.
   * @param {string} filePath - target JavaScript file path.
   * @param {string} [packageName] - npm package name of target.
   * @param {string} [mainFilePath] - npm main file path of target.
   * @returns {Object} - return document that is traversed.
   * @property {DocObject[]} results - this is contained JavaScript file.
   * @property {AST} ast - this is AST of JavaScript file.
   * @private
   */
  static _traverse(inDirPath, filePath, packageName, mainFilePath) {
    logger.i(`parsing: ${filePath}`);
    let ast;
    try {
      ast = _ESParser2.default.parse(filePath);
    } catch (e) {
      _InvalidCodeLogger2.default.showFile(filePath, e);
      return null;
    }

    const pathResolver = new _PathResolver2.default(inDirPath, filePath, packageName, mainFilePath);
    const factory = new _DocFactory2.default(ast, pathResolver);

    _ASTUtil2.default.traverse(ast, (node, parent) => {
      try {
        factory.push(node, parent);
      } catch (e) {
        _InvalidCodeLogger2.default.show(filePath, node);
        throw e;
      }
    });

    return { results: factory.results, ast: ast };
  }

  static _generateForIndex(config) {
    const indexContent = _fsExtra2.default.readFileSync(config.index, { encode: 'utf8' }).toString();
    const tag = {
      kind: 'index',
      content: indexContent,
      longname: _path2.default.resolve(config.index),
      name: config.index,
      static: true,
      access: 'public'
    };

    return tag;
  }

  static _generateForPackageJSON(config) {
    let packageJSON = '';
    let packagePath = '';
    try {
      packageJSON = _fsExtra2.default.readFileSync(config.package, { encoding: 'utf-8' });
      packagePath = _path2.default.resolve(config.package);
    } catch (e) {
      // ignore
    }

    const tag = {
      kind: 'packageJSON',
      content: packageJSON,
      longname: packagePath,
      name: _path2.default.basename(packagePath),
      static: true,
      access: 'public'
    };

    return tag;
  }

  static _resolveDuplication(docs) {
    const memberDocs = docs.filter(doc => doc.kind === 'member');
    const removeIds = [];

    for (const memberDoc of memberDocs) {
      // member duplicate with getter/setter/method.
      // when it, remove member.
      // getter/setter/method are high priority.
      const sameLongnameDoc = docs.find(doc => doc.longname === memberDoc.longname && doc.kind !== 'member');
      if (sameLongnameDoc) {
        removeIds.push(memberDoc.__docId__);
        continue;
      }

      const dup = docs.filter(doc => doc.longname === memberDoc.longname && doc.kind === 'member');
      if (dup.length > 1) {
        const ids = dup.map(v => v.__docId__);
        ids.sort((a, b) => {
          return a < b ? -1 : 1;
        });
        ids.shift();
        removeIds.push(...ids);
      }
    }

    return docs.filter(doc => !removeIds.includes(doc.__docId__));
  }

  static _publish(config) {
    try {
      const write = (filePath, content, option) => {
        const _filePath = _path2.default.resolve(config.destination, filePath);
        content = _Plugin2.default.onHandleContent(content, _filePath);

        console.log(`output: ${_filePath}`);
        _fsExtra2.default.outputFileSync(_filePath, content, option);
      };

      const copy = (srcPath, destPath) => {
        const _destPath = _path2.default.resolve(config.destination, destPath);
        console.log(`output: ${_destPath}`);
        _fsExtra2.default.copySync(srcPath, _destPath);
      };

      const read = filePath => {
        const _filePath = _path2.default.resolve(config.destination, filePath);
        return _fsExtra2.default.readFileSync(_filePath).toString();
      };

      _Plugin2.default.onPublish(write, copy, read);
    } catch (e) {
      _InvalidCodeLogger2.default.showError(e);
      process.exit(1);
    }
  }
}
exports.default = ESDoc;