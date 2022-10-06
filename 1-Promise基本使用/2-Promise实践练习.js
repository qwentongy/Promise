// // 创建fs
// const fs = require('fs')

// fs.writeFile('./resource/context.txt','你好啊', err => {
//     // 如果失败 抛出失败原因
//     if(err) throw err
//     // 若成功则返回data
//     console.log('文件写入成功');
// })

// // 回调函数形式
// fs.readFile('./resource/context.txt', (err,data) => {
//     // 如果失败 抛出失败原因
//     if(err) throw err
//     // 若成功则返回data
//     console.log(data.toString());
// })


// promise 形式
const fs = require('fs')
let p = new Promise((resolve,reject) => {
    fs.readFile('./resource/context.txt', (err,data) => {
        if(err) reject(err)
        resolve(data)
    })
})

p.then(
    value => console.log(value.toString()),
    reason => console.log(reason)
)