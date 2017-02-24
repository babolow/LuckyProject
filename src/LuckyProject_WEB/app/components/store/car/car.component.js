import './car.html';

class CarController {
    constructor(CarService, $state) {
        'ngInject';
        this.$state = $state;
        this.CarService = CarService;
    }

    $onInit() {
        this.carList = [];
        this.CarService.getAll().then(response => this.carList = response);
    }

    goToAddCar() {
        this.$state.go('editForm');
    }

    goToEditCar() {
        this.$state.go('editForm', { 'id': id });
    }
};

export const carComponent = {
    bindings: {
        carList: '<'
    },
    templateUrl : 'app/components/store/car/car.html',
    controller: CarController
};