import { productComponent } from './product.component';
import { ProductService } from './product.service';
//import './app-header.scss';

export const product = angular
    .module('component.product', [])
    .component('productComponent', productComponent)
    .service('ProductService', ProductService)
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
                component: 'productComponent'
            });
    })
    .name;