var angular = require('angular');
import 'angular-toastr';

import '@uirouter/angularjs';
var app = angular.module('blogApp',  ['ui.router', 'toastr']);

import  Config from './app';
import  home_controller from  './home-controller';
import  blogcontroller from  './view/blogpostController';
import directiv from './view/BlogPostDirective';
import profilecontroller from './profile/PprofileController';
import entriesController from './entries/entries-controller';


blogcontroller.$inject=['$scope','$location','$anchorScroll'];

profilecontroller.$inject=['$scope','toastr'];

entriesController.$inject=['$scope','toastr'];

home_controller.$inject=['$scope','$location'];

app.controller('home_controller', home_controller);
app.controller('blogPostController',blogcontroller);
app.controller('profileController',profilecontroller);
app.controller('entriesController',entriesController);

app.directive('blogPost',directiv.getdirevive());
Config.$inject = ['$stateProvider', '$urlRouterProvider'];
app.config(Config);