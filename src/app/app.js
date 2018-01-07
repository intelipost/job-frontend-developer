import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import config from './app.config.js';
import Search from './components/search/search.module';



const MODULE_NAME = 'app';

angular
.module('app', [uiRouter, Search])
.config(config);



export default MODULE_NAME;