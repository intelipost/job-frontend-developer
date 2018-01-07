import angular from 'angular';

import HomeTemplate from './home.template.html';
import '../../../style/app.less';

export default

angular.module('app.home', [])
.component('home', {
  bindings: { home: '<' },
  template: HomeTemplate,
  controllerAs: 'ctrl',
})
.name;


