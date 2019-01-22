&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Logo](https://github.com/lazla/zagan-user-management/blob/master/public/zum.png)

### API ENDPOINT : https://zagan-user-management.herokuapp.com/

#### PROVIDES BUILT IN ENCRYPTION : CLIENT SIDE ENCRYPTION OF USER DATA IS NOT REQUIRED. 

### USAGE
* User Registration : https://zagan-user-management.herokuapp.com/new (POST)
* Find user with username : https://zagan-user-management.herokuapp.com/users/{username} (GET)
* Update user data : https://zagan-user-management.herokuapp.com/users/{username} (PATCH)
* Delete user : https://zagan-user-management.herokuapp.com/users/{username} (DELETE)
* Verify user credentials : https://zagan-user-management.herokuapp.com/verify (POST)

### EXAMPLES

### REGISTRATION
```json
{
	"username" : "zaygo",
	"password" : "Mypass123",
	"name" : "Zaygo Zi",
	"email" : "zaygo@email.com",
	"phone" : 9876543210,
	"location" : "NY, USA",
	"mac" : "00:1B:44:11:3A:B7"
}
```
#### Then POST the json data to https://zagan-user-management.herokuapp.com/new
#### New user will be registered in the system and a copy of the user record will be sent back as a response
```json
{
    "_id": "5c46f5279b0eaa414470ef46",
    "username": "zaygo",
    "password": "$2a$10$IdYChCpiVqirzPs/S8dAJu/7vaB5IvjDC0JkTYKaKDkvP4ipXsULS",
    "name": "Zaygo Zi",
    "email": "zaygo@email.com",
    "phone": 9876543210,
    "location": "NY, USA",
    "mac": "00:1B:44:11:3A:B7",
    "__v": 0
}
```

### FIND USER
#### Just send a GET request similar to https://zagan-user-management.herokuapp.com/users/{username} where {username} is the unique username of the user.
#### Server will return the user details in json

### DELETE USER
#### Send a DELETE request similar to https://zagan-user-management.herokuapp.com/users/{username} where {username} is the unique username of the user
#### The user will be removed and a copy of the user data will be sent back

### UPDATE USER DATA
#### Send a PATCH request similar to https://zagan-user-management.herokuapp.com/users/{username} where {username} is the unique username of the user along with the data you want to update
#### Refer this example
```json
{
    	"_id": "5c46f5279b0eaa414470ef46",
    	"username": "zaygo",
    	"password": "$2a$10$IdYChCpiVqirzPs/S8dAJu/7vaB5IvjDC0JkTYKaKDkvP4ipXsULS",
    	"name": "Zaygo Zi",
    	"email": "zaygo@email.com",
    	"phone": 9876543210,
    	"location": "NY, USA",
    	"mac": "00:1B:44:11:3A:B7",
    	"__v": 0
}
```
#### Say you want to update the user email. So send a PATCH request with the new email address
```json
{
	"email" : "mymail@email.com"
}
```
#### User data will be updated & a copy of the updated data will be sent back
```json
{
    	"_id": "5c46f5279b0eaa414470ef46",
    	"username": "zaygo",
    	"password": "$2a$10$IdYChCpiVqirzPs/S8dAJu/7vaB5IvjDC0JkTYKaKDkvP4ipXsULS",
    	"name": "Zaygo Zi",
    	"email": "mymail@email.com",
    	"phone": 9876543210,
    	"location": "NY, USA",
    	"mac": "00:1B:44:11:3A:B7",
    	"__v": 0
}
```
#### Pro Tip : The api can be called by a function whenever an user attribute changes. Example : A function call is triggered whenever the user changes location. Hence the location is updated in real time as the user moves.

### USER AUTHENTICATION
#### Send a POST request to https://zagan-user-management.herokuapp.com/verify with the username and password entered by the user
```json
{
	"username" : "rahul",
	"password" : "hispass"
}
```
#### The server will return true if the credentials are verified else it will return false.
```json
{
    	"verified": true
}
```

#### STATUS CODES USED IN SERVER RESPONSES
* 200 : All Good
* 400 : Bad Request
* 404 : User Not Found
