export class Exercise7 {
    question1(): void {
        function createUser(): Promise<void> {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const isSuccess = Math.random() > 0.2;
                    if (isSuccess) {
                        console.log("Tao user thanh cong");
                        resolve;
                    } else {
                        reject("Tao user that bai");
                    }
                }, 1000);
            });
          }
          
          function createGroup(): Promise<void> {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const isSuccess = Math.random() > 0.2;
                    if (isSuccess) {
                        console.log("Tao group thanh cong");
                        resolve;
                    } else {
                        reject("Tao group that bai");
                    }
                }, 1000);
            });
          }

          
          function addUserToGroup(): Promise<void> {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const isSuccess = Math.random() > 0.2;
                    if (isSuccess) {
                        console.log("Them user vao Group thanh cong");
                        resolve();
                    } else {
                        reject("Them user vao Group that bai");
                    }
                }, 1000);
            });
        }

        async function getAsync1() {
            try {
                await createUser();
                await createGroup();
                await addUserToGroup();
                console.log("End!");
            } catch(err) {
                console.error(err);
                console.log("End!");
            }
        }

        getAsync1();



        async function getAsync2() {
            try {
                await asyncPromise1();
            } catch(err) {
                console.error(err);
                await asyncRecovery1();
                try {
                    await asyncPromise4();
                } catch (err) {
                    console.error(err);
                    await asyncRecovery2();
                    try {
                        console.log("Xong");

                    } catch(err) {
                        console.log("Dung lo lang gi ca");
                    }
                }

            }

            try {
                await asyncPromise2();

            } catch (err) {
                console.error(err);
                await asyncRecovery1();
                try {
                    await asyncPromise4();
                } catch (err) {
                    console.error(err);
                    await asyncRecovery2();
                    try {
                        console.log("Xong");

                    } catch(err) {
                        console.log("Dung lo lang gi ca");
                    }
                }
            }

            try {
                await asyncPromise3();

            } catch(err) {
                console.error(err);
                await asyncRecovery1();
                try {
                    await asyncPromise4();
                } catch (err) {
                    console.error(err);
                    await asyncRecovery2();
                    try {
                        console.log("Xong");

                    } catch(err) {
                        console.log("Dung lo lang gi ca");
                    }
                }
            }

            try {
                await asyncPromise4();

            } catch (err) {
                console.log("Dung lo lang gi ca");
                try {
                    console.log("Xong")
                }
            }

            try {
                console.log("Xong");
            }
        }

        getAsync2();
    }
}