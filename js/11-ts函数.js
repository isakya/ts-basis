"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(a, b) {
    return a + b;
}
let fn1 = (p) => {
    return 1;
};
fn1('');
let fn2 = (p) => { };
fn2('');
let obj = {
    fn: (str) => {
        return 1;
    }
};
obj.fn('');
let obj2 = {
    fn: (str) => {
        return 1;
    }
};
obj2.fn('');
