import { Duck } from "./Duck";

export class DecoyDuck extends Duck {
    display(): void {
        console.log('decoy duck');
    };
}