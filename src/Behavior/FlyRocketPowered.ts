import { IFlyBehavor } from "../IBehavior/IFlyBehavor";

export class FlyRocketPowered implements IFlyBehavor {
    fly() {
        console.log('voando como um foguete');
    }
}