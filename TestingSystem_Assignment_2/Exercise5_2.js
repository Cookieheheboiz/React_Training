"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise5_2 = void 0;
var Exercise5_2 = /** @class */ (function () {
    function Exercise5_2() {
    }
    Exercise5_2.prototype.question1 = function () {
        function createUser(success, error) {
            setTimeout(function () {
                var isSuccess = Math.random() > 0.8;
                if (isSuccess) {
                    console.log("Tao thanh cong user");
                    success();
                }
                else {
                    error("Tao user that bai");
                }
            }, 1000);
        }
        function createGroup(success, error) {
            setTimeout(function () {
                var isSuccess = Math.random() > 0.2;
                if (isSuccess) {
                    console.log("Tao thanh cong Group");
                    success();
                }
                else {
                    error("Tao Group that bai");
                }
            }, 1000);
        }
        function addUserToGroup(success, error) {
            setTimeout(function () {
                var isSuccess = Math.random() > 0.2;
                if (isSuccess) {
                    console.log("Them user vao group thanh cong");
                    success();
                }
                else {
                    error("Them user vao group that bai");
                }
            }, 1000);
        }
        createUser(function () {
            createGroup(function () {
                addUserToGroup(function () {
                    console.log("End!");
                }, function (err) {
                    console.error(err);
                    console.log("End!");
                });
            }, function (err) {
                console.error(err);
                console.log("End!");
            });
        }, function (err) {
            console.error(err);
            console.log("End!");
        });
    };
    return Exercise5_2;
}());
exports.Exercise5_2 = Exercise5_2;
