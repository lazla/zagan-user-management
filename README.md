# ZUM API

### API ENDPOINT : https://zagan-user-management.herokuapp.com/

#### PROVIDES BUILT IN ENCRYPTION : CLIENT SIDE ENCRYPTION OF USER DATA IS NOT REQUIRED. 

### USAGE
* User Registration : https://zagan-user-management.herokuapp.com/new
* List of all users : https://zagan-user-management.herokuapp.com/users
* Find user with username : https://zagan-user-management.herokuapp.com/users/{username}

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
#### Thats it. New user has been registered in the system.

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
****
### Under Development
****
