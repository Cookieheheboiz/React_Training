export class Exercise6 {
    question1() : void {
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

           createUser()
                .then(() => createGroup())
                .then(() => addUserToGroup())
                .then(() => {
                    console.log("End!");
                })
                .catch((err) => {
                    console.error(err);
                    console.log("End!");
                });
    }
    question2(): void {
        asyncPromise1()
            .catch((err) => {
                console.error(err);
                return asyncRecovery1();
            })
            .then(() => {
                return asyncPromise2().catch((err) => {
                    console.error(err);
                    return asyncRecovery2().then(() => {
                        console.log("Dung lo lang gi caa");
                    });
                });
            })
            .then(() => {
                return asyncPromise3(); 
            })
            .then(() => {
                return asyncPromise4();
            })
            .then(() => {
                console.log("Xong");
            });

    }

}