// Return false (not valid) if not a number of not within optional min-max range.
export function isValidNumber(number, min = null, max = null, removeWhiteSpace = true) {

  // Replace comma with dot.
  number = number.replace(/,/g, '.');

  number = fullTrim(number, removeWhiteSpace);

  if (isNaN(number) || min && number < min || max && number > max){
    return false;
  }
}

// Check if value is a string (not a number). By default a minimum length of 1 characters is required.
export function isValidString(value, minLength = 1, maxLength = null, removeWhiteSpace = true) {

  value = fullTrim(value, removeWhiteSpace);

  if (!isNaN(value) || value.length < minLength || maxLength && value.length > maxLength){
    return false;
  }
}

// Check if value is a string or a number. By default a minimum length of 1 characters is required.
export function isValidAny(value, minLength = 1, maxLength = null, removeWhiteSpace = true) {

  value = fullTrim(value, removeWhiteSpace);

  if (value.length < minLength || maxLength && value.length > maxLength){
    return false;
  }
}

// Simply checking if the field is not empty
export function isValidNotEmpty(value) {

  if (value.length < 1) {
    return false;
  }
}

function fullTrim(value, removeWhiteSpace) {
  return (removeWhiteSpace === true) ? value.replace(/\s+/g, '') : '';
}

export function isValidEmail(email) {
  var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
}

/*
* Returns 1 if the IBAN is valid. Whitespaces are not counted as characters.
* Returns FALSE if the IBAN's length is not as should be (for CY the IBAN Should be 28 chars long starting with CY )
* Returns any other number (checksum) when the IBAN is invalid (check digits do not match)
*/
export function isValidIban(input) {
  var CODE_LENGTHS = {
    AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
    CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
    FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
    HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
    LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
    MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
    RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26
  };
  var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''), // keep only alphanumeric characters
    code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), // match and capture (1) the country code, (2) the check digits, and (3) the rest
    digits;
  // check syntax and length
  if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
    return false;
  }
  // rearrange country code and check digits, and convert chars to ints
  digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return letter.charCodeAt(0) - 55;
  });
  // final check
  var checksum = digits.slice(0, 2), fragment;
  for (var offset = 2; offset < digits.length; offset += 7) {
    fragment = String(checksum) + digits.substring(offset, offset + 7);
    checksum = parseInt(fragment, 10) % 97;
  }
  return checksum;
}

