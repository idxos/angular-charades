(function() {
    'use strict';
    angular.module('charades', [
        'charades.game',
        'charades.player',
        'charades.card'
    ]);
})();
(function() {
    'use strict';

    angular.module('charades.card', []);
})();
(function() {
    'use strict';

    angular.module('charades.game', []);

})();

(function() {
    'use strict';

    angular.module('charades.player', []);

})();

(function(){
'use strict';

angular
    .module('charades.game')
    .controller('GameController',GameController);

   
    GameController.$inject = ['PlayerService'];
    
    function GameController(PlayerService){
        var game = this;
 
        game.init = function () {
            game.started = false;
            game.player = PlayerService.newPlayer('Ringo', 100);
        };
 
        game.start = function () {
            game.started = true;
            game.player.changeScore(-100);
        };
 
        game.end = function () {
            game.started = false;
            game.player.changeScore(200);
        };
 
        game.reset = function () {
            game.player.resetScore();
            game.started = false;
        };
 
        game.init();
    }


})();

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

(function(){
    'use strict';
 
    angular
        .module('charades.player')
        .factory('PlayerService', PlayerService);
 
    function PlayerService(){
        var service = {
            newPlayer: newPlayer
        };
 
        /////////////
 
        function Player(playerName, initialScore) {
            this.score = initialScore;
            this.name = playerName;
        }
 
        Player.prototype.changeScore = function(amountToChange){
            if(!angular.isDefined(this.score)){
                this.score = 0;
            }
 
            this.score += amountToChange;
        };
 
        Player.prototype.resetScore = function () {
            this.score = 0;
        };
 
        function newPlayer(playerName, initialScore) {
            var player = new Player(playerName, initialScore);
            return player;
        }
 
        return service;
    }
})();