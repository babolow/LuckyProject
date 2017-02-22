export class UtilisateurService {
    constructor($http, $q) {
        'ngInject';

        this.$http = $http;
        this.$q = $q;
    }


    getAll() {
        return this.$q((resolve, reject) => {
            this.$http.get('http://localhost:20570/api/utilisateur')
                .then(
                    (response) => { resolve(response.data); },
                    (error) => { reject(error); }
                );
        });
    }
}

function createGrid(){
    this.utilisateurGridOptions = 
        {
            enableSorting: true,
            enableColumnResizing: true,
            showFilter: true,
            enableColumnMenus: false,
            enablePaginationControls: false,
            paginationPageSize: 20,
            minRowsToShow: 21,
            maxPageShowing: 6,
            enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
            enableVerticalScrollbar: uiGridConstants.scrollbars.WHEN_NEEDED,
            columnDefs: [
              { name: 'nom', field: 'id', visible: false },
              { name: 'prenom', field: 'lastName', displayName: gettextCatalog.getString('Last Name'), sort: { direction: uiGridConstants.ASC } },
              { name: 'firstName', field: 'firstName', displayName: gettextCatalog.getString('First Name') },
              { name: 'email', field: 'email', displayName: gettextCatalog.getString('Email') },
              { name: 'profileName', field: 'profileName', displayName: gettextCatalog.getString('Profile') },
              { name: 'active', field: 'active', displayName: gettextCatalog.getString('Active') }
            ]
        };

    this.userGridOptions.onRegisterApi = function (gridApi)
    {
        this.gridApi = gridApi;
        
    }
}

