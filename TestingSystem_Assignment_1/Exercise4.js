"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise4 = void 0;
var Exercise4 = /** @class */ (function () {
    function Exercise4() {
    }
    Exercise4.prototype.question1 = function () {
        var fullname = "Nguyen Van A";
        function scpFunction() {
            var fullname = "Nguyen Van B";
            console.log(fullname);
        }
        scpFunction();
        function scpLexical() {
            var fullname = "Nguyen Van C";
            function child() {
                console.log(fullname);
            }
            child();
        }
        scpLexical();
    };
    Exercise4.prototype.question2 = function () {
        function printName() {
            console.log("Dang Quoc Huy");
        }
        var myName = printName;
        myName();
    };
    Exercise4.prototype.question3 = function () {
        function getGreeting(firstname, lastname) {
            var nameIntro = "Hello ";
            var greeting = function () {
                return nameIntro + firstname + " " + lastname;
            };
            return greeting;
        }
        var greetingNguyenA = getGreeting("Nguyen Van", "A");
        console.log(greetingNguyenA());
    };
    Exercise4.prototype.question4 = function () {
        var myLoop = function (i) {
            setTimeout(function myLoop() {
                console.log(i);
            }, i * 1000); /// 1000 ở đây là 1000ms = 1s
        };
        for (var i = 1; i <= 5; i++) {
            myLoop(i);
        }
    };
    Exercise4.prototype.question5 = function () {
        function makeExponentiation(x) {
            var exponent = x;
            return function (y) {
                return Math.pow(y, exponent);
            };
        }
        var square = makeExponentiation(2);
        var sqrt = makeExponentiation(0.5);
        console.log(square(3));
        console.log(sqrt(4));
    };
    Exercise4.prototype.question6 = function () {
        var count = 0;
        function Person() {
            var id = ++count;
            var name;
            return {
                getId: function () {
                    return id;
                },
                setName: function (_name) {
                    name = _name;
                },
                getName: function () {
                    return name;
                }
            };
        }
        var person1 = Person();
        person1.getId();
        person1.setName("Nguyen Van A");
        person1.getName();
        console.log("ID: " + person1.getId());
        console.log("Name: " + person1.getName());
    };
    return Exercise4;
}());
exports.Exercise4 = Exercise4;
