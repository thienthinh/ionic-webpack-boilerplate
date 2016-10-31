import chatDetailConfig from './chatDetail.config'
import chatDetailController from './chatDetail.controller';

let module = angular.module('starter.chatDetail', [
	'ionic',
	'ui.router'
])

module.config(chatDetailConfig);
module.controller('ChatDetailController', chatDetailController);

export default module = module.name