import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import trimHelper from './helpers/trim';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;
Ember.Hanglebars.registerBoundHelper('trim', trimHelper);

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
