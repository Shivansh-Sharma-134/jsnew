const http = require('http');
const server= http.createServer((req,res)=>{
if(req.url === '/'){
res.end('first server')
}
if(req.url==='/about'){
    res.end('about of first server')
}
res.end('<h1> No page exists</h1> <a href="/">home</a>')
})
server.listen(5000)