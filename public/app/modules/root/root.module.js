"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//librarys
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
require("rxjs/Rx");
//components
var root_component_1 = require("./root.component");
var login_component_1 = require("./login.component");
//modules
//services
/*import {AuthService} from '../../services/auth/auth.service';
import {UtilService} from '../../services/util/util.service';
import {SpinnerService} from '../../services/spinner/spinner.service';
import {MessageService} from '../../services/message/message.service';*/
//routing
var root_routing_1 = require("./root.routing");
var RootModule = (function () {
    function RootModule() {
    }
    return RootModule;
}());
RootModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            root_routing_1.RootRouting
        ],
        declarations: [
            root_component_1.RootComponent,
            login_component_1.LoginComponent
        ],
        providers: [
            root_routing_1.appRoutingProviders,
            /*AuthService,
            UtilService,
            SpinnerService,
            MessageService,*/
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ],
        bootstrap: [root_component_1.RootComponent]
    })
], RootModule);
exports.RootModule = RootModule;
//# sourceMappingURL=root.module.js.map