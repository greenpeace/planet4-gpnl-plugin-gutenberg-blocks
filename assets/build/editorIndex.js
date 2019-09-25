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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/editor/js/editorIndex.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/blocks/BaseBlock.js":
/*!****************************************!*\
  !*** ./assets/src/blocks/BaseBlock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseBlock; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var BaseBlock = function BaseBlock(className) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseBlock);

  // These names are based on the class name and can be used for all the different files and functions that require these names.
  className = this.constructor.name;
  this.className = className;
  this.classNameLowerCase = className.toLowerCase();
  this.blockName = className.split("Block")[0];
  this.blockNameLowerCase = this.blockName.toLowerCase();
  this.blockNameKebabCase = this.blockName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};



/***/ }),

/***/ "./assets/src/blocks/Donation/js/Donation.js":
/*!***************************************************!*\
  !*** ./assets/src/blocks/Donation/js/Donation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Donation; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);










var Donation =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Donation, _Component);

  function Donation() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Donation);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Donation).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Donation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          thanktitle = _this$props.thanktitle,
          thankdescription = _this$props.thankdescription,
          suggested_frequency = _this$props.suggested_frequency,
          allow_frequency_override = _this$props.allow_frequency_override,
          min_amount = _this$props.min_amount,
          oneoff_amount1 = _this$props.oneoff_amount1,
          oneoff_amount2 = _this$props.oneoff_amount2,
          oneoff_amount3 = _this$props.oneoff_amount3,
          oneoff_suggested_amount = _this$props.oneoff_suggested_amount,
          recurring_amount1 = _this$props.recurring_amount1,
          recurring_amount2 = _this$props.recurring_amount2,
          recurring_amount3 = _this$props.recurring_amount3,
          recurring_suggested_amount = _this$props.recurring_suggested_amount,
          literatuurcode = _this$props.literatuurcode,
          marketingcode_recurring = _this$props.marketingcode_recurring,
          marketingcode_oneoff = _this$props.marketingcode_oneoff,
          returnpage = _this$props.returnpage,
          errorpage = _this$props.errorpage,
          onValueChange = _this$props.onValueChange,
          onNumberChange = _this$props.onNumberChange;
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Titel',
        onChange: onValueChange.bind('title'),
        value: title,
        placeholder: 'Vul een titel in'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: 'Omschrijving',
        onChange: onValueChange.bind('description'),
        value: description,
        placeholder: 'Omschrijving'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Bedanktitel',
        onChange: onValueChange.bind('thanktitle'),
        value: thanktitle,
        thanktitle: 'Vul een titel in'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: 'Bedank omschrijving',
        onChange: onValueChange.bind('thankdescription'),
        value: thankdescription,
        placeholder: 'Bedankt tmschrijving'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: 'Doneerfrequentie'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        label: 'Voorgestelde frequente',
        onChange: onValueChange.bind('suggested_frequency'),
        value: suggested_frequency,
        options: [{
          label: 'Eenmalig',
          value: 'E'
        }, {
          label: 'Maandelijks',
          value: 'M'
        }, {
          label: 'Maandelijks voor 12 maanden (forces)',
          value: 'F'
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["CheckboxControl"], {
        label: 'Donateur kan periodiek wijzigen',
        onChange: onValueChange.bind('allow_frequency_override'),
        value: allow_frequency_override,
        help: 'Als dit aangevinkt is kan de donateur zelf bepalen of deze eenmalig of eens per maand doneert.'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: 'Bedragen',
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Minimum bedrag',
        onChange: onNumberChange.bind('min_amount'),
        value: min_amount
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Eenmalig: Bedrag 1',
        onChange: onNumberChange.bind('oneoff_amount1'),
        value: oneoff_amount1
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Eenmalig: Bedrag 2',
        onChange: onNumberChange.bind('oneoff_amount2'),
        value: oneoff_amount2
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Eenmalig: Bedrag 3',
        onChange: onNumberChange.bind('oneoff_amount3'),
        value: oneoff_amount3
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Eenmalig: Voorgesteld bedrag',
        onChange: onNumberChange.bind('oneoff_suggested_amount'),
        value: oneoff_suggested_amount
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Periodiek: Bedrag 1',
        onChange: onNumberChange.bind('recurring_amount1'),
        value: recurring_amount1
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Periodiek: Bedrag 2',
        onChange: onNumberChange.bind('recurring_amount2'),
        value: recurring_amount2
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Periodiek: Bedrag 3',
        onChange: onNumberChange.bind('recurring_amount3'),
        value: recurring_amount3
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Periodiek: Voorgesteld bedrag',
        onChange: onNumberChange.bind('recurring_suggested_amount'),
        value: recurring_suggested_amount
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: 'Database instellingen',
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Literatuurcode',
        onChange: onValueChange.bind('literatuurcode'),
        value: literatuurcode
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Marketingcode voor terugkerende betalingen',
        onChange: onValueChange.bind('marketingcode_recurring'),
        value: marketingcode_recurring
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Marketingcode voor eenmalige betalingen',
        onChange: onValueChange.bind('marketingcode_oneoff'),
        value: marketingcode_oneoff
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: 'iDeal',
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'returnpage',
        onChange: onNumberChange.bind('returnpage'),
        value: returnpage
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'errorpage',
        onChange: onValueChange.bind('errorpage'),
        value: errorpage
      })))];
    }
  }]);

  return Donation;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./assets/src/blocks/Donation/js/DonationBlock.js":
/*!********************************************************!*\
  !*** ./assets/src/blocks/Donation/js/DonationBlock.js ***!
  \********************************************************/
/*! exports provided: DonationBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationBlock", function() { return DonationBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Preview/js/Preview */ "./assets/src/components/Preview/js/Preview.js");
/* harmony import */ var _Donation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Donation */ "./assets/src/blocks/Donation/js/Donation.js");











var withSelect = wp.data.withSelect;

var DonationBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DonationBlock, _BaseBlock);

  function DonationBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, DonationBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(DonationBlock).call(this)); // Setup references to external functions

    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType; // Register the block

    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameKebabCase, {
      title: 'Donatie',
      icon: 'welcome-widgets-menus',
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName), __('doneer')],
      attributes: {
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        suggested_frequency: {
          type: 'string'
        },
        allow_frequency_override: {
          type: 'string'
        },
        min_amount: {
          type: 'number',
          default: 5
        },
        oneoff_amount1: {
          type: 'number',
          default: 5
        },
        oneoff_amount2: {
          type: 'number',
          default: 10
        },
        oneoff_amount3: {
          type: 'number',
          default: 25
        },
        oneoff_suggested_amount: {
          type: 'number',
          default: 10
        },
        recurring_amount1: {
          type: 'number',
          default: 5
        },
        recurring_amount2: {
          type: 'number',
          default: 10
        },
        recurring_amount3: {
          type: 'number',
          default: 25
        },
        recurring_suggested_amount: {
          type: 'number',
          default: 10
        },
        thanktitle: {
          type: 'string'
        },
        thankdescription: {
          type: 'string'
        },
        literatuurcode: {
          type: 'string',
          default: 'EN999'
        },
        marketingcode_recurring: {
          type: 'string',
          default: '04888'
        },
        marketingcode_oneoff: {
          type: 'string',
          default: '04888'
        },
        returnpage: {
          type: 'string',
          default: 'https://www.greenpeace.org/nl/'
        },
        errorpage: {
          type: 'string',
          default: 'https://www.greenpeace.org/nl/'
        }
      },
      edit: function edit(_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            isSelected = _ref.isSelected;

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this, value));
        }

        function onNumberChange(value) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this, Number(value)));
        } // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.


        if (isSelected) {
          return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_Donation__WEBPACK_IMPORTED_MODULE_11__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
            onValueChange: onValueChange,
            onNumberChange: onNumberChange
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_10__["Preview"], {
            showBar: isSelected
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"], {
            block: 'planet4-gpnl-blocks/' + _this.blockNameKebabCase,
            attributes: attributes
          }))];
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"], {
            block: 'planet4-gpnl-blocks/' + _this.blockNameKebabCase,
            attributes: attributes
          });
        }
      },
      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: function save() {
        return null;
      }
    });
    return _this;
  }

  return DonationBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./assets/src/blocks/HeroImage/js/HeroImage.js":
