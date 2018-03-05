import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MassageService} from './massage.service';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';

    getHeroes(): Observable<(number | string)> {
        console.log(this)
        return of('2018-02-28' + 20180228);
    }

    constructor(private  http: HttpClient,
                private massageService: MassageService) {
    }

}
