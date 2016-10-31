export default function($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider.state('root.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        template: require("./dashs.html"),
        controller: "DashController as dashCtrl"
      }
    }
  });
  $urlRouterProvider.otherwise("/dash");
}
