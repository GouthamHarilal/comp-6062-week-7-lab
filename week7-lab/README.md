# Week 7 Lab

This project is designed for the Week 7 Lab, which focuses on creating a simple web application that interacts with user input and displays information about a fruit object.

## Project Structure

The project consists of the following files:

- `src/index.html`: The main HTML file containing the structure of the web application.
- `src/styles/main.css`: The CSS file for styling the HTML elements.
- `src/scripts/main.js`: The JavaScript file that contains the logic for handling user input and displaying fruit properties.
- `README.md`: This documentation file.

## Instructions

1. **HTML Structure**: The `index.html` file includes a text input field with the ID `numberInput` for entering a number. It also contains a div that displays the properties of a fruit object, including its name, color, and taste.

2. **Styling**: The `main.css` file is linked to the HTML file and is used to style the input field, div, and paragraphs to enhance the visual presentation.

3. **JavaScript Functionality**: The `main.js` file uses `querySelector` to access the input element and adds an event listener to monitor changes. If the input value is above 10 or below -10, an alert is triggered. Additionally, a fruit object is created with properties for name, color, and taste, and these properties are displayed in the HTML using `innerHTML` and template literals.

## Usage

To run the project, open the `index.html` file in a web browser. Enter a number in the input field to see the alert functionality in action and view the fruit properties displayed on the page.

## Lab Requirements

- Ensure that the HTML file is well-structured and includes semantic markup.
- Style the page using CSS to improve user experience.
- Implement JavaScript functionality to handle user input and display dynamic content.