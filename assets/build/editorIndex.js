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
/* harmony import */ var _HeroImageSelected__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeroImageSelected */ "./assets/src/blocks/HeroImage/js/HeroImageSelected.js");











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
      title: _this.blockName,
      icon: 'format-image',
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName), __('hero'), __('header'), __('image')],
      attributes: {
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        image_id: {
          type: 'number'
        },
        image_url: {
          type: 'string'
        },
        link_text: {
          type: 'string'
        },
        link_url: {
          type: 'string'
        },
        is_small: {
          type: 'boolean'
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

        function onSelectImage(media) {
          setAttributes({
            image_url: media.url,
            image_id: media.id
          });
        } // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.


        if (isSelected) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_HeroImageSelected__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
            onValueChange: onValueChange,
            onSelectImage: onSelectImage
          }));
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

  return HeroImageBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./assets/src/blocks/HeroImage/js/HeroImageSelected.js":
/*!*************************************************************!*\
  !*** ./assets/src/blocks/HeroImage/js/HeroImageSelected.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroImageSelected; });
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










var HeroImageSelected =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(HeroImageSelected, _Component);

  function HeroImageSelected() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HeroImageSelected);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HeroImageSelected).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HeroImageSelected, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          link_text = _this$props.link_text,
          link_url = _this$props.link_url,
          image_id = _this$props.image_id,
          image_url = _this$props.image_url,
          is_small = _this$props.is_small,
          onValueChange = _this$props.onValueChange,
          onSelectImage = _this$props.onSelectImage;
      var fields = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "page-template hero__wrapper "
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "hero__text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
        onChange: onValueChange.bind('title'),
        value: title,
        tagName: 'span',
        className: 'hero__title',
        placeholder: 'enter a title (optional)'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
        onChange: onValueChange.bind('description'),
        value: description,
        tagName: 'p',
        className: 'hero__description',
        placeholder: 'enter an abstract / description (optional)'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        style: {
          width: '280px'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
        onChange: onValueChange.bind('link_text'),
        value: link_text,
        tagName: 'button',
        className: 'btn btn-small btn-medium btn-primary hero__button',
        placeholder: 'button text (optional)'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        style: {
          width: '400px'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
        onChange: onValueChange.bind('link_url'),
        value: link_url,
        tagName: 'p',
        className: '',
        placeholder: 'button url (optional unless button text is used)',
        style: {
          backgroundColor: 'white'
        }
      }))));

      var getImageOrButton = function getImageOrButton(openEvent) {
        if (image_id) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            style: {
              height: "100%",
              overflow: "hidden",
              backgroundImage: "url(".concat(image_url, ")"),
              backgroundSize: "cover"
            }
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: 'components-toolbar'
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
            className: 'components-toolbar-text-button',
            onClick: openEvent
          }, "change hero image"))), fields);
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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

      if (is_small === true) {
        heroClass = "hero hero__small";
      }

      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: heroClass,
        style: {
          backgroundColor: "#f4f4f4",
          maxWidth: "100%",
          margin: "0"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
        type: "image",
        onSelect: onSelectImage,
        value: image_id,
        render: function render(_ref) {
          var open = _ref.open;
          return getImageOrButton(open);
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: 'Height'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
        label: 'small header',
        help: 'When selected the header height will be smaller than normal. Also, the abstract / description text will no longer appear!',
        value: is_small,
        checked: is_small,
        onChange: onValueChange.bind('is_small')
      })))];
    }
  }]);

  return HeroImageSelected;
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
/*! exports provided: Newsletter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Newsletter", function() { return Newsletter; });
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
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Quote_js_Quote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Quote/js/Quote */ "./assets/src/blocks/Quote/js/Quote.js");












