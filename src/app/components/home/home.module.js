import angular from 'angular';

import HomeTemplate from './home.template.html';
import HomeController from './home.controller.js';

export default

angular.module('app.home', [])
.component('home', {
  bindings: { home: '<' },
  controller: HomeController,
  template: HomeTemplate,
})
.name;


