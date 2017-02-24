import { mathieuUsersComponent } from './mathieu-users.component';
import { MathieuUsersService } from './mathieu-users.service';

export const mathieuUser = angular
                                .module('components.mathieu-users', [])
                                .component('mathieuusers', mathieuUsersComponent)
                                .service('MathieuUsersService', MathieuUsersService)
                                .config(($stateProvider) => {
                                    'ngInject';

                                    $stateProvider
                                        .state('mathieuusers', {
                                            url: 'mdusers',
                                            parent: 'app',
                                            component: 'mathieuusers'
                                        });
                                })
                                .name;