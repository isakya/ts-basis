export {}

// interface 接口，用来自定义类型
// 定义接口类型 -- 给对象用
interface MyItf {
  // 属性名：值的类型
  name: string
  age: number
  height: number
}
let obj: MyItf;
obj = {
  name: 'zs',
  age: 17,
  height: 1.80
}

// 定义接口类型 --- 给数组用
interface ArrItf {
  // [idx: number] 下标类型：值类型
  [idx: number]: number | string
}

let arr: ArrItf = [1, 2, 3, '4', '5']



// 定义接口类型 --- 给函数用
interface FnItf {

  // 形参及类型：返回值类型
  (p:string, a:number): void
}
let fn: FnItf = (p: string, a: number) => {
  fn('', 1)
}