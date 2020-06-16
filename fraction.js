export function test() {
  return "true";
}

/* implémentation avec class Object*/
export class Fraction {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  result() {
    return this.a / this.b;
  }
  gcb() {
    const gcbcalc = function (paramA, paramB) {
      if (paramB == 0) {
        return paramA;
      } else {
        return gcbcalc(paramB, paramA % paramB);
      }
    };

    return gcbcalc(this.a, this.b);
  }
  add(c, d) {
    const sumFraction = new Fraction(this.a * d + this.b * c, this.b * d);
    return sumFraction;
  }
  reduced() {
    return this.a / this.gcb() + "/" + this.b / this.gcb();
  }
}

/* implémentation avec function Fraction*/








