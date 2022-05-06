export {}

// 不推荐使用any, 因为any绕过类型校验
// 但写any 与 没写any是有区别的，因为没写any是推断类型
let a: any = 1
a = '1'
a = 1
a = [1]
a = {b: 1}

a.toFixed(2)

let n:unknown
n = 1
n = '1'
n = [1]
//n.toFixed() // 报错 因为有做类型校验，除非上一句改为number，才不会报错

// 加上判断，可以防止报错
if(typeof n === 'number') {
  n.toFixed(2)
} else if (typeof n === 'string') {
  n.concat()
}