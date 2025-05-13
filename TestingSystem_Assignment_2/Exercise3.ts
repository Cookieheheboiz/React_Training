export class Exercise3 {
    question1() : void {
        var array1 = [2, 4, 6, 8, 10];
        var array2 = [...array1, 5, 7, 9]
        console.log(...array2);
    }

    question2(): void {
        var array1 = [2, 4, 6, 8, 10];
        var array2 = [...array1, 5, 7, 9]
        var array3 = [...array2];
        console.log(...array3);
    }
    question3(): void {
        var cold = ['autumn', 'winter'];
        var warm = ['spring', 'summer'];
        var season = [...warm, ...cold];
        console.log(season);
    }
}