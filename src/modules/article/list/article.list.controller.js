/**
 * Created by siler on 2017/9/18.
 */
export default class ArticleListController {
  constructor (articleService) {
    this.articleService = articleService
    this.articles = []

    this.init()
  }

  init () {
    this.articles = this.articleService.getArticleList()
  }
}

ArticleListController.$inject = ['articleService']