/*!*****************************************************!*\
  !*** ./assets/src/blocks/HeroImage/js/HeroImage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroImage; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);











var HeroImage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(HeroImage, _Component);

  function HeroImage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HeroImage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(HeroImage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HeroImage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          link_text = _this$props.link_text,
          link_url = _this$props.link_url,
          image = _this$props.image,
          image_url = _this$props.image_url,
          small = _this$props.small,
          focus_image = _this$props.focus_image,
          onValueChange = _this$props.onValueChange,
          onSelectImage = _this$props.onSelectImage,
          onFocalPointChange = _this$props.onFocalPointChange;
      var focal_point_params = {
        x: '',
        y: ''
      };

      if (focus_image) {
        var focus_image_str = focus_image.replace(/%/g, '');

        var _focus_image_str$spli = focus_image_str.split(' '),
            _focus_image_str$spli2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_focus_image_str$spli, 2),
            x = _focus_image_str$spli2[0],
            y = _focus_image_str$spli2[1];

        focal_point_params = {
          x: x / 100,
          y: y / 100
        };
      } else {
        focal_point_params = {
          x: 0.5,
          y: 0.5
        };
      }

      var fields = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "page-template hero__wrapper "
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "hero__text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h2", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
        onChange: onValueChange.bind('title'),
        value: title,
        tagName: 'span',
        className: 'hero__title',
        placeholder: 'Enter a title'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
        onChange: onValueChange.bind('description'),
        value: description,
        tagName: 'p',
        className: 'hero__description',
        placeholder: 'Abstract / description (optional)'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          width: '280px'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
        onChange: onValueChange.bind('link_text'),
        value: link_text,
        tagName: 'button',
        className: 'btn btn-small btn-medium btn-primary hero__button something',
        placeholder: 'button text (optional)'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          width: '380px'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
        onChange: onValueChange.bind('link_url'),
        value: link_url,
        tagName: 'p',
        placeholder: 'button URL (optional unless button is used)',
        style: {
          backgroundColor: 'white',
          padding: '3px 30px',
          color: '#666'
        }
      }))));

      var getImageOrButton = function getImageOrButton(openEvent) {
        if (image) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            style: {
              height: "100%",
              overflow: "hidden",
              backgroundImage: "url(".concat(image_url, ")"),
              backgroundSize: "cover"
            }
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: 'components-toolbar'
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
            className: 'components-toolbar-text-button',
            onClick: openEvent
          }, "verander achtergrondafbeelding"))), fields);
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: openEvent,
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: 'translateX(-50%) translateY(-50%)'
            },
            className: "btn btn-large btn-primary"
          }, "select an image"));
        }
      };

      var heroClass = "hero";

      if (small === true) {
        heroClass = "hero hero__small";
      }

      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: heroClass,
        style: {
          backgroundColor: "#f4f4f4",
          maxWidth: "100%",
          margin: "0"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
        type: "image",
        onSelect: onSelectImage,
        value: image,
        render: function render(_ref) {
          var open = _ref.open;
          return getImageOrButton(open);
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: 'Height'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
        label: 'small header',
        help: 'When selected, the header height will be smaller than normal. Also, the abstract / description text will no longer appear!',
        value: small,
        checked: small,
        onChange: onValueChange.bind('small')
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: 'Focus punt'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["FocalPointPicker"], {
        help: 'Plaats het focus punt op het onderwerp van deze afbeelding. Op kleinere monitors (zoals op telefoons) zal het focus punt zichtbaar zijn.',
        url: image_url,
        value: focal_point_params,
        onChange: onFocalPointChange
      })))];
    }
  }]);

  return HeroImage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./assets/src/blocks/HeroImage/js/HeroImageBlock.js":
/*!**********************************************************!*\
  !*** ./assets/src/blocks/HeroImage/js/HeroImageBlock.js ***!
  \**********************************************************/
/*! exports provided: HeroImageBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroImageBlock", function() { return HeroImageBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HeroImageIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeroImageIcon */ "./assets/src/blocks/HeroImage/js/HeroImageIcon.js");
/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeroImage */ "./assets/src/blocks/HeroImage/js/HeroImage.js");












var withSelect = wp.data.withSelect;
var HeroImageBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(HeroImageBlock, _BaseBlock);

  function HeroImageBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, HeroImageBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(HeroImageBlock).call(this)); // Setup references to external functions

    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType; // Register the block

    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameKebabCase, {
      title: 'Hero afbeelding',
      icon: _HeroImageIcon__WEBPACK_IMPORTED_MODULE_10__["Icon"],
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName), __('hero'), __('header'), __('image'), __('afbeelding'), __('held')],
      attributes: {
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        image: {
          type: 'number'
        },
        link_text: {
          type: 'string'
        },
        link_url: {
          type: 'string'
        },
        small: {
          type: 'boolean'
        },
        focus_image: {
          type: 'string'
        }
      },
      edit: withSelect(function (select, props) {
        var attributes = props.attributes;
        var image = attributes.image;
        var image_url = '';

        if (image && 0 < image) {
          var image_object = wp.data.select('core').getMedia(image);

          if (image_object) {
            image_url = image_object.source_url;
          }
        }

        return {
          image_url: image_url
        };
      })(function (_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            isSelected = _ref.isSelected,
            image_url = _ref.image_url;

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this, value));
        }

        function onSelectImage(media) {
          setAttributes({
            image: media.id
          });
        }

        function onFocalPointChange(_ref2) {
          var x = _ref2.x,
              y = _ref2.y;
          x = parseFloat(x).toFixed(2);
          y = parseFloat(y).toFixed(2);
          setAttributes({
            focus_image: x * 100 + '% ' + y * 100 + '%'
          });
        } // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.


        if (isSelected) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_HeroImage__WEBPACK_IMPORTED_MODULE_11__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
            image_url: image_url,
            onValueChange: onValueChange,
            onSelectImage: onSelectImage,
            onFocalPointChange: onFocalPointChange
          }));
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"], {
            block: 'planet4-gpnl-blocks/' + _this.blockNameKebabCase,
            attributes: attributes
          });
        }
      }),
      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: function save() {
        return null;
      }
    });
    return _this;
  }

  return HeroImageBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./assets/src/blocks/HeroImage/js/HeroImageIcon.js":
/*!*********************************************************!*\
  !*** ./assets/src/blocks/HeroImage/js/HeroImageIcon.js ***!
  \*********************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var Icon =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Icon, _Component);

  function Icon() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Icon);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Icon).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Icon, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("g", {
        fill: "#333"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M0,2v12h16V2H0z M15,13H1V3h14V13z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("circle", {
        cx: "12.5",
        cy: "5.5",
        r: "1.5"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "m10.111 8.021c-0.909 0-0.815 1.936-2.06 1.936-1.242 0-1.918-4.953-3.463-4.953-1.544 0-2.584 7.021-2.584 7.021h12.146s-3.129-4.004-4.039-4.004z"
      })));
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./assets/src/blocks/MediaVideo/js/MediaVideo.js":
/*!*******************************************************!*\
  !*** ./assets/src/blocks/MediaVideo/js/MediaVideo.js ***!
  \*******************************************************/
/*! exports provided: MediaVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaVideo", function() { return MediaVideo; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Preview/js/Preview */ "./assets/src/components/Preview/js/Preview.js");










