//1、index.js 启动文件 启动程序的入口

var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");

var handle={}
handle["/"]=requestHandlers.start;
handle["/index"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;

// http://localhost:8888/
// http://localhost:8888/index
// http://localhost:8888/upload
// http://localhost:8888/show

server.start();