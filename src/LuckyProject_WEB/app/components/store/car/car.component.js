import './car.html';

class CarController {
    constructor($state, $http) {
        'ngInject';
        //this.$state = $state;

        //$http.get('http://localhost:20570/api/values')
        // .success(function(data) {
        //    this.users = data;
        //}).error(function() {
        //    alert("Erreur lors du call de l'API");
        //});

        this.users = '[{"id":1,"prenom":"Rébecca","nom":"Armand","ville":"Saint-Didier-des-Bois","age":24},{"id":2,"prenom":"Aimée","nom":"Hebert","ville":"Marigny-le-Châtel","age":36},{"id":3,"prenom":"Marielle","nom":"Ribeiro","ville":"Maillères","age":27},{"id":4,"prenom":"Hilaire","nom":"Savary","ville":"Conie-Molitard","age":58}]';
        //this.test = "test";
    }
};

export const carComponent = {
    templateUrl : 'app/components/store/car/car.html',
    controller: CarController,
    bindings: {
        users: '<'
        //test: '<'
    }
};

