import { FlyNoWay } from "../Behavior/FlyNoWay";
import { Quack } from "../Behavior/Quack";
import { Duck } from "./Duck";

export class ModelDuck extends Duck {
    constructor() {
        super();
        this.flyBehavor = new FlyNoWay();
        this.quackBehavor = new Quack();
    }

    display() {
        console.log('Model duck');
    }
}