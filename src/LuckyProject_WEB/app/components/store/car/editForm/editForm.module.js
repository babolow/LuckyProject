import { editFormComponent } from './editForm.component';
import { CarService } from '../car.service';

export const editForm = angular
    .module('components.editForm', [])
    .component('editForm', editFormComponent)
    .service('CarService', CarService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('editForm', {
                url: '/car/editForm',
                parent: 'store',
                component: 'editForm'
            });
    })
    .name;