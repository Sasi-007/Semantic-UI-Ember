import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('modules', function() {
    this.route('accordion');
    this.route('checkbox');
    this.route('dimmer');
    this.route('dropdown');
    this.route('embed');
    this.route('modal');
    this.route('nag');
    this.route('popup');
    this.route('progress');
    this.route('rating');
    this.route('search');
    this.route('shape');
    this.route('sidebar');
  });
});

export default Router;
