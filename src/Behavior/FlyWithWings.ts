import { IFlyBehavor } from "../IBehavior/IFlyBehavor";

export class FlyWithWings implements IFlyBehavor {
    fly() {
        console.log('vôo do pato');
    };
}