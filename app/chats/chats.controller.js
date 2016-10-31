export default function($scope, Chats) {
	'ngInject';

	$scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}