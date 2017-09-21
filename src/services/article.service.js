import angular from 'angular'

class ArticleService {
  constructor () {
    this.articles = [{
      title: 'John'
    }, {
      title: 'Elisa'
    }, {
      title: 'Mark'
    }, {
      title: 'Annie'
    }]
  }

  getArticleList () {
    return this.articles
  }
}

export default angular.module('services.articleService', [])
  .service('articleService', ArticleService)
  .name
