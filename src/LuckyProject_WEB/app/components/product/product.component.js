import './product.html';

class productController {
    constructor(uiGridConstants, ProductService)
    {
        'ngInject';
        this.uiGridConstants = uiGridConstants; 
        this.ProductService = ProductService;

        //  this.userList = '[{"id":1,"prenom":"Rébecca","nom":"Armand","ville":"Saint-Didier-des-Bois","age":24},{"id":2,"prenom":"Aimée","nom":"Hebert","ville":"Marigny-le-Châtel","age":36},{"id":3,"prenom":"Marielle","nom":"Ribeiro","ville":"Maillères","age":27},{"id":4,"prenom":"Hilaire","nom":"Savary","ville":"Conie-Molitard","age":58}]';
        //this.userList = null;

        //this.getListProduct($http);
    }

    $onInit() {

       
        this.productGridOptions = {
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
              { name: 'libelle', field: 'libelle', displayName: 'Libelle', sort: { direction: this.uiGridConstants.ASC } },
              { name: 'prix', field: 'prix', displayName: 'Prix' },
              { name: 'quantite', field: 'quantite', displayName: 'Quantité' }
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

        this.productGridOptions.onRegisterApi = (gridApi) => {
            this.gridApi = gridApi;
        }

        this.ProductService.getAll().then(response => {
            // Add Data to grid
            this.productGridOptions.data = response;
        });
    }

    /*$onInit() {
        this.productList = [];
        this.CarService.getAll().then(response => this.carList = response);
    }*/

    //getListProduct($http) {
    //    $http({
    //        method: 'GET',
    //        url: 'http://localhost:20570/api/product'
    //    }).then((response) => {
    //        this.productList = response.data;
    //    },
    //    (error) => {console.log(error); });
    //}

    //addProduct($http) {
    //    $http({
    //        method: 'POST',
    //        url: 'http://localhost:20570/api/product'
    //    }).then((response) => {
    //        this.productList = response.data;
    //    },
    //    (error) => {console.log(error); });
    //}


};

export const productComponent = {
    bindings: {
        gridApi: '<',
        productGridOptions: '<'
    },
    templateUrl : 'app/components/product/product.html',
    controller : productController
};