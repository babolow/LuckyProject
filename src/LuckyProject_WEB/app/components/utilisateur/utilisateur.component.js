import './utilisateur.html';

class UtilisateurController {
    constructor($http,$state,UtilisateurService) {
        'ngInject';

        this.$state = $state;
        this.userService = UtilisateurService;
    }

    $onInit() {
        this.userList = [];
        this.userService.getAll().then(response => this.userList = response);
        //this.createGrid();
    }

    onEdit(){
        this.$state.go('utilisateurModif', { 'id': id });
    }

    onDelete(){
        
    }

    onAdd(){
        this.$state.go('utilisateurModif');
    }

};

//function createGrid(){
//    this.utilisateurGridOptions = 
//        {
//            enableSorting: true,
//            enableColumnResizing: true,
//            showFilter: true,
//            enableColumnMenus: false,
//            enablePaginationControls: false,
//            paginationPageSize: 20,
//            minRowsToShow: 21,
//            maxPageShowing: 6,
//            enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
//            enableVerticalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
//            columnDefs: [
//              { name: 'nom', field: 'nom', displayName: gettextCatalog.getString('Nom'), sort: { direction: uiGridConstants.ASC } },
//              { name: 'prenom', field: 'prenom', displayName: gettextCatalog.getString('Prenom'), sort: { direction: uiGridConstants.ASC } },
//              { name: 'ville', field: 'ville', displayName: gettextCatalog.getString('Ville') },
//              { name: 'age', field: 'age', displayName: gettextCatalog.getString('Age') }      
//            ]
//        };

//    this.userGridOptions.onRegisterApi = function (gridApi)
//    {
//        this.gridApi = gridApi;
//    }

//    this.load = () =>
//    {
//        setResponsiveDataGrid($rootScope, $scope, gettextCatalog);

//        baseService.getAll("Utilisateur").then((res) =>
//        {
//            // Add Data to grid
//            $scope.userGridOptions.data = res;
//        });
//    };

//    this.load();

//}

export const utilisateurComponent = {
    bindings: {
        userList: '<'
        // onLogout: '&',
    },
    templateUrl : 'app/components/utilisateur/utilisateur.html',
    controller : UtilisateurController
};

