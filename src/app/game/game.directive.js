(function(){
    'use strict';

    angular
        .module('charades.game')
        .directive('charadesGame', charadesGame);

    function charadesGame(){
        return {
            restrict: 'E',
            templateUrl: 'app/game/game.directive.html',
            controller: 'GameController',
            controllerAs: 'game'
        }
    }
})();
