export {}

type ObjType = {myname: string, Person:(m: string) => void}

let obj: ObjType = {
  myname: 'zs',
  Person: () => {}
}

// this指向对象
// 定义函数的时候，this的类型，必须和调用的时候的类型一致
// this: Window | ObjType 表示可以给多种类型所对应的对象，让this去指向
function Person(this: Window | ObjType,name: string) {
  this.myname = name
}

obj.Person = Person
obj.Person('zs')


window.Pperson = Person
window.Pperson('')