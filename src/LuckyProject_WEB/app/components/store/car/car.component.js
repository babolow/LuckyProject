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

    deleteCar(id) {
        this.CarService.deleteById(id).then(this.$state.reload());
    }
};

export const carComponent = {
    bindings: {
        carList: '<'
    },
    templateUrl : 'app/components/store/car/car.html',
    controller: CarController
};