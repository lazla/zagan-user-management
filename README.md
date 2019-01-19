# ZUM API

### API ENDPOINT : https://zagan-user-management.herokuapp.com/

#### PROVIDES BUILT IN ENCRYPTION : CLIENT SIDE ENCRYPTION OF USER DATA IS NOT REQUIRED. 

### USAGE
* User Registration : https://zagan-user-management.herokuapp.com/new
* List of all users : https://zagan-user-management.herokuapp.com/users
* Find user with username : https://zagan-user-management.herokuapp.com/users/{username}
* Verify user credentials : https://zagan-user-management.herokuapp.com/verify

### EXAMPLES

### REGISTRATION
```json
{
  "username" : "name",
  "password" : "pass",
  "email" : "name@mail.com",
  "phone" : 9876543210
 }
```
#### Then post the json data to https://zagan-user-management.herokuapp.com/new
#### Thats it. New user has been registered in the system

### FIND USER
#### Just send a GET request similar to https://zagan-user-management.herokuapp.com/users/name where name is the username
#### Server will return the details in json
```json
{
  "username" : "name",
  "password" : "pass",
  "email" : "name@mail.com",
  "phone" : 9876543210
 }
```

### USER AUTHENTICATION
#### Send a post request to https://zagan-user-management.herokuapp.com/verify with the username and password entered by the user
```json
{
	"username" : "rahul",
	"password" : "hispass"
}
```
#### The server will return true if the credentials are verified else it will return false. If the user is not found, '404 user not found' will be returned
```json
{
    "verified": true
}
```
