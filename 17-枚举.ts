export {}

// 枚举不是用来定义类型，是用来列举数据用的
enum Xxx {
  a = 10,
  b = ''
}


enum StatusCode {
  success = 200,
  paramsError = 400,
  serverError = 500
}

let code: string | number = 200
if(code === StatusCode.success) {
  console.log('成功')
} else if (code === StatusCode.paramsError) {
  console.log('失败')
} else if (code === StatusCode.serverError) {
  console.log('失败，服务器问题');
  
}

// 如果不写会自动根据前面一个值来自增 1，第一个值默认为0
enum StatusCode2 {
  success, // 0
  paramsError = 400, // 400
  serverError // 401
}