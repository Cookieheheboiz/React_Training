"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise5 = void 0;
var Exercise5 = /** @class */ (function () {
    function Exercise5() {
    }
    Exercise5.prototype.question1 = function () {
        var function1 = function (a, b) {
            if (b === void 0) { b = 1; }
            return a * b;
        };
        console.log(function1(10, 2));
        console.log(function1(40));
    };
    Exercise5.prototype.question2 = function () {
        var function1 = function () {
            var num = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                num[_i] = arguments[_i];
            }
            return num.reduce(function (total, num) { return total * num; }, 1);
        };
        console.log(function1(4, 5, 6));
    };
    Exercise5.prototype.question3 = function () {
        function printInformation(name, email) {
            if (email) {
                console.log("Toi la ".concat(name, ". Email cua toi la ").concat(email));
            }
            else {
                console.log("Toi la ".concat(name, ". Toi chua co  Email"));
            }
        }
        printInformation("Huy", "danghuy2498@gmail.com");
        printInformation("Hehe");
    };
    return Exercise5;
}());
exports.Exercise5 = Exercise5;
