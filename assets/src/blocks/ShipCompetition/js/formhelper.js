const shipNamingForm = document.getElementById('ship-naming-form');
shipNamingForm && shipNamingForm.addEventListener('submit', validateForm); // Only add the event listener when the form exists. (i.e. not on the thank you page).

function validateForm(e) {
  e.preventDefault();
  if (
    isNotEmpty(shipNamingForm, 'first_name', 'Vul je voornaam in aljeblieft!') !== false &&
    isNotEmpty(shipNamingForm, 'last_name', 'Vul je achternaam in aljeblieft!') !== false &&
    isNotEmpty(shipNamingForm, 'email', 'Vul je email adres in aljeblieft!') !== false &&
    isNotEmpty(shipNamingForm, 'ship_name', 'Vul je suggestie voor een naam in aljeblieft!') !== false
  ) {
    shipNamingForm.submit_button.insertAdjacentHTML('afterend', '<div class="loader"></div>');
    shipNamingForm.submit_button.remove();
    // shipNamingForm.submit_button.setAttribute('disabled', 'disabled'); // Prevents double submission.
    this.submit();
  }
}

function isNotEmpty(form, field, message) {
  if (form[field].value === '') {
    alert(message);
    form[field].focus();
    return false;
  }
}
