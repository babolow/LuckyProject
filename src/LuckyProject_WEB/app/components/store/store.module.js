import { storeComponent } from './store.component';
//import './app-header.scss';

export const store = angular
    .module('components.store', [])
    .component('store', storeComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('store', {
                // redirectTo: 'dashboard',
                url: 'store',
                parent: 'app',
                //data: {
                //    requiredAuth: true,
                //},
                component: 'store'
                
            });
    })
    .name;