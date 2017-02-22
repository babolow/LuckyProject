import { utilisateurComponent } from './utilisateur.component';
//import './app-header.scss';

export const utilisateur = angular
    .module('components.utilisateur', [])
    .component('utilisateur', utilisateurComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('utilisateur', {
                // redirectTo: 'dashboard',
                url: 'utilisateur',
                parent: 'app',
                //data: {
                //    requiredAuth: true,
                //},
                component: 'utilisateur'
                
            });
    })
    .name;