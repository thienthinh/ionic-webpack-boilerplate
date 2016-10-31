import dashConfig from './dash.config'
import dashController from './dash.controller';

let module = angular.module('starter.dash', [
	'ionic',
	'ui.router'
])

module.config(dashConfig);
module.controller('DashController', dashController);

export default module = module.name