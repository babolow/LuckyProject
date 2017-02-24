import { storeComponent } from './store.component';
import { car } from './car/car.module';
import { bike } from './bike/bike.module';
//import './app-header.scss';

export const store = angular
    .module('components.store', [car, bike])
    .component('store', storeComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('store', {
                url: 'store',
                parent: 'app',
                component: 'store'
            });
    })
    .name;