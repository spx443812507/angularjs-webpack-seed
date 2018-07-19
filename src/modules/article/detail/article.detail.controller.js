/**
 * Created by siler on 2017/9/18.
 */
export default class ArticleDetailController {
  constructor (articleService) {
    this.articleService = articleService
    this.name = '哈哈'

    this.init()
  }

  init () {
    this.articles = this.articleService.getArticleList()
  }
}

ArticleDetailController.$inject = ['articleService']
