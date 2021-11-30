function RunCallback(a, b, cb) {
    let res = a + b
    return cb(res)
}
function cb(a){
    return a
}

module.exports = RunCallback;
