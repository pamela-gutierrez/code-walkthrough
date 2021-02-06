## Code-Walkthrough

This is a command line application that allows the user to navigate, create, and update their employee database with only a few clicks. It's a work in progress and some features remain inaccessible but will be updated soon. The database allows for an indefinite number of employees, departmetns, and roles. 

![Alt Text](public/gif/Passport%20Authentication.gif)

## **Built With**
* [GitHub](https://github.com/)
* [JavaScript](https://www.javascript.com/)
* [Passport](http://www.passportjs.org/)
* [Node](https://nodejs.org/en/)
* [Express.js](https://www.npmjs.com/package/inquirer)
* [Sequelize](https://sequelize.org/)
*  Git - used to track changes to code
______________________________________________________________________________
  
### **Installation**

To run this file locally, make sure to first adjust the config.file to include your unique mysql password. 

Run: 
'npm install'

Create a database in your mySQLWorkbench matching the name of the database in the config.json file.

Run 'node server.js' in your Terminal or Bash. 

______________________________________________________________________________

#### **Code Snippet**

The bulk of this codebase revolves around the email and password criteria and authentication. The following code shows the process happening on the login page. We have an on "submit" function that takes in the email and password data that has been input by the user. It then check is the email and password exist in the database and logs the user in. 
```
loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });
```

__________________________________________________________________________

### **Author Links**

* **PAMELA GUTIERREZ**
* [Link to Portfolio Site](https://pamela-gutierrez.github.io/updated-portfolio/)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)

* **UC Berkeley Coding Bootcamp**
  _____________________________________________________________________________

#### **License**

This project is licensed under the MIT License


   