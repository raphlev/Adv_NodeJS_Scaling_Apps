const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

/*if (cluster.isMaster) {
  console.log('this is the master process: ', process.pid); // shows id1
  cluster.fork();
  cluster.fork();
  cluster.fork();

} else {
  console.log('this is the worker process: ', process.pid); // shows id2 + id3 + id4
}*/


if (cluster.isMaster) {
  console.log('this is the master cluster process: ', process.pid);
  console.log('master node does not listen to app, it just launch the cluster nodes (fork) as per CPU numbers found ! ', process.pid);
  console.log('number of CPUs detected: ', numCPUs);
  for (let i = 0; i < numCPUs; i++) {
    console.log('fork N°: ', i);
    cluster.fork();
  }
} else {
  console.log('this is the worker (cluster node) forked process that listens to localhost:3000: ', process.pid);
  http.createServer((req, res) => {
    const message = `worker process is: ${process.pid}...`;
    console.log(message);
    res.end(message);
  }).listen(3000);
}
