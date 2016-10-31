export default function($stateProvider) {
  'ngInject';
  $stateProvider.state('root.account', {
    url: '/account',
    views: {
      'tab-account': {
        template: require("./tab-account.html"),
        controller: "AccountController as accountCtrl"
      }
    }
  });
}
