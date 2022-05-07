import { FlyRocketPowered } from "./Behavior/FlyRocketPowered";
import { Duck } from "./Duck/Duck"
import { MallardDuck } from "./Duck/MallardDuck";
import { ModelDuck } from "./Duck/ModelDuck";

const mallard: Duck = new MallardDuck();

mallard.display();
mallard.performQuack();
mallard.performFly();

const model: Duck = new ModelDuck();

model.display();
model.performFly();
model.flyBehavor = new FlyRocketPowered();
model.performFly();