var MediaVideo =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MediaVideo, _Component);

  function MediaVideo(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MediaVideo);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MediaVideo).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MediaVideo, [{
    key: "renderEdit",
    value: function renderEdit() {
      var __ = wp.i18n.__;
      var _this$props = this.props,
          video_title = _this$props.video_title,
          description = _this$props.description,
          youtube_id = _this$props.youtube_id;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: __('Media Title', 'p4ge'),
        placeholder: __('Enter video title', 'p4ge'),
        value: video_title,
        onChange: this.props.onTitleChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextareaControl"], {
        label: __('Description', 'p4ge'),
        help: __('(Optional)', 'p4ge'),
        value: description,
        onChange: this.props.onDescriptionChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: __('Media URL/ID', 'p4ge'),
        placeholder: __('Enter URL', 'p4ge'),
        value: youtube_id,
        onChange: this.props.onMediaUrlChange,
        help: __('Can be a YouTube, Vimeo or Soundcloud URL or an mp4, mp3 or wav file URL.', 'p4ge')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaPlaceholder"], {
        labels: {
          title: __('Video poster image [Optional]', 'p4ge'),
          instructions: __('Applicable for .mp4 video URLs only.', 'p4ge')
        },
        icon: "format-image",
        onSelect: this.props.onSelectImage,
        onSelectURL: this.props.onSelectURL,
        onError: this.props.onUploadError,
        accept: "image/*",
        allowedTypes: ["image"]
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_8__["Preview"], {
        showBar: this.props.isSelected
      }, this.props.youtube_id && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ServerSideRender"], {
        block: 'planet4-gpnl-blocks/' + this.props.blockNameKebabCase,
        attributes: {
          video_title: this.props.video_title,
          description: this.props.description,
          youtube_id: this.props.youtube_id,
          video_poster_img: this.props.video_poster_img
        }
      })));
    }
  }]);

  return MediaVideo;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./assets/src/blocks/MediaVideo/js/MediaVideoBlock.js":
/*!************************************************************!*\
  !*** ./assets/src/blocks/MediaVideo/js/MediaVideoBlock.js ***!
  \************************************************************/
/*! exports provided: MediaVideoBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaVideoBlock", function() { return MediaVideoBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MediaVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaVideo */ "./assets/src/blocks/MediaVideo/js/MediaVideo.js");
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");








var __ = wp.i18n.__;
var MediaVideoBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MediaVideoBlock, _BaseBlock);

  function MediaVideoBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MediaVideoBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MediaVideoBlock).call(this));
    var registerBlockType = wp.blocks.registerBlockType;
    var blockNameKebabCase = _this.blockNameKebabCase;
    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameKebabCase, {
      title: __(_this.blockName),
      icon: 'format-video',
      category: 'planet4-gpnl-blocks',

      /**
       * Transforms old 'shortcake' shortcode to new gutenberg block.
       *
       * old block-shortcode:
       * [shortcake_media_video video_title="Lorem Ipsum"
       *                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
       *                        youtube_id="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
       *                        video_poster_img="23241"
       * /]
       *
       * new block-gutenberg:
       * <!-- wp:planet4-blocks/media-video {"video_title":"Lorem Ipsum","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.","youtube_id":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","video_poster_img":23241} /-->
       *
       */
      transforms: {
        from: [{
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: 'shortcake_media_video',
          attributes: {
            video_title: {
              type: 'string',
              shortcode: function shortcode(_ref) {
                var _ref$named$video_titl = _ref.named.video_title,
                    video_title = _ref$named$video_titl === void 0 ? '' : _ref$named$video_titl;
                return video_title;
              }
            },
            description: {
              type: 'string',
              shortcode: function shortcode(_ref2) {
                var _ref2$named$descripti = _ref2.named.description,
                    description = _ref2$named$descripti === void 0 ? '' : _ref2$named$descripti;
                return description;
              }
            },
            youtube_id: {
              type: 'string',
              shortcode: function shortcode(_ref3) {
                var _ref3$named$youtube_i = _ref3.named.youtube_id,
                    youtube_id = _ref3$named$youtube_i === void 0 ? '' : _ref3$named$youtube_i;
                return youtube_id;
              }
            },
            video_poster_img: {
              type: 'integer',
              shortcode: function shortcode(_ref4) {
                var _ref4$named$video_pos = _ref4.named.video_poster_img,
                    video_poster_img = _ref4$named$video_pos === void 0 ? '' : _ref4$named$video_pos;
                return video_poster_img;
              }
            }
          }
        }]
      },
      attributes: {
        video_title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        youtube_id: {
          type: 'string'
        },
        video_poster_img: {
          type: 'integer'
        }
      },
      edit: function edit(_ref5) {
        var isSelected = _ref5.isSelected,
            attributes = _ref5.attributes,
            setAttributes = _ref5.setAttributes;

        function onTitleChange(value) {
          setAttributes({
            video_title: value
          });
        }

        function onDescriptionChange(value) {
          setAttributes({
            description: value
          });
        }

        function onMediaUrlChange(value) {
          setAttributes({
            youtube_id: value
          });
        }

        function onSelectImage(_ref6) {
          var id = _ref6.id;
          setAttributes({
            video_poster_img: id
          });
        }

        function onSelectURL(_ref7) {
          var url = _ref7.url;
          setAttributes({
            id: null
          });
        }

        function onUploadError(_ref8) {
          var message = _ref8.message;
          console.log(message);
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_MediaVideo__WEBPACK_IMPORTED_MODULE_6__["MediaVideo"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
          blockNameKebabCase: blockNameKebabCase,
          isSelected: isSelected,
          onTitleChange: onTitleChange,
          onDescriptionChange: onDescriptionChange,
          onMediaUrlChange: onMediaUrlChange,
          onSelectImage: onSelectImage,
          onSelectURL: onSelectURL,
          onUploadError: onUploadError
        }));
      },
      save: function save() {
        return null;
      }
    });
    return _this;
  }

  return MediaVideoBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_7__["default"]);

/***/ }),

