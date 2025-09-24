import shape from "./shape.js";

export default class Circle extends shape {
  constructor(d1) {
    super(d1, d1);
  }

  Area() {
    return 3.14 * Math.pow(this.d1, 2);
  }

  Primeter() {
    return 2 * 3.14 * this.d1;
  }
}
