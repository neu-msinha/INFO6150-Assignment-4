# Assignment 4: Form Validation

## Objective
This assignment focuses on form validation, user interaction, and dynamic content creation using HTML, JavaScript, and CSS. The goal is to implement various form validations and enhance user experience with interactive elements and proper feedback mechanisms.

## Features Implemented

### 1. **Form Validation**
- **Field Validations**: All fields are validated for:
  - Not Null (Mandatory fields)
  - Minimum Length
  - Maximum Length
  - Alphanumeric fields do not accept special characters.
- **Regex Validations**:
  - **Phone Number**: Must match the format `XXX-XXX-XXXX`.
  - **Email Address**: Only accepts addresses from the `@northeastern.edu` domain.
  - **Zip Code**: Must be exactly 5 digits.
- **Dynamic Validation**: Error messages in red are displayed as the user types (on key events), ensuring real-time feedback. Errors disappear when the field is corrected.

### 2. **Submit Button Control**
- The **Submit** button is dynamically enabled or disabled based on the overall validity of the form fields. It is disabled until all fields pass validation. This ensures that the form can only be submitted when the input is valid.

### 3. **Single Select List Box with Dynamic Checkbox**
- A **single-select list** with 5 options (tea, coffee, drink, cocktail, liquor) is implemented. An `onChange` event dynamically updates a label based on the selected option and shows a checkbox to customize the selected drink.
- **Dynamic Text Field**: When the checkbox is checked, a text field appears for additional customization and is marked as mandatory. If the checkbox is unchecked, the text field disappears.

### 4. **Real-Time Validation with Key Events**
- All input fields (including text boxes, checkboxes, and the drink customization section) are validated in real-time as the user types or interacts with the form. Errors appear immediately and are corrected once the field is valid.
- **Validation Patterns**:
  - **First Name/Last Name**: Only letters, minimum 5 characters, maximum 30 characters.
  - **Street Address 1/City/State/Comments**: Mandatory and must not be left blank.
  - **Source Field (Checkbox)**: At least one checkbox (Facebook, Google, Yelp) must be selected for a valid form submission.

### 5. **Checkbox Validation and Customization**
- The form includes a **checkbox validation** that ensures at least one checkbox (Facebook, Google, Yelp) is selected.
- For the drink customization section, the form dynamically validates whether a customization text field (triggered by checking the checkbox) has a value when the checkbox is enabled.

### 6. **Table Creation on Form Submission**
- Upon successful submission, all form data is collected and dynamically added to an HTML table, which displays the inputted data.
- The table is rendered below the form, allowing users to view their submitted information without refreshing the page.

### 7. **Optional Field Handling**
- **Street Address 2**: This is an optional field. If left blank, the field remains empty in the resulting table after form submission.

### 8. **Form Reset on Submit**
- After submission, all form fields are cleared for a fresh entry. This reset ensures the form is ready for new data without requiring a page refresh.

### 9. **Validation for @northeastern.edu Email**
- Email addresses are strictly validated to accept only those with the domain `@northeastern.edu`.

### 10. **Custom Drink Selection**
- When a user selects an option from the drink list, a corresponding customization label is displayed, and a checkbox appears to enable further customization. If the checkbox is selected, a mandatory text field appears for additional details. The text field disappears if the checkbox is unchecked.

## JavaScript Logic
- **`drinkChange(val)`**: Dynamically updates the customization label and reveals the drink customization section based on the selected option in the list.
- **`resetTextBox()` and `resetCheckBox()`**: Clears the text field and resets the checkbox when a new drink is selected.
- **`onCheck(el)`**: Controls the visibility of the drink customization text field. The text field becomes mandatory when the checkbox is checked.
- **`validateInput(el)`**: Validates individual form fields using predefined regular expressions or mandatory checks. It also validates that at least one checkbox (Facebook, Google, Yelp) is selected and that the drink customization text field is filled if the checkbox is checked.
- **`submitData()`**: Collects form data, validates the inputs, and submits the form while also resetting it for new entries.
- **`validateCheckbox()`**: Ensures that at least one checkbox in the "source" section is checked before submission.
- **`checkFormValidity()`**: Checks the overall form validity (including inputs and checkboxes) and enables/disables the Submit button accordingly.

## Technologies Used
- **HTML5**: For form structure and basic elements.
- **CSS**: For styling
