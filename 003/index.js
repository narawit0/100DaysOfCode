function Cat(color) {
    this.color = color;
}

Cat.prototype.printColor = function() {
    console.log(this.color);
}

const blackCat = new Cat('black');

blackCat.printColor();