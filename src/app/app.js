import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import config from './app.config.js';
import Search from './components/search/search.module';
import Home from './components/home/home.module';
import Videos from './components/videos/videos.module';
import Card from './components/videos/card/card.module';
import youtubeService from './services/youtube';
import ticketMasterService from './services/ticketmaster';

const MODULE_NAME = 'app';

angular
.module('app', [uiRouter, Home, Search, Videos, Card])
.factory('youtubeService', youtubeService)
.factory('ticketMasterService', ticketMasterService)
.config(config);



export default MODULE_NAME;