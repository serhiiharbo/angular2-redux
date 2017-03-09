import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'md-footer',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    styleUrls: ['./footer.component.scss'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    constructor() {
    }

    public ngOnInit() {
    }
}
