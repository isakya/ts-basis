export {}



interface PItf {
  name: string
  age: number
  height?: number
}

// 缺省工具类
// 作用 把<>里面的这个 接口类型的属性 设置为 可缺省的属性
let obj: Partial<PItf> = {
  name: '',
  // age: 14
}

// Partial 部分的意思
// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
/*
keyof T 就是 name | age
{
  name?:string|undefined
  age?:string|undefined
}
*/ 


// Required 定义所有属性不可缺省
let obj2: Required<PItf> = {
  name: '',
  age: 12,
  height: 1.90
}

// type Required<T> = { [P in keyof T]-?: T[P]; }
// -? 号 抵消，去掉这个问号