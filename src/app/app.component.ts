import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppActions } from './app.actions';

@Component({
    selector: 'md-app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private actions: AppActions,) {
    }

    ngOnInit() {
        this.actions.rehydrate();
    }
}
