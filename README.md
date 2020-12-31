# ttl-testme Web Application (SUT)#

This app was created as Sytem Under Test (SUT) for Software Test Training. **Currently app is running HEROKU, [click to here](https://ttl-testme.herokuapp.com/) to access current version (Please wait 15sn. to waking up)**

### OVERVIEW ###

This application can be used various training related to Testing. It is all about fictitious media company, Chinook Media Enterprise. It is created according to system description you can check system description [here](#)
Main Goal is creating web application near to real word modern web application and interact througth to training. Some parts of the application is not completed or some parts is left with some bugs on purpose.

Main Feature:

* Single page web application. It is written Vue.js on the front and Node.js on the back
* Users/Testers can interact GUI and in the future can be extented for Mobile GUI (Hybrid or native both are possible.) 
* It provides main assets for API testing/interaction as well as DOM maniplation and GUI.
* It consists of three main parts:

	* Home Page (typicall landing page)
	* Tasks/Todo Page, only logged in user can use and each user can see his own tasks.
	* Pokemon Catalog (Assuming Chinook will sell Pokemon video game soon and use this page for advertisement)
	
* Application provides main authentication features (SignUp - SignIn - LogOut) with JasonWebToken
* It use SQLite3 as DB and it is perfect for minimalist application. 

### HOW DO I GET SET UP? ###

* Clone the repository to your VM Server.
* Run ``` npm install ```
* This repository is ready for production. It contains static (already built) files as well as whole backend. Front static files are inside public folder.
* Current structure is ready to deploy **HEROKU** but you may deploy somewhere else, for example to a VM you can deploy. Before deploy to VM change below lines.

	*	Go to ./server.js and change the below lines and remove if condition;
	
#### Remove If Block ####
	
```	
		//Handle Production
		if (process.env.NODE_ENV === "production") {
		  // Static Folder
		  app.use(express.static(__dirname + "/public/"));

		  //Handle SPA
		  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
		}
```


#### After change the lines should be ####
		
	
```	
		//Handle Production
		// Static Folder
		app.use(express.static(__dirname + "/public/"));

		//Handle SPA
		app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));

```

#### And remove this part or comment out ####

```
		// GET MAIN
		app.get("/", function (req, res) {
		  res.send("Welcome to Chinook Enterprise");
		});
```
NOTE: For development, keep these lines as they are.

	
* Application runs on specific **PORT** if you set up your envirinmental variable (process.env.PORT), it will start PORT 5000 otherwise. You may change this settings in ./server.js file.
* Create your ```.env``` file and add below variable inside it.

	*	ACCESS_TOKEN_SECRET=<Add Your Secret Token Here>
	*	REFRESH_TOKEN_SECRET=<Add Your Refresh Token Here>
	*   RESET_TOKEN_SECRET=<Add Your Reset Token Here>
	*	RESET_URL=<your app url>/reset _(For example_ www.example.com/reset)_
	*	SMTP_HOST=<Your SMTP Server> _(As an SMTP Server testme Application uses ```Mail Catcher``` to simulate SMTP Server. You may change settings in ./mail-server.js and ./routes/user.js -> //SEND EMAIL)_
	
* Run ```npm run start``` application will start on PORT 5000, when you go to ```http://localhost:500``` you should see index.html (This is normally under ```./public folder```) you may proxy via nginx oe Apache web server and redirect to your domain.
	

### API CALLS ###

###### Endpoints ####
* For API end point starts with ```/api```. <your URL>/api.
* Currently there are two main endpoints
	*	/users -> _<your FQD>/api/users_
	*	/todos -> _<your FQD>/api/todos_
* Source codes belong to these calls can be found under ./routes folder (user.js, todos.js)
* You may find example of API calls in the ```./request.rest``` file.

##### Possbile calls: ####
We add **localhost:5000** as main **URL**. Change it according to your case. Below after some calls you will get some tokens. Normally application does not reveal some of the tokens but for testing purposes you will get all the tokens after successful calls.

*	__register user:__	_localhost:5000/api/users/register_
		
		```
		curl --location --request POST 'localhost:5000/api/users/register' \
		--header 'Content-Type: application/x-www-form-urlencoded' \
		--data-urlencode 'first_name=peter' \
		--data-urlencode 'last_name=lessen' \
		--data-urlencode 'email=w@t' \
		--data-urlencode 'password=12345'
		
		```
		
*	__login user:__	_localhost:5000/api/users/login_

		´´´
		curl -H --location --request POST 'localhost:5000/api/users/login' \
		--header 'Content-Type: application/x-www-form-urlencoded' \
		--data-urlencode 'email=w@y' \
		--data-urlencode 'password=aaa'
		
		
**P.S.:** When you successfully login, you will get token, use this token for other calls when necessary. Only Reset Password call needs reset token, other calls use this login token.
		´´´
	
*	__get users:__ _localhost:5000/api/users_

		```
		curl --location --request GET 'localhost:5000/api/users' \
		--header 'Authorization: Bearer <Your Login Token Here>'
		```
		
*	__get user by token:__ _localhost:5000/api/users/user_

		```
		curl --location --request GET 'localhost:5000/api/users/user' \
		--header 'Authorization: Bearer <Your Login Token Here>'
		´´´
		
*	__forgot password:__ _localhost:5000/api/users/forgot_

		```
		curl --location --request POST 'localhost:5000/api/users/forgot' \
		--header 'Content-Type: application/x-www-form-urlencoded' \
		--data-urlencode 'email=w@y'
		
**P.S.:** When you successfully send your forgot request, you will get reset-token, you can use this token only for password reset
		```

*	__reset password:__ _localhost:5000/api/users/reset_

		```
		curl --location --request POST 'localhost:5000/api/users/reset' \
		--header 'Content-Type: application/x-www-form-urlencoded' \
		--data-urlencode 'password=456' \
		--data-urlencode 'password_confirm=456' \
		--data-urlencode 'token=<Your password-reset token>'
		
**P.S.:** If you use unregistered email during forgot password call, you will get an error as _"your email is not registered"_
		```

* * *

*	__create todo:__ _localhost:5000/api/todos/create_

		```
		curl --location --request POST 'localhost:5000/api/todos/create' \
		--header 'Authorization: Bearer <Your Login Token Here>' \
		--header 'Content-Type: application/x-www-form-urlencoded' \
		--data-urlencode 'todo=goto shopping'
		```

*	__get your todos:__ _localhost:5000/api/todos_

		```
		curl --location --request GET 'localhost:5000/api/todos' \
		--header 'Authorization: Bearer <Your Login Token Here>'

		```

*	__delete your todo:__ _localhost:5000/api/todos/<todo_id>_

		```
		curl --location --request DELETE 'localhost:5000/api/todos/11' \
		--header 'Authorization: Bearer <Your Login Token Here>'
		
		```

*	__change your todo status:__ _localhost:5000/api/todos/<todo_id>_

		```
		curl --location --request PATCH 'localhost:5000/api/todos/6' \
		--header 'Authorization: Bearer <Your Login Token Here>' \
		--header 'Content-Type: application/x-www-form-urlencoded' \
		--data-urlencode 'todoStatus=1'
		
**P.S.:** you will get only todos belong to owner of token, not all todos, you can delete only your todo if given tidi_id is one of your todos, same is valid for update"_		
		```


### FRONTEND DEV REPO  ###

* FrontEnd is written in Vue.js and you can find development repo [here](https://bitbucket.org/ttlbe/testme-client/src/master/)
* Clone the repo
* Run ``` npm install ```
* Run ``` npm run serve ```

### FAKE SMTP SERVER (MAIL CATCHER) ###
MailCatcher runs a super simple SMTP server which catches any message sent to it to display in a web interface. When we use **forgot password** API call, it triggers Node.js and it deliver message to smtp://<MailCatcher Server>:1025
instead of our default SMTP server, then we can check out http://<MailCatcher Server>:1080 to see the mail that's arrived so far. We are using same host to distrubute and collect emails. Our application use http://167.86.107.223/
as a MAilCatcher SMTP Server. To see SMTP server in action go to our [instance](http://167.86.107.223:1080/)

![Mail Catcher](https://user-images.githubusercontent.com/40534340/103385038-184ddc00-4af9-11eb-8d63-a49a8aafba3f.PNG)