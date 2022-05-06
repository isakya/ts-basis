export {}

// 类里面定义的属性，默认的修饰符是public，public修饰的属性和方法都可以在类的内部、外部 和 子类 访问

// protected 受保护的， 在类里面，子类里面都可以访问，但类的外面不可以

// private 私有的，只可以在本类访问

class Person {
  public readonly  myName: string // readonly 设置属性只读，不能被修改
  static title: string = 'title的值' // static 静态属性，可以直接访问，只能给类使用，实例不行
  constructor(n: string) {
    this.myName = n
  }
  public getName() {
    return this.myName
  }
}

// 静态属性相关操作
Person.title // 访问静态属性
Person.title = '修改后的title的值'
console.log(Person.title)
let p = new Person('lisi')
// console.log(p.title) // 报错


class Male extends Person {
  public age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }

}

let m = new Male('zs', 18)
console.log(m.myName);
console.log(m.age);
console.log(m.getName());



