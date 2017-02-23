import './car.html';

class CarController {
    constructor(CarService) {
        'ngInject';

        this.CarService = CarService;
    }

    $onInit() {
        this.carList = [];
        this.CarService.getAll().then(response => this.carList = response);
    }
};

export const carComponent = {
    bindings: {
        carList: '<'
    },
    templateUrl : 'app/components/store/car/car.html',
    controller: CarController
};