var Newsletter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Newsletter, _Component);

  function Newsletter(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Newsletter);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Newsletter).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Newsletter, [{
    key: "renderEdit",
    value: function renderEdit() {
      var _this = this;

      var getImageOrButton = function getImageOrButton(openEvent) {
        // if (this.props.image_id) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          style: {
            height: "100%",
            overflow: "hidden",
            backgroundImage: "url(".concat(_this.props.backgroundimage_url, ")"),
            backgroundSize: "cover"
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: 'components-toolbar'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
          onClick: openEvent
        }, "change background image"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "page-template gpnl-newsletter__wrapper "
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "gpnl-newsletter__text"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          className: "gpnl-newsletter__title"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
          onChange: _this.props.onTitleChange,
          value: _this.props.title,
          tagName: 'span',
          placeholder: 'enter a title (optional)'
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
          onChange: _this.props.onSubtitleChange,
          value: _this.props.subtitle,
          tagName: 'p',
          className: 'gpnl-newsletter__description',
          placeholder: 'enter an abstract / description (optional)'
        })))); // } else {
        // 	return (
        // 		<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        // 			<Button
        // 				onClick={openEvent}
        // 				style={{position: "absolute", top: "50%", left: "50%", transform: 'translateX(-50%) translateY(-50%)'}}
        // 				className="btn btn-large btn-primary">
        // 				select an image
        // 			</Button>
        // 		</div>
        // 	);
        // }
      };

      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: 'block happy-point-block-wrap block-wide newsletter__block',
        style: {
          backgroundColor: "#f4f4f4",
          maxWidth: "100%",
          margin: "0"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
        type: "image",
        onSelect: this.props.onSelectImage,
        value: this.props.image_id,
        render: function render(_ref) {
          var open = _ref.open;
          return getImageOrButton(open);
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
        title: 'Database settings'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
        label: 'Marketing code',
        value: this.props.maketingcode,
        placeholder: 'marketing code',
        onChange: this.props.onMarketingcodeChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["RichText"], {
        label: 'literature code',
        value: this.props.literaturecode,
        placeholder: 'literature code',
        onChange: this.props.onLiteraturecodeChange
      }))))];
    }
  }, {
    key: "renderView",
    value: function renderView() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ServerSideRender"], {
        block: 'planet4-gpnl-blocks/' + this.props.blockNameKebabCase,
        attributes: {
          title: this.props.title,
          subtitle: this.props.subtitle,
          backgroundimage_url: this.props.backgroundimage_url,
          backgroundimage_id: this.props.backgroundimage_id
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : this.renderView());
    }
  }]);

  return Newsletter;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

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
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Newsletter */ "./assets/src/blocks/Newsletter/js/Newsletter.js");








var NewsletterBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NewsletterBlock, _BaseBlock);

  function NewsletterBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, NewsletterBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NewsletterBlock).call(this)); // Setup references to external functions

    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType;
    var blockNameKebabCase = _this.blockNameKebabCase; // Register the block

    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameLowerCase, {
      title: _this.blockName,
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName), __('news'), __('subscription'), __('email')],
      attributes: {
        title: {
          type: 'string'
        },
        subtitle: {
          type: 'string'
        },
        backgroundimage_id: {
          type: 'number'
        },
        backgroundimage_url: {
          type: 'string'
        },
        backgroundimage_opacity: {
          type: 'number'
        },
        marketingcode: {
          type: 'string'
        },
        literaturecode: {
          type: 'boolean'
        },
        screenid: {
          type: 'text'
        },
        form_id: {
          type: 'number'
        }
      },
      edit: function edit(_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes,
            isSelected = _ref.isSelected;

        function onTitleChange(value) {
          setAttributes({
            title: value
          });
        }

        function onSubtitleChange(value) {
          setAttributes({
            subtitle: value
          });
        }

        function onMarketingcodeChange(value) {
          setAttributes({
            marketingcode: value
          });
        }

        function onLiteraturecodeChange(value) {
          setAttributes({
            literaturecode: value
          });
        }

        function onSelectImage(media) {
          setAttributes({
            backgroundimage_id: media.id,
            backgroundimage_url: media.url
          });
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_Newsletter__WEBPACK_IMPORTED_MODULE_7__["Newsletter"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
          blockNameKebabCase: blockNameKebabCase,
          isSelected: isSelected,
          onTitleChange: onTitleChange,
          onSubtitleChange: onSubtitleChange,
          onMarketingcodeChange: onMarketingcodeChange,
          onLiteraturecodeChange: onLiteraturecodeChange,
          onSelectImage: onSelectImage
        }));
      },
      save: function save() {
        return null;
      }
    });
    return _this;
  }

  return NewsletterBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_6__["default"]);

/***/ }),

/***/ "./assets/src/blocks/Petition/js/Petition.js":
/*!***************************************************!*\
  !*** ./assets/src/blocks/Petition/js/Petition.js ***!
  \***************************************************/
/*! exports provided: Petition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Petition", function() { return Petition; });
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
/* harmony import */ var _components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Preview/js/Preview */ "./assets/src/components/Preview/js/Preview.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);









