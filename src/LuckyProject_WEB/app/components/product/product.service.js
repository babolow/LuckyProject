export class ProductService {
    constructor($http, $q) {
        'ngInject';

        this.$http = $http;
        this.$q = $q;
    }


    getAll() {
        return this.$q((resolve, reject) => {
            this.$http.get('http://localhost:20570/api/product')
                .then(
                    (response) => { resolve(response.data); },
                    (error) => { reject(error); }
                );
        });
    }
}