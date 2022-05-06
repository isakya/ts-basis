export {}

let arr: object = [1, 2]
// 数组元素数据类型一般都一致，便于管理

// 规范数组的数据类型

// 写法1
let arr1: number[] = [1, 2, 4]
arr1[0] = 10
// arr[1] = '1' // 报错

// 写法2
// 泛型 类型参数化
let arr2: Array<number> = [1, 2, 3]
arr2[1] = 10
// arr2[2] = '1' //报错

// 元组
let arr3: [number, number, boolean] = [10, 20, true]


// 无限制数组类型的写法(考题)
let arr4: any[] = [1, 2, 3, '4', true]
