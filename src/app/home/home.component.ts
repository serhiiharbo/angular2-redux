import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    providers: [],
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.log('hello `Home` component');
    }
}
