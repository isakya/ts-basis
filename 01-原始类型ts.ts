export {} // 导出一个空对象，防止与后面新文件下的变量产生冲突
let str = '2' // 根据初始的赋值来推导出变量的类型，以后str的类型就固定下来了，不能再修改
// str = 2 // 报错，因为在定义的时候类型就确定下来了

const num = 1 // 常量不能改变指向（不能被修改），所以它的值就是它的类型
// num = '2' // 报错，因为常量不能改变指向（不能被修改）

// ts原始类型有哪些？ js基础数据类型：number string boolean undefined null symbol
// ts原始类型就是 js基础数据类型

let  num1: number = 1
let bool: boolean = false
let str1: string = '1'
let und: undefined = undefined
let nul: null = null
let sy: symbol = Symbol('123')
let vo: void = undefined


// 在ts中函数没有返回值，函数类型就是void
function a(){}
// 其他函数是什么类型就得返回什么类型的值，不然报错
function b():undefined{ return undefined }
