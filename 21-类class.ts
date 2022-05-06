export {}
// 定义类的同时，ts内部会创建一个相同名称的接口
class Person {
  // 定义属性前，应该先声明这个属性的类型，也可以同时设置默认值
  myName: string = '默认名称'
  constructor(n: string) {
    this.myName = n
  }
  getName() {
    return this.myName
  }
}
let p = new Person('zs')
console.log(p.myName)
console.log(p.getName)



// 类当接口
let obj: Person = {
  myName: '',
  getName() {
    return ''
  }
}
// 当于这个接口
// interface Person {
//   myName: string
//   getName: () => string
// }