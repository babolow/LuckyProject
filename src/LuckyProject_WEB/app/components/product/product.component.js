import './product.html';

class productController {
    constructor($http)
    {
        'ngInject';

        //  this.userList = '[{"id":1,"prenom":"Rébecca","nom":"Armand","ville":"Saint-Didier-des-Bois","age":24},{"id":2,"prenom":"Aimée","nom":"Hebert","ville":"Marigny-le-Châtel","age":36},{"id":3,"prenom":"Marielle","nom":"Ribeiro","ville":"Maillères","age":27},{"id":4,"prenom":"Hilaire","nom":"Savary","ville":"Conie-Molitard","age":58}]';
        this.userList = null;

        this.getListProduct($http);
    }

    /*$onInit() {
        this.productList = [];
        this.CarService.getAll().then(response => this.carList = response);
    }*/

    getListProduct($http) {
        $http({
            method: 'GET',
            url: 'http://localhost:20570/api/product'
        }).then((response) => {
            this.productList = response.data;
        },
        (error) => {console.log(error); });
    }

    addProduct($http) {
        $http({
            method: 'POST',
            url: 'http://localhost:20570/api/product'
        }).then((response) => {
            this.productList = response.data;
        },
        (error) => {console.log(error); });
    }


};

export const productComponent = {
    bindings: {
        productList: '<'
    },
    templateUrl : 'app/components/product/product.html',
    controller : productController
};