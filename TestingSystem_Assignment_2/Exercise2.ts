export class Exercise2 {
    question1(): void {
        var fullname = "Dang Quoc Huy";
        var age = 20;
        let temp = `Toi ten la ${fullname}, nam nay ${age} tuoi, dang e!`; 
        console.log(temp);

    }

    question2(): void {
        var a = 5;
        var b = 20;
        let temp = `Tong cua ${a} va ${b} la ${a + b}`;
        console.log(temp);
    }

    question3(): void {
        var temp = `
1. CHẢ GIÒ NÓN LÁ
2. BÒ LÚC LẮC HẠC ĐIỀU
3. CÁ TAI TƯỢNG CHIÊN XÙ
4. CÁI THÌA SỐT THỊT CUA
5. CƠM CHIÊN CÁ MẶN
6. LẨU HẢI SẢN
7. RAU CÂU
`;
        console.log(temp.trim());
    }
}