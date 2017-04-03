import {Component} from '@angular/core';
import {Router} from '@angular/router';
//components
/*import {SpinnerComponent} from '../../services/spinner/spinner.component';
import {MessageComponent} from '../../services/message/message.component';
//models
import {Page} from '../../models/page/page';
//services
import {AuthService} from '../../services/auth/auth.service';*/

@Component({
    moduleId: module.id,
    selector: 'tech-notes',
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.css'],
    directives: [
        /*SpinnerComponent,
        MessageComponent*/
    ]
})
export class RootComponent {

    constructor(private router: Router){//, private auth: AuthService){//for augury router view

    }
}