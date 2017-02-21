//import { auth } from './auth/auth.module';
//import { dashboard } from './dashboard/dashboard.module';
import { User } from './user/user.module';

export const components = angular
    .module('components', [
       user
       // dashboard,
    ])
    .name;