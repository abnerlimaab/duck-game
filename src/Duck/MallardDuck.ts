import { FlyWithWings } from "../Behavior/FlyWithWings";
import { Quack } from "../Behavior/Quack";
import { Duck } from "./Duck";

export class MallardDuck extends Duck {

    constructor() {
        super();
        this.quackBehavor = new Quack();
        this.flyBehavor = new FlyWithWings();
    }

    display(): void {
        console.log('MallardDuck');
    };
}