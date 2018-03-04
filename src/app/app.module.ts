import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroesDetailsComponent} from './heroes-details/heroes-details.component';

import {HeroService} from './service/hero.service';
import { MassageService } from './service/massage.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroesDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        HeroService,
        MassageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
