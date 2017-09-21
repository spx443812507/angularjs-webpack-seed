import angular from 'angular'

import ArticleListController from './article.list.controller'
import articleService from '../../../services/article.service'
import navigatorDirective from '../../../directives/navigator/navigator.directive'
import routes from './article.routes'

export const ARTICLE_LIST_MODULE = angular.module('app.articleList', [articleService, navigatorDirective])
ARTICLE_LIST_MODULE.config(routes)
ARTICLE_LIST_MODULE.controller('ArticleListController', ArticleListController)
