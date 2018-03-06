import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MassageService} from './massage.service';

interface Hero {
    id: number;
    name: string;
}

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';

    getHeroes(): Observable<Hero[]> {

        return this.http.get<Hero[]>(this.heroesUrl);
    }


    constructor(private  http: HttpClient,
                private massageService: MassageService) {
    }

}
