import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ocLazyLoad from 'oclazyload'
import 'angular-animate'
import 'angular-aria'
import 'angular-messages'

import routing from './app.routes'
import directives from './directives'
import config from './app.config'

import './css/article.css'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.css'

angular.module('app', [uiRouter, ocLazyLoad, 'ngMessages', directives])
  .config(routing)
  .constant('config', config)
