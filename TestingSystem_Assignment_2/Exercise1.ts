export class Exercise1 {

    question1(): void {
        var date: number[] = [2020, 12, 8];
        let [y, m, d] = date;

        const person = {
            firstname: "nguyen",
            lastName: "a",
            age: 20
        };

        let {firstname: f, lastName: l, age: a} = person;

        console.log("Year: " + y + ", Month: " + m + ", Date: " + d);
        console.log("firstName: " + f + ", lastName: " + l + ", age: " + a);
    }
}