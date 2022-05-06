export {}

interface Person {
  name: string
  age: number
  [idx: number]: number | string
  [idx: string]: number | string
}
// keyof  后面一般跟接口，表示接口的这些属性名之一（就是:号前面的东西，也就是键名）
type Ptype = keyof Person // 表示 name | age | number 都是常量
let p1: Ptype
p1 = 'name'
// p1 = 'xxx' // 报错，不是Ptype的其中一个属性
p1 = 1
p1 = '123'

interface PerItf {
  [idx: string]: number | string
}
let p2: PerItf = {
  aa: '1'
}


// in
type StrOrNum = string | number
type PItf = {
  [k in StrOrNum] : string 
}
let obj: PItf = {
  a: '', 
  1: ''
}


// typeof 提取变量 或 对象的类型

let str = '123'
type StrType = typeof str // 得到 string

let aaa: StrType = 'zs'

let obj2 = {
  name: 1,
  age: '',
  height: 10
}
type OType = typeof obj2 
let obj3: OType = {
  name: 1,
  age: 'x',
  height: 1.8
}
