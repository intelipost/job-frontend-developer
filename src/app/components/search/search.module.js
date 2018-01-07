import angular from 'angular';

import SearchTemplate from './search.template.html';
import SearchController from './search.controller';
import SearchService from './search.service';

export default

  angular.module('app.search', [])
    .component('search', {
      bindings: { search: '<' },
      controller: SearchController,
      template: SearchTemplate,
      controllerAs: 'ctrl',
    })
    .service('search.service', SearchService)
    .name;


