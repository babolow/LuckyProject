﻿export class CarService {
    constructor($http, $q) {
        'ngInject';

        this.$http = $http;
        this.$q = $q;
    }

    getAll() {
        return this.$q((resolve, reject) => {
            this.$http.get('http://localhost:20570/api/car')
                .then(
                    (response) => { resolve(response.data); },
                    (error) => { reject(error); }
                );
        });
    }

    post(car) {
        return this.$q((resolve, reject) => {
            this.$http.post('http://localhost:20570/api/car/', JSON.stringify(car))
                .then(
                    (response) => { resolve(response.data); },
                    (error) => { reject(error); }
                );
        });
    }
}