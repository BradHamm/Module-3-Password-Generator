# Module 3 Challenge Project: Password Generator

![alt text](./assets/Screenshot%202023-04-20%20135519.png)

> On-The-Job assignment required us to create a javaScript function for password generation. Changes made are mentioned in the General Information and Features sections of the README. You can skip directly to changes using the navigation bars below.
> Live demo [My GitHub](https://bradhamm.github.io/Challenge-1-Module-1/).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
<!-- * [License](#license) -->

## General Information

In this assignment, we were tasked with creating a random password generator, powered by JavaScript, to dynamically update the CSS and HTML documents provided. We were given certain criteria for password generation, such as one unique character type, a range of acceptable lengths for the generated password and linking the password generator to an eventLisener - All within a responsive webpage which adapts to window formatting changes. Built-in functions such as alert() and confirm() were integral to the completion of this project. The final result is a well-polished and conditionally sound program which provides the user with accessable random password generation.  

## Technologies Used
- HTML5
- CSS3
- JavaScript 12th Edition 
- Visual Studio Code (1.77)
- Google Chrome (Dev)

## Features
Listed below is the acceptance criteria and the solutions that were implemented to address the associated requests:

GIVEN I need a new, secure password...

WHEN I click the button to generate a password
THEN I am presented with a series of prompts confirming password criteria in clear and conscience language, accompanied by checkpoints to optionally recalibrate preferences during typing mistakes and mid-generation preference changes.

WHEN prompted for password criteria
THEN I select which criteria to include in the password, including the length and character sets selected from uppercase and lowercase letters, numerical values and special characters. 

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters - Where options deviating from those parameters prompt the user to re-enter a different value and expain why the input is invalid, given the conditions set by the assignment.

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters - All of which are cached in conscise arrays accessable to the function and review of user. Program ensures that at least one character type is selected for password generation and restarts from a chosen start-point depending on the extent of the changes on the next itteration.

WHEN I answer each prompt
THEN my input is validated two sets: The length of the password and the character sets chosen. All variables storing the values are recognizable and syntactically sound.

WHEN all prompts are answered
THEN a password is generated which not only matches the given criteria, but has a clear and logical route in which the base template for character generation and its substitutions with character types can be traced back and edited to later add additional sets of character types, such as grouped words and phrases, with ease.

WHEN the password is generated
THEN the password's generation is confirmed through an alert message and it's printed on the screen to be copied and utilized by the user at their discretion. 


## Screenshots
![Retained webpage integrity](./assets/Screenshot%202023-04-20%20135519.png)
![Retained webpage integrity](./assets/Screenshot%202023-04-20%20151313.png)
![Retained webpage integrity](./assets/Screenshot%202023-04-20%20151406.png)


## Setup
All image links for the webpage, as well as the CSS sheet, and JavaScript + HTML file can be found within the module 3 folder. All of which can be downloaded directly through github. Using a code editing software, install an extension that allows you to run html code locally from within your browser. If you're using VSCode, it's recommended you use "Run In Browser"

From there, by right clicking the html file, either in its tab or name within the directory tree once you open it inside VSCode, you'll be able to run the webside locally out of a chosen or default we browser. HTML, JS and CSS files can be viewed either from the inspect terminal of your given browser or within VSCode.

## Project Status

Project has fulfilled the requirements listed within the Acceptance Criteria, and is therefore complete. Password generator successfully returns a password built to fit the specifications of the users input and can be easily copied onto the clipboard through the readonly textbox on the screen. Program is responsive and has good run-time.


## Room for Improvement
Room for improvement:

- Organization of JS Code can be optomized for readability. Variables can be shortened or classified as objects to group their application within their specific scopes and use-cases in the program.
- Optomizations and additions to password character lists can be made to strengthen the integrity of the password.
- After gaining a more thorough understanding of cybersecurity practices and issuance of security certificates may strengthen the credibility of the website as a source of secure, randomly generated passwords. 
- Research a way to reject passwordLength submissions which include special characters.

To do:

- Implement better use cases of else{} clauses in if statements.
- Research and implement a better way to prevent the use of special characters in passwordLength submissions.

<!-- ## License -->
<!-- This project is open source and available under the [MIT License](). -->
