// Return false (not valid) if not a number of not within optional min-max range.
export function isValidNumber(number, min = null, max = null) {

  // Replace comma with dot.
  number = number.replace(/,/g, '.')

  if (isNaN(number) || min && number < min || max && number > max){
    return false;
  }

}

// Check if value is a string (not a number). By default a minimum length of 1 characters is required.
export function isValidString(value, minLength = 1, maxLength = null) {

  if (!isNaN(value) || value.length < minLength || maxLength && value.length > maxLength){
    return false;
  }

}

// Simply checking if the field is not empty
export function isValidNotEmpty(value) {

  if (value.length < 1) {
    return false;
  }
}

export function isValidEmail(email) {
  var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
}

