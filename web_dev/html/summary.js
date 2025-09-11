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
Specifies the URL where the form data should be sent when the form is submitted.



Example:

<form action="/submit_form" method="post">
    <!-- Form elements -->
</form>


2. method
Defines the HTTP method used to submit the form. Common methods are GET and POST.

GET appends form data to the URL (suitable for search forms).
POST sends form data as part of the request body (suitable for sensitive data).



Example:

<form action="/submit_form" method="post">
    <!-- Form elements -->
</form>

3. name
Assigns a name to the form or form elements, used to identify them in the server-side script or JavaScript.



Example:

<input type="text" name="username">


4. value
Sets the default value of an input field.



Example:

<input type="text" name="username" value="JohnDoe">






































*/
