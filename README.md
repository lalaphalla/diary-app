# Diary Website Application

This project is a  Diary Website Application, created using HTML, CSS, and EMACscript(JavaScript). 
The aim of this project is to practice CRUD operation that have create, read, update, delete.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Convention Guide](#convention-guide)

## Demo

Check out the live demo of the project [here](https://diary-app-pav-munyphalla.vercel.app/).

## Features

- Responsive design
- Navigation bar
- Hero section
- Create Diary
- Update Diary
- Read Diary
- Delete Diary
- Footer

## Technologies Used

- HTML
- CSS 
- EMACscript(JavaScript)

## Installation

To get a local copy of the project, follow these steps:

1. **Clone the repository:**

   ```
   https://git.clp.kr/anbschool/2nd/alphabeez/pav-munyphalla/diary-website-phalla.git
    ```
2. **Navigate to project directory**

    ```
    cd diary-website-phalla
    ```

## Usage

To run the project locally, follow these steps:

1. Install the Live Server extension:
    - Install the Live Server extension in your code editor. If you are using Visual Studio Code.
2. Open index.html with Live Server:
    - Right-click on the index.html file in your code editor and select "Open with Live Server".
    - Your default web browser should open and display the website.


## Convention Guide

## Web Development Convention Guide:

HTML, CSS , and ECMAScript(JavaScript):

Following conventions in web development ensures your code is clean, maintainable, and efficient. This guide covers practices for HTML, CSS using Tailwind, and JavaScript, as well as folder structure and file naming conventions.

# Coding Convention

### HTML

- **Semantic HTML**: Use semantic tags like `<header>`, `<nav>`, `<section>`, and `<footer>` to improve accessibility and SEO.
- **Close Tags**: Always close your tags, even if they are optional, for better readability and to prevent potential issues.
- **IDs and Classes**: Use IDs for unique elements and classes for reusable styles.

### CSS
- **Variable**: Use css varible on repeated styles.
- **Responsive Design**: Implement mobile-first designs.

### ECMAScript(JavaScript)

- **Naming Conventions**: Use camelCase for variables and functions, and PascalCase for class names.
- **Variable Declaration**: Prefer `let` and `const` over `var` for variable declarations.
---

# Folder Structure

Maintain a consistent folder structure to enhance code navigation and maintenance:

- **Separation by Type**: Organize files by type, e.g., JavaScript files in a `script`  folder, CSS files in a `css` folder, and images in an `images` folder.
- **Reusable Components**: Store reusable pieces of code in a `components` folder.
- **Logical Naming**: Name folders and files logically and consistently, avoiding spaces and special characters.


```
project-root/
│
├── index.html
├── assets/
│   ├── fonts/
│   ├── images/
│   └── videos/
│
├── css/
│   ├── styles.css
│
├── pages/
│   ├── create/
│   │   ├── index.html
│   │   ├── components/
│   │   └── script/
│   │       └── index.js
│   ├── edit/
│   │   ├── index.html
│   │   ├── components/
│   │   └── script/
│   │       └── index.js
├── script/
│   ├── components/
│   │   ├── navbar.js
│   │   └── footer.js
│   └── index.js
├── .gitignore
└── README.md

```


# File Naming Convention

- Use lowercase letters and hyphens to separate words in file names, and avoid using spaces. For example, use `header-component.html` instead of `Header Component.html`.
- Keep your file names descriptive and keep related files with similar names.
- Use a standard convention for file extensions. For HTML files, use `.html`, for CSS files use `.css`, and for JavaScript files use `.js`.

In JavaScript, variables should be named using the camelCase naming convention. This means that the first letter of the variable should be in lowercase, while the first letter of each subsequent concatenated word should be in uppercase. For instance, `myVariableName` is an example of a variable named using the camelCase convention.

In JavaScript, class names should be written in PascalCase. This means that the first letter of every word should be capitalized without spaces. For example, `MyClassName` is a proper naming convention for a class in JavaScript.


### JavaScript File and Component Naming Convention

- JavaScript file names should be written in kebab-case. This means that all letters should be lowercase, and words should be separated by hyphens. For instance, `my-script.js` is an example of a JavaScript file named using the kebab-case convention.