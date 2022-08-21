# Critical Mass Assignment

## Work Completed

### Form

- Created form with the following fields

  - name
  - email
  - address
  - city
  - state
  - zip

- Page resolves to "Thank You" page with displayed values of the form

### Layout

- Form built for mobile devices

### Bonus 1: JSON Object

- On submission of the form on the thank you page the JS form variables are taken and stringifyed into a JSON object.

### Bonus 2: Form Validation

- Email validation is achieved by the parameter below. This requires that the input field has an "@" character.

        <input type="email">

- Additionally all fields have the following parameter displayed below. This validation ensures that all fields are completed before form submission.

        <input required="required">
