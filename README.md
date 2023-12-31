# CRUD App

This is a simple CRUD (Create, Read, Update, Delete) app built with React. It allows you to manage a list of employees with their name, email and phone number. This project is based on the original version developed by [Safdar Jamal](https://github.com/SafdarJamal/crud-app).
The main improvement made by me is to reduce the number of states declared in the App component, and use a single state for employee details. This makes the code more concise and easier to manage.

## How to run the project

To run the project, you need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your system.
Follow these steps to set up the project after cloning from git:

1. Open a terminal and navigate to the project directory.
2. Run `npm install` to install all the dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and go to `http://localhost:3000` to see the app in action.

## How to use the app

The app has a simple interface that allows you to perform the following operations: - To add a new employee, click on the `Add Employee` button at the top right corner. A modal will pop up where you can enter the employee details and click on `Save`. - To view an employee's details, click on the employee's name in the table. A modal will pop up where you can see the employee details and click on `Close`. - To edit an employee's details, click on the edit icon (pencil) next to the employee's name in the table. A modal will pop up where you can edit the employee details and click on `Update`. - To delete an employee, click on the delete icon (trash) next to the employee's name in the table. A confirmation dialog will appear where you can click on `Yes` to delete the employee or `No` to cancel.

## How to contribute

If you have any suggestions or feedback for improving this project, feel free to open an issue or a pull request. I would appreciate your contribution.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
