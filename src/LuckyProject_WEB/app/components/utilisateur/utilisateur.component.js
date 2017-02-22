import './utilisateur.html';
//import {UtilisateurController } from './utilisateur.controller';

class UtilisateurController {
    constructor($http, UtilisateurService) {
        'ngInject';

      //  this.userList = '[{"id":1,"prenom":"Rébecca","nom":"Armand","ville":"Saint-Didier-des-Bois","age":24},{"id":2,"prenom":"Aimée","nom":"Hebert","ville":"Marigny-le-Châtel","age":36},{"id":3,"prenom":"Marielle","nom":"Ribeiro","ville":"Maillères","age":27},{"id":4,"prenom":"Hilaire","nom":"Savary","ville":"Conie-Molitard","age":58}]';
        this.userService = UtilisateurService;
    }

    $onInit() {
        this.userList = [];
        this.userService.getAll().then(response => this.userList = response);

    }

    //getListUtilisateur($http) {
    //    $http({
    //        method: 'GET',
    //        url: 'http://localhost:20570/api/utilisateur'
    //    }).then((response) => {
    //        this.userList = response.data;
    //    },
    //    (error) => {console.log(error); });
    //}
};


export const utilisateurComponent = {
    bindings: {
        userList: '<'
        // onLogout: '&',
    },
    templateUrl : 'app/components/utilisateur/utilisateur.html',
    controller : UtilisateurController
};

