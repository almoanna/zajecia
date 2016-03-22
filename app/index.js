import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';
import home from './features/home';

const ngModule = angular
                        .module('app',[uirouter, home])
                        .config(routing);
        
/*
ngModule.controller('myCtrl', function($scope) {
    $scope.firstName = "Sample1";
    $scope.lastName = "Sample2";
    $scope.movies = [
        {title: "fhf", desc: "nkjfnhjk"},    
        {title: "przeminelo", desc: "lll"},    
        {title: "3", desc: "jmkln"},    
        {title: "Fjkfjknfm4", desc: "jkin"},    
        {title: "Film5", desc: "Opis5"},    
        {title: "Film6", desc: "Opis6"},
    ]
});
*/
