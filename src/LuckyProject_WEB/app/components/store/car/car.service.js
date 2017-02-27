export class CarService {
    constructor($http, $q) {
        'ngInject';

        this.$http = $http;
        this.$q = $q;
    }

    getById(id) {
        return this.$q((resolve, reject) => {
            this.$http.get('http://localhost:20570/api/car/' + id)
                .then(
                    (response) => { resolve(response.data); },
                    (error) => { reject(error); }
                );
        });
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
            this.$http.post('http://localhost:20570/api/car/', car)
                .then(
                    (response) => { resolve(response.data); },
                    (error) => { reject(error); }
                );
        });
    }

    deleteById(id) {
        return this.$q((resolve, reject) => {
            this.$http.delete('http://localhost:20570/api/car/' + id)
                .then(
                    (response) => { resolve(response.data); },
                    (error) => { reject(error); }
                );
        });
    }
}