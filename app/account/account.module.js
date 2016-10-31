import accountConfig from './account.config'
import accountController from './account.controller';

let module = angular.module('starter.account', [
	'ionic',
	'ui.router'
])

module.config(accountConfig);
module.controller('AccountController', accountController);

export default module = module.name