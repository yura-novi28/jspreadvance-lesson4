class CoffeeMake{
    on(){
        console.log('on')
    }
    off(){
        console.log('of')
    }
}

class CoffeeDrip extends CoffeeMake{
    onDrip(){
        console.log('drip mode succesfull!');
    }
}

class CoffeeEspresso extends CoffeeMake{
    onEspresso(){
        console.log('espresso mode succesfull!');
    }
}

class CoffeeMakeMode extends CoffeeMake{
    onMake(){
        console.log('coffee-make mode succesfull!');
    }
}

const coffeeMake = new CoffeeMake();
const coffeeDrip = new CoffeeDrip();
const coffeeEspresso = new CoffeeEspresso();
const coffeeMakeMode = new CoffeeMakeMode();

console.log(coffeeMake);
coffeeMake.on();
coffeeMake.off();
console.log(coffeeDrip);
coffeeDrip.on();
coffeeDrip.off();
coffeeDrip.onDrip();
console.log(coffeeEspresso);
coffeeEspresso.on();
coffeeEspresso.off();
coffeeEspresso.onEspresso();
console.log(coffeeMakeMode);
coffeeMakeMode.on();
coffeeMakeMode.off();
coffeeMakeMode.onMake();