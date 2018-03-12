import {Component, OnInit, Input} from '@angular/core';
import {HeroService} from '../service/hero.service';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
    value = 'dsada';
    hero: Hero[];

    onRecvFunc(data) {
    }

    constructor(private heroService: HeroService) {

    }

    getHeroes(): void {
        // this.hero = this.heroService.getHeroes();
        this.heroService.getHeroes()
            .subscribe(hero => this.hero = hero);

    }

    logArray(this: string[]): void {
        for (const item of this) {
            console.log(item);
        }

    }


    ngOnInit() {
        this.getHeroes();
        this.logArray.call(['aaa', 'bbbb']);
    }


}
