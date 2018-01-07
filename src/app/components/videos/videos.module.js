import angular from 'angular';

import VideosTemplate from './videos.template.html';
import VideosController from './videos.controller';

export default

    angular.module('app.videos', [])
        .component('videos', {
            bindings: { searchResult: '<' } ,
            controller: VideosController,
            bindToController: { searchResult: '<' },
            template: VideosTemplate,
            controllerAs: 'ctrl',
        })
        .name;


