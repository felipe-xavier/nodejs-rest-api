# nodejs-rest-api

> A Nodejs REST-API server

## About

This project implements two REST services: Users and Posts. You can create and authenticate a User as well as create 
 Posts. It uses the [Feathers](http://feathersjs.com), an open source web framework for building modern API and real-time applications.

## Getting Started

### Using the host environment

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [yarn](https://yarnpkg.com/) installed.
2. Install your dependencies

    ```
    cd path/to/nodejs-rest-api
    yarn install
    ```
3. Rename and add your environment variables to the file .env. You can use the values pre-set for testing purposes.
    ```
    cp .env.sample .env
    cat .env
    ```  
    ```
    SECRET_KEY=CHANGE-ME
    SERVER_PORT=3030
    SERVER_PORT_TEST=3031
    SERVER_URL=localhost
    SERVER_DB=sqlite://nodejs-rest-api.sqlite
    SERVER_DB_TEST=sqlite://nodejs-rest-api-test.sqlite
    ```
4. Test your app

    ```
    yarn test
    ```

5. Start your app

    ```
    yarn start
    ```
   
### Using Docker

1. Make sure you have [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed.

2. Install, test and start the App
    ```
    cd path/to/nodejs-rest-api
    docker-compose up -d
    ```
3. You can also test your app directly
   ```
   docker exec -it nodejs-rest-api yarn test
   ```

#### Once succeeded, access http://localhost:3030.

## API Endpoints
### Users
#### Try to create a User through a POST request:

```
POST http://localhost:3030/users
```
    
Payload:

```json
{ 
   "username":"newuser",
   "password":"mypassword"
}
```
Response:

```json
{ 
  "username":"newuser",
  "id": <UUID>,
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
  "username": "newuser",
  "password": "mypassword",
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
    "username": "newuser"
  }
}
```

#### You can get a User through a GET request:
```
GET http://localhost:3030/users/{uuid}
```
```json
{ 
  "username":"newuser",
  "id": <UUID>,
}
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
GET http://localhost:3030/posts/$limit={N}
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
  ]
}
```

The $limit param lets you set the number of posts to be returned.

The returned list is in the descending order by createdAt field.

#### Get a Post using a GET request:
```
GET http://localhost:3030/posts/{uuid}
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
DELETE http://localhost:3030/posts/{uuid}
```
Header:
```
Authorization: <JWT-Token>
```
