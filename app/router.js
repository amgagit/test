import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('favorites', {path: '/favs'});
  this.route('posts', function() {
    this.route('new');
  });
  this.route('favoritePosts');
  this.route('photo', {path: '/photos/:photo_id'});
  this.route('test', {path: '/test'});
  this.route('store-categories', {path: '/store'});
  this.route('photos', function() {
    this.route('edit', {path: '/:photo_id'});
  });
});

export default Router;
