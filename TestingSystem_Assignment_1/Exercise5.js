"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise5 = void 0;
var Exercise5 = /** @class */ (function () {
    function Exercise5() {
    }
    Exercise5.prototype.question1 = function () {
        var name = "Nguyen Van A";
        function printGlobal() {
            console.log("Global:" + name);
        }
        printGlobal();
        function printLocal() {
            var name = "Dang Quoc Huy";
            console.log("Local:" + name);
        }
        printLocal();
        name = "Nguyen Van B";
        console.log("change: " + name);
    };
    Exercise5.prototype.question2 = function () {
        var name = "Nguyen Van C";
        function printLetGlobal() {
            console.log("Global let: " + name);
        }
        printLetGlobal();
        function printLetLocal() {
            var name = "Nguyen Van D";
            console.log("Local let: " + name);
        }
        printLetLocal();
        name = "NGUYEN VAN E";
        console.log("change: " + name);
    };
    Exercise5.prototype.question3 = function () {
        var name = "Nguyen Thanh Binh";
        function printConstGlobal() {
            console.log("Const Global: " + name);
        }
        printConstGlobal();
        function printConstLocal() {
            var name = "Nguyen Duy Anh";
            console.log("Const Local: " + name);
        }
        printConstLocal();
        // const name = "Tran Nhat Hung"; bị lỗi;
    };
    Exercise5.prototype.question4 = function () {
        var arrays = [1, 2, 3];
        arrays.push(4);
        console.log(arrays);
    };
    return Exercise5;
}());
exports.Exercise5 = Exercise5;
