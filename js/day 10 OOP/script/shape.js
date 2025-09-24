export default class Shape {
  constructor(d1, d2) {
    // abstraction
    if (this.constructor == Shape) {
      throw new Error("Can't create Instance From this class");
    }
    this.d1 = d1;
    this.d2 = d2;
  }

  Area() {
    return this.d1 * this.d2;
  }

  Primeter() {
    return (this.d1 + this.d2) * 2;
  }

  display() {
    return ` Area ${this.Area()} and Primeter ${this.Primeter()} `;
  }
}
