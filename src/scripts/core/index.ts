import {StarPort} from './StarPort';

const launch = new StarPort();
const rockets = launch.getAllRockets();
let index = 1;

for (const rocket of rockets) {
    const launchMessage = `Prepare to the next launch #${index++}: `;
    console.log(launchMessage);
    rocket.launch();
}
