//2、创建服务器，启动服务器，当有浏览器有请求发送过来时，识别url

function start(){
    http.createServer().listen(8888);
    console.log("服务器已经创建好了！");

}

exports.start=start;
