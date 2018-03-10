# This repo houses code for search the contacts  (using Sequelize)"

If you dont have install  node-js, please go this link [https://nodejs.org](https://nodejs.org)

# Sequelize Setup

Let's begin by installing Sequelize CLI package. ```npm install -g sequelize-cli```

# Project Setup

1. Use command  ```npm install``` for install dependices
2. Now try running the application by executing ```npm run start:dev```
and visiting [http://localhost:8000](http://localhost:8000). 
You should see {"message":"Welcome to the beginning of nothingness."}
3. Running the migrations to do this, we run the following command:  ```sequelize db:migrate```
4. You can seed your database with this data by running this sequelize-cli command: ```sequelize db:seed:all```

#### under run project need use [postmean](https://www.getpostman.com/apps) or another application


###### for get contacts all names the saved under one phone number, use example query [127.0.0.1:8000/contact?phoneNumber=94](127.0.0.1:8000/contact?phoneNumber=94)
![alt text](screenshots/get_scr.png?raw=true "get contacts all names")


###### for save array contacts use post query which is listed below
![alt text](screenshots/post.png "save array contacts").


###### transfer request, name or last name or company and get the most matching phone numbers. Example query [http://localhost:8000/contacts?phoneNumber=94&company=o](http://localhost:8000/contacts?phoneNumber=94&company=o)
![alt text](screenshots/query_scr.png "save array contacts").


###### Get a list of phone numbers with information (name, surname, company), by key. Example query [http://localhost:8000/information](http://localhost:8000/information)
![alt text](screenshots/phone.png "Get a list of phone numbers").






Have fun! smile