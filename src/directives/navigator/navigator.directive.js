import angular from 'angular'

function navigator () {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    template: require('./template.html'),
    link (scope) {

    }
  }
}

export default angular.module('directives.navigator', [])
  .directive('navigator', navigator)
  .name
