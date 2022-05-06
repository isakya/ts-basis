export {}
//  | &

// && 优先于 ||
1 || 2 && 3 // 结果为 1

// & 优先于 |
let obj: {name: string} & {age: number} | {name: number} & {age: string}

// 要么是 | 前的类型
obj = {
  name: 'zs',
  age: 17
}

// 要么是 | 后的类型
obj = {
  name: 2,
  age: '17'
}