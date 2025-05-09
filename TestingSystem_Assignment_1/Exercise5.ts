export class Exercise5 {
    question1(): void {
        var name : string = "Nguyen Van A";
        function printGlobal() {
            console.log("Global:" + name);
        }
        printGlobal();

        function printLocal() {
            var name : string = "Dang Quoc Huy";
            console.log("Local:" + name);
        }
        printLocal();

        name = "Nguyen Van B";
        console.log("change: " + name);


    }

    question2(): void {
        let name = "Nguyen Van C";
        function printLetGlobal() {
            console.log("Global let: " + name);
        }
        printLetGlobal();

        function printLetLocal() {
            let name = "Nguyen Van D";
            console.log("Local let: " + name);
        }
        printLetLocal();

        name = "NGUYEN VAN E";
        console.log("change: " + name);
    }

    question3() : void {
        const name = "Nguyen Thanh Binh";
        function printConstGlobal() {
            console.log("Const Global: " + name);
        }

        printConstGlobal();

        function printConstLocal() {
            const name = "Nguyen Duy Anh";
            console.log("Const Local: " + name);
        }

        printConstLocal();
        // const name = "Tran Nhat Hung"; bị lỗi;

    }

    question4() : void {
        const arrays = [1, 2, 3];
        arrays.push(4);
        console.log(arrays);
    }

}