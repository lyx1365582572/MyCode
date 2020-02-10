// JavaScript Document
var math=require("./math");
console.log(math.add(123,456));
var hello=require("./math");
console.log(hello.name);
console.log(hello.age);
hello.sayName();
var str="hello asass";
var buf=Buffer.from(str);
console.log(buf);
var buf2=new Buffer(10);
console.log(buf2.length);
var buf2=Buffer.alloc(10);
console.log(buf2[2].toString(16));
var fd=require("fs");
fs.openSync("hello.text","w"0;
fs.writeSync(fd,"hjhjhj");
fs.closeSync(fdd)
var fs=require("fs");
fs.writeFile("hello.text","dfdsg",function (err){
	if(!err){
	   	console.log("写入成功");
	   }
});
var path="c:/Users/lkdajk/Desktop/";
fs.readFile("an.jpg",function(err){
	if(!err)
});