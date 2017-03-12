import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { select } from '@angular-redux/store';
import { AppActions } from './app.actions';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    @select() readonly count$: Observable <number>;

    constructor(private actions: AppActions,) {
    }

    increment() {
        this.actions.increment(Math.random());
    }

    decrement() {
        this.actions.decrement('>>>>> payload: decrement');
    }

    ngOnInit() {
        this.actions.rehydrate();
    }
}
