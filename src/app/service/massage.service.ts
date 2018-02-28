import {Injectable} from '@angular/core';

@Injectable()
export class MassageService {
    massage: string;

    add(massage: string) {
        this.massage = massage;
    }

    constructor() {
    }

    clear() {
        this.massage = '';
    }

}
