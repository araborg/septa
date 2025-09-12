/*


Width and Height: 
Define the dimensions of the image. These can 
be specified in pixels or as a percentage of 
the containing element.


Creating a Basic Table
A basic HTML table is created using the <table> 
tag. Inside the table, rows are defined using 
the <tr> (table row) tag, and each row contains 
cells defined using either the <th> (table header) 
or <td> (table data) tags.

<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>

    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
    </tr>

    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
    </tr>
</table>

1. Table Headers (<th>):
Represent the header cell in a table.
By default, <th> elements are bold and centered.


2. Table Rows (<tr>):
Defines a row in a table.
Can contain any number of <th> or <td> elements.

3. Table Cells (<td>):
Represents a standard cell in a table.
Can contain text, images, lists, or any other HTML 
elements.




Merging Cells

1. Column Span (colspan):
Used to merge cells horizontally across multiple 
columns.

This will merge the cell across two columns.
<td colspan="2">Merged Cell</td>

2. Row Span (rowspan):
Used to merge cells vertically across multiple rows.

<td rowspan="2">Merged Cell</td>
This will merge the cell across two rows.

<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>

    <tr>
        <td>Row 1, Cell 1</td>
        <td colspan="2">Row 1, Merged Cell</td>
    </tr>

    <tr>
        <td rowspan="2">Row 2, Merged Cell</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
    </tr>

    <tr>
        <td>Row 3, Cell 2</td>
        <td>Row 3, Cell 3</td>
    </tr>
</table>

The first cell in the second row spans two columns.
The first cell in the third row spans two rows.


Table Captions and Summaries

1. Table Caption (<caption>):
Provides a title or description for the table.

Should be placed immediately after the <table> tag.

<table>
    <caption>Table Caption</caption>

    <!-- Table rows and cells -->
</table>


2. Table Summary:
Used to provide a summary of the table for accessibility 
purposes.

Although not an attribute of the <table> element, it can 
be implemented as text that precedes the table, 
particularly for screen readers.

<p>
    Summary: This table shows the sales data for the last quarter
</p>

<table>
<!-- Table content -->
</table>


Best Practices for Tables
Use <th> for header cells to provide context and 
meaning.

Use colspan and rowspan sparingly for better table 
accessibility.

Always provide a <caption> and/or summary for tables, 
especially if the data is complex.

Ensure that tables are responsive and accessible to 
users with different needs.


Form Elements

1. The <form> Tag

The <form> tag is the container for all form elements. It defines how and where the form data should be sent when the form is submitted.


<form action="submit_form.php" method="post">
    <!-- Form elements go here -->
</form>

2. The <input> Tag

The <input> tag is used to create various types of input fields. It is the most versatile form element and can be configured to accept different types of data.

<input type="text" name="username" value="default">


3. The <label> Tag

The <label> tag provides a user-readable description for form elements. It improves accessibility and usability by associating a label with a specific input field.


<label for="username">Username:</label>
<input type="text" id="username" name="username">


4. The <textarea> Tag

The <textarea> tag is used for multi-line text input. It allows users to enter longer pieces of text compared to the single-line <input> fields.


<textarea name="message" rows="4" cols="50">Default text</textarea>


5. The <button> Tag

The <button> tag is used to create clickable buttons. It can be used to submit forms or trigger JavaScript functions.


<button type="submit">Submit</button>



Input Types

HTML provides various input types to handle different kinds of user input. The type attribute of the <input> tag specifies the type of data the field should accept.

1. Text (type="text")

Used for single-line text input.

Example:

<input type="text" name="name">


2. Password (type="password")

Masks the input to protect sensitive information.

Example:

<input type="password" name="password">


3. Email (type="email")

Validates that the input is a properly formatted email address.

Example:

<input type="email" name="email">


4. Number (type="number")

Allows only numeric input and can include attributes like min, max, and step.

Example:

<input type="number" name="age" min="1" max="100">


5. Radio (type="radio")

Allows the user to select one option from a set of choices.

Example:

<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female



6. Checkbox (type="checkbox")

Allows the user to select multiple options.

Example:

<input type="checkbox" name="subscribe" value="newsletter"> Subscribe to newsletter


7. Date (type="date")

Provides a date picker for selecting dates.

Example:

<input type="date" name="birthdate">


8. File (type="file")

Allows users to upload files.

Example:

<input type="file" name="resume">



Form Attributes

1. action
Specifies the URL where the form data should be 
sent when the form is submitted.

Example:

<form action="/submit_form" method="post">
    <!-- Form elements -->
</form>


2. method
Defines the HTTP method used to submit the form. 
Common methods are GET and POST.

GET appends form data to the URL (suitable for 
search forms).

POST sends form data as part of the request body 
(suitable for sensitive data).



Example:

<form action="/submit_form" method="post">
    <!-- Form elements -->
</form>

3. name
Assigns a name to the form or form elements, used to 
identify them in the server-side script or JavaScript.

Example:
<input type="text" name="username">


4. value
Sets the default value of an input field.
Example:

<input type="text" name="username" value="JohnDoe">


Form Best Practices
Label Association: Always use the <label> tag with 
the for attribute to improve accessibility.

Validation: Use appropriate input types and attributes 
to validate user input and enhance form usability.

Security: For sensitive information, use type="password" 
and ensure forms are submitted over HTTPS.


1. Radio Buttons

Radio buttons allow users to select one option from a 
set of choices. Each radio button in a group shares the 
same name attribute, ensuring that only one option can 
be selected at a time.



<form>
    <p>Choose your favorite color:</p>

    <input type="radio" id="red" name="color" value="red">
    <label for="red">Red</label><br>

    <input type="radio" id="blue" name="color" value="blue">
    <label for="blue">Blue</label><br>

    <input type="radio" id="green" name="color" value="green">
    <label for="green">Green</label>
</form>

Explanation:
Each radio button has a unique id and shares the same name 
(color), so only one can be selected.


2. Checkboxes

Checkboxes allow users to select one or more options from a 
set of choices. Unlike radio buttons, each checkbox operates 
independently.



<form>
    <p>Select your interests:</p>

    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">Coding</label><br>

    <input type="checkbox" id="design" name="interest" value="design">
    <label for="design">Design</label><br>

    <input type="checkbox" id="writing" name="interest" value="writing">
    <label for="writing">Writing</label>
</form>


Explanation:
Each checkbox has its own id and can be selected or deselected 
independently.


3. Dropdowns (Select Menus)

Dropdowns (or select menus) provide a compact way to present 
a list of options. Users can select one option from the 
dropdown menu.



<form>
    <p>Select your country:</p>

    <select name="country">
        <option value="usa">United States</option>
        <option value="canada">Canada</option>
        <option value="mexico">Mexico</option>
    </select>
</form>


Explanation:
The <select> tag creates a dropdown menu, with each <option> 
representing a selectable item.



1. File Uploads

File upload inputs allow users to select and upload files 
from their local system. This is useful for forms that 
require document submissions or image uploads.



<form action="/upload" method="post" enctype="multipart/form-data">
    <p>Upload your resume:</p>
    <input type="file" name="resume">
    <button type="submit">Upload</button>
</form>


Explanation:
The enctype="multipart/form-data" attribute is necessary 
for file uploads.

The <input type="file"> tag creates a file selection control.



2. Hidden Fields

Hidden fields store data that is not visible to the user 
but can be submitted with the form. They are useful for 
storing additional information or form states.



<form action="/submit" method="post">
    <input type="hidden" name="user_id" value="12345">
    <input type="text" name="username">
    <button type="submit">Submit</button>
</form>


Explanation:
The <input type="hidden"> tag creates a field that is 
not displayed on the form but is sent with the form data.


Validation and Accessibility

1. Form Validation

HTML5 provides various attributes for client-side validation 
of form inputs:
required: Ensures that the field must be filled out before 
submitting.

minlength / maxlength: Sets the minimum and maximum length 
for text fields.

pattern: Specifies a regular expression that the input value 
must match.

Example:

<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="6" required><br>

    <button type="submit">Submit</button>
</form>

2. Accessibility
Ensuring forms are accessible to all users, including those 
using screen readers, is crucial:





Labels: Always use <label> elements to describe form controls. 
The for attribute in the <label> tag should match the id of 
the corresponding input.

Tab Index: Ensure form elements are in a logical tab order using 
the tabindex attribute.

Error Messages: Provide clear and accessible error messages for 
validation errors.

Example:

<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" aria-required="true">

    <span id="usernameError" class="error-message" aria-live="polite">Username is required.</span>
   
    <button type="submit">Submit</button>
</form>


Explanation:
The aria-required="true" attribute indicates that the field 
is mandatory.

The aria-live="polite" attribute ensures error messages are 
announced by screen readers.


New Semantic Elements

1. <main>
The <main> element represents the dominant content of the 
<body>, excluding headers, footers, and sidebars. It is 
intended to encapsulate the primary content of the document.



<main>
    <h1>Welcome to Our Website</h1>
    <p>This is the main content of the page.</p>
</main>


Explanation:
The <main> element should only be used once per page.
It helps search engines and assistive technologies identify 
the primary content of the page.

2. <figure> and <figcaption>
The <figure> element is used to encapsulate media content, 
such as images, illustrations, diagrams, or code snippets. 
The <figcaption> element provides a caption or description 
for the content within <figure>.

<figure>
    <img src="example.jpg" alt="Example image">

    <figcaption>Figure 1: An example image with a caption.</figcaption>
</figure>


Explanation:
The <figure> element groups the media and its caption 
together.
The <figcaption> provides context or explanation, 
improving accessibility and usability.


3. <details> and <summary>
The <details> element creates a widget from which the 
user can obtain additional information or controls. 
The <summary> element acts as a heading or summary for 
the details, and clicking it reveals or hides the content.

<details>
    <summary>More Information</summary>

    <p>This is additional information that can be expanded or collapsed.</p>
</details>


Explanation:
The <summary> element is always the first child of <details>.
Users can click the <summary> to show or hide the content in 
<details>, making it useful for interactive content.

Importance of Semantic HTML for SEO and Accessibility

1. SEO Benefits
Improved Search Engine Indexing: Search engines use 
semantic HTML elements to understand the structure 
and relevance of content. Proper use of semantic 
elements can enhance the visibility of your content 
in search results.

Enhanced Content Organization: Semantic elements provide 
a clear structure, allowing search engines to better 
interpret the content and improve rankings.


2. Accessibility Benefits
Better Screen Reader Support: Semantic elements help 
screen readers convey the structure and meaning of the 
content to users with visual impairments. For example, 
<header>, <footer>, and <main> allow screen readers to 
navigate the page more effectively.

Clear Content Structure: Using semantic elements improves 
the clarity of content presentation, making it easier for 
users with disabilities to understand and interact with 
the web page.

3. Usability and Maintenance
Readable Code: Semantic HTML improves the readability and 
maintainability of code by providing meaningful tags that 
describe the purpose of the content.

Consistent Styling: Semantic elements enable more consistent 
styling and layout because they inherently convey the type 
of content they contain, allowing for more effective CSS 
styling.

Example:

<!DOCTYPE html>
<html>
    <head>
        <title>Semantic HTML Example</title>
    </head>

    <body>
        <header>
            <h1>My Website</h1>

            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <section>
                <h2>About Us</h2>
                <p>Welcome to our website. We provide valuable information.</p>
            </section>

            <section>
                <h2>Contact</h2>
                <p>Get in touch with us through the contact form below.</p>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
    </body>
</html>


Explanation:
The <header>, <main>, and <footer> elements clearly 
define the page's structure, enhancing both usability 
and accessibility.

Sections within <main> use <section> elements to group-related 
content.


Page Layout:

Using <div> and <span> for Layout and Style

1. <div> Element
The <div> element is a block-level container used to 
group and style sections of content. It does not 
inherently provide any semantic meaning but is commonly 
used for layout purposes and applying CSS styles.

<div class="container">
    <div class="header">
        <h1>My Website</h1>
    </div>

    <div class="content">
        <p>Welcome to my website. Here is some content.</p>
    </div>

    <div class="footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </div>
</div>


Explanation:
The <div> elements are used to group content into distinct 
sections.

CSS classes (container, header, content, footer) are applied 
to style each section.

2. <span> Element
The <span> element is an inline container used to apply styles 
or group text and other inline elements. It does not create 
line breaks or change the document's flow.

Usage:
<p>
    Welcome to <span class="highlight">My Website</span>!
</p>


Explanation:
The <span> element is used here to apply a specific style 
(e.g., highlighting) to a portion of text within a paragraph.

Layout Techniques with Semantic Elements

1. Flexbox
Flexbox is a CSS layout module designed to distribute space 
and align items within a container efficiently. It works well 
for creating responsive layouts.

Example:

<div class="flex-container">
    <div class="flex-item">Item 1</div>

    <div class="flex-item">Item 2</div>

    <div class="flex-item">Item 3</div>
</div>


CSS:
.flex-container {
    display: flex;
    justify-content: space-around;
}

.flex-item {
    flex: 1;
    padding: 10px;
}


Explanation:
display: flex; makes the container a flex container.

justify-content: space-around; distributes space evenly 
between flex items.

flex: 1; allows flex items to grow and shrink equally.



2. Grid Layout
CSS Grid Layout provides a two-dimensional grid-based 
layout system, allowing you to design complex web layouts 
with rows and columns.

Example:

<div class="grid-container">
    <div class="grid-item">Header</div>

    <div class="grid-item">Sidebar</div>
    
    <div class="grid-item">Main Content</div>
    
    <div class="grid-item">Footer</div>
</div>

CSS:
.grid-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr 3fr;
    gap: 10px;
}

.grid-item {
    padding: 10px;
}


Explanation:
display: grid; sets the container as a grid container.

grid-template-rows and grid-template-columns define the 
grid layout.

gap sets the spacing between grid items.


3. Using Semantic Elements for Layout
Semantic HTML5 elements provide structure and meaning 
to a webpage, and they can be combined with CSS for 
layout purposes.

Example:

<header>
    <h1>My Website</h1>

    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <section>
        <h2>About Us</h2>
        <p>Information about our website.</p>
    </section>

    <aside>
        <h2>News</h2>
        <p>Latest news and updates.</p>
    </aside>
</main>

<footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>

Explanation:
Semantic elements like <header>, <main>, <section>, <aside>, 
and <footer> provide meaningful structure to the document.

CSS can be used to style and position these elements as 
needed.


Basic Responsive Design Principles

1. Fluid Layouts
Fluid layouts use percentage-based widths to allow content 
to adapt to different screen sizes.

Example:
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}


Explanation:
width: 100%; allows the container to expand and contract with 
the screen size.

max-width ensures the container does not exceed a maximum width.

2. Media Queries
Media queries are used to apply different styles based on 
device characteristics, such as screen width.

Example:
//  Default styles 
body {
    font-size: 16px;
}

// Styles for screens narrower than 600px 
@media (max-width: 600px) {
    body {
        font-size: 14px;
    }
}


Explanation:
Media queries use the @media rule to apply styles conditionally 
based on screen size.

This helps create responsive designs that adapt to different 
devices.


3. Mobile-First Design
Mobile-first design starts with designing for smaller screens 
and progressively enhances the design for larger screens.

Example:

// Mobile-first styles 
body {
    font-size: 14px;
}

// Styles for larger screens 
@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
}


Explanation:
Mobile-first design ensures that the base styles are optimized 
for mobile devices.

Media queries are then used to add enhancements for larger 
screens.


Advanced HTML Concepts:
=======================
<link rel="stylesheet" href="styles.css">

Explanation:
rel="stylesheet" specifies the relationship between the HTML 
document and the linked file.

href="styles.css" points to the location of the CSS file.


Basic CSS Concepts

1. Selectors
Selectors are patterns used to select the elements you 
want to style. They can be simple or complex and are 
essential for targeting HTML elements.

Types of Selectors:
Element Selector: Targets elements by their tag name.

p {
    color: blue;
}

Class Selector: Targets elements with a specific class 
attribute. Classes are denoted by a dot (.) before the 
class name.

.highlight {
    background-color: yellow;
}

ID Selector: Targets elements with a specific ID attribute. 
IDs are denoted by a hash (#) before the ID name.

#main-heading {
    font-size: 24px;
}


2. Properties and Values
CSS properties define the style of an element, and values 
specify how the properties should be applied.

Common Properties:
Color: Sets the color of the text.
color: red;

Font-size: Sets the size of the text.
font-size: 16px;

Background-color: Sets the background color of an element.
background-color: lightblue;

Margin: Sets the space outside an element’s border.
margin: 10px;

Padding: Sets the space inside an element’s border.
padding: 10px;


Introduction to the DOM (Document Object Model)

The Document Object Model (DOM) is a programming interface 
for web documents. It represents the structure of a web 
page as a tree of objects, where each node corresponds to 
a part of the document (elements, attributes, text). 
JavaScript can be used to interact with and manipulate the 
DOM, enabling dynamic content updates and interactive 
features.


1. Understanding the DOM Structure
Document: Represents the entire HTML document.

Element Nodes: Represent HTML tags (e.g., <div>, <p>, <a>).

Text Nodes: Represent the text inside elements.

Attribute Nodes: Represent attributes of elements (e.g., id, 
class).

Example:

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>DOM Example</title>
    </head>

    <body>
        <h1 id="main-heading">Welcome to the DOM</h1>
        <p class="description">This is a paragraph.</p>
        <button id="change-text">Change Text</button>

        <script>
            // Accessing DOM elements
            const heading = document.getElementById('main-heading');
            const button = document.getElementById('change-text');

            // Modifying DOM elements
            button.addEventListener('click', () => {
                heading.textContent = 'Text Changed!';
            });
        </script>
    </body>
</html>


2. Common DOM Methods

getElementById(id): Returns the element with the specified ID.

getElementsByClassName(className): Returns a live HTMLCollection 
of elements with the specified class name.

querySelector(selector): Returns the first element that matches 
the CSS selector.

createElement(tagName): Creates a new element of the specified type.

Example:

<script>
    const newElement = document.createElement('div');
    newElement.textContent = 'I am a new element';
    document.body.appendChild(newElement);
</script>


HTML5 APIs Overview

HTML5 introduced several APIs that extend the capabilities of 
web applications. Here’s a brief overview of some key APIs:

1. Canvas API
The Canvas API allows for dynamic, scriptable rendering of 
2D shapes and bitmap images. It is useful for creating 
graphics, animations, and games.

Key Methods:

getContext('2d'): Returns a drawing context on the canvas.

beginPath(): Starts a new path.

moveTo(x, y): Moves the drawing cursor to the specified 
coordinates.

lineTo(x, y): Draws a line to the specified coordinates.

fill(): Fills the path with the current fill style.

Example:

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Canvas Example</title>
    </head>

    <body>
        <canvas id="myCanvas" width="200" height="200"></canvas>

        <script>
            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext('2d');

            ctx.fillStyle = 'blue';
            ctx.fillRect(50, 50, 100, 100);
        </script>
    </body>
</html>


2. Geolocation API
The Geolocation API allows web applications to access 
the geographical location of the user. This can be used 
for location-based services and applications.

Key Methods:

navigator.geolocation.getCurrentPosition(success, error, 
options): Retrieves the current position of the user.

navigator.geolocation.watchPosition(success, error, options): 
Continuously watches the user’s position.

Example:

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Geolocation Example</title>
    </head>

    <body>
        <button id="get-location">Get Location</button>
        <p id="location"></p>

        <script>
            document.getElementById('get-location').addEventListener('click', () => {
                navigator.geolocation.getCurrentPosition((position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    document.getElementById('location').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
                }, (error) => {
                    console.error(error);
                });
            });
        </script>
    </body>
</html>


3. Web Storage API
The Web Storage API provides two storage mechanisms: 
localStorage and sessionStorage. These allow web 
applications to store data on the client side.

localStorage: Stores data with no expiration time.

sessionStorage: Stores data for the duration of the 
page session.

Key Methods:
setItem(key, value): Stores a value in storage.

getItem(key): Retrieves a value from storage.

removeItem(key): Removes a value from storage.

clear(): Clears all data from storage.

Example:

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Web Storage Example</title>
    </head>

    <body>
        <input type="text" id="data-input" placeholder="Enter some text">
        <button id="save-data">Save Data</button>
        <button id="load-data">Load Data</button>
        <p id="display-data"></p>

        <script>
            document.getElementById('save-data').addEventListener('click', () => {
                const data = document.getElementById('data-input').value;
                localStorage.setItem('myData', data);
            });

            document.getElementById('load-data').addEventListener('click', () => {
                const data = localStorage.getItem('myData');
                document.getElementById('display-data').textContent = data;
            });
        </script>
    </body>
</html>



HTML5 Form Validation Techniques

HTML5 provides built-in attributes that enable form 
validation without requiring additional JavaScript. 
These attributes can be used to validate input fields 
and ensure that users provide the correct type of data.

1. Required Fields
The required attribute specifies that an input field 
must be filled out before submitting the form. If a 
required field is empty, the form will not be submitted, 
and the browser will display a default error message.

Syntax:

<input type="text" name="username" required />

Example:

<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <input type="submit" value="Submit">
</form>


2. Input Types
HTML5 introduces various input types that automatically 
validate the data entered based on the type. Some common 
input types include:

Email: Validates that the input is a valid email address.
<input type="email" name="user-email" required />

Number: Validates that the input is a number and allows 
specifying minimum and maximum values.
<input type="number" name="age" min="1" max="120" />

URL: Validates that the input is a valid URL.
<input type="url" name="website" />


3. Pattern Matching

The pattern attribute allows you to specify a regular expression that the input value must match. If the input does not match the pattern, the form will not be submitted.

Syntax:

<input type="text" name="username" pattern="[A-Za-z]{3,}" title="Three or more letters">


Example:

<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" pattern="[A-Za-z]{3,}" title="Username must be at least 3 letters">
    <input type="submit" value="Submit">
</form>


4. Min and Max Length

The minlength and maxlength attributes specify the minimum and maximum number of characters allowed in an input field.

Syntax:

<input type="text" name="username" minlength="3" maxlength="15">


Example:

<form>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="6" maxlength="12" required>
    <input type="submit" value="Submit">
</form>


Customizing Validation Messages

While HTML5 provides default validation messages, you can customize these messages to provide a better user experience. This can be done using the title attribute for form fields.

1. Using the title Attribute

The title attribute can be used to provide a custom validation message that appears when the default message is triggered.

Syntax:

<input type="text" name="username" pattern="[A-Za-z]{3,}" title="Please enter at least 3 letters.">


Example:

<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" pattern="[A-Za-z]{3,}" title="Username must be at least 3 letters long.">
    <input type="submit" value="Submit">
</form>


2. Custom Error Messages with JavaScript

For more complex validation and customized error messages, you can use JavaScript to handle form validation. JavaScript can access form elements, check their validity, and display custom error messages.

Example:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Validation</title>
    <style>
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <form id="myForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <span id="error-message" class="error"></span>
        <input type="submit" value="Submit">
    </form>

    <script>
        document.getElementById('myForm').addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const errorMessage = document.getElementById('error-message');
            
            if (username.length < 3) {
                errorMessage.textContent = 'Username must be at least 3 characters long.';
                event.preventDefault(); // Prevent form submission
            } else {
                errorMessage.textContent = '';
            }
        });
    </script>
</body>
</html>


In this example, JavaScript is used to check the length of the username and display a custom error message if the validation fails.














*/
