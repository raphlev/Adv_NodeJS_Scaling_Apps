const http = require('http')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  console.log('this is the master process: ', process.pid)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', worker => {
    console.log(`worker process ${process.pid} had died`) // Use back-tick to render the litteral value
    console.log(`only ${Object.keys(cluster.workers).length} remaining`) // Use back-tick to render the litteral value
    console.log('starting new worker after 5s..')
    setTimeout(() => {
      cluster.fork()
      console.log(`new worker started..`)
    }, 5000);


  })

} else {
  console.log(`started a worker at ${process.pid}`)
  http.createServer((req, res) => {
    res.end(`process: ${process.pid}`)
    if (req.url === '/kill') {
      process.exit()
    } else if (req.url === '/') {
      console.log(`serving form ${process.pid}`)
    }
  }).listen(3000)
}
