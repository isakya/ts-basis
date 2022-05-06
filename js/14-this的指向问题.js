"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 这代码应在全局上，给Window接口扩展这个属性
// interface Window {
//   Pperson: (n:string) => void
//   myname: string,
// }
// ts提供了Window类型， Window就是Window类型的对象
function Pperson(name) {
    // 在ts的书写中，需要指明this指向,在函数的第一个形参的位置注明
    // Window类型中没有myname这个属性，所以会报错
    // 但要扩展就需要用到接口
    this.myname = name;
}
window.Pperson = Pperson; // 把函数挂到window下
window.Pperson(''); // 为啥报错？
