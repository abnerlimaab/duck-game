import { IQuackBehavor } from "../IBehavior/IQuackBehavor";

export class Quack implements IQuackBehavor {
    quack() {
        console.log('grasnar');
    };
}