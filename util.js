function getRandomValue(array) {
    if (array.length === 0) {
        throw new Error("Input array is empty");
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function doSomeHeavyTask(){
    const ms = getRandomValue([100,150,200,300,600,500,1000,1400,2500])
    console.log('doSomeHeavyTask resolved ms:', ms);
    const shouldThrowError = getRandomValue([1,2,3,4,5,6,7,8]) === 8
    if (shouldThrowError) {
        const randomError = getRandomValue([
            "DB Payment failure",
            "DB Server is Down",
            "Access Denied",
            "Not Found Error",
        ])
        throw new Error(randomError)
    }
    return new Promise((resolve,reject) => setTimeout(()=> resolve(ms),ms))
}

module.exports = {doSomeHeavyTask}