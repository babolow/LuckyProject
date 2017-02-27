import './utilisateur-edit.html';

class UtilisateurEditController {
    constructor($http, $state,UtilisateurService) {
        'ngInject';

        this.$state = $state;
        this.userService = UtilisateurService;
    }

    $onInit() {
        this.userList = [];
        this.userService.getAll().then(response => this.userList = response);
        //this.createGrid();
    }

    add(){
        var name = angular.element($('#nom')).val();
        var prenom = angular.element($('#prenom')).val();
        var ville = angular.element($('#ville')).val();
        var age = angular.element($('#age')).val();

        this.$state.go('^').val();
    }

};

export const utilisateurEditComponent = {
    bindings: {
        userList: '<'
        // onLogout: '&',
    },
    templateUrl : 'app/components/utilisateur/utilisateur-edit/utilisateur-edit.html',
    controller : UtilisateurController
};
