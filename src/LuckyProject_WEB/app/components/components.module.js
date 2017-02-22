//import { auth } from './auth/auth.module';
//import { dashboard } from './dashboard/dashboard.module';
import { store } from './store/store.module';
import { product } from './product/product.module';
//import { utilisateur } from './utilisateur/utilisateur.module';
import { utilisateur } from './utilisateur/utilisateur.module';

export const components = angular
    .module('components', [
       store,
       product
       //utilisateur
       utilisateur
       // dashboard,
    ])
    //.component('app', appComponent)
    //.config(($stateProvider) => {
    //    'ngInject';

    //    $stateProvider
    //        .state('comp', {
    //            // redirectTo: 'dashboard',
    //            url: '/',
    //            //data: {
    //            //    requiredAuth: true,
    //            //},
    //            component: 'components'
                
    //        });
    //})
    .name;