import { IQuackBehavor } from "../IBehavior/IQuackBehavor";

export class MuteQuack implements IQuackBehavor {
    quack() {
        console.log('fazer nada')
    };
}