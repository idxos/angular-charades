(function() {
    'use strict';

    angular
        .module('charades.welcome')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = ['$firebaseArray'];

    /* @ngInject */
    function WelcomeController($firebaseArray) {
        var welcome = this;
        
        var ref = new Firebase("https://charades-app.firebaseio.com/cards").orderByChild('phrase');
        
        this.cards = $firebaseArray(ref);
    

        welcome.title = 'WelcomeController';
        welcome.message = "Welcome Message Here";


        welcome.init = function() {
            welcome.started = false;
            welcome.showMessage = true;
            welcome.greet = true;
        };

        welcome.start = function() {
            welcome.started = true;
            welcome.showMessage = true;
            welcome.greet = false;
            welcome.updateButton = (true, false, false);
        };




        //////// welcome.init();
    }
})();