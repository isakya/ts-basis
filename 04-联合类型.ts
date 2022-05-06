export {}

// | 联合类型  相当于 或
let numAndStr: number | string = 10
numAndStr = 'str'

// 常量 1|'2'在这里表示的是类型，变量只能赋值这两个常量
let numAndStr2: 1 | '2' = '2'
numAndStr2 = 1
// numAndStr2 = 3 // 报错

// 必须要有其中的属性或全都有，而且值也必须一样
let obj: {a: 1} | {b: '2'}
obj = {a: 1}
// obj = {a: 2} // 报错
obj = {a:1, b: '2'}