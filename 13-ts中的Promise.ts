export {}

interface DataItf {
  a: number
  b: number
}

interface ResItf {
  code: number
  data: DataItf[]    // {a: number, b: number}[]
  message: string
}

// promise对象： p对象名: Promise<res的类型>
let p: Promise<ResItf> = new Promise((resolve, reject) => {
  resolve({
    code: 0,
    data: [{a: 1, b: 2}, {a: 11, b: 22}],
    message: ''
  })
})

p.then(res => {
  if(res.code === 0) {
    res.data.map(item => item.a)
  }
})