var _wp = wp,
    apiFetch = _wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var Petition =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Petition, _Component);

  function Petition(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Petition);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Petition).call(this, props)); // Populate tag tokens for saved tags.

    var tagTokens = props.tagsList.filter(function (tag) {
      return props.tags.includes(tag.id);
    }).map(function (tag) {
      return tag.name;
    }); // Populate post types tokens for saved post types.

    var postTypeTokens = props.postTypesList.filter(function (post_type) {
      return props.post_types.includes(post_type.id);
    }).map(function (post_type) {
      return post_type.name;
    });
    _this.state = {
      tagTokens: tagTokens,
      postTypeTokens: postTypeTokens,
      selectedPosts: []
    };

    _this.populatePostsToken();

    return _this;
  }
  /**
   * Set component's state for existing blocks.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Petition, [{
    key: "populatePostsToken",
    value: function populatePostsToken() {
      var _this2 = this;

      if (this.props.posts.length > 0) {
        apiFetch({
          path: addQueryArgs('/wp/v2/posts', {
            per_page: 50,
            page: 1,
            include: this.props.posts
          })
        }).then(function (posts) {
          var postsTokens = posts.map(function (post) {
            return post.title.rendered;
          });
          var postsSuggestions = posts.map(function (post) {
            return post.title.rendered;
          });

          _this2.setState({
            postsTokens: postsTokens,
            postsList: posts,
            postsSuggestions: postsSuggestions,
            selectedPosts: posts
          });
        });
      } else {
        this.setState({
          postsTokens: [],
          postsList: [],
          postsSuggestions: [],
          selectedPosts: []
        });
      }
    }
    /**
     * Search posts using wp api.
     *
     * @param tokens
     */

  }, {
    key: "onPostsSearch",
    value: function onPostsSearch(tokens) {
      var _this3 = this;

      apiFetch({
        path: addQueryArgs('/wp/v2/posts', {
          per_page: 50,
          page: 1,
          search: tokens,
          orderby: 'title',
          post_status: 'publish'
        })
      }).then(function (posts) {
        var postsSuggestions = posts.map(function (post) {
          return post.title.rendered;
        });

        _this3.setState({
          postsSuggestions: postsSuggestions,
          postsList: posts
        });
      });
    }
  }, {
    key: "onSelectedTagsChange",
    value: function onSelectedTagsChange(tokens) {
      var _this4 = this;

      var tagIds = tokens.map(function (token) {
        return _this4.props.tagsList.filter(function (tag) {
          return tag.name === token;
        })[0].id;
      });
      this.props.onSelectedTagsChange(tagIds);
      this.setState({
        tagTokens: tokens
      });
    }
  }, {
    key: "onSelectedPostTypesChange",
    value: function onSelectedPostTypesChange(tokens) {
      var _this5 = this;

      var postTypeIds = tokens.map(function (token) {
        return _this5.props.postTypesList.filter(function (postType) {
          return postType.name === token;
        })[0].id;
      });
      this.props.onSelectedPostTypesChange(postTypeIds);
      this.setState({
        postTypeTokens: tokens
      });
    }
  }, {
    key: "onSelectedPostsChange",
    value: function onSelectedPostsChange(tokens) {
      var _this6 = this;

      // Array to hold references to selected posts objects.
      var currentSelectedPosts = [];
      tokens.forEach(function (token) {
        var f = _this6.state.postsList.filter(function (post) {
          return post.title.rendered === token;
        });

        if (f.length > 0) {
          currentSelectedPosts.push(f[0]);
        }

        f = _this6.state.selectedPosts.filter(function (post) {
          return post.title.rendered === token;
        });

        if (f.length > 0) {
          currentSelectedPosts.push(f[0]);
        }
      });
      var postIds = currentSelectedPosts.map(function (post) {
        return post.id;
      });
      this.props.onSelectedPostsChange(postIds);
      this.setState({
        postsTokens: tokens,
        selectedPosts: currentSelectedPosts
      });
    }
  }, {
    key: "renderEdit",
    value: function renderEdit() {
      var _this7 = this;

      var __ = wp.i18n.__;
      var tagSuggestions = this.props.tagsList.map(function (tag) {
        return tag.name;
      });
      var postTypeSuggestions = this.props.postTypesList.map(function (postType) {
        return postType.name;
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('Title', 'p4ge'),
        placeholder: __('Enter title', 'p4ge'),
        help: __('Your default is set to [ Related Articles ]', 'p4ge'),
        value: this.props.title,
        onChange: this.props.onTitleChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: __('Description', 'p4ge'),
        placeholder: __('Enter description', 'p4ge'),
        value: this.props.description,
        onChange: this.props.onDescriptionChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('Button Text', 'p4ge'),
        placeholder: __('Override button text', 'p4ge'),
        help: __('Your default is set to [ Load More ]', 'p4ge'),
        value: this.props.read_more_text,
        onChange: this.props.onReadmoretextChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('Button Link', 'p4ge'),
        placeholder: __('Add read more button link', 'p4ge'),
        value: this.props.read_more_link,
        onChange: this.props.onReadmorelinkChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["CheckboxControl"], {
        label: __('Open in a new Tab', 'p4ge'),
        help: __('Open button link in new tab', 'p4ge'),
        value: this.props.button_link_new_tab,
        onChange: this.props.onButtonLinkTabChange
      })), this.props.posts !== 'undefined' && this.props.posts.length === 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('Articles count', 'p4ge'),
        help: __('Number of articles', 'p4ge'),
        type: "number",
        value: this.props.count,
        onChange: this.props.onCountChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["FormTokenField"], {
        value: this.state.tagTokens,
        suggestions: tagSuggestions,
        label: __('Select Tags', 'p4ge'),
        onChange: function onChange(tokens) {
          return _this7.onSelectedTagsChange(tokens);
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
        className: "FieldHelp"
      }, "Associate this block with Actions that have specific Tags")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["FormTokenField"], {
        value: this.state.postTypeTokens,
        suggestions: postTypeSuggestions,
        label: __('Post Types', 'p4ge'),
        onChange: function onChange(tokens) {
          return _this7.onSelectedPostTypesChange(tokens);
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "ignore-categories-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["CheckboxControl"], {
        label: __('Ignore categories', 'p4ge'),
        help: __('Ignore categories when filtering posts to populate the content of this block', 'p4ge'),
        value: this.props.ignore_categories,
        onChange: this.props.onIgnoreCategoriesChange
      }))) : null, this.props.tags.length === 0 && this.props.post_types.length === 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, __('Manual override', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["FormTokenField"], {
        value: this.state.postsTokens,
        suggestions: this.state.postsSuggestions,
        label: __('CAUTION: Adding articles individually will override the automatic functionality of this block. For good user experience, please include at least three articles so that spacing and alignment of the design remains in tact.', 'p4ge'),
        onChange: function onChange(tokens) {
          return _this7.onSelectedPostsChange(tokens);
        },
        onInputChange: function onInputChange(tokens) {
          return _this7.onPostsSearch(tokens);
        },
        placeholder: "Select Posts",
        maxLength: "10",
        maxSuggestions: "20"
      })) : null);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview_js_Preview__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ServerSideRender"], {
        block: 'planet4-blocks/articles',
        attributes: {
          read_more_text: this.props.read_more_text,
          read_more_link: this.props.read_more_link,
          tags: this.props.tags,
          post_types: this.props.post_types,
          posts: this.props.posts,
          title: this.props.title,
          description: this.props.description,
          count: this.props.count,
          ignore_categories: this.props.ignore_categories
        }
      })));
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
/* harmony import */ var _Petition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Petition.js */ "./assets/src/blocks/Petition/js/Petition.js");
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");








