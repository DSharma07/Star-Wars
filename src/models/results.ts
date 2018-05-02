import { Film } from './films';

export class Results {
    count : number;
     results: Array<Film>;
    
    constructor(count: number, results: Array<Film>) {
         this.count = count;
            this.results = results;
    }
}