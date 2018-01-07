import angular from 'angular';

import CardTemplate from './card.template.html';

export default

    angular.module('app.videos.card', [])
        .component('card', {
            bindings: { card: '<', onToggleActive: '&'},
            template: CardTemplate,
        })
        .name;


