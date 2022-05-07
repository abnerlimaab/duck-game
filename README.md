# O Padrão Strategy

Muitas vezes no paradigma de programação orientada a objetos nos deparamos com situações em que implementar herança não parece tão eficiente principalmente quando um comportamento (método) é identico em uma parcela das classes filhas e totalmente diferente nas demais.

Então muita calma nessa hora e veja como a solução para este problema é mais fácil do que você imagina.

Antes de tudo....

> O Strategy define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis deixando o algoritmo variar.

Vamos trabalhar com o clássico caso do duck game que exibe patos na tela e permite que o suário manipule seu comportamento como voar e fazer quack quack.


### 1ª -> Separe a parte variável do código em uma interface.

A interface representa o comportamento de voar que varia dependendo do tipo do pato que é chamado em tempo de execução.

```typescript 
export interface IFlyBehavor {
    fly: () => void;
};
```
### 2ª -> Crie uma classe para cada comportamento possível.

Aqui realizamos a implementação do comportamento definido pela interface.

```typescript 
export class FlyWithWings implements IFlyBehavor {
    fly() {
        console.log('vôo do pato');
    };
}
```
```typescript 
export class FlyNoWay implements IFlyBehavor {
    fly() {
        console.log('não pode voar');
    };
}
```

### 3ª -> Crie uma classe abstrata com uma propriedade tipada com a interface do comportamento (COMPOSIÇÂO).

Aqui a idéia é realizar a implementação do código não variável e definir os métodos que as classes filhas deverão implementar então lembre-se de criar os métodos que farão uso do comportamento encapsulado.

```typescript 
export abstract class Duck {
    
    //Propriedade como os comportamentos encapsulados
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

    //Métodos que usam os comportamentos
    performQuack() {
        this.quackBehavor.quack();
    }

    performFly() {
        this.flyBehavor.fly();
    }

    //Comportamento comum entre as classes filhas
    swin() {
        console.log('swin');
    }

    //Comportamento individual que deve ser implementado por cada classe filha.
    abstract display(): void;
}
```

### 4ª -> Crie as classes filhas

Neste exemplo, passamos o comportamento que a classe terá diretamente no construtor podendo ser definido com um padrão ou ser recebido como argumento do construtor da classe.

```typescript 
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
```

Como vimos neste exemplo, o Strategy faz forte uso da composição de classes para contornar as dificuldades como a mencionada no inicio na utilização de herança. Então tente utilizá-lo sempre que possível.