/***/ "./assets/src/blocks/Newsletter/js/Newsletter.js":
/*!*******************************************************!*\
  !*** ./assets/src/blocks/Newsletter/js/Newsletter.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Newsletter; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);








 // import {Button, PanelBody, ToggleControl, FocalPointPicker} from '@wordpress/components';



var Newsletter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Newsletter, _Component);

  function Newsletter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Newsletter);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Newsletter).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Newsletter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          background = _this$props.background,
          opacity = _this$props.opacity,
          focus_image = _this$props.focus_image,
          marketingcode = _this$props.marketingcode,
          literaturecode = _this$props.literaturecode,
          screenid = _this$props.screenid,
          form_id = _this$props.form_id,
          image_url = _this$props.image_url,
          onValueChange = _this$props.onValueChange,
          onNumberChange = _this$props.onNumberChange,
          onSelectImage = _this$props.onSelectImage,
          onFocalPointChange = _this$props.onFocalPointChange;
      var focal_point_params = {
        x: '',
        y: ''
      };

      if (focus_image) {
        var focus_image_str = focus_image.replace(/%/g, '');

        var _focus_image_str$spli = focus_image_str.split(' '),
            _focus_image_str$spli2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_focus_image_str$spli, 2),
            x = _focus_image_str$spli2[0],
            y = _focus_image_str$spli2[1];

        focal_point_params = {
          x: x / 100,
          y: y / 100
        };
      } else {
        focal_point_params = {
          x: 0.5,
          y: 0.5
        };
      }

      var getImageOrButton = function getImageOrButton(openEvent) {
        if (background) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: 'components-toolbar'
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
            className: 'components-toolbar-text-button',
            onClick: openEvent
          }, "verander achtergrondafbeelding")));
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: 'components-toolbar'
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
            className: 'components-toolbar-text-button',
            onClick: openEvent
          }, "voeg achtergrondafbeelding toe")));
        }
      };

      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'gpnl-newsletter__block',
        style: {
          height: "100%",
          overflow: "hidden",
          maxWidth: "100%",
          margin: "0"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: 'background-image',
        style: {
          backgroundColor: "#f4f4f4",
          margin: "0",
          width: "100%",
          backgroundImage: "url(".concat(image_url, ")"),
          backgroundSize: "cover",
          opacity: "".concat(opacity, "%")
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "page-template gpnl-newsletter__block"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "gpnl-newsletter__text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h2", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
        onChange: onValueChange.bind('title'),
        value: title,
        className: 'gpnl-newsletter__title',
        placeholder: 'Voeg een titel toe (optioneel)'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        className: 'gpnl-newsletter__description'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
        onChange: onValueChange.bind('subtitle'),
        value: subtitle // tagName={'p'}
        // style={{backgroundColor: 'green'}}
        // className={'gpnl-newsletter__description'}
        ,
        placeholder: 'Voeg een ondertitel toe (optioneel)'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("form", {
        className: "gpnl-newsletter__form",
        onSubmit: "return false;"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("fieldset", {
        className: "row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "form-group col-12 col-md-6 col-lg-5 "
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        type: "text",
        name: "name",
        id: "name",
        className: "form-control",
        placeholder: "Naam",
        "aria-describedby": "helpId",
        readOnly: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "form-group col-12 col-md-6 col-lg-4 "
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        type: "email",
        className: "form-control",
        name: "mail",
        id: "mail",
        "aria-describedby": "emailHelpId",
        placeholder: "E-mail",
        readOnly: true
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "form-group col-12 col-md-12 col-lg-3 "
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
        href: '#',
        className: "btn btn-primary submit-button-newsletter"
      }, "AANMELDEN"))))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
        type: "image",
        onSelect: onSelectImage,
        value: background,
        render: function render(_ref) {
          var open = _ref.open;
          return getImageOrButton(open);
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: 'Focus point'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["FocalPointPicker"], {
        help: 'Plaats het focus punt op het onderwerp van deze afbeelding. Op kleinere monitors (zoals op telefoons) zal het focus punt zichtbaar zijn.',
        url: image_url,
        value: focal_point_params,
        onChange: onFocalPointChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
        label: 'Opaciteit in procenten',
        onChange: onNumberChange.bind('opacity'),
        value: opacity
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: 'Database instellingen'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
        label: 'Marketing code',
        value: marketingcode,
        placeholder: 'marketing code',
        onChange: onValueChange.bind('marketingcode')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
        label: 'literature code',
        value: literaturecode,
        placeholder: 'literature code',
        onChange: onValueChange.bind('literaturecode')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
        label: 'Screen ID',
        value: screenid,
        onChange: onValueChange.bind('screenid')
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: 'Extra instellingen'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
        label: 'Form ID',
        onChange: onNumberChange.bind('form_id'),
        value: form_id,
        help: 'Gebruik dit als er meerdere petitieformulieren op 1 pagina staan. Elk formulier moet een uniek numeriek id hebben.'
      })))];
    }
  }]);

  return Newsletter;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./assets/src/blocks/Newsletter/js/NewsletterBlock.js":
/*!************************************************************!*\
  !*** ./assets/src/blocks/Newsletter/js/NewsletterBlock.js ***!
  \************************************************************/
/*! exports provided: NewsletterBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterBlock", function() { return NewsletterBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Newsletter */ "./assets/src/blocks/Newsletter/js/Newsletter.js");
/* harmony import */ var _NewsletterIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NewsletterIcon */ "./assets/src/blocks/Newsletter/js/NewsletterIcon.js");












var withSelect = wp.data.withSelect;
var NewsletterBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(NewsletterBlock, _BaseBlock);

  function NewsletterBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, NewsletterBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(NewsletterBlock).call(this)); // Setup references to external functions

    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType; // Register the block

    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameKebabCase, {
      title: 'Nieuwsbrief',
      icon: _NewsletterIcon__WEBPACK_IMPORTED_MODULE_11__["Icon"],
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName), __('subscription'), __('nieuwsbrief')],
      attributes: {
        title: {
          type: 'string'
        },
        subtitle: {
          type: 'string'
        },
        background: {
          type: 'number'
        },
        opacity: {
          type: 'number',
          default: 30
        },
        focus_image: {
          type: 'string'
        },
        marketingcode: {
          type: 'string',
          default: '04950'
        },
        literaturecode: {
          type: 'string',
          default: 'EN009'
        },
        screenid: {
          type: 'string',
          default: '250'
        },
        form_id: {
          type: 'number',
          default: 1
        }
      },
      edit: withSelect(function (select, props) {
        var attributes = props.attributes;
        var background = attributes.background;
        var image_url = '';

        if (background && 0 < background) {
          var image_object = wp.data.select('core').getMedia(background);

          if (image_object) {
            image_url = image_object.source_url;
          }
        }

        return {
          image_url: image_url
        };
      })(function (_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            isSelected = _ref.isSelected,
            image_url = _ref.image_url;

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this, value));
        }

        function onNumberChange(value) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this, Number(value)));
        }

        function onSelectImage(media) {
          setAttributes({
            background: media.id
          });
        }

        function onFocalPointChange(_ref2) {
          var x = _ref2.x,
              y = _ref2.y;
          x = parseFloat(x).toFixed(2);
          y = parseFloat(y).toFixed(2);
          setAttributes({
            focus_image: x * 100 + '% ' + y * 100 + '%'
          });
        } // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.


        if (isSelected) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_Newsletter__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
            image_url: image_url,
            onValueChange: onValueChange,
            onNumberChange: onNumberChange,
            onSelectImage: onSelectImage,
            onFocalPointChange: onFocalPointChange
          }));
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"], {
            block: 'planet4-gpnl-blocks/' + _this.blockNameKebabCase,
            attributes: attributes
          });
        }
      }),
      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: function save() {
        return null;
      }
    });
    return _this;
  }

  return NewsletterBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./assets/src/blocks/Newsletter/js/NewsletterIcon.js":
