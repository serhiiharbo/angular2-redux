import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE } from './reducers';
import { AppActions } from './app.actions';
import { LocalStorageService } from './shared/services/local-storage.service';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { FooterComponent } from './shared/footer';
import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
];

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AboutComponent,
        FooterComponent,
        HomeComponent,
        NoContentComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        NgReduxModule,
        RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        LocalStorageService,
        ENV_PROVIDERS,
        APP_PROVIDERS,
        AppActions
    ]
})
export class AppModule{

    constructor(private devTools: DevToolsExtension,
                private ngRedux: NgRedux <IAppState>,) {
        const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];

        ngRedux.configureStore(
            rootReducer,
            INITIAL_STATE,
            [],
            storeEnhancers);
    }
}
