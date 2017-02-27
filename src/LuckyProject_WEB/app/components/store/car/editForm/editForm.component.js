import './editForm.html';

class EditFormController {
    constructor(CarService, $state) {
        'ngInject';
        this.$state = $state;
        this.CarService = CarService;
    }

    $onInit() {
        this.car = {
            name: '',
            model: '',
            color: '',
            date: ''
        };

        if (this.carId !== 0) {
            this.car = this.CarService.getById(this.carId);
        } 
    }

    $onChanges(changes) {
        if (changes.car) {
            this.car = angular.copy(this.car);
        }
    }

    submitForm() {
        this.CarService.post(this.car).then(this.$state.go('car'));
    }
};

export const editFormComponent = {
    bindings: {
        car: '<'
    },
    templateUrl : 'app/components/store/car/editForm/editForm.html',
    controller: EditFormController
};