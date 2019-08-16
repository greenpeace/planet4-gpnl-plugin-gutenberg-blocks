/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/blocks/Newsletter/js/NewsletterFormSubmit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/blocks/Newsletter/js/NewsletterFormSubmit.js":
/*!*****************************************************************!*\
  !*** ./assets/src/blocks/Newsletter/js/NewsletterFormSubmit.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var newsletter_form_element = {};
$('.gpnl-newsletter__form').on('submit', function () {
  newsletter_form_element = this; // Get the  parameter from the newsletter form and add the action and CSRF protection

  var post_form_value = getFormObj(newsletter_form_element);
  var form_config = 'newsletter_form_object_' + post_form_value['form_id'];
  post_form_value.action = 'newsletter_form_process';
  post_form_value.nonce = window[form_config].nonce;
  post_form_value.marketingcode = window[form_config].marketingcode;
  post_form_value.literaturecode = window[form_config].literaturecode;
  post_form_value.screenid = window[form_config].screenid;
  toggleDisable($(newsletter_form_element).find('*'));

  if (post_form_value.human !== '') {
    showErrorMessage(newsletter_form_element);
    return;
  }

  $.ajax({
    type: 'POST',
    url: window[form_config].ajaxUrl,
    data: post_form_value,
    success: function success() {
      // eslint-disable-next-line no-console
      console.log('^-^');
      $(newsletter_form_element).find('*').hide();
      $('.gpnl-newsletter__title').html('Hoera, je bent er bijna! ');
      $('.gpnl-newsletter__description').html('<h4>Bevestig je aanmelding via de mail die je van ons ontvangt. Bedankt!  </h4>'); // Send conversion event to the GTM

      if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
          'event': 'nieuwsbriefformulier',
          'conv_campaign': post_form_value.literaturecode,
          'conv_action': 'registreer',
          'conv_label': 'registreer-nieuwsbrief'
        });
      }
    },
    error: function error() {
      // If the backend sends an error, hide the thank element and show an error urging to try again
      // eslint-disable-next-line no-console
      console.log('o_o');
      showErrorMessage(newsletter_form_element);
    }
  });
}); // Get the key+value from the input fields in the form

function getFormObj(el) {
  var formObj = {};
  var inputs = $(el).serializeArray();
  $.each(inputs, function (i, input) {
    formObj[input.name] = input.value;
  });
  return formObj;
} // Toggle the disabled state on form elements


function toggleDisable(el) {
  el.prop('disabled', !el.prop('disabled'));
}

function showErrorMessage(newsletter_form_element) {
  $(newsletter_form_element).find('*').hide();
  $('.gpnl-newsletter__title').html('Oh nee!');
  $('.gpnl-newsletter__description').html('<p>Hier gaat helaas iets mis, sorry. </p>');
  $(newsletter_form_element).append('<a href=\'' + window.location.href + '\' class="btn btn-primary btn-block"' + '">Probeer je het nog eens? </a>');
}

/***/ })

/******/ });
//# sourceMappingURL=GPNL_newsletter_JS.js.map