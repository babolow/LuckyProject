import { carComponent } from './car.component';
//import './app-header.scss';

export const car = angular
    .module('components.car', [])
    .component('car', carComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('car', {
                url: '/car',
                parent: 'store',
                //resolve: {
                //    car: function(PeopleService) {
                //        return PeopleService.getAllPeople();
                //    },
                component: 'car'
                
            });
    })
    .name;