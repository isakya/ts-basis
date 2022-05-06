export {}

// 默认参数 （可以不传）
function fn(a: number, b: number = 3) {
  return a + b
}

fn(1, 2)
fn(5)

// 缺省参数， 最后一个参数名加问号
function fn1(a: number, b?: number) {
  return 1
}
fn1(1, 2)
fn1(1)


// 剩余参数写法
function fn2(a: number, b: number, ...arr: number[]) {
  console.log(a, b, ...arr)
}
fn2(1, 2, 3, 4, 5)

let arr1 = [1, 2, 3]
let arr2 = [...arr1]

let obj1 = {a: 1, b: 2, c: [1, 2, 3]}
let obj2 = {...obj1} // 浅拷贝
obj1.a = 100
console.log(obj1)

obj1.c[0] = 111
console.log(obj1) // c[0]: 111