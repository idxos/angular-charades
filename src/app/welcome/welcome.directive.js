(function(){
    'use strict';

    angular
        .module('charades.welcome')
        .directive('charadesWelcome', charadesWelcome);

    function charadesWelcome(){
        return {
            restrict: 'E',
            templateUrl: 'app/welcome/welcome.directive.html',
            controller: 'WelcomeController',
            controllerAs: 'welcome'
        }
    }
})();
