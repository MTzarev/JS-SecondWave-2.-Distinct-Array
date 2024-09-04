function distinctArray(arr) {
    let identicalNums = [];
    let repeatedNums = [];

    for (let i = 0; i < arr.length; i++) {
        if (!identicalNums.includes(arr[i])) {
            identicalNums.push(arr[i]);
        } else {
            repeatedNums.push(arr[i]);
        }
    }
    console.log(identicalNums.join(` `));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);

