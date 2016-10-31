export default function($stateProvider) {
    'ngInject';
    return $stateProvider.state('root', {
        abstract: true,
        views: {
            '@': {
                template: `<ion-tabs class="tabs-icon-top tabs-color-active-positive">
                            <ion-tab title="Status" icon-off="ion-ios-pulse" icon-on="ion-ios-pulse-strong" href="#/dash">
                              <ion-nav-view name="tab-dash"></ion-nav-view>
                            </ion-tab>

                            <ion-tab title="Chats" icon-off="ion-ios-chatboxes-outline" icon-on="ion-ios-chatboxes" href="#/chats">
                              <ion-nav-view name="tab-chats"></ion-nav-view>
                            </ion-tab>

                            <ion-tab title="Account" icon-off="ion-ios-gear-outline" icon-on="ion-ios-gear" href="#/account">
                              <ion-nav-view name="tab-account"></ion-nav-view>
                            </ion-tab>
                          </ion-tabs>`
            }
        }
    });
}
