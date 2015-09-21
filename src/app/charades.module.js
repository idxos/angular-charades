(function() {
    'use strict';
    angular.module('charades', [
        'charades.config',
        'ngRoute',
        'firebase',
        'charades.welcome',
        'charades.card',
        'charades.game',
        'charades.player',
        'charades.dealer',
        'cfp.hotkeys'
    ]);
})();