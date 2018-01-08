import angular from 'angular';

import SearchTemplate from './search.template.html';

import './search.styles.less';

export default

  angular.module('app.search', [])
    .component('search', {
      bindings: { search: '<' },
      template: SearchTemplate,
      controllerAs: '$ctrl',
    })
    .name;


