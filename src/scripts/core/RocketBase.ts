export abstract class RocketBase {
    abstract name: string;
    launch(): void {
        const message = `The ${this.name} launched at ${new Date().toLocaleString()}`;
        console.log(message);
    }
}
