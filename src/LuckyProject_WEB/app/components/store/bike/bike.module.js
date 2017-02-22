import { bikeComponent } from './bike.component';
//import './app-header.scss';

export const bike = angular
    .module('components.bike', [])
    .component('bike', bikeComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('bike', {
                // redirectTo: 'dashboard',
                url: '/bike',
                parent: 'store',
                //data: {
                //    requiredAuth: true,
                //},
                component: 'bike'
                
            });
    })
    .name;