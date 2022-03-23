"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarPort = void 0;
const SpaceXRocket_1 = require("./SpaceXRocket");
const MilitaryRocket_1 = require("./MilitaryRocket");
const NasaRocket_1 = require("./NasaRocket");
class StarPort {
    getAllRockets() {
        const rocketTypes = new Array();
        rocketTypes.push(SpaceXRocket_1.SpaceXRocket, NasaRocket_1.NasaRocket, MilitaryRocket_1.MilitaryRocket);
        const result = [];
        let amount = 10;
        while (amount > 0) {
            const rand = Math.floor(Math.random() * 3);
            result.push(new rocketTypes[rand]);
            amount--;
        }
        return result;
    }
}
exports.StarPort = StarPort;
