import './mathieu-users.html';


class MathieuUsersController {
    constructor(uiGridConstants, MathieuUsersService) {
        'ngInject';
        this.uiGridConstants = uiGridConstants;
        this.userService = MathieuUsersService;
    }

    $onInit() {
       
       
        this.userGridOptions = {
            enableSorting: true,
            enableColumnResizing: true,
            showFilter: true,
            enableColumnMenus: false,
            enablePaginationControls: false,
            paginationPageSize: 20,
            minRowsToShow: 21,
            maxPageShowing: 6,
            enableHorizontalScrollbar: this.uiGridConstants.scrollbars.NEVER,
            enableVerticalScrollbar: this.uiGridConstants.scrollbars.WHEN_NEEDED,
            columnDefs: [
              { name: 'id', field: 'id', visible: false },
              { name: 'lastName', field: 'nom', displayName: 'Nom', sort: { direction: this.uiGridConstants.ASC } },
              { name: 'firstName', field: 'prenom', displayName: 'Prénom' },
              { name: 'city', field: 'ville', displayName: 'Ville' }
              //{
              //    name: 'edit', enableSorting: false,
              //    resizable: false,
              //    cellTemplate: partialFolder + 'templates/grid-edit-button.html',
              //    cellClass: function (grid, row, col, rowRenderIndex, colRenderIndex) {
              //        if (row.entity.id === userAuthentFactory.currentUser.userId) {
              //            return 'hideCell';
              //        }
              //    }
              //},
              //{
              //    name: 'delete', enableSorting: false,
              //    resizable: false,
              //    cellTemplate: partialFolder + 'templates/grid-delete-button.html',
              //    cellClass: function (grid, row, col, rowRenderIndex, colRenderIndex) {
              //        if (row.entity.id === userAuthentFactory.currentUser.userId) {
              //            return 'hideCell';
              //        }
              //    }
              //}
            ]
        }

        this.userGridOptions.onRegisterApi = (gridApi) => {
            this.gridApi = gridApi;
        }

        this.userService.getAll().then(response => {
            // Add Data to grid
            this.userGridOptions.data = response;
        });
    }

};


export const mathieuUsersComponent = {
    bindings: {
        gridApi: '<',
        userGridOptions: '<'
        // onLogout: '&',
    },
    templateUrl : 'app/components/mathieu-users/mathieu-users.html',
    controller : MathieuUsersController
};

