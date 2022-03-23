"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarPort = void 0;
const SpaceXRocket_1 = require("./SpaceXRocket");
const MilitaryRocket_1 = require("./MilitaryRocket");
class StarPort {
    getAllRockets() {
        return [new SpaceXRocket_1.SpaceXRocket(), new MilitaryRocket_1.MilitaryRocket()];
    }
}
exports.StarPort = StarPort;
