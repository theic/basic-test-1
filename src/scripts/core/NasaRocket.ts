import { RocketBase } from './RocketBase';

export class NasaRocket extends RocketBase {
    constructor() {
        super();
        this.name = 'Nasa';
    }
    
    name: string;    
}
