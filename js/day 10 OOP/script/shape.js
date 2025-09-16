export default class Shape {
  constructor(lenght) {
    // abstraction
    if (this.constructor == Shape) {
      throw new Error("Can't create Instance From this class");
    }
    this.lenght = lenght;
  }

  Area() {
    return `Area of `;
  }

  Primeter() {
    return `Primeter of `;
  }
}
