import { utilisateurComponent } from './utilisateur.component';
import { UtilisateurService } from './utilisateur.service';

//import './app-header.scss';

export const utilisateur = angular
    .module('components.utilisateur', [])
    .component('utilisateur', utilisateurComponent)
    .service('UtilisateurService', UtilisateurService)
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