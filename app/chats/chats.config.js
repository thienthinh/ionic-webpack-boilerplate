export default function($stateProvider) {
  'ngInject';
  $stateProvider.state('root.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        template: require("./tab-chats.html"),
        controller: "ChatsController as chatsCtrl"
      }
    }
  });
}
