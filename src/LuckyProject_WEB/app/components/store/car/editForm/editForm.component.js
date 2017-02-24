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
    }

    $onChanges(changes) {
        if (changes.car) {
            this.car = angular.copy(this.car);
        }
    }

    submitForm() {
        this.CarService.post(this.car);
        this.$state.go('car');
    }
};

export const editFormComponent = {
    bindings: {
        car: '<'
    },
    templateUrl : 'app/components/store/car/editForm/editForm.html',
    controller: EditFormController
};