/*!***********************************************************!*\
  !*** ./assets/src/blocks/Newsletter/js/NewsletterIcon.js ***!
  \***********************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var Icon =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Icon, _Component);

  function Icon() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Icon);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Icon).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Icon, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("svg", {
        viewBox: "0 0 512.001 512.001",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("g", {
        fill: "#333"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "m511.65 126.63c-0.021-14.449-11.782-26.189-26.227-26.189h-0.034l-459.2 0.631c-7.005 9e-3 -13.588 2.746-18.535 7.706-4.946 4.961-7.664 11.552-7.655 18.555l0.355 258.03c9e-3 7.005 2.746 13.588 7.706 18.535 4.951 4.938 11.526 7.655 18.519 7.655h0.035l459.19-0.631c14.458-0.02 26.207-11.799 26.19-26.261l-0.353-258.03zm-55.035 0.076l-200.59 139.44-200.98-138.89 401.57-0.552zm-115.76 165.76l118.97 92.265-407.97 0.56 119.7-92.825c5.722-4.439 6.764-12.675 2.326-18.399-4.439-5.722-12.675-6.764-18.399-2.326l-128.91 99.969-0.32-232.48 222.34 153.66c2.244 1.551 4.849 2.325 7.455 2.325 2.617 0 5.236-0.783 7.485-2.346l221.91-154.26 0.336 233.07-128.86-99.931c-5.719-4.437-13.959-3.396-18.397 2.326-4.439 5.722-3.398 13.96 2.326 18.398z"
      })));
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./assets/src/blocks/Petition/js/Petition.js":
/*!***************************************************!*\
  !*** ./assets/src/blocks/Petition/js/Petition.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Petition; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);










var Petition =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Petition, _Component);

  function Petition() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Petition);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Petition).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Petition, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          image = _this$props.image,
          consent = _this$props.consent,
          sign = _this$props.sign,
          campaignpolicy = _this$props.campaignpolicy,
          thanktitle = _this$props.thanktitle,
          thanktext = _this$props.thanktext,
          donatebuttontext = _this$props.donatebuttontext,
          donatebuttonlink = _this$props.donatebuttonlink,
          hidesharingbuttons = _this$props.hidesharingbuttons,
          twittertext = _this$props.twittertext,
          whatsapptext = _this$props.whatsapptext,
          marketingcode = _this$props.marketingcode,
          literaturecode = _this$props.literaturecode,
          campaigncode = _this$props.campaigncode,
          countermin = _this$props.countermin,
          countermax = _this$props.countermax,
          countertext = _this$props.countertext,
          ga_action = _this$props.ga_action,
          ad_campaign = _this$props.ad_campaign,
          apref = _this$props.apref,
          jalt_track = _this$props.jalt_track,
          form_id = _this$props.form_id,
          image_url = _this$props.image_url,
          onSelectImage = _this$props.onSelectImage,
          onValueChange = _this$props.onValueChange,
          onNumberChange = _this$props.onNumberChange;

      var getImageOrButton = function getImageOrButton(openEvent) {
        if (_this.props.id && 0 < _this.props.id) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            align: "center"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
            src: image_url,
            onClick: openEvent,
            className: "happypoint__imgs",
            width: '400px',
            style: {
              padding: '10px 10px'
            }
          }));
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "button-container"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            onClick: openEvent,
            className: "button"
          }, "+ ", 'Select Background Image'));
        }
      };

      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Titel',
        onChange: onValueChange.bind('title'),
        value: title,
        placeholder: 'Vul een titel in'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: 'Ondertitel',
        onChange: onValueChange.bind('subtitle'),
        value: subtitle,
        placeholder: 'Ondertitel'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: 'Opt in tekst',
        onChange: onValueChange.bind('consent'),
        value: consent,
        placeholder: 'Opt in tekst'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Teken knop',
        onChange: onValueChange.bind('sign'),
        value: sign,
        placeholder: 'Teken knop'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Link naar actievoorwaarden',
        onChange: onValueChange.bind('campaignpolicy'),
        value: campaignpolicy,
        placeholder: 'Link naar actievoorwaarden'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Bedankt titel',
        onChange: onValueChange.bind('thanktitle'),
        value: thanktitle,
        placeholder: 'Bedankt titel'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: 'Bedankt tekst',
        onChange: onValueChange.bind('thanktext'),
        value: thanktext,
        placeholder: 'Bedankt tekst',
        help: 'Deze tekst wordt getoond nadat iemand de petitie tekent.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Doneerknop bij bedankttekst',
        onChange: onValueChange.bind('donatebuttontext'),
        value: donatebuttontext,
        placeholder: 'Doneerknop bij bedankttekst',
        help: 'Nadat iemand de petitie tekent wordt een doneerknop getoond waarin we vragen om financiële steun. De tekst op de knop kun je hier instellen.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Link van doneerknop',
        onChange: onValueChange.bind('donatebuttonlink'),
        value: donatebuttonlink,
        placeholder: 'Link van doneerknop',
        help: 'Hiernaartoe verwijst de doneerknop. "/doneren" is de standaardpagina voor Greenpeace Nederland.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["CheckboxControl"], {
        label: 'Verberg sharing button?',
        onChange: onValueChange.bind('hidesharingbuttons'),
        value: hidesharingbuttons,
        help: 'Als dit aangevinkt is worden de sharing buttons niet getoond.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Twitter tekst',
        onChange: onValueChange.bind('twittertext'),
        value: twittertext,
        placeholder: '',
        help: 'Deze tekst wordt getoond wanneer iemand na het tekenen de pagina deelt op twitter.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Whatsapp text',
        onChange: onValueChange.bind('whatsapptext'),
        value: whatsapptext,
        placeholder: '',
        help: 'Deze tekst wordt getoond wanneer iemand na het tekenen de pagina deelt op whatsapp.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Marketingcode',
        onChange: onValueChange.bind('marketingcode'),
        value: marketingcode,
        placeholder: '',
        help: 'Marketingcode.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Literaturecode',
        onChange: onValueChange.bind('literaturecode'),
        value: literaturecode,
        placeholder: '',
        help: 'Literaturecode.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Campaigncode',
        onChange: onValueChange.bind('campaigncode'),
        value: campaigncode,
        placeholder: '',
        help: 'Campaigncode.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Counter min',
        onChange: onNumberChange.bind('countermin'),
        value: countermin,
        help: 'Het minimale aantaal ondertekeningen voordat de counter getoond wordt.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Counter max',
        onChange: onNumberChange.bind('countermax'),
        value: countermax,
        type: 'Number',
        help: 'Tot hoeveel ondertekeningen wordt er geteld?'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Counter tekst',
        onChange: onValueChange.bind('countertext'),
        value: countertext,
        placeholder: '',
        help: 'De tekst naast het aantal.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
        type: "image",
        onSelect: onSelectImage,
        value: image,
        render: function render(_ref) {
          var open = _ref.open;
          return getImageOrButton(open);
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: 'Geavanceerde instellingen'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("strong", {
        className: "panel-body--warning"
      }, "LET OP! De instellingen hieronder alleen gebruiken als je weet wat ze doen en waar ze voor zijn!"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Google Analytics action',
        onChange: onValueChange.bind('ga_action'),
        value: ga_action
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        label: 'Advertentiecampagne?',
        onChange: onValueChange.bind('ad_campaign'),
        value: ad_campaign,
        options: [{
          label: 'Greenpeace',
          value: 'GP'
        }, {
          label: 'Social Blue',
          value: 'SB'
        }, {
          label: 'Jalt',
          value: 'JA'
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Social blue _apRef',
        onChange: onValueChange.bind('apref'),
        value: apref,
        help: 'Vul hier de _apRef uit de Social Blue pixel bedankpagina in.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Jalt tracking identifier',
        onChange: onValueChange.bind('jalt_track'),
        value: jalt_track,
        help: 'Vul hier de tracking identifier van Jalt in.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
        label: 'Formulier ID',
        onChange: onValueChange.bind('form_id'),
        value: form_id,
        help: 'Gebruik dit als er meerdere petitieformulieren op 1 pagina staan. Elk formulier moet een uniek numeriek id hebben.'
      }))))];
    }
  }]);

  return Petition;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./assets/src/blocks/Petition/js/PetitionBlock.js":
/*!********************************************************!*\
  !*** ./assets/src/blocks/Petition/js/PetitionBlock.js ***!
  \********************************************************/
/*! exports provided: PetitionBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetitionBlock", function() { return PetitionBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Preview/js/Preview */ "./assets/src/components/Preview/js/Preview.js");
/* harmony import */ var _Petition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Petition */ "./assets/src/blocks/Petition/js/Petition.js");











var withSelect = wp.data.withSelect;

var PetitionBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PetitionBlock, _BaseBlock);

  function PetitionBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PetitionBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PetitionBlock).call(this)); // Setup references to external functions

    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType; // Register the block

    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameKebabCase, {
      title: 'Petitie',
      icon: 'welcome-widgets-menus',
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName), __('petitie')],
      // in reality, for the image only the imageId is stored. With the higher order function 'withSelect' the imageUrl is retrieved.
      attributes: {
        title: {
          type: 'string'
        },
        subtitle: {
          type: 'string'
        },
        image: {
          type: 'number'
        },
        consent: {
          type: 'string',
          default: 'Als je dit aanvinkt, mag Greenpeace je per e-mail op de hoogte houden over onze campagnes. Ook vragen we je af en toe om steun. Afmelden kan natuurlijk altijd.'
        },
        sign: {
          type: 'string'
        },
        campaignpolicy: {
          type: 'string'
        },
        thanktitle: {
          type: 'string'
        },
        thanktext: {
          type: 'string'
        },
        donatebuttontext: {
          type: 'string',
          default: 'Doneer'
        },
        donatebuttonlink: {
          type: 'string',
          default: '/doneren'
        },
        hidesharingbuttons: {
          type: 'boolean'
        },
        twittertext: {
          type: 'string'
        },
        whatsapptext: {
          type: 'string'
        },
        marketingcode: {
          type: 'string'
        },
        literaturecode: {
          type: 'string'
        },
        campaigncode: {
          type: 'string'
        },
        countermin: {
          type: 'number',
          default: 1000
        },
        countermax: {
          type: 'integer'
        },
        countertext: {
          type: 'string',
          default: 'handtekeningen'
        },
        ga_action: {
          type: 'string',
          default: 'Petitie'
        },
        ad_campaign: {
          type: 'string',
          default: 'GP'
        },
        apref: {
          type: 'string'
        },
        jalt_track: {
          type: 'string',
          default: 'lead'
        },
        form_id: {
          type: 'number',
          default: 1
        }
      },
      edit: withSelect(function (select, props) {
        var attributes = props.attributes;
        var image = attributes.image;
        var image_url = '';

        if (image && 0 < image) {
          var image_object = wp.data.select('core').getMedia(image);

          if (image_object) {
            image_url = image_object.source_url;
          }
        }

        return {
          image_url: image_url
        };
      })(function (_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            isSelected = _ref.isSelected,
            image_url = _ref.image_url;

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this, value));
        }

        function onNumberChange(value) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this, Number(value)));
        }

        function onSelectImage(media) {
          setAttributes({
            image: media.id
          });
        } // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.


        if (isSelected) {
          return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_Petition__WEBPACK_IMPORTED_MODULE_11__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
            image_url: image_url,
            onValueChange: onValueChange,
            onNumberChange: onNumberChange,
            onSelectImage: onSelectImage
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_10__["Preview"], {
            showBar: isSelected
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"], {
            block: 'planet4-gpnl-blocks/' + _this.blockNameKebabCase,
            attributes: attributes
          }))];
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"], {
            block: 'planet4-gpnl-blocks/' + _this.blockNameKebabCase,
            attributes: attributes
          });
        }
      }),
      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: function save() {
        return null;
      }
    });
    return _this;
  }

  return PetitionBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./assets/src/blocks/Quote/js/Quote.js":
