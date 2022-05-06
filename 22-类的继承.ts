export {}

class Person {
  myName: string
  constructor(n: string) {
    this.myName = n
  }
  getName() {
    return this.myName
  }
}

class Male extends Person {
  age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }

}

let m = new Male('zs', 18)
console.log(m.myName);
console.log(m.age);
console.log(m.getName());



