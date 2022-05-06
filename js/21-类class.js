"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义类的同时，也定义了一个相同名称的接口
class Person {
    constructor(n) {
        // 定义属性前，应该先声明这个属性的类型，也可以同时设置默认值
        this.myName = '默认名称';
        this.myName = n;
    }
}
let p = new Person('zs');
console.log(p.myName);
