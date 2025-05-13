"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise2 = void 0;
var Exercise2 = /** @class */ (function () {
    function Exercise2() {
    }
    Exercise2.prototype.question1 = function () {
        var fullname = "Dang Quoc Huy";
        var age = 20;
        var temp = "Toi ten la ".concat(fullname, ", nam nay ").concat(age, " tuoi, dang e!");
        console.log(temp);
    };
    Exercise2.prototype.question2 = function () {
        var a = 5;
        var b = 20;
        var temp = "Tong cua ".concat(a, " va ").concat(b, " la ").concat(a + b);
        console.log(temp);
    };
    Exercise2.prototype.question3 = function () {
        var menu = "\n1. CH\u1EA2 GI\u00D2 N\u00D3N L\u00C1\n2. B\u00D2 L\u00DAC L\u1EAEC H\u1EA0C \u0110I\u1EC0U\n3. C\u00C1 TAI T\u01AF\u1EE2NG CHI\u00CAN X\u00D9\n4. C\u00C1I TH\u00CCA S\u1ED0T TH\u1ECAT CUA\n5. C\u01A0M CHI\u00CAN C\u00C1 M\u1EB6N\n6. L\u1EA8U H\u1EA2I S\u1EA2N\n7. RAU C\u00C2U\n        ";
        console.log(menu.trim());
    };
    return Exercise2;
}());
exports.Exercise2 = Exercise2;
