//import { auth } from './auth/auth.module';
//import { dashboard } from './dashboard/dashboard.module';
import { store } from './store/store.module';
import { User } from './user/user.module';

export const components = angular
    .module('components', [
       store
       user
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