/**
 * 1
 */
// setImmediate(() => {
//     console.log('222')
// })
// console.log('111')


/**
 * 2
 */
// var fs = require('fs')
// var path = require('path')
// function someAsyncOperation(callback) {
//     fs.readFile(path.resolve(__dirname, 'read.txt'), callback)
// }
// var timeoutScheduled = Date.now()
// var fileReadTime = 0
// setTimeout(() => {
//     var delay = Date.now() - timeoutScheduled
//     console.log('setTimeOut: ' + delay + "ms has passed since I was scheduled")
//     console.log('fileReadTime: ', fileReadTime - timeoutScheduled)
// }, 10)
// someAsyncOperation(() => {
//     fileReadTime = Date.now()
//     while(Date.now - fileReadTime < 20) {}
// })

/**
 * 3 执行顺序不确定
 */
// setTimeout(function timeout() {
//     console.log('timeout')
// }, 0)
// setImmediate(function immediate() {
//     console.log('immediate')
// })


/**
 * 4
 */
// var fs = require('fs')
// var path = require('path')
// fs.readFile(path.resolve(__dirname, 'read.txt'), () => {
//     setImmediate(function immediate() {
//         console.log('immediate')
//     })
//     setTimeout(function timeout() {
//         console.log('timeout')
//     }, 0)
// })

/**
 * 5process.nextTick()不在event loop的任何阶段执行，而是在各个阶段切换的中间执行，即从一个阶段切换到下一个阶段前执行
 */
var fs = require('fs')
var path = require('path')
fs.readFile(path.resolve(__dirname, 'read.txt'), () => {
    setTimeout(function timeout() {
        console.log('timeout')
    }, 0)
    setImmediate(function immediate() {
        console.log('immediate')
        process.nextTick(() => {
            console.log('nextTick3')
        })
    })
    process.nextTick(() => {
        console.log('nextTick1')
    })
    process.nextTick(() => {
        console.log('nextTick2')
    })
})

nextTick1
nextTick2
immediate
nextTick3
timeout
