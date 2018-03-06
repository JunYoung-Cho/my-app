import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule }    from '@angular/common/http';


import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroesDetailsComponent} from './heroes-details/heroes-details.component';

import {HeroService} from './service/hero.service';
import {MassageService} from './service/massage.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroesDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
    ],
    providers: [
        HeroService,
        MassageService,
        InMemoryDataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
