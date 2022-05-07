import { IQuackBehavor } from "../IBehavior/IQuackBehavor";

export class Squeak implements IQuackBehavor {
    quack() {
        console.log('guinchar do pato de borracha');
    }
}