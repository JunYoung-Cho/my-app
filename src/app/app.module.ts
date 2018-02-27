import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroesDetailsComponent} from './heroes-details/heroes-details.component';

import {HeroService} from './service/hero.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroesDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        HeroService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
