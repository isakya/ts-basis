export {}

function fn(a: number, b:number): number {
  return a + b
}

// 接口定义函数类型
interface FnItf {
  (p: string): number
}
let fn1:FnItf = (p: string) => {
  return  1
}
fn1('')


// 类型别名定义函数类型
type FnType =  (p: string) => void

let fn2: FnType = (p: string): void => {}
fn2('')


// 函数作为对象属性出现的时候可以如下定义
interface ObjItf {
  // fn: {
  //   (p: string): number
  // }
  fn: FnItf
}
let obj: ObjItf = {
  fn: (str) => {
    return 1
  }
}
obj.fn('')


// 类型别名写法
type ObjType = {fn: (p: string) => void}
let obj2: ObjType = {
  fn: (str) => {
    return 1
  }
}
obj2.fn('')
