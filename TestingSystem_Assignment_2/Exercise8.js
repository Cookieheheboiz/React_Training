"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise8 = void 0;
var Exercise8 = /** @class */ (function () {
    function Exercise8() {
    }
    Exercise8.prototype.question4 = function () {
        var grades = [
            { name: 'John', grade: 8, sex: 'M' },
            { name: 'Sarah', grade: 12, sex: 'F' },
            { name: 'Bob', grade: 16, sex: 'M' },
            { name: 'Johnny', grade: 2, sex: 'M' },
            { name: 'Ethan', grade: 4, sex: 'M' },
            { name: 'Paula', grade: 18, sex: 'F' },
            { name: 'Donald', grade: 5, sex: 'M' },
            { name: 'Jennifer', grade: 13, sex: 'F' },
            { name: 'Courtney', grade: 15, sex: 'F' },
            { name: 'Jane', grade: 9, sex: 'F' }
        ];
        var isBoy = function (student) { return student.sex === 'M'; };
        var isGirl = function (student) { return student.sex === 'F'; };
        var getBoys = function (grades) { return (grades.filter(isBoy)); };
        var getGirls = function (grades) { return (grades.filter(isGirl)); };
        var average = function (grades) { return (grades.reduce(function (acc, curr) { return (acc + curr.grade); }, 0) / grades.length); };
        var maxGrade = function (grades) { return (Math.max.apply(Math, grades.map(function (student) { return student.grade; }))); };
        var minGrade = function (grades) { return (Math.min.apply(Math, grades.map(function (student) { return student.grade; }))); };
        var classroomAverage = average(grades); // 10.2
        var boysAverage = average(getBoys(grades)); // 7
        var girlsAverage = average(getGirls(grades)); // 13.4
        var highestGrade = maxGrade(grades); // 18
        var lowestGrade = minGrade(grades); // 2
        var highestBoysGrade = maxGrade(getBoys(grades)); // 16
        var lowestBoysGrade = minGrade(getBoys(grades)); // 2
        var highestGirlsGrade = maxGrade(getGirls(grades)); // 18
        var lowestGirlsGrade = minGrade(getGirls(grades)); // 9
        console.log(classroomAverage);
        console.log(boysAverage);
        console.log(girlsAverage);
        console.log(highestGrade);
        console.log(lowestGrade);
        console.log(highestBoysGrade);
        console.log(lowestBoysGrade);
        console.log(highestGirlsGrade);
        console.log(lowestGirlsGrade);
    };
    return Exercise8;
}());
exports.Exercise8 = Exercise8;
