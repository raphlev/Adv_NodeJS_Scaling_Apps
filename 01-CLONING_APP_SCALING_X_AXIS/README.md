CLONING

# npm install global pm2 and loadtest packages

npm install -g pm2
npm install -g loadtest

# Fork Process using Random request result

node 01-index_fork.js

http://localhost:3001/
http://localhost:3002/
http://localhost:3003/

Compare 3 tabs
Refresh browser..

# Using a cluster module and load test the app with simultaneous network connexions

node ./02-index_cluster.js

See "number of CPUs detected" value: example = 8
Execute loadtest using --concurrency mode with "number of CPUs detected" value
-n, --maxRequests <ARG1> Number of requests to perform
-c, --concurrency <ARG1> Number of requests to make
see other options : loadtest

300 requests: it may not be enough to see the different cluster nodes in action
loadtest -c 8 -n 300 http://localhost:3000/
10000 requests: we can see the different worker running..
loadtest -c 8 -n 10000 http://localhost:3000/

# Architecture zero downtime using cluster and worker (fork) nodes

node ./03-index_cluster.js
http://localhost:3000/
see logs
http://localhost:3000/kill
see logs

# Working with Cluster with pm2 to scale more quickly

Force 3 nodes:
pm2 start 02-app.js -i 3
pm2 list
http://localhost:3000/
++ REFRESH BROWSER
pm2 stop 02-app.js
pm2 delete 02-app.js

pm2: loadbalancer with network CPU: it will create as many nodes as CPU - 1 (to keep Master node)
-i --instances <number> launch [number] instances (for networked app)(load balanced)

pm2 start 02-app.js -i -1
loadtest -c 7 -n 200000 http://localhost:3000/
In another terminal:
pm2 list
pm2 logs

loadtest -c 7 -n 300000 http://localhost:3000/
In another terminal:
pm2 monit
scroll to cluster that is running to see the logs in Monit

Update 02-app.js >
const options = [
"Do it",
"Don't do it"
]
pm2 reload 02-app
