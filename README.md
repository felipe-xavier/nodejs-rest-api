# nodejs-rest-api

> A Nodejs REST-API server

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

### Using the host environment

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [yarn](https://yarnpkg.com/) installed.
2. Install your dependencies

    ```
    cd path/to/nodejs-rest-api
    yarn install
    ```

3. Start your app

    ```
    yarn start
    ```
   
### Using Docker

1. Make sure you have [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed.

2. Build, test and start the server:
```
$ docker-compose up -d
```

3. Access http://localhost:3030

## Testing

Simply run `yarn test` and all your tests in the `test/` directory will be run.

## API Endpoints
### Users
#### Try to create a User through a POST request:
```
POST http://localhost:3030/users
```
Payload:
```json
{ 
   "username":"user1",
   "password":"pass"
}
```
Response:
```json
{ 
  "username":"user1",
  "id": <uuid>,
  "accessToken": <JWT-Token>
}
```

#### Authenticate a User sending a POST request:
```
POST http://localhost:3030/users/auth
```
Payload:
```json
{
  "username": "user1",
  "password": "pass",
  "strategy": "local"
}
```
Response:
```json

{
  "accessToken": <JWT-Token>,
  "authentication": {
    "strategy": "local"
  },
  "user": {
    "id": <UUID>,
    "username": "felipe"
  }
}
```

#### You can get a User through a GET request:
```
GET http://localhost:3030/users/{uuid}
```

#### Remove a User requesting DELETE

```
DELETE http://localhost:3030/users/{uuid}
```
Header:
```
Authorization: <JWT-Token>
```
## Posts
#### Create a Post through a POST request:
```
POST http://localhost:3030/posts
```
Payload:
```json
{
  "title": "first post",
  "body": "blah blah blah!"
}
```
Header:
```
Authorization: <JWT-Token>
```

Response:
```json
{
  "author_id": <user-UUID>,
  "title": "first post",
  "body": "blah blah blah!",
  "id": <UUID>,
  "updatedAt": <Timestamp>,
  "createdAt": <Timestamp>
}
```

#### Get all Posts through a GET request:
```
GET http://localhost:3030/posts/$limit=N
```

Response:
```json
{
  "total": 1,
  "limit": N,
  "skip": 0,
  "data": [
  {
    "author_id": <user-UUID>,
    "title": "first post",
    "body": "blah blah blah!",
    "id": <UUID>,
    "updatedAt": <Timestamp>,
    "createdAt": <Timestamp>
  }
}
```

The $limit param lets you set the number of posts to be returned.

The returned list is in the descending order by createdAt field.

#### Get a Post using a GET request:
```
GET http://localhost:3030/posts/<uuid>
```

Response:
```json
{
    "author_id": <user-UUID>,
    "title": "first post",
    "body": "blah blah blah!",
    "id": <UUID>,
    "updatedAt": <Timestamp>,
    "createdAt": <Timestamp>
}
```

#### Delete a Post:
```
DELETE http://localhost:3030/posts/<uuid>
```
Header:
```
Authorization: <JWT-Token>
```
