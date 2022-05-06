"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// promise对象： p对象名: Promise<res的类型>
let p = new Promise((resolve, reject) => {
    resolve({
        code: 0,
        data: [{ a: 1, b: 2 }, { a: 11, b: 22 }],
        message: ''
    });
});
p.then(res => {
    if (res.code === 0) {
        res.data.map(item => item.a);
    }
});
