// 导入 http 模块
const http = require('http')

// 创建服务器
const server = http.createServer()

// 监听服务器
// req：客户端请求相关的数据或属性
//      req.url：获取请求地址
//      req.method：获取请求方式
//      req.headers：获取请求报文
// res.writedHead(parms1, parms2): 设置响应报文
// 		parms1: 设置响应头中的 http状态码, Number
// 		parms2: 设置响应头中的头部字段, object
// 	注意：res.writedHead() 需要在 res.end() 之前调用才有效
server.on('request',function(req,res) {
    const fs = require('fs')

    fs.readFile('./resource/context.txt',(err,data) => {
        if(err) throw err
        res.setHeader('Access-Control-Allow-Origin','*')
        res.end(data.toString())
        console.log(req.url);
        console.log(req.method);
        console.log(req.headers);
    })

})
// 启动服务器
server.listen(8080,function() {
    console.log('server running at http://127.0.0.1:8080')
})
