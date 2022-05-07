import { Duck } from "./Duck";

export class RubberDuck extends Duck {
    display(): void {
        console.log('parece um pato de borracha');
    };
}