export {}
//  & 交叉类型（都得有）
let a: number & string // 不会有任何值满足这个类型，一般不这么写

// 如果一个属性出现多次类型设置 则值都需要满足这属性所多次设置的类型
let obj: {name: string, age: number} & {height: number, age: 18}
obj = {name: 'zs', age: 18, height: 1.8}