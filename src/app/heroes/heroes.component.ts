import {Component, OnInit, Input} from '@angular/core';
import {HeroService} from '../service/hero.service';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})


export class HeroesComponent implements OnInit {
    value = 'dsada';
    hero: (string | number);

    onRecvFunc(data) {
    }
    constructor(private heroService: HeroService) {

    }

    getHeroes(): void {
        // this.hero = this.heroService.getHeroes();
        this.heroService.getHeroes()
            .subscribe(hero => this.hero = hero);


    }

    ngOnInit() {
        this.getHeroes();
    }


}
