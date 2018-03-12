import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MassageService} from './massage.service';

interface Hero {
    id: number;
    name: string;
}

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap((heroes) => console.log('fetched heroes')),
                catchError(this.handleError('getHeroes', []))
            );
    }


    constructor(private  http: HttpClient,
                private massageService: MassageService) {
    }

}
