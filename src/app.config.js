routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider']

export default function routing ($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(false)
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('articleList', {
    url: '/article/list',
    template: require('./modules/article/list/list.html'),
    controller: 'ArticleListController',
    controllerAs: 'ctrl',
    lazyLoad: function (transition) {
      const $ocLazyLoad = transition.injector().get('$ocLazyLoad')
      return import('./modules/article/list').then(mod => $ocLazyLoad.load(mod.ARTICLE_LIST_MODULE))
    }
  })

  $stateProvider.state('articleDetail', {
    url: '/article/detail',
    template: require('./modules/article/detail/detail.html'),
    controller: 'ArticleDetailController',
    controllerAs: 'ctrl',
    lazyLoad: function (transition) {
      const $ocLazyLoad = transition.injector().get('$ocLazyLoad')
      return import('./modules/article/detail').then(mod => $ocLazyLoad.load(mod.ARTICLE_DETAIL_MODULE))
    }
  })
}
