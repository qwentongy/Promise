const p = new Promise((resolve,reject) => {
    // 1.创建对象
    const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const xhr = new XMLHttpRequest();
// 2.初始化
xhr.open('post','http://localhost:3000');
// let data = {username: 'admin', password: '111111'}
// xhr.open('Get','http://gmall-h5-api.atguigu.cn');
// 3.发送
xhr.send();
// 4.处理响应结果
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        // 判断响应状态码
        if(xhr.status >= 200 && xhr.status < 300) {
            // 控制台输出响应体
            // console.log(xhr.response);
            resolve(xhr.response)
        } else {
            // 控制台输出响应码
            // console.log(xhr.status);
            reject(xhr.status)
        }
    }
}
})

p.then(
    value => console.log(value.data),
    reason => console.log(reason)
)