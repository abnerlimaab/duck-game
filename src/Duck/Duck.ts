import { IFlyBehavor } from "../IBehavior/IFlyBehavor";
import { IQuackBehavor } from "../IBehavior/IQuackBehavor";

export abstract class Duck {
    
    private _flyBehavor!: IFlyBehavor;
    public get flyBehavor() : IFlyBehavor {
        return this._flyBehavor;
    }
    public set flyBehavor(v : IFlyBehavor) {
        this._flyBehavor = v;
    }

    
    private _quackBehavor!: IQuackBehavor;
    public get quackBehavor() : IQuackBehavor {
        return this._quackBehavor;
    }
    public set quackBehavor(v : IQuackBehavor) {
        this._quackBehavor = v;
    }

    performQuack() {
        this.quackBehavor.quack();
    }

    performFly() {
        this.flyBehavor.fly();
    }

    swin() {
        console.log('swin');
    }

    abstract display(): void;
}