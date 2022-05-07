import { IFlyBehavor } from "../IBehavior/IFlyBehavor";

export class FlyNoWay implements IFlyBehavor {
    fly() {
        console.log('não pode voar');
    };
}