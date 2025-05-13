export class Exercise5 {
    question1(): void {
        var function1 = (a, b = 1) => a * b;
        console.log(function1(10, 2));
        console.log(function1(40));

    }
    question2(): void {
        var function1 = (...num) => num.reduce((total, num) => total * num, 1);
        console.log(function1(4, 5, 6));
    }

    question3() : void {
        function printInformation(name: string, email?: string) : void {
            if (email) {
                console.log(`Toi la ${name}. Email cua toi la ${email}`);
            } else {
                console.log(`Toi la ${name}. Toi chua co  Email`);
            }
        }
        printInformation("Huy", "danghuy2498@gmail.com");
        printInformation("Hehe");
    }
}