var PetitionBlock =
/*#__PURE__*/
function (_BaseBlock) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PetitionBlock, _BaseBlock);

  function PetitionBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PetitionBlock);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PetitionBlock).call(this)); // Setup references to external functions

    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType;
    var withSelect = wp.data.withSelect; // Register the block

    registerBlockType('planet4-gpnl-blocks/' + _this.blockNameKebabCase, {
      title: _this.blockName,
      icon: 'format-image',
      category: 'planet4-gpnl-blocks',
      keywords: [__(_this.blockName), __('hero'), __('header'), __('image')],
      // This attributes definition mimics the one in the PHP side.
      attributes: {
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        count: {
          type: 'integer',
          default: 3
        },
        tags: {
          type: 'array',
          default: []
        },
        posts: {
          type: 'array',
          default: []
        },
        post_types: {
          type: 'array',
          default: []
        },
        read_more_text: {
          type: 'string'
        },
        read_more_link: {
          type: 'string',
          default: ''
        },
        button_link_new_tab: {
          type: 'boolean',
          default: false
        }
      },
      // withSelect is a "Higher Order Component", it works as
      // a Decorator, it will provide some basic API functionality
      // through `select`.
      edit: withSelect(function (select) {
        var tagsTaxonomy = 'post_tag';
        var postTypesTaxonomy = 'p4-page-type';
        var args = {
          hide_empty: false,
          per_page: 50
        };

        var _select = select('core'),
            getEntityRecords = _select.getEntityRecords; // We should probably wrap all these in a single call,
        // or maybe use our own way of retrieving data from the
        // API, I don't know how this scales.


        var tagsList = getEntityRecords('taxonomy', tagsTaxonomy, args);
        var postTypesList = getEntityRecords('taxonomy', postTypesTaxonomy, args);
        return {
          postTypesList: postTypesList,
          tagsList: tagsList
        };
      })(function (_ref) {
        var postTypesList = _ref.postTypesList,
            tagsList = _ref.tagsList,
            isSelected = _ref.isSelected,
            attributes = _ref.attributes,
            setAttributes = _ref.setAttributes;

        if (!tagsList || !postTypesList) {
          return "Populating block's fields...";
        } // TO-DO: Check for posts types and posts too...


        if (tagsList && tagsList.length === 0 || postTypesList && postTypesList.length === 0) {
          return "Populating block's fields...";
        } // These methods are passed down to the
        // Articles component, they update the corresponding attribute.


        function onTitleChange(value) {
          setAttributes({
            title: value
          });
        }

        function onDescriptionChange(value) {
          setAttributes({
            description: value
          });
        }

        function onReadmoretextChange(value) {
          setAttributes({
            read_more_text: value
          });
        }

        function onCountChange(value) {
          setAttributes({
            count: Number(value)
          });
        }

        function onReadmorelinkChange(value) {
          setAttributes({
            read_more_link: value
          });
        }

        function onButtonLinkTabChange(value) {
          setAttributes({
            button_link_new_tab: value
          });
        }

        function onSelectedTagsChange(tagIds) {
          setAttributes({
            tags: tagIds
          });
        }

        function onSelectedPostsChange(value) {
          setAttributes({
            posts: value
          });
        }

        function onSelectedPostTypesChange(postTypeIds) {
          setAttributes({
            post_types: postTypeIds
          });
        }

        function onIgnoreCategoriesChange(value) {
          setAttributes({
            ignore_categories: value
          });
        } // We pass down all the attributes to Covers as props using
        // the spread operator. Then we selectively add more
        // props.


        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_Petition_js__WEBPACK_IMPORTED_MODULE_6__["Petition"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
          isSelected: isSelected,
          tagsList: tagsList,
          postTypesList: postTypesList,
          onSelectedTagsChange: onSelectedTagsChange,
          onTitleChange: onTitleChange,
          onDescriptionChange: onDescriptionChange,
          onCountChange: onCountChange,
          onSelectedPostsChange: onSelectedPostsChange,
          onSelectedPostTypesChange: onSelectedPostTypesChange,
          onReadmoretextChange: onReadmoretextChange,
          onReadmorelinkChange: onReadmorelinkChange,
          onButtonLinkTabChange: onButtonLinkTabChange,
          onIgnoreCategoriesChange: onIgnoreCategoriesChange
        }));
      }),
      save: function save() {
        return null;
      }
    });
    return _this;
  }

  return PetitionBlock;
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_7__["default"]);

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
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M12 6v3.028c0 2.337-1.529 3.91-3.684 4.335l-.406-.87c.996-.375 1.637-1.587 1.637-2.493h-1.547v-4h4zm5 0v3.028c0 2.337-1.529 3.91-3.684 4.335l-.406-.87c.996-.375 1.637-1.587 1.637-2.493h-1.547v-4h4zm5-3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z"
      }));
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
/* harmony import */ var _BaseBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BaseBlock */ "./assets/src/blocks/BaseBlock.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);








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
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["DateTimePicker"], {
            currentDate: liveblog.datetime,
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
            value: liveblog.datetime,
            is12Hour: false
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MediaUpload, {
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
}(_BaseBlock__WEBPACK_IMPORTED_MODULE_6__["default"]);

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
// All the JS of our blocks have to be imported and instantiated in this file so they can all be used in the Gutenberg editor.
// Styles of the blocks are imported seperately in the 'editor-styles.scss' file.

var quoteBlock = new _blocks_Quote_js_QuoteBlock__WEBPACK_IMPORTED_MODULE_0__["QuoteBlock"]();

var heroImageBlock = new _blocks_HeroImage_js_HeroImageBlock__WEBPACK_IMPORTED_MODULE_1__["HeroImageBlock"]();

var mediaVideoBlock = new _blocks_MediaVideo_js_MediaVideoBlock__WEBPACK_IMPORTED_MODULE_2__["MediaVideoBlock"]();

var newsletterBlock = new _blocks_Newsletter_js_NewsletterBlock__WEBPACK_IMPORTED_MODULE_3__["NewsletterBlock"]();

var testBlock = new _blocks_Test_js_TestBlock__WEBPACK_IMPORTED_MODULE_4__["TestBlock"]();

var petitionBlock = new _blocks_Petition_js_PetitionBlock__WEBPACK_IMPORTED_MODULE_5__["PetitionBlock"]();

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