export {}

type StrOrNum = string | number

interface PersonItf<N extends StrOrNum, G> {
  name: N // 需求： N值接收字符串 或 数字
  getName: () => G
}

let obj: PersonItf<number, number> = {
  name: 1,
  getName() {
    return 1
  }
}