import { carComponent } from './car.component';
import { CarService } from './car.service';
import { editForm } from './editForm/editForm.module';

export const car = angular
    .module('components.car', [editForm])
    .component('car', carComponent)
    .service('CarService', CarService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('car', {
                url: '/car',
                parent: 'store',
                component: 'car'
            });
    })
    .name;