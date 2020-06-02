# Scaling database

# LocalStorage and pm2

localstorage: a drop-in substitute for the browser native localStorage API that runs on node.js.
Fully implements the localStorage specfication including:
All methods in the localStorage spec interface including:

- length
- setItem(key, value)
- getItem(key)
- removeItem(key)
- key(n)
- clear()
  Serializes to disk in the location specified during instantiation
  next: see https://www.npmjs.com/package/node-localstorage

pm2 start app.js -i 3
pm2 monit
http://localhost:3000/
REFRESH several times URL

- the request counter file is created in data folder
- the request counter value is incremented each time browser is refreshed
- the request counter is sent back from request
- pm2 monit: scroll to process that is used.. Logs appears here

# horizontal partitioning: dbA + dbB (see db.js)

npm install
node ./index.js

- see logs..
- the cats are created in data-a-m / data-m-z folder
- also test URLs:
  http://localhost:3000/biscuit
  http://localhost:3000/orange_cats
