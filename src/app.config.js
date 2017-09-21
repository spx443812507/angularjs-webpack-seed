routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider']

export default function routing ($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(false)
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('article', {
    url: '/article/list',
    template: require('./modules/article/list/list.html'),
    controller: 'ArticleListController',
    controllerAs: 'ctrl',
    lazyLoad: function (transition) {
      const $ocLazyLoad = transition.injector().get('$ocLazyLoad')
      return import('./modules/article/list').then(mod => $ocLazyLoad.load(mod.ARTICLE_LIST_MODULE))
    }
  })
}
