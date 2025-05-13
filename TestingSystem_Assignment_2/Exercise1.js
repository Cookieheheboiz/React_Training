"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise1 = void 0;
var Exercise1 = /** @class */ (function () {
    function Exercise1() {
    }
    Exercise1.prototype.question1 = function () {
        var date = [2020, 12, 8];
        var y = date[0], m = date[1], d = date[2];
        var person = {
            firstname: "nguyen",
            lastName: "a",
            age: 20
        };
        var f = person.firstname, l = person.lastName, a = person.age;
        console.log("Year: " + y + ", Month: " + m + ", Date: " + d);
        console.log("firstName: " + f + ", lastName: " + l + ", age: " + a);
    };
    return Exercise1;
}());
exports.Exercise1 = Exercise1;
