import { editFormComponent } from './editForm.component';

export const editForm = angular
    .module('components.editForm', [])
    .component('editForm', editFormComponent)
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