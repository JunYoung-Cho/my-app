import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {MassageService} from './massage.service';

@Injectable()
export class HeroService {
    getHeroes(): Observable<(number | string)> {
        this.massageService.add('bbb');
        return of('2018-02-28' + 20180228);
    }

    constructor(private massageService: MassageService) {
    }

}
