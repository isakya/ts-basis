export {}

// 泛型---类型别名
type StrOrNum = string | number

type ObjType<T, G> = {name: T, getName:() => G}
let obj: ObjType<string, string> = {
  name: '',
  getName() {
    return 'x'
  }
}

let obj1: ObjType<string | number, string | string> = {
  name: '',
  getName() {
    return 'x'
  }
}

let obj2: ObjType<StrOrNum, StrOrNum> = {
  name: '',
  getName() {
    return 'x'
  }
}

// 泛型---接口
// interface PersonItf { // 原始写法
//   name: string,
//   getName: () => string
// }

interface PersonItf<N, G> {
  name: N,
  getName: () => G
}
let obj3: PersonItf<StrOrNum, StrOrNum> = {
  name: '2',
  getName() {
    return 'x'
  }
}

// 泛型默认值 给泛型参数赋类型，使用时可以省略不传，但不能约束，因为没传就默认类型，传了就不确定类型
interface AItf<N, G = string> {
  name: N,
  getName: () => G
}
let obj4: AItf<StrOrNum, StrOrNum> = {
  name: '2',
  getName() {
    return 'x'
  }
}