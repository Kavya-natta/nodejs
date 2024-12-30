// console.log('Hello SASI');
// console.log('Hello SASI');
// console.log(global)

// const os=require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);

// const path=require('path');
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

// const math=require('./math');
// console.log(math.addition(4,5));
// console.log(math.subtraction(4,5));
// console.log(math.multiplication(4,5));
// console.log(math.division(4,5));
// console.log(math.remainder(4,5));

// const{addition,multiplication}=require('./math');
// console.log(addition(22,77));
// console.log(multiplication(22,77));

const http=require('http');
http.createServer((req,res)=>{
    res.write('Hi,we are practising code');
    res.end();
    console.log('server is running...');
}).listen(8080)