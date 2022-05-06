export {}

// 类型别名 就是自定义类型
type StrOrNum = string | number

let str: StrOrNum = '1'

str = 10

// 给对象用
type ObjType = {a: number&2, b:string}
let obj:ObjType = {
  a: 2,
  b: '2'
}

// 与接口的区别
// 同：都是自定义类型
// 区别：类型别名不能同名，接口可以同名


// 类型别名与接口混合使用
interface AItf {
  a: string
}
// 用类型别名保存接口上的某个属性类型
type Atype = AItf['a']
let str2: Atype = '10'


type color = 'red' | 'blue' | 'green' | string & {}
let cr: color
cr = 'red'