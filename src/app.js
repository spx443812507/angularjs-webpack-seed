import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ocLazyLoad from 'oclazyload'
import 'angular-animate'
import 'angular-aria'
import 'angular-messages'

import routing from './app.routes'
import directives from './directives'
import config from './app.config'

import './assets/scss/index.scss'

angular.module('app', [uiRouter, ocLazyLoad, 'ngMessages', directives])
  .config(routing)
  .constant('config', config)
