import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import config from './app.config.js';
import Home from './components/home/home.module';



const MODULE_NAME = 'app';

angular
.module('app', [uiRouter, Home])
.config(config);



export default MODULE_NAME;