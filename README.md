# ttl-testme Web Application (SUT)#

This app was created as Sytem Under Test (SUT) for Software Test Training. 

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
* Run ``` npm init ```
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

	*	ACCESS_TOKEN_SECRET=AddYourSecretTokenHere
	*	REFRESH_TOKEN_SECRET=AddYourRefreshTokenHere
	*   RESET_TOKEN_SECRET=AddYourResetTokenHere
	*	RESET_URL=<your app url>/reset _For example_ www.ttl-tesme.com/reset_
	*	SMTP_HOST=<Your SMTP Server> _As an SMTP Server testme Application uses ```Mail Catcher``` to simulate SMTP Server. You may change settings in ./mail-server.js and ./routes/user.js -> //SEND EMAIL_
	
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
We add **localhost:5000** as main **URL**. Change it according to your case.

*	__register user:__	```localhost:5000/api/users/register```
		
		```
		curl --location --request POST 'localhost:5000/api/users/register' \
		--header 'Content-Type: application/x-www-form-urlencoded' \
		--data-urlencode 'first_name=peter' \
		--data-urlencode 'last_name=lessen' \
		--data-urlencode 'email=w@t' \
		--data-urlencode 'password=12345'
		
		```

### FRONTEND DEV REPO  ###

* Repo owner or admin
* Other community or team contact

### FAKE SMTP SERVER (MAIL CATCHER) ###