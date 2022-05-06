export {}

interface NameItf {
  name: string
}
interface AgeItf {
  age: number
}
// 接口继承的格式，特点是 具有父接口的属性类型
interface PersonItf extends NameItf,AgeItf {
  height: number
}
let p: PersonItf
p = {
  name: 'zs',
  age: 18,
  height: 1.90
}


// 接口可以同名 特点是，合并了所有属性类型
interface AItf {
  a: number
}
interface AItf {
  b: string
}
let obj: AItf = {
  a: 1,
  b: 'b'
}

// 接口缺省 // 属性前加 问号
interface BItf {
  a?: number
}
let b: BItf = {

}

// 只读属性 // 属性前加 readonly
interface CItf {
  readonly a: number
}
let c: CItf = {
  a: 1
}
// c.a = 2 // 报错，因为是只读属性