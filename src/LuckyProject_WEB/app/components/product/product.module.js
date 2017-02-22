import {  productComponent } from './product.component';
//import './app-header.scss';

export const product = angular
    .module('product.store', [])
    .component('product', productComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('product', {
                // redirectTo: 'dashboard',
                url: 'product',
                parent: 'app',
                //data: {
                //    requiredAuth: true,
                //},
                component: 'product'
                
            });
    })
    .name;