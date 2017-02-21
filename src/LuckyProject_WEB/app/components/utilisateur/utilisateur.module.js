import { userComponent } from './utilisateur.component';
//import './app-header.scss';

export const appUser = angular
    .module('components.utilisateur', [])
    .component('appUser', userComponent).name;