//librarys
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule}  from '@angular/platform-browser';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {HttpModule,JsonpModule} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
//components
import {RootComponent} from './root.component';
import {LoginComponent} from './login.component';
//modules

//services
/*import {AuthService} from '../../services/auth/auth.service';
import {UtilService} from '../../services/util/util.service';
import {SpinnerService} from '../../services/spinner/spinner.service';
import {MessageService} from '../../services/message/message.service';*/
//routing
import {appRoutingProviders, RootRouting} from './root.routing';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        HttpModule,
        JsonpModule,
        RootRouting
    ],
    declarations: [
        RootComponent,
        LoginComponent
    ],
    providers: [
        appRoutingProviders,
        /*AuthService,
        UtilService,
        SpinnerService,
        MessageService,*/
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [RootComponent]
})
export class RootModule {}