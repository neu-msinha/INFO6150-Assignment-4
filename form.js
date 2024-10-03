let drinkChange = function(val) {
    const drinkOptions = {
        'tea': 'Customization for tea',
        'coffee': 'Customization for coffee',
        'drink': 'Customization for drink',
        'cocktail': 'Customization for cocktail',
        'liquor': 'Customization for liquor',
        'default': 'Customization'
    };

    const lbltxt = drinkOptions[val] || drinkOptions['default'];
    document.querySelector("#selectText").textContent = lbltxt;

    document.querySelector(".drinkData").style.display = "block";
    resetTextBox();
    resetCheckBox();

    let drinkElement = document.querySelector(`[name=drink]`);
    if (drinkElement) {
        drinkElement.nextElementSibling.style.display = "none";
    }
};

let resetTextBox = function() {
    const textBox = document.querySelector("#dynamicCheckText");
    if (textBox) textBox.value = "";
};

let resetHandle = function() {
    const drinkDataSection = document.querySelector(".drinkData");
    if (drinkDataSection) drinkDataSection.style.display = "none";
};

let resetCheckBox = function() {
    const checkBox = document.querySelector("#drinkCheckBox");
    if (checkBox) checkBox.checked = false;
};

let onCheck = function(el) {
    resetTextBox();
    const textBox = document.querySelector("#dynamicCheckText");
    if (textBox) {
        if (el.checked) {
            textBox.style.display = "block";
            textBox.setAttribute("required", true);
        } else {
            textBox.removeAttribute("required");
            textBox.style.display = "none";
        }
    }
};

let validateInput = function(el) {
    const validationPatterns = {
        'firstName': /^[a-zA-Z]{5,30}$/,
        'lastName': /^[a-zA-Z]{5,30}$/,
        'emailId': /([\w\.]+)@(northeastern.edu)/,
        'phoneNumber': /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
        'zipcode': /^\d{5}$/
    };

    let elementName = el.getAttribute("name");
    let isValid = true;

    if (validationPatterns[elementName]) {
        isValid = validationPatterns[elementName].test(el.value.trim());
    } else if (['streetAddress1', 'city', 'state', 'commentstextarea'].includes(elementName)) {
        isValid = el.value.trim().length > 0;
    } else if (elementName === 'drink') {
        isValid = el.value !== "";
    } else if (elementName === 'source') {
        let checkedBoxes = document.querySelectorAll('input[name="source"]:checked');
        isValid = checkedBoxes.length > 0;

        const errorElement = document.querySelector('.source-error');

        if (errorElement) {
            errorElement.style.display = isValid ? "none" : "block";
        }
    } else if (elementName === 'drinkValue'){
        var checkbox = document.querySelector('#drinkCheckBox');
        if(checkbox.checked)
        {
            isValid = el.value.trim().length > 0;
        }
    }

    if (elementName !== 'source') {
        const errorElement = document.querySelector(`[name=${elementName}]`).nextElementSibling;
        if (errorElement) {
            errorElement.style.display = isValid ? "none" : "block";
        }
    }

    return isValid;
};

let submitData = function() {
    validateCheckbox();
    const form = document.querySelector('form[name="form"]');
    
    if (form && validateInput(form)) {
        form.submit();
        form.reset();
    }
    return false;
};

let validateCheckbox = function() {
    const form = document.querySelector('#form');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');

    console.log("line 119");
    console.log(checkboxes);

    let isAnyCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (!isAnyCheckboxChecked) {
        alert("At least one checkbox must be selected.");
    }
    return isAnyCheckboxChecked;
};

let checkFormValidity = function() {
    const form = document.querySelector('#form');
    const submitButton = document.querySelector('#submitbutton');
    
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let allValid = true;

    const checkboxInputs = form.querySelectorAll('input[checkboxOption]');
    console.log(checkboxInputs);

    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    let checkboxValidation = Array.from(checkboxes).some(checkbox => checkbox.checked);

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            allValid = false;
        }
    });

    if(!checkboxValidation){
        allValid = false;
    }

    submitButton.disabled = !allValid;
};

window.addEventListener('DOMContentLoaded', () => {
    const formElements = document.querySelectorAll('#form input, #form select, #form textarea');
    
    formElements.forEach(element => {
        element.addEventListener('input', checkFormValidity);
    });

    checkFormValidity();
});
