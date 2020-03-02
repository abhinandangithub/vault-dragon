# REST API example application

This is a example of a REST API.

The app is deployed to Microsoft Azure App Service.
Microsoft Azure Cosmos DB is used as the database for this API.

## Install

    npm install

## Run the app

    npm start

## Run the tests

    npm run test

# REST API

The REST API to the example app is described below.

## Get the latest value of a key

### Request

`GET /api/key-values/id`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/key-values/key1

### Response

    HTTP/1.1 200 OK
    Date: Fri, 28 Feb 2020 20:10:37 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 147

    {
		"key": "key1",
		"value": "value120"
	}

## Create a new key value pair

### Request

`POST /api/key-values/`

    curl -i -H 'Accept: application/json' -H 'time: 1582907697' -d '{"key5": "value400"}' http://localhost:3000/api/key-values/

### Response

    HTTP/1.1 201 Created
    Date: Fri, 28 Feb 2020 20:10:37 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /api/key-values/key5
    Content-Length: 36

    {
		"key": "key5",
		"value": "value400"
	}

## Get a specific key using timestamp

### Request

`GET /api/key-values/id`

    curl -i -H 'Accept: application/json' http://localhost:3000/key-values/key1?timestamp=1582907697

### Response

    HTTP/1.1 200 OK
    Date: Fri, 28 Feb 2020 20:10:37 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {"key": "key1","value": "value120"}
	
## Deploy
	
	The app is zipped and deployed to Microsoft Azure App Service using ZipDeploy