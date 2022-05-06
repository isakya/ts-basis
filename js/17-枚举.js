"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 枚举不是用来定义类型，是用来列举数据用的
var Xxx;
(function (Xxx) {
    Xxx[Xxx["a"] = 10] = "a";
    Xxx["b"] = "";
})(Xxx || (Xxx = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 200] = "success";
    StatusCode[StatusCode["paramsError"] = 400] = "paramsError";
    StatusCode[StatusCode["serverError"] = 500] = "serverError";
})(StatusCode || (StatusCode = {}));
let code = 200;
if (code === StatusCode.success) {
    console.log('成功');
}
else if (code === StatusCode.paramsError) {
    console.log('失败');
}
else if (code === StatusCode.serverError) {
    console.log('失败，服务器问题');
}
// 如果不写会自动根据前面一个值来自增 1，第一个值默认为0
var StatusCode2;
(function (StatusCode2) {
    StatusCode2[StatusCode2["success"] = 0] = "success";
    StatusCode2[StatusCode2["paramsError"] = 400] = "paramsError";
    StatusCode2[StatusCode2["serverError"] = 401] = "serverError"; // 401
})(StatusCode2 || (StatusCode2 = {}));
