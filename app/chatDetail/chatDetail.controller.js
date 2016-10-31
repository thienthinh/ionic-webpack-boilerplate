export default function($scope, $stateParams, Chats) {
	'ngInject';

	$scope.chat = Chats.get($stateParams.chatId);
}