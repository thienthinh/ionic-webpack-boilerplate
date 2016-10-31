export default function($stateProvider) {
  'ngInject';
  $stateProvider.state('root.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        template: require("./chat-detail.html"),
        controller: "ChatDetailController as chatDetailCtrl"
      }
    }
  });
}
