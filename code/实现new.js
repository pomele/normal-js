function newOperator(ctor) {
    if(typeof ctor !== 'function') {

    }
    newOperator.target = ctor
    var newObj = Object.create(ctor.prototype)
    var args = [].slice.call(arguments, 1)
    var result = ctor.apply(newObj, args)
    var isFunction = typeof result === 'function'
    var isObject = typeof result === 'object' && result !== null
    if(isFunction || isObject) {
        return result
    }
    return newObj
}