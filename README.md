# User-Authentication - Bycrypt Js

This Express server uses bycyrpt js to hash and compare passwords.
Users are able to use POSTMAN to retrieve all users, register a dummy user and login the user using bycyrpt.


### Retrieve all users
  GET  http://localhost:5000/users
  
### Register New User
  POST http://localhost:5000/users
  
### Login Existing User
  POST http://localhost:5000/login


### Usage


#### install dependencies
```sh
$ npm install
```


### Run server locally
```sh
 > node serve.js
 > nodemon
#  http://localhost:5000
```

