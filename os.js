const os = require('os')
console.log(os.userInfo())
console.log(os.uptime())

const current = {
    name: os.userInfo(),
    uptime: os.uptime(),
    freemem: os.freemem(),
}
console.log(current)