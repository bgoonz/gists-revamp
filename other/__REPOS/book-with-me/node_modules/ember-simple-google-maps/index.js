/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-simple-google-maps',

  contentFor(type, config) {
    let scriptUrl = '';
    if (type === 'body-footer') {
      scriptUrl = `${config[this.name].url}?v=${config[this.name].version}`
      if (config[this.name].apiKey !== '') {
        scriptUrl = scriptUrl + `&key=${config[this.name].apiKey}`;
      }
    }
    return scriptUrl !== '' ? `<script src="${scriptUrl}"></script>` : '';
  }

};
