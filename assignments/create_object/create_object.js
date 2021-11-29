function CreateObject(arr) {
    // Write your code here
    let o = {}
    for (let i = 0; i < arr.length; i += 2){
        o[arr[i]] = arr[i+1];
    }
    return o
}

module.exports = CreateObject;
