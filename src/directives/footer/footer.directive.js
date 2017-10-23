import angular from 'angular'

function footer () {
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

export default angular.module('directives.footer', [])
  .directive('sFooter', footer)
  .name
