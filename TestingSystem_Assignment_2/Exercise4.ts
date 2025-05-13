export class Exercise4 {
    question1() : void {
        var function1 = (a) => {
            return a + 100;
        }
        var function1 = (a) => a + 100;
        var function1 = a => a + 100;
        console.log(function1(2));
    }

    question2(): void {
        var function1 = (a, b) => a + b + 100;
        var function2 = (a, b) => {
            let chuck = 42;
            return a + b + chuck;
        }
        var bob = a => a + 100;
    }

}