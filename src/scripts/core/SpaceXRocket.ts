import { RocketBase } from './RocketBase';

export class SpaceXRocket extends RocketBase {
    constructor() {
        super();
        this.name = 'SpaceX';
    }
    
    name: string;
}
