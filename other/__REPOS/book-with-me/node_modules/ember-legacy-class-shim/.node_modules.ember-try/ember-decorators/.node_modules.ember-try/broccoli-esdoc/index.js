'use strict';

const merge         = require('merge');
const ESDoc         = require('esdoc').default;
const path          = require('path');
const CachingWriter = require('broccoli-caching-writer');

const defaultOpts = {
  source: './app',
  dest: './docs',
  plugins: []
};

function nullLog() {};

module.exports = class BroccoliESDoc extends CachingWriter {
  constructor(inputNodes, options) {
    options = options || {};

    if (Array.isArray(inputNodes)) {
      throw new Error('ESDoc only accepts one input path for the time being');
    }

    super([inputNodes], {
      annotation: options.annotation
    });

    this.inputNodes = [inputNodes];
    this.options = merge(true, defaultOpts, options);
  }

  build() {
    const originalDir = process.cwd();
    process.chdir(this.inputPaths[0]);

    const config = this.options;

    config.destination = path.join(this.outputPath, config.dest);

    try {
      ESDoc.generate(config);
    } catch (e) {
      console.log(e);
    } finally {
      process.chdir(originalDir);
    }
  }
};
