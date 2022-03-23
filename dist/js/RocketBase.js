"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketBase = void 0;
class RocketBase {
    launch() {
        const message = `The ${this.name} launched at ${new Date().toLocaleString()}`;
        console.log(message);
    }
}
exports.RocketBase = RocketBase;
