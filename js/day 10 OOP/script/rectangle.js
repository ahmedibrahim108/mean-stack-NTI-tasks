import shape from "./shape.js";

export default class Rectangel extends shape {
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

  static displayRectCount() {
    return `Rectungle Count = ${Rectangel.count}`;
  }
}
