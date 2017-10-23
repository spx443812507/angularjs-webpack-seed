/**
 * Created by siler on 2017/10/19.
 */
import angular from 'angular'
import footerDirective from './footer/footer.directive'
import navigatorDirective from './navigator/navigator.directive'

export default angular.module('directive', [footerDirective, navigatorDirective])
  .name
