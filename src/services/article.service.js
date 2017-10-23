import angular from 'angular'

class ArticleService {
  constructor ($http, $q, config) {
    this.$http = $http
    this.$q = $q
    this.config = config
    this.articles = []
  }

  getArticleList () {
    return this.$http.get('/api/seminars', {
      page: 0,
      per_page: 15
    })
  }
}

ArticleService.$inject = ['$http', '$q', 'config']

export default angular.module('services.articleService', [])
  .service('articleService', ArticleService)
  .name
