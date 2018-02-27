import {Component, OnInit, Input} from '@angular/core';
import {HeroService} from '../service/hero.service';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
    value = 'dsada';

    onRecvFunc(data) {
    }

    constructor(private heroService: HeroService) {
        console.log(heroService);
    }

    ngOnInit() {
    }

}
