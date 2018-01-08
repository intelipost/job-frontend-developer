import angular from 'angular';

import BandInfoTemplate from './bandInfo.template.html';
import './bandInfo.styles.less';

export default

angular.module('app.videos.bandInfo', [])
.component('bandInfo', {
  bindings: { bandInfo: '<' },
  template: BandInfoTemplate,
  controllerAs: '$ctrl',
})
.name;


