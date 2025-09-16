import shape from "./shape.js";

export default class Rectangel extends shape {
  //bind this prop to the class only nit the instance
  static count = 0;

  constructor(lenght, width) {
    super(lenght);
    this.width = width;
    Rectangel.count++;
  }

  Area() {
    return `Rectangel Area = ${this.lenght * this.width} cm2`;
  }

  Primeter() {
    return `Rectangle Primeter = ${(this.lenght + this.width) * 2} cm`;
  }

  //bind this method to the class only nit the instance
  static displayRectCount() {
    return `Rectungle Count = ${Rectangel.count}`;
  }
}
