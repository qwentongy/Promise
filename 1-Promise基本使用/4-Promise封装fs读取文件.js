// // 固定只返回文件数据或者错误写法
// function minReadFile(path) {
//     return new Promise((resolve,reject) => {
//         require('fs').readFile(path,(err,data) => {
//             if(err) reject(err)
//             resolve(data)
//         })
//     }).then(
//         value => console.log(value.toString()),
//         reason => console.log(reason)
//     )
// }

// minReadFile('./resource/context.txt')



// 获取数据并且可以自己操作成功失败回调
function minReadFile(path) {
    return new Promise((resolve,reject) => {
        require('fs').readFile(path,(err,data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
}

minReadFile('./resource/context.txt').then(
    value => console.log(value.toString()),
    reason => console.log(reason)
)