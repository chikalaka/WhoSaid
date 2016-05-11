'use strict';
angular.module('confusionApp')

//ContactController
    .controller('ContactController', ['$scope', function($scope) {
        $scope.sendFeedback = function() {
            $scope.subject = '';
            $scope.feedbackBody = '';
            $scope.feedbackForm.$setPristine();
        };
    }])

//GroupsController
    .controller('GroupsController', ['$scope', 'groupsService', function($scope, groupsService) {
        $scope.groups = groupsService.getGroups();
        $scope.group = groupsService.getGroup(0);

        $scope.setGroup = function(i){
            $scope.group = groupsService.getGroup(i);
        }
    }])

    .controller('autocompleteController', ['$scope', 'countriesService', function($scope, countriesService) {

        $scope.countries = countriesService.getCountries();
        $scope.selectedCountries = "";
    }])

;


/*
$scope.setGroup = function(i){
            $scope.group = groupsService.getGroup(i);
        }
        ng-click="setGroup({{group._id}})"

    //HomeController
    .controller('HomeController', ['$scope', 'businessesService', function($scope, businessesService) {

        $scope.businesses = businessesService.getBusinesses();
        $scope.business = businessesService.getBusiness(0);

    }])

    //AboutusController

    //ContactusController

    //MyqueuesController
    .controller('MyqueuesController', ['$scope', 'usersService', function($scope, usersService) {

        $scope.users = usersService.getUsers();
        $scope.user = usersService.getUser(0);
    }])

    //SigninController









    //MenuController
    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

        $scope.tab = 1;
        $scope.showDetails = false;
        $scope.filtText = '';

        $scope.dishes= menuFactory.getDishes();

        $scope.select = function(setTab) {
            $scope.tab = setTab;
            if (setTab === 2) {
                $scope.filtText = "appetizer";
            }
            else if (setTab === 3) {
                $scope.filtText = "mains";
            }
            else if (setTab === 4) {
                $scope.filtText = "dessert";
            }
            else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };       
    }])

    //DishDetailController
    .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
        $scope.dish = menuFactory.getDish(parseInt($stateParams.id,10));
    }])

    //ContactController
    .controller('ContactController', ['$scope', function($scope) {
        $scope.feedback = { mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
    }])

    //FeedbackController
    .controller('FeedbackController', ['$scope', function($scope) {
        $scope.sendFeedback = function() {
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }   
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                    agree:false, email:"" };
                $scope.feedback.mychannel="";

                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }])

    //DishCommentController
    .controller('DishCommentController', ['$scope', function($scope) {
        $scope.yourName = "";
        $scope.stars = 5;
        $scope.comment = "";

        $scope.sendComment = function(dish) {

            dish.comments.push(
                {
                    rating: $scope.stars,
                    comment: $scope.comment,
                    author: $scope.yourName,
                    date: new Date().toISOString()
                }
            );

            $scope.yourName = "";
            $scope.comment = "";
            $scope.stars = 5;
            $scope.commentForm.$setPristine();
        };

    }])

    //IndexController
    .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {
        //$scope.dish = menuFactory.getDish(parseInt($stateParams.id,10));
        $scope.dish = menuFactory.getDish(0);
        $scope.promotion = menuFactory.getPromotion(0);
        $scope.leader = corporateFactory.getLeader(3);

        $scope.businesses = menuFactory.getBusinesses();
        $scope.business = menuFactory.getBusiness(0);


    }])

    //AboutController
    .controller('AboutController', ['$scope', 'corporateFactory', 'usersService', function($scope, corporateFactory, usersService) {
        $scope.leaders = corporateFactory.getLeaders();

        $scope.users = usersService.getUsers();
        $scope.user = usersService.getUser(0);
    }])


;

*/