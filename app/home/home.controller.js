export default function($scope, $log, $q) {
    'ngInject';

    var isLoadingMore = false,
        vm = this;
    vm.posts = [];
    // vm.loadMore = ionic.throttle(doLoadMore, 1000);
    // vm.refresh = refresh;

    // $scope.$on('$ionicView.loaded', init);

    function init() {
        vm.page = 1;
        vm.isPaginationOver = false;
    }

    function refresh() {
        // init();
        vm.posts = null;
    }

    function doLoadMore() {
        console.log('doLoadMore')
    }

    function getPosts(page) {
        console.log('getPosts')
    }
}
