import { RocketBase } from './RocketBase';

export class MilitaryRocket extends RocketBase {
    constructor() {
        super();
        this.name = 'TOP SECRET';
    }
    
    name: string;

    launch(): void {
        console.log('TOP SECRET');
    }
}
