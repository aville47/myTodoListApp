# myTodoListApp
Simple Todo list application with Angular frontend and Spring Boot backend using mySQL for storage.

## Backend - Java Spring Boot
Start the backend in your favorite editor or using **mvnw spring-boot:run** from the *backTodoApp* folder. 
It will start on port *8085*.
For the mySQL configuration, create a new database named *todolistapp* in your mySql Workbench and don't forget to add your password in the application.properties files of the resources folder (spring.datasource.password=).

## Frontend - Angular 
Clone the code from this repository. In a command window, type **npm install** from the *frontTodoApp* folder.
This creates a node_modules folder and installs all packages from the package.json file into that folder. 
In the same command window, type **npm start**, the application should then compile and launch in your default browser on port *4200*.
