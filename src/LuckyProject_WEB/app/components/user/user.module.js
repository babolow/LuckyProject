import { userComponent } from './user.component';
//import './app-header.scss';

export const appUser = angular
    .module('components.user', [])
    .component('appUser', userComponent).name;