export {}

type ObjType = {myname: string, Person:(m: string) => void}

let obj: ObjType = {
  myname: 'zs',
  Person: () => {}
}

// this指向对象
// 定义函数的时候，this的类型，必须和调用的时候的类型一致
function Person(this: ObjType,name: string) {
  this.myname = name
}
obj.Person = Person
obj.Person('zs')