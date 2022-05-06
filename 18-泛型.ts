export {}

function fn(n: number | boolean): number | boolean {
  return n
}

fn(1)
fn(true)

// 泛型（类型参数化） 就是为类型的一个形参， T是一个标识符，可以自定义，表示某种类型
function fn1<T, G>(n: T, m: G): T {
  return n
}

fn1<number, string>(100, '1')
fn1<boolean, number>(true, 1)
fn1<'hello', boolean>('hello', true)

// Array是工具类型，是ts封装好的
let arr:Array<number> = [1]