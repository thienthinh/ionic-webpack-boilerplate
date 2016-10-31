import 'ionic-sdk/release/js/ionic.bundle';
// import 'expose?_!lodash';

// Our modules
// import modConstant from './constant.js';
// import modConfigIonic from './config/ionic.config.js';
import routerConfig from './config/router.config.js';
import run from './run.js';
import moduleHome from './home/home.module.js';
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
    // modConstant,
    // moduleHome,
    moduleDash,
    moduleChats,
    moduleChatDetail,
    moduleAccount
]);
// ROUTER CONFIG
module.config(routerConfig);
module.factory('Chats', chatService);
// // IONIC CONFIG
// module.config(modConfigIonic);
// Run
module.run(run);

export default module = module.name;
