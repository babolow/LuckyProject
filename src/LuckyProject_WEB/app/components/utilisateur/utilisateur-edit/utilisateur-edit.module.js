import { utilisateurEditComponent } from './utilisateur-edit.component';
import { UtilisateurEditService } from './utilisateur-edit.service';

//import './app-header.scss';

export const utilisateurEdit = angular
    .module('components.utilisateur-edit', [])
    .component('utilisateur-edit', utilisateurEditComponent)
    .service('UtilisateurEditService', UtilisateurEditService)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('utilisateur-edit', {
                url: 'utilisateur/utilisateur-edit',
                parent: 'utilisateur',
                component: 'utilisateur-edit'
                
            });
    })
    .name;