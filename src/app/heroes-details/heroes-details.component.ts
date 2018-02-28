import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HeroService} from '../service/hero.service';


@Component({
    selector: 'app-heroes-details',
    templateUrl: './heroes-details.component.html',
    styleUrls: ['./heroes-details.component.scss']
})


export class HeroesDetailsComponent implements OnInit {

    @Output() sendObject = new EventEmitter<string>();
    onClick() {
        this.sendObject.emit('11111');
    }

    constructor() {
    }

    ngOnInit() {
    }

}
