export default class Circle extends shape {
  constructor(r) {
    super(r);
  }

  Area() {
    return `Circle Area = ${3.14 * Math.pow(this.r, 2)} cm2`;
  }

  Primeter() {
    return `Circle Primeter = ${2 * 3.14 * this.r} cm`;
  }
}

//give me this error
// Circle Area = NaN
// Circle Primeter = NaN

// and the same with square
