import $ from 'jquery';

$(document).ready(function () {

  // this will get the address object that is inserted with the wp_localize_script() function in the controller
  let address_object = 'get_address_object';

  let zipcodeInput = document.getElementById('postal-code');
  let houseNoInput = document.getElementById('housenumber');

  $('#housenumber').focusout(function () {

    let zipcodeValue = zipcodeInput.value;
    let houseNoValue = houseNoInput.value;

    let ajax_values = {
      action: 'get_address',
      zipcode: zipcodeValue,
      house_no: houseNoValue,
      nonce: window[address_object].nonce
    };

    // validate zipcode and house-number and only make ajax call when valid.
    let zipRegex = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;
    if ( zipRegex.test(zipcodeValue) === true && !isNaN(houseNoValue) ) {

      // Do a ajax call to the wp_admin admin_ajax.php,
      // which triggers processing function in the petition block
      $.ajax({
        type: 'POST',
        url: window[address_object].ajaxUrl,
        data: ajax_values,
        success: function (t) {

          let streetInput = $('#street');
          let cityInput = $('#city');

          streetInput.val(t.data.cUrlresult.result.straat);
          cityInput.val(t.data.cUrlresult.result.woonplaats);

        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log(thrownError+'. Status code: '+ xhr.status);
        }
      });

    }

  });

});
