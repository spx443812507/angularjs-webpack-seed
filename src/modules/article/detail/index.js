import angular from 'angular'

import ArticleDetailController from './article.detail.controller'
import articleService from '../../../services/article.service'
import navigatorDirective from '../../../directives/navigator/navigator.directive'

export const ARTICLE_DETAIL_MODULE = angular.module('app.articleDetail', [articleService, navigatorDirective])
ARTICLE_DETAIL_MODULE.controller('ArticleDetailController', ArticleDetailController)
