"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(n) {
    return n;
}
fn(1);
fn(true);
// 泛型（类型参数化） 就是为类型的一个形参， T是一个标识符，可以自定义，表示某种类型
function fn1(n, m) {
    return n;
}
fn1(100, '1');
fn1(true, 1);
fn1('hello', true);
// Array是工具类型，是ts封装好的
let arr = [1];
