import 'ionic-sdk/release/js/ionic.bundle';

// Our modules
import routerConfig from './config/router.config.js';
import run from './run.js';
import moduleDash from './dash/dash.module.js';
import moduleAccount from './account/account.module.js';
import moduleChats from './chats/chats.module.js';
import moduleChatDetail from './chatDetail/chatDetail.module.js';
import chatService from './services/chats.service.js';

// Style entry point
import './scss/app';

// Create our module
let module = angular.module('starter', [
    'ionic',
    'ui.router',
    moduleDash,
    moduleChats,
    moduleChatDetail,
    moduleAccount
]);
// ROUTER CONFIG
module.config(routerConfig);
module.factory('Chats', chatService);

// Run
module.run(run);

export default module = module.name;
