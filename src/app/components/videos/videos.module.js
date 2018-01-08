import angular from 'angular';

import VideosTemplate from './videos.template.html';
import VideosController from './videos.controller';
import './videos.styles.less';

export default

    angular.module('app.videos', [])
        .component('videos', {
            bindings: { searchResult: '<', bandInfo: '<' },
            controller: VideosController,
            template: VideosTemplate,
            controllerAs: '$ctrl',
        })
        .name;


