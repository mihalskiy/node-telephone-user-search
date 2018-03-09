#This repo houses code for searc the contacts  (using Sequelize)"

If you dont have install  node-js, please go this link [https://nodejs.org](https://nodejs.org)

#Sequelize Setup

Let's begin by installing Sequelize CLI package. ```npm install -g sequelize-cli```

#Project Setup

1. Use command  ```npm install``` for install dependices
2. Now try running the application by executing ```npm run start:dev```
and visiting [http://localhost:8000](http://localhost:8000). 
You should see {"message":"Welcome to the beginning of nothingness."}
3. Running the migrations to do this, we run the following command:  ```sequelize db:migrate```
4. You can seed your database with this data by running this sequelize-cli command: ```sequelize db:seed:all```



Have fun! smile