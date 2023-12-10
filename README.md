# delicake - Cake Shop 🧁

### 👋 Hi Fellas 😉
Welcome to our website. The purpose of creating this website is to fulfill the Capstone Project for Software Engineering by RevoU x MSIB Kampus Merdeka. This is the server-side of the website anyway we use JavaScript as the language. This server-side will handle the database, so between the front-end and back-end are integrated.🔥🔥🔥



### 🚀 Tech Used 🚀
The technologies used for develop this backend are;
**NPM** (including the dependencies), **Node.js**, **Expess.js**, **MySQL Workbench**, **railway**



### 💡 Depencencies 
~ **cors** : CORS (Cross-Origin Resource Sharing) middleware. Enables Cross-Origin Resource Sharing for secure communication between different domains.

~ **dotenv** : Loads environment variables from a file, facilitating configuration management.

~ **express** :  Minimalistic Node.js web application framework, simplifying HTTP handling, routing, and middleware integration.

~ **mysql2** : MySQL database client for Node.js, providing an interface for easy database interactions.

~ **nodemon** : Monitors code changes and automatically restarts the server during development.

~ **sequelize** : Promise-based Node.js ORM for relational databases, simplifying database operations and modeling.

🕹️ Don't forget to install your dependencies by running your terminal by give a command **npm install (your dependencies name)** or just simply **npm i** e.g. **npm install express** you can also install multiple dependencies at the same time e.g. **npm i cors express sequelize**.


### ⚡ Installation
Make sure you are already set up a Node.js backend project and install npm packages, you'll typically follow these steps:
- Open a terminal or command prompt

- Navigate to the directory where you want to create your backend project

- Run the following commands to initialize a new Node.js project: **npm init -y**
This command creates a package.json file with default settings. You can modify this file later to add more details about your project

- In your project directory, run the following command to install Express: **npm install express**

- Create a simple express server, open in your **index.js**

- Run your server: Run the terminal in your code editor e.g. Visual Studio Code with the command **node index** or if you use nodemon you can add **"start": "nodemon index.js",** in your **package.json** the run with **npm start** command


### ⚙️ Configuration
To configure you can set your environtment variables by creating a **.env** file on your root directory. This file is used for store the sensitive variables like your port and password so people won't know it. To make the .env wont commited as you push the project to repository you can create **.gitignore** file and simply add **.env** in it.
Below is the plain example of **.env** variables;

- DB_HOST= your host server it is commonly 127.0.0.1
- DB_USER= your user commonly set up as root
- DB_PASSWORD= your password
- DB_NAME= your database name
- DB_PORT= if you use MySQL as database it is commonly set up as 3306
~ *Don't forget to connect to your database* ~

### 🌸 Set up Endpoint
After set up your server now it's time to set up your endpoint, an endpoint refers to a specific URL or URI (Uniform Resource Identifier) that an application exposes to interact with other software components. 
Some examples of endpoint are;

**Register** => Endpoint: /register Method: POST //will post data to database

**Login** => Endpoint: /login Method: POST // will post data to database

**Logout** => Endpoint: /logout Method: DELETE // will delete your data for login session

**Get product** => Endpoint: /getProduct Method: GET // will get product from front-end to be added to database

**Add product** => Endpoint: /addProduct Method: POST // will add product from back-end side and post them to front-end

**Delete product** => Endpoint: /deleteProduct Method: DELETE // will delete product from back-end side and delete them from client-side

**Edit product/update** => Endpoint: /updateProduct Method: PUT // will update/edit the product from back-end and show them on front-end

~*Additional* **Contact Us** => Endpoint: /contactUs Method: POST // will post data to database 


### 🔄 Integrate
After done with API endpoint we should handle our front-end too so they both can request and response the data by using ***'fetch'* and put the URL of your endpoint beside fetch e.g. **fetch 'http://localhost:3000/getProduct'**


### 🍡 Deploy Express
The next step is to deploy your local to public. You can use **Railway** or **Cyclic** and many others. Remember you can use **Railway** after 90 days starts from the day you made your GitHub account. After you deploy it to public you are no longer needed  to activate cross-platform web server like XAMPP to run your project. After deploying it, don't forget to fetch with the current URL from your deployment


### 🫧 Deploy to GitHub
Deploy your front-end to GitHub pages to see the live web. It's optional to push your back-end too. Keep in mind to organize your work and remote changes it's a good choice to always push on your GitHub. It also can save your works when you are in trouble 😉


### 🙆‍♀️ Regards 🫶
Thank you for visiting our repository and checking on our website. We will make some improvements for our back-end just so the website adding functionality and more realistic. Feel free to reach us!

2023 delicake. All rights reserved to elysanxiety 💖












