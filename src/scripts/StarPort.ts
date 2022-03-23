import { RocketBase } from './RocketBase';
import { SpaceXRocket } from './SpaceXRocket';
import { MilitaryRocket } from './MilitaryRocket';
import { NasaRocket } from './NasaRocket';

export class StarPort {
    getAllRockets(): RocketBase[] {

        const rocketTypes = new Array<typeof SpaceXRocket | typeof NasaRocket | typeof MilitaryRocket>();
        rocketTypes.push(SpaceXRocket, NasaRocket, MilitaryRocket);

        const result: RocketBase[] = [];
        let amount = 10;

        while (amount > 0) {
            const rand = Math.floor(Math.random() * 3);
            result.push(new rocketTypes[rand]);
            amount--;
        }

        return result;
    }
}