export {}

// 抽象类 是普通类的描述, 指定一个类的规范，给普通的类去继承，就像是设计图
// 继承之后，普通类里面就必须定义抽象类里面的抽象属性和抽象方法
// 抽象类里面的普通方法直接被子类继承，在普通类里面可以不实现
abstract class Person {
  abstract name: string
  abstract getName(): string
  getAge() {
    return 11
  }
}

// 普通类
class Male extends Person {
  name: string = ''
  getName(): string {
      return this.name
  }
}

let m = new Male() 
m.getName()
m.getAge()

// 抽象类不能实例化
// let p1 = new Person() // 报错


// 书写接口给类使用
interface PerItf {
  name: string
  age?: number
  getName: () => void
}

class M implements PerItf {
  readonly name: string = ''
  age: number = 14
  getName() {

  }
}

let m1 = new M()

// m1.name = '' // 只读属性 报错