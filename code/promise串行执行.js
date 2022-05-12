const handle = function(tasks) {
    let sequence = Promise.resolve()
    const arr = []
    tasks.forEach(item => {
        sequence = sequence.then(item).then(res => {
            arr.push(res)
            // 为什么需要return
            return arr
        }, err => {
            arr.push(null)
            return arr
        })
    })
    // 为什么返回sequence
    return sequence
}


const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

handle([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});