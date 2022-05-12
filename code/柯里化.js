var multiply = function(...args) {
    return args.reduce((total, arg) => total + arg)
}

var curring = function(fn) {
    var argsArr = []
    closure = function(...args) {
        if(args.length > 0) {
            argsArr = argsArr.concat(...args)
            // 此处返回closure，因为要一直掉用函数
            return closure
        }
        return fn(...argsArr)
    }
    return closure
}

var curMul = curring(multiply)
console.log(curMul(1,2,3)(4))