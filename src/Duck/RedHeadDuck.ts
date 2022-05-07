import { Duck } from "./Duck";

export class RedHeadDuck extends Duck {
    display(): void {
        console.log('parece um cabeça vermelha');
    }
}