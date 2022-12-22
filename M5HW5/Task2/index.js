let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = Number(prompt("Enter first value:"));
    this.b = Number(prompt("Enter second value:"));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(`The sum of 2 numbers = ${calculator.sum()}`);
alert(`The product of 2 numbers = ${calculator.mul()}`);
