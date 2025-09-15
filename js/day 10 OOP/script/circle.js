import shape from "./shape.js";

export default class Circle extends shape {
  constructor(lenght) {
    super(lenght);
  }

  Area() {
    return `Circle Area = ${3.14 * Math.pow(this.lenght, 2)} cm2`;
  }

  Primeter() {
    return `Circle Primeter = ${2 * 3.14 * this.lenght} cm`;
  }
}
