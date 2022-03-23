import { RocketBase } from './RocketBase';
import { SpaceXRocket } from './SpaceXRocket';
import { MilitaryRocket } from './MilitaryRocket';

export class StarPort {
    getAllRockets(): RocketBase[] {
        return [new SpaceXRocket(), new MilitaryRocket()];
    }
}