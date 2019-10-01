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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/components/AddressAutofill.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/components/AddressAutofill.js":
/*!**************************************************!*\
  !*** ./assets/src/components/AddressAutofill.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // this will get the address object that is inserted with the wp_localize_script() function in the controller
  var address_object = 'get_address_object';
  var zipcodeInput = document.getElementById('postal-code');
  var houseNoInput = document.getElementById('housenumber');
  $('#housenumber').focusout(function () {
    var zipcodeValue = zipcodeInput.value;
    var houseNoValue = houseNoInput.value;
    var ajax_values = {
      action: 'get_address',
      zipcode: zipcodeValue,
      house_no: houseNoValue,
      nonce: window[address_object].nonce
    }; // validate zipcode and house-number and only make ajax call when valid.

    var zipRegex = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;

    if (zipRegex.test(zipcodeValue) === true && !isNaN(houseNoValue)) {
      // Do a ajax call to the wp_admin admin_ajax.php,
      // which triggers processing function in the petition block
      $.ajax({
        type: 'POST',
        url: window[address_object].ajaxUrl,
        data: ajax_values,
        success: function success(t) {
          var streetInput = $('#street');
          var cityInput = $('#city');
          streetInput.val(t.data.cUrlresult.result.straat);
          cityInput.val(t.data.cUrlresult.result.woonplaats);
        }
      });
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=addressAutofill.js.map