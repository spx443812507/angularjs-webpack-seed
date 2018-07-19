/**
 * Created by siler on 2017/9/18.
 */
export default class ArticleDetailController {
  constructor ($scope, articleService) {
    this.articleService = articleService
    this.articles = []
    this.article = {
      title: ''
    }

    $scope.$watch(() => this.articles, articles => {
      console.log(articles)
    })
  }

  loadArticleCategoryList () {
    this.articleService.getArticleList().then((response) => {
      this.articles = response.data.data
    }, (response) => {

    })
  }
}

ArticleDetailController.$inject = ['$scope', 'articleService']
