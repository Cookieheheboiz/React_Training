export class Exercise4 {

    question1(): void {
        var fullname : string = "Nguyen Van A";

        function scpFunction() : void {
            var fullname : string = "Nguyen Van B";
            console.log(fullname);
        }
        scpFunction();

        function scpLexical() : void {
            var fullname : string = "Nguyen Van C";
            function child(): void {
                console.log(fullname);
            }
            child();
        }
        scpLexical();
    }

    question2(): void {
        function printName() {
            console.log("Dang Quoc Huy");
        }
        let myName: () => void = printName;
        myName();
    }

    question3(): void {
        function getGreeting(firstname, lastname) {
            var nameIntro = "Hello ";
            var greeting = function() {
                return nameIntro + firstname + " " + lastname;
            }

            return greeting;
        }

        var greetingNguyenA = getGreeting("Nguyen Van", "A");
        console.log(greetingNguyenA());
    }

    question4(): void {
        var myLoop = function(i) {
            setTimeout(function myLoop() {
                console.log(i);
            }, i * 1000); /// 1000 ở đây là 1000ms = 1s
        };

        for (var i = 1; i <=5; i++) {
            myLoop(i);
        }
    }

    question5(): void {
        function makeExponentiation(x) {
            var exponent = x;
            return function (y) {
                return Math.pow(y, exponent);
            }
        }

        var square = makeExponentiation(2);
        var sqrt = makeExponentiation(0.5);

        console.log(square(3));
        console.log(sqrt(4));
    }

    question6(): void {
        let count = 0;
        function Person() {
            let id = ++count;
            var name;
            return {    
                getId: function() {
                    return id;
                },
                setName: function(_name) {
                    name = _name
                },
                getName: function() {
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
    }

} 