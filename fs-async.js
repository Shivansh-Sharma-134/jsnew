const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
        }
        const second=result;
        writeFile('./content/async.txt','result is: '+first+second,(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log(result)
        })
    })
})