/*!*********************************************!*\
  !*** ./assets/src/blocks/Quote/js/Quote.js ***!
  \*********************************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);








var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck;
var Button = wp.components.Button;
var Quote =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Quote, _Component);

  function Quote(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Quote);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Quote).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Quote, [{
    key: "renderEdit",
    value: function renderEdit() {
      var _this = this;

      var getImageOrButton = function getImageOrButton(openEvent) {
        if (_this.props.image_id) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
            src: _this.props.image_url,
            onClick: openEvent,
            className: "quote__img"
          });
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "button-container"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
            onClick: openEvent,
            className: "button"
          }, "+ image"));
        }
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "row quote quote--dark"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "col-2"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MediaUpload, {
        type: "image",
        onSelect: this.props.onSelectImage,
        value: this.props.image_id,
        render: function render(_ref) {
          var open = _ref.open;
          return getImageOrButton(open);
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        class: "col-10"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichText, {
        onChange: this.props.onQuoteChange,
        value: this.props.quote,
        tagName: "p",
        className: "quote__text",
        placeholder: "enter a quote"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichText, {
        onChange: this.props.onQuoteeChange,
        value: this.props.quotee,
        tagName: "p",
        className: "quote__author",
        placeholder: "enter an author"
      }))));
    }
  }, {
    key: "renderView",
    value: function renderView() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ServerSideRender"], {
        block: 'planet4-gpnl-blocks/' + this.props.blockNameKebabCase,
        attributes: {
          quote: this.props.quote,
          quotee: this.props.quotee,
          image_url: this.props.image_url,
          image_id: this.props.image_id
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : this.renderView());
    }
  }]);

  return Quote;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./assets/src/blocks/Quote/js/QuoteBlock.js":
/*!**************************************************!*\
  !*** ./assets/src/blocks/Quote/js/QuoteBlock.js ***!
  \**************************************************/
/*! exports provided: QuoteBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteBlock", function() { return QuoteBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");
/* harmony import */ var _QuoteIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./QuoteIcon */ "./assets/src/blocks/Quote/js/QuoteIcon.js");
/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Quote */ "./assets/src/blocks/Quote/js/Quote.js");
/* harmony import */ var _MediaVideo_js_MediaVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../MediaVideo/js/MediaVideo */ "./assets/src/blocks/MediaVideo/js/MediaVideo.js");










var QuoteBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(QuoteBlock, _BaseBlock);

  function QuoteBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, QuoteBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(QuoteBlock).call(this)); // Setup references to external functions

    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType;
    var blockNameKebabCase = _this.blockNameKebabCase; // Register the block

    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameLowerCase, {
      title: _this.blockName,
      icon: _QuoteIcon__WEBPACK_IMPORTED_MODULE_7__["Icon"],
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName), __('citation'), __('cite')],
      attributes: {
        quote: {
          type: 'string'
        },
        quotee: {
          type: 'string'
        },
        image_id: {
          type: 'number'
        },
        image_url: {
          type: 'string'
        }
      },
      edit: function edit(_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            isSelected = _ref.isSelected;

        function onQuoteChange(value) {
          setAttributes({
            quote: value
          });
        }

        function onQuoteeChange(value) {
          setAttributes({
            quotee: value
          });
        }

        function onSelectImage(media) {
          setAttributes({
            image_url: media.url,
            image_id: media.id
          });
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_Quote__WEBPACK_IMPORTED_MODULE_8__["Quote"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
          isSelected: isSelected,
          blockNameKebabCase: blockNameKebabCase,
          onQuoteChange: onQuoteChange,
          onQuoteeChange: onQuoteeChange,
          onSelectImage: onSelectImage
        }));
      },
      save: function save() {
        return null;
      }
    });
    return _this;
  }

  return QuoteBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_6__["default"]);

/***/ }),

/***/ "./assets/src/blocks/Quote/js/QuoteIcon.js":
/*!*************************************************!*\
  !*** ./assets/src/blocks/Quote/js/QuoteIcon.js ***!
  \*************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var Icon =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Icon, _Component);

  function Icon() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Icon);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Icon).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Icon, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("g", {
        fill: "#191919"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M12 6v3.028c0 2.337-1.529 3.91-3.684 4.335l-.406-.87c.996-.375 1.637-1.587 1.637-2.493h-1.547v-4h4zm5 0v3.028c0 2.337-1.529 3.91-3.684 4.335l-.406-.87c.996-.375 1.637-1.587 1.637-2.493h-1.547v-4h4zm5-3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z"
      })));
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./assets/src/blocks/Test/js/TestBlock.js":
/*!************************************************!*\
  !*** ./assets/src/blocks/Test/js/TestBlock.js ***!
  \************************************************/
/*! exports provided: TestBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestBlock", function() { return TestBlock; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);









var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    PlainText = _wp$editor.PlainText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl; // I am trying to create a LiveBlog block which contains all items of the blog.

var TestBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TestBlock, _BaseBlock);

  function TestBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TestBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TestBlock).call(this));
    var registerBlockType = wp.blocks.registerBlockType;
    var blockNameKebabCase = _this.blockNameKebabCase;
    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameLowerCase, {
      title: _this.blockName,
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName)],
      attributes: {
        items: {
          source: "query",
          default: [],
          selector: "p.liveblog",
          query: {
            image: {
              source: "attribute",
              selector: "img",
              attribute: "src"
            },
            index: {
              source: "text",
              selector: "span.liveblog-index"
            },
            content: {
              source: "text",
              selector: "span.liveblog-content"
            },
            datetime: {
              source: "text",
              selector: "span.liveblog-datetime"
            },
            position: {
              source: "text",
              selector: "span.liveblog-position"
            }
          }
        },
        liveblog_items_shown: {
          type: 'number',
          default: 25
        },
        liveblog_style: {
          type: 'select',
          default: 'one'
        }
      },

      /**
       * The edit function describes the structure of your block in the context of the editor.
       * This represents what the editor will render when the block is used.
       *
       * The "edit" property must be a valid function.
       *
       * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
       */
      // The "edit" property must be a valid function.
      edit: function edit(props) {
        var toggleDateTimePicker = function toggleDateTimePicker(liveblog) {
          console.log(liveblog);
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["DateTimePicker"], {
            currentDate: liveblog.datetime,
            value: liveblog.datetime,
            onChange: function onChange(datetime) {
              var newObject = Object.assign({}, liveblog, {
                datetime: datetime
              });
              props.setAttributes({
                items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(items.filter(function (item) {
                  return item.index != liveblog.index;
                })), [newObject])
              });
            },
            is12Hour: false
          }));
        };

        var items = props.attributes.items;
        var t_style_control = [{
          value: 'one',
          label: __('Style 1')
        }, {
          value: 'two',
          label: __('Style 2')
        }, {
          value: 'three',
          label: __('Style 3')
        }];
        var inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
          title: __('Liveblog Setting')
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
          label: __('Liveblog style'),
          options: t_style_control,
          value: props.attributes.liveblog_style,
          onChange: function onChange(liveblog_style) {
            return props.setAttributes({
              liveblog_style: liveblog_style
            });
          }
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
          label: __('Maximum number of items to show'),
          type: "text",
          value: props.attributes.liveblog_items_shown,
          onChange: function onChange(liveblog_items_shown) {
            return props.setAttributes({
              liveblog_items_shown: liveblog_items_shown
            });
          }
        })));
        var itemsList = items.sort(function (a, b) {
          return b.index - a.index;
        }).map(function (liveblog) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "liveblog-item"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, "Item ", Number(liveblog.index) + 1), ' ', "(", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
            className: "remove-liveblog-item",
            onClick: function onClick() {
              var result = confirm("Are you sure you want to delete this item?");

              if (!result) {
                e.preventDefault();
              } else {
                var newItems = items.filter(function (item) {
                  return item.index != liveblog.index;
                }).map(function (t) {
                  if (t.index > liveblog.index) {
                    t.index -= 1;
                  }

                  return t;
                });
                props.setAttributes({
                  items: newItems
                });
              }
            }
          }, "remove item"), ")"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "wp-block-liveblog"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PlainText, {
            className: "liveblog-content",
            style: {
              height: 58
            },
            placeholder: "content",
            value: liveblog.content // autoFocus
            ,
            onChange: function onChange(content) {
              var newObject = Object.assign({}, liveblog, {
                content: content
              });
              props.setAttributes({
                items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(items.filter(function (item) {
                  return item.index != liveblog.index;
                })), [newObject])
              });
            }
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            onClick: function onClick() {
              return toggleDateTimePicker(liveblog);
            }
          }, "test"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MediaUpload, {
            onSelect: function onSelect(media) {
              var image = media.sizes.medium ? media.sizes.medium.url : media.url;
              var newObject = Object.assign({}, liveblog, {
                image: image
              });
              props.setAttributes({
                items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(items.filter(function (item) {
                  return item.index != liveblog.index;
                })), [newObject])
              });
            },
            type: "image",
            value: liveblog.image,
            render: function render(_ref) {
              var open = _ref.open;
              return liveblog.image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
                className: "gpnl_liveblog_datetime_img",
                style: {
                  backgroundImage: "url(".concat(liveblog.image, ")"),
                  height: '100px'
                },
                onClick: open
              }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
                href: "#",
                className: "gpnl_liveblog_datetime_img",
                onClick: open
              }, "Select Image (optional)");
            }
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PlainText, {
            className: "liveblog-position-content",
            style: {
              display: 'none'
            },
            placeholder: "Position",
            value: liveblog.position,
            onChange: function onChange(position) {
              var newObject = Object.assign({}, liveblog, {
                position: position
              });
              props.setAttributes({
                items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(items.filter(function (item) {
                  return item.index != liveblog.index;
                })), [newObject])
              });
            }
          })));
        });
        return [inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: props.className
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
          // className="add-more-liveblog"
          onClick: function onClick() {
            return props.setAttributes({
              items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(props.attributes.items), [{
                index: props.attributes.items.length,
                content: "",
                datetime: "",
                position: ""
              }])
            });
          }
        }, "+ add item"), itemsList)];
      },

      /**
       * The save function defines the way in which the different attributes should be combined
       * into the final markup, which is then serialized by Gutenberg into post_content.
       *
       * The "save" property must be specified and must be a valid function.
       *
       * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
       */
      save: function save(props) {
        var items = props.attributes.items;
        var itemsList = items.map(function (liveblog) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            key: liveblog.index
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
            className: "liveblog"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
            className: "liveblog-index",
            style: {
              display: "none"
            }
          }, liveblog.index), liveblog.image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
            className: "liveblog-image",
            src: liveblog.image
          }), liveblog.content && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
            className: "liveblog-content"
          }, liveblog.content), liveblog.datetime && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
            className: "liveblog-datetime"
          }, liveblog.datetime), liveblog.position && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
            className: "liveblog-position"
          }, liveblog.position)));
        });

        if (items.length > 0) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("section", {
            className: "section liveblog-block"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "liveblog",
            "data-t_style": props.attributes.liveblog_style,
            "data-t_show": props.attributes.liveblog_items_shown
          }, itemsList));
        } else return null;
      }
    });
    return _this;
  }

  return TestBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_7__["default"]);

/***/ }),

/***/ "./assets/src/blocks/TwoColumnEmbed/js/TwoColumnEmbed.js":
/*!***************************************************************!*\
  !*** ./assets/src/blocks/TwoColumnEmbed/js/TwoColumnEmbed.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TwoColumnEmbed; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);










var TwoColumnEmbed =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TwoColumnEmbed, _Component);

  function TwoColumnEmbed() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TwoColumnEmbed);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TwoColumnEmbed).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TwoColumnEmbed, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          column_title = _this$props.column_title,
          column_description = _this$props.column_description,
          column_cta_text = _this$props.column_cta_text,
          column_cta_link = _this$props.column_cta_link,
          embed_option = _this$props.embed_option,
          iframe_src = _this$props.iframe_src,
          iframe_height = _this$props.iframe_height,
          image = _this$props.image,
          column_size = _this$props.column_size,
          image_url = _this$props.image_url,
          onSelectImage = _this$props.onSelectImage,
          onValueChange = _this$props.onValueChange,
          onNumberChange = _this$props.onNumberChange; // this will render either the fields for the image in the second column, or the iframe fields.

      var showIframeOrImageFields = function showIframeOrImageFields() {
        if (embed_option === 'image') {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, "Afbeelding"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
            type: "image",
            onSelect: onSelectImage,
            value: image,
            render: function render(_ref) {
              var open = _ref.open;
              return getImageOrButton(open);
            }
          })));
        } else if (embed_option === 'iframe') {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
            label: 'iframe_src',
            onChange: onValueChange.bind('iframe_src'),
            value: iframe_src,
            placeholder: 'iframe_src',
            help: 'De URL van  de iframe.'
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
            label: 'iframe_height',
            onChange: onNumberChange.bind('iframe_height'),
            value: iframe_height,
            placeholder: 'iframe_height',
            help: 'Hoogte van iframe in px.'
          }));
        } else {
          console.log("There is something wrong with the code. Please check the code for this block.");
        }
      };

      var getImageOrButton = function getImageOrButton(openEvent) {
        if (image && 0 < image) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
            src: image_url,
            onClick: openEvent,
            width: '100px',
            height: '100px'
          }));
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "button-container"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            onClick: openEvent,
            className: "button"
          }, "+ ", 'Selecteer afbeelding'));
        }
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Titel van het blok (optioneel)',
        onChange: onValueChange.bind('title'),
        value: title,
        placeholder: 'Vul een titel in'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Ondertitel van het blok (optioneel)',
        onChange: onValueChange.bind('description'),
        value: description,
        placeholder: 'Description'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Titel van de kolom (optioneel)',
        onChange: onValueChange.bind('column_title'),
        value: column_title,
        placeholder: 'columns_title'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: 'Tekst in kolom (optioneel)',
        onChange: onValueChange.bind('column_description'),
        value: column_description
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'Tekst op CTA knop (optioneel)',
        onChange: onValueChange.bind('column_cta_text'),
        value: column_cta_text,
        help: 'Deze tekst wordt getoond op de knop die voor een "call to action" is.'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: 'CTA link (optioneel, behalve wanneer knop wordt gebruikt)',
        onChange: onValueChange.bind('column_cta_link'),
        value: column_cta_link,
        help: 'Vul de link in waarnaar de CTA-knop verwijst.'
      }), showIframeOrImageFields(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: 'Iframe of afbeelding'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        label: 'embed_option?',
        onChange: onValueChange.bind('embed_option'),
        value: embed_option,
        options: [{
          label: 'Iframe',
          value: 'iframe'
        }, {
          label: 'Afbeelding',
          value: 'image'
        }]
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: 'Verhouding kolommen'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        label: 'column_size?',
        onChange: onValueChange.bind('column_size'),
        value: column_size,
        options: [{
          label: '50% / 50%',
          value: '6'
        }, {
          label: '66% / 33%',
          value: '8'
        }]
      }))));
    }
  }]);

  return TwoColumnEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./assets/src/blocks/TwoColumnEmbed/js/TwoColumnEmbedBlock.js":
/*!********************************************************************!*\
  !*** ./assets/src/blocks/TwoColumnEmbed/js/TwoColumnEmbedBlock.js ***!
  \********************************************************************/
/*! exports provided: TwoColumnEmbedBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoColumnEmbedBlock", function() { return TwoColumnEmbedBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Preview/js/Preview */ "./assets/src/components/Preview/js/Preview.js");
/* harmony import */ var _TwoColumnEmbed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TwoColumnEmbed */ "./assets/src/blocks/TwoColumnEmbed/js/TwoColumnEmbed.js");
/* harmony import */ var _TwoColumnEmbedIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TwoColumnEmbedIcon */ "./assets/src/blocks/TwoColumnEmbed/js/TwoColumnEmbedIcon.js");











var withSelect = wp.data.withSelect;


var TwoColumnEmbedBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TwoColumnEmbedBlock, _BaseBlock);

  function TwoColumnEmbedBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TwoColumnEmbedBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TwoColumnEmbedBlock).call(this)); // Setup references to external functions

    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType; // Register the block

    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameKebabCase, {
      title: '2 kolommen met iframe of afbeelding',
      icon: _TwoColumnEmbedIcon__WEBPACK_IMPORTED_MODULE_12__["Icon"],
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName), __('embed'), __('iframe')],
      attributes: {
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        column_title: {
          type: 'string'
        },
        column_description: {
          type: 'string'
        },
        column_cta_text: {
          type: 'string'
        },
        column_cta_link: {
          type: 'string'
        },
        embed_option: {
          type: 'string',
          default: 'iframe'
        },
        iframe_src: {
          type: 'string'
        },
        iframe_height: {
          type: 'number',
          default: 400
        },
        image: {
          type: 'number'
        },
        column_size: {
          type: 'number',
          default: '6'
        }
      },
      edit: withSelect(function (select, props) {
        var attributes = props.attributes;
        var image = attributes.image;
        var image_url = '';

        if (image && 0 < image) {
          var image_object = wp.data.select('core').getMedia(image);

          if (image_object) {
            image_url = image_object.source_url;
          }
        }

        return {
          image_url: image_url
        };
      })(function (_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            isSelected = _ref.isSelected,
            image_url = _ref.image_url;

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this, value));
        }

        function onNumberChange(value) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this, Number(value)));
        }

        function onSelectImage(media) {
          setAttributes({
            image: media.id
          });
        } // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.


        if (isSelected) {
          return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_TwoColumnEmbed__WEBPACK_IMPORTED_MODULE_11__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
            image_url: image_url,
            onValueChange: onValueChange,
            onNumberChange: onNumberChange,
            onSelectImage: onSelectImage
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_10__["Preview"], {
            showBar: isSelected
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"], {
            block: 'planet4-gpnl-blocks/' + _this.blockNameKebabCase,
            attributes: attributes
          }))];
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"], {
            block: 'planet4-gpnl-blocks/' + _this.blockNameKebabCase,
            attributes: attributes
          });
        }
      }),
      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: function save() {
        return null;
      }
    });
    return _this;
  }

  return TwoColumnEmbedBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./assets/src/blocks/TwoColumnEmbed/js/TwoColumnEmbedIcon.js":
/*!*******************************************************************!*\
  !*** ./assets/src/blocks/TwoColumnEmbed/js/TwoColumnEmbedIcon.js ***!
  \*******************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var Icon =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Icon, _Component);

  function Icon() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Icon);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Icon).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Icon, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("svg", {
        viewBox: "0 0 1000 1000",
        height: "24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("g", {
        fill: "#333"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "m945.5 24.8h-891c-24.6 0-44.5 20-44.5 44.5v861.2c0 24.6 19.9 44.5 44.5 44.5h891c24.6 0 44.5-20 44.5-44.5v-861.1c0-24.6-20-44.6-44.5-44.6zm-490 861.3h-356.4v-702.8h356.4v702.8zm445.4 0h-356.4v-702.8h356.4v702.8z"
      })));
    }
  }]);

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./assets/src/components/Preview/js/Preview.js":
/*!*****************************************************!*\
  !*** ./assets/src/components/Preview/js/Preview.js ***!
  \*****************************************************/
/*! exports provided: Preview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return Preview; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var Preview =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Preview, _Component);

  function Preview() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Preview);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Preview).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Preview, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "Preview"
      }, this.props.showBar ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "PreviewBar"
      }, "Preview") : null, this.props.children);
    }
  }]);

  return Preview;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./assets/src/editor/js/editorIndex.js":
/*!*********************************************!*\
  !*** ./assets/src/editor/js/editorIndex.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_Quote_js_QuoteBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/Quote/js/QuoteBlock */ "./assets/src/blocks/Quote/js/QuoteBlock.js");
/* harmony import */ var _blocks_HeroImage_js_HeroImageBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/HeroImage/js/HeroImageBlock */ "./assets/src/blocks/HeroImage/js/HeroImageBlock.js");
/* harmony import */ var _blocks_MediaVideo_js_MediaVideoBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/MediaVideo/js/MediaVideoBlock */ "./assets/src/blocks/MediaVideo/js/MediaVideoBlock.js");
/* harmony import */ var _blocks_Newsletter_js_NewsletterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/Newsletter/js/NewsletterBlock */ "./assets/src/blocks/Newsletter/js/NewsletterBlock.js");
/* harmony import */ var _blocks_Test_js_TestBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/Test/js/TestBlock */ "./assets/src/blocks/Test/js/TestBlock.js");
/* harmony import */ var _blocks_Petition_js_PetitionBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/Petition/js/PetitionBlock */ "./assets/src/blocks/Petition/js/PetitionBlock.js");
/* harmony import */ var _blocks_Donation_js_DonationBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/Donation/js/DonationBlock */ "./assets/src/blocks/Donation/js/DonationBlock.js");
/* harmony import */ var _blocks_TwoColumnEmbed_js_TwoColumnEmbedBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/TwoColumnEmbed/js/TwoColumnEmbedBlock */ "./assets/src/blocks/TwoColumnEmbed/js/TwoColumnEmbedBlock.js");
// All the JS of our blocks have to be imported and instantiated in this file so they can all be used in the Gutenberg editor.
// Styles of the blocks are imported seperately in the 'editor-styles.scss' file.

var quoteBlock = new _blocks_Quote_js_QuoteBlock__WEBPACK_IMPORTED_MODULE_0__["QuoteBlock"]();

var heroImageBlock = new _blocks_HeroImage_js_HeroImageBlock__WEBPACK_IMPORTED_MODULE_1__["HeroImageBlock"]();

var mediaVideoBlock = new _blocks_MediaVideo_js_MediaVideoBlock__WEBPACK_IMPORTED_MODULE_2__["MediaVideoBlock"]();

var newsletterBlock = new _blocks_Newsletter_js_NewsletterBlock__WEBPACK_IMPORTED_MODULE_3__["NewsletterBlock"]();

var testBlock = new _blocks_Test_js_TestBlock__WEBPACK_IMPORTED_MODULE_4__["TestBlock"]();

var petitionBlock = new _blocks_Petition_js_PetitionBlock__WEBPACK_IMPORTED_MODULE_5__["PetitionBlock"]();

var donationBlock = new _blocks_Donation_js_DonationBlock__WEBPACK_IMPORTED_MODULE_6__["DonationBlock"]();

var twoColumnEmbedBlock = new _blocks_TwoColumnEmbed_js_TwoColumnEmbedBlock__WEBPACK_IMPORTED_MODULE_7__["TwoColumnEmbedBlock"]();

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=editorIndex.js.map