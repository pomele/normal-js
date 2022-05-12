// 防抖
function throttle(fn, wait) {
    var timer = null
    return function() {
        var context = this
        var arg = arguments
        if(timer) {
            clearTimeout(timer)
            timer = null
        } 
        timer = setTimeout(() => {
            fn.apply(context, arg)
        }, wait)
    }
}

// 节流
var debounce = function(fn, wait) {
    var timer = null
    return function() {
        var context = this
        var arg = arguments
        if(timer) {
            return
        } 
        timer = setTimeout(() => {
            fn.apply(context, arg)
            timer = null
        }, wait)
    }
}