let formData;

window.onload = function () {
   const params = new URLSearchParams(window.location.search);
   formData = {
      title: getParam(params, 'title'),
      firstName: getParam(params, 'firstName'),
      lastName: getParam(params, 'lastName'),
      emailId: getParam(params, 'emailId'),
      phoneNumber: getParam(params, 'phoneNumber'),
      streetAddress1: getParam(params, 'streetAddress1'),
      streetAddress2: getParam(params, 'streetAddress2'),
      city: getParam(params, 'city'),
      state: getParam(params, 'state'),
      zipcode: getParam(params, 'zipcode'),
      comments: getParam(params, 'commentstextarea'),
      checkDrink: getParam(params, 'checkDrink'),
      drink: getParam(params, 'drink'),
      source: getSocialSource(params),
      drinkValue: getParam(params, 'drinkValue')
   };

   populateTable();
};

const getParam = (params, paramName) => params.get(paramName) || '-';

const getSocialSource = (params) => {
   const socialSource = params.get('source');
   console.log("TEST")
   console.log(socialSource);
   return socialSource || '-';
};

const populateTable = function () {
   const tableRows = document.querySelectorAll("#table tbody tr");

   tableRows[0].children[1].textContent = formData.title.toUpperCase();
   tableRows[1].children[1].textContent = formData.firstName;
   tableRows[2].children[1].textContent = formData.lastName;
   tableRows[3].children[1].textContent = formData.emailId;
   tableRows[4].children[1].textContent = formData.phoneNumber;
   tableRows[5].children[1].textContent = formData.streetAddress1;
   tableRows[6].children[1].textContent = formData.streetAddress2;
   tableRows[7].children[1].textContent = formData.city;
   tableRows[8].children[1].textContent = formData.state;
   tableRows[9].children[1].textContent = formData.zipcode;
   tableRows[10].children[1].textContent = formData.source;
   tableRows[11].children[1].textContent = formData.comments;
   tableRows[12].children[1].textContent = formData.drink;

   if (formData.drinkValue) {
      tableRows[13].children[1].textContent = formData.drinkValue;
   } else {
      tableRows[13].style.display = "none";
   }
};