# see https://github.com/node-fetch/node-fetch

node-fetch is used here for GET, POST, PUT requests

# MICROSERVICES managed with pm2

npm install -g pm2

pm2 start api.js -i 2
pm2 start reservations.js -i 2
pm2 start show.js -i 2

pm2 list

Execute in one console:
pm2 monit
or
pm2 logs

Open 2nd console and check logs after executing such linux (WSL) commands
curl http://localhost:3000  
or
via postman

Response body =
[
{
"_id": "5b805a00297ae6047030f2e0",
"name": "Rock Concert",
"houseSize": 100,
"reserved": 25
},
{
"_id": "5b805a570cee1505a52bc75d",
"name": "Shakespeare Play",
"houseSize": 50,
"reserved": 0
},
{
"_id": "5b805a790cee1505a52bc75e",
"name": "Monster Truck Rally",
"houseSize": 500,
"reserved": 500
}
]

Get first id from previous result= "5b805a00297ae6047030f2e0"

curl for linux:
curl http://localhost:3000/reserve -X POST -d "name=Eve&count=5&showID=5b805a00297ae6047030f2e0"
or
curl --location --request POST 'http://localhost:3000/reserve' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=Eve' \
--data-urlencode 'count=5' \
--data-urlencode 'showID=5b805a00297ae6047030f2e0'

or via postman (for windows)
POST /reserve HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
name=Eve&count=5&showID=5b805a00297ae6047030f2e0

Response body =
{
"success": true,
"showID": "5b805a00297ae6047030f2e0",
"name": "Eve",
"guests": 5
}
