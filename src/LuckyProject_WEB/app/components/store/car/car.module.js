import { carComponent } from './car.component';
import { CarService } from './car.service';

export const car = angular
    .module('components.car', [])
    .component('car', carComponent)
    .service('CarService', CarService)
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