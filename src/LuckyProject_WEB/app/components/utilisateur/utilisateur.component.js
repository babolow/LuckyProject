import './utilisateur.html';

class UtilisateurController {
    constructor($http, UtilisateurService) {
        'ngInject';

      this.userService = UtilisateurService;
    }

    $onInit() {
        this.userList = [];
        this.userService.getAll().then(response => this.userList = response);

    }

};


export const utilisateurComponent = {
    bindings: {
        userList: '<'
        // onLogout: '&',
    },
    templateUrl : 'app/components/utilisateur/utilisateur.html',
    controller : UtilisateurController
};

