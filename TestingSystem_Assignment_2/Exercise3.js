"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise3 = void 0;
var Exercise3 = /** @class */ (function () {
    function Exercise3() {
    }
    Exercise3.prototype.question1 = function () {
        var array1 = [2, 4, 6, 8, 10];
        var array2 = __spreadArray(__spreadArray([], array1, true), [5, 7, 9], false);
        console.log.apply(console, array2);
    };
    Exercise3.prototype.question2 = function () {
        var array1 = [2, 4, 6, 8, 10];
        var array2 = __spreadArray(__spreadArray([], array1, true), [5, 7, 9], false);
        var array3 = __spreadArray([], array2, true);
        console.log.apply(console, array3);
    };
    Exercise3.prototype.question3 = function () {
        var cold = ['autumn', 'winter'];
        var warm = ['spring', 'summer'];
        var season = __spreadArray(__spreadArray([], warm, true), cold, true);
        console.log(season);
    };
    return Exercise3;
}());
exports.Exercise3 = Exercise3;
