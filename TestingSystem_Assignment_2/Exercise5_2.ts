export class Exercise5_2 {
    question1(): void {
        function createUser(success:() => void, error: (err: string) => void): void {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.2;
                if (isSuccess) {
                    console.log("Tao thanh cong user");
                    success();
                } else {
                    error("Tao user that bai");
                }
            }, 1000)
     
        }

        function createGroup(success:()=> void, error :(err: string)=> void):void {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.2;
                if (isSuccess) {
                    console.log("Tao thanh cong Group");
                    success();
                } else {
                    error("Tao Group that bai");
                }

            }, 1000);
        }

        function addUserToGroup(success: () => void, error: (err: string) => void): void {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.2;
                if (isSuccess) {
                    console.log("Them user vao group thanh cong");
                    success();
                } else {
                    error("Them user vao group that bai");
                }
            }, 1000);
        }

        createUser(
            () => {
                createGroup (
                    () => {
                        addUserToGroup(
                            () => {
                                console.log("End!");
                            },
                            (err) => {
                                console.error(err);
                                console.log("End!");
                            }
                    );
                    },
                    (err) => {
                                console.error(err);
                                console.log("End!");
                    }
            );
            },
            (err) => {
                                console.error(err);
                                console.log("End!");
            }

    );

    }
}