import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../interface/interface';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

    // hero: Hero =
    //     {
    //         id: 1,
    //         name: 'one',
    //     };

    @Input() hero: Hero;

    info(info): void {
        info.name = 'aaa';
    }

    constructor() {
    }

    ngOnInit() {
    }

}
