import angular from 'angular';

import VideoModalTemplate from './videoModal.template.html';
import VideModalController from './videoModal.controller';
import './videoModal.styles.less';

export default

    angular.module('app.videos.videoModal', [])
        .component('videoModal', {
            bindings: {
                resolve: '<',
                close: '&',
                dismiss: '&'
            },
            template: VideoModalTemplate,
            controller: VideModalController,
            controllerAs: '$ctrl'
        })
        .name;



