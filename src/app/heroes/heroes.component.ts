import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
    value = 'dsada';

    onRecvFunc(data) {
    }

    constructor() {
    }

    ngOnInit() {
    }

}
