import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import config from './app.config.js';
import Search from './components/search/search.module';
import Home from './components/home/home.module';
import Videos from './components/videos/videos.module';
import Card from './components/videos/card/card.module';
import YoutubeService from './services/youtube.service'

const MODULE_NAME = 'app';

angular
.module('app', [uiRouter, Home, Search, Videos, Card])
.service('youtubeService', YoutubeService)
.config(config);



export default MODULE_NAME;