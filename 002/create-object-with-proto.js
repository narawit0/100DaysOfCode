const prototype1 = {
    greet() {
        console.log(`Hello world, ${this.name}`);
    }
}

const obj1 = Object.create(prototype1);
obj1.name = 'tony';

obj1.greet(); // Hello world,Tony