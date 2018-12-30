function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
        setTimeout(() => {
            resolve(count);
        }, milliseconds);
    });
}

// async function always returns a Promise
async function dramaticWelcome(): Promise<void> {
    console.log("Hello");

    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count:number = await new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(i*10);
            }, 1000);
        });;
        console.log(count);
    }

    console.log("World!");
}

dramaticWelcome();