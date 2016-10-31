import chatsConfig from './chats.config'
import chatsController from './chats.controller';

let module = angular.module('starter.chats', [
	'ionic',
	'ui.router'
])

module.config(chatsConfig);
module.controller('ChatsController', chatsController);

export default module = module.name