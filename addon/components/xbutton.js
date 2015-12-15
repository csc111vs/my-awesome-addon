import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  setupXbutton: function() {
    // ...
  }.on('didInsertElement'),

  teardownXbutton: function() {
    this.get('xbutton').destroy();
  }.on('willDestroyElement'),
});
blueprints/xbutton/index.js
module.exports = {
  name: 'ember-cli-xbutton',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/unbutton/dist/unbutton.js');
    app.import('bower_components/xbutton/dist/js/xbutton.js');
    app.import('bower_components/xbutton/dist/css/xbutton.css');
  }
};