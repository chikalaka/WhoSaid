'use strict';

var app = angular.module('confusionApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider


    // route for the home page
        .state('welcome', {
        url:'/welcome',
        views: {
            '': {templateUrl: 'views/welcome.html'},
            'footer@welcome': {templateUrl: 'views/footer.html'}
        }
    })

    // route for the aboutus page
        .state('howtoplay', {
        url:'/howtoplay',
        views: {
            '': { templateUrl : 'views/howtoplay.html'},
            'navbar@howtoplay': {templateUrl : 'views/navbar.html'},
            'footer@howtoplay': {templateUrl : 'views/footer.html'}
        }
    })

        .state('game', {
        url:'/game',
        views: {
            '': { templateUrl : 'views/game.html'},
            'navbar@game': {templateUrl : 'views/navbar.html'},
            'footer@game': {templateUrl : 'views/footer.html'},
            'groups@game': {
                templateUrl : 'views/groups.html',
                controller: 'GroupsController'
            },
            'wall@game': {
                templateUrl : 'views/wall.html',
                controller: 'GroupsController'
            }
        }
    })

        .state('creategroup', {
        url:'/creategroup',
        views: {
            '': { templateUrl : 'views/creategroup.html'},
            'navbar@creategroup': {templateUrl : 'views/navbar.html'},
            'footer@creategroup': {templateUrl : 'views/footer.html'},
            'groups@creategroup': {
                templateUrl : 'views/groups.html',
                controller: 'GroupsController'
            },
            'creategrouptemplate@creategroup': {
                templateUrl : 'views/creategrouptemplate.html'
            }
        }
    })

        .state('faq', {
        url:'/faq',
        views: {
            '': { templateUrl : 'views/faq.html'},
            'navbar@faq': {templateUrl : 'views/navbar.html'},
            'footer@faq': {templateUrl : 'views/footer.html'}
        }
    })

        .state('contactus', {
        url:'/contactus',
        views: {
            '': { 
                templateUrl: 'views/contactus.html',
                controller: 'ContactController'
            },
            'navbar@contactus': {
                templateUrl : 'views/navbar.html'
            },
            'footer@contactus': {
                templateUrl : 'views/footer.html'
            }
        }
    })

        .state('profile', {
        url:'/profile',
        views: {
            '': { templateUrl : 'views/profile.html'},
            'navbar@profile': {templateUrl : 'views/navbar.html'},
            'footer@profile': {templateUrl : 'views/footer.html'}
        }
    })


    $urlRouterProvider.otherwise('/game');
})
;