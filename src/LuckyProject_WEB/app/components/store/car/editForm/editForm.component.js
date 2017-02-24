import './editForm.html';

class EditFormController {
    constructor($state) {
        'ngInject';
        this.$state = $state;
    }

    submit() {
        this.$state.go('car');
    }
};

export const editFormComponent = {
    bindings: {
    },
    templateUrl : 'app/components/store/car/editForm/editForm.html',
    controller: EditFormController
};