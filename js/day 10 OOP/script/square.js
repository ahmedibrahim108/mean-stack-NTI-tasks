import shape from "./shape.js";

export default class Square extends shape {
  constructor(lenght) {
    super(lenght);
    console.log(this.lenght);
  }

  Area() {
    return `Square Area = ${Math.pow(this.lenght, 2)} cm2`;
  }

  Primeter() {
    return ` Square Area = ${4 * this.lenght} cm`;
  }
}
