webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PageUI.js":
/*!******************************!*\
  !*** ./components/PageUI.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveLink */ "./components/ActiveLink.js");


/**
 * 导航条目
 * @param props
 * @returns {*}
 * @constructor
 */

var NavbarItem = function NavbarItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    prefetch: true,
    as: "/c/".concat(props.item.id)
  }, props.item.name));
};
/**
 * 导航栏
 * @param props
 * @returns {*}
 * @constructor
 */


var Navbar = function Navbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar"
  }, props.list && props.list.length > 0 && props.list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavbarItem, {
      key: item.id,
      item: item
    });
  }));
};

var PageUI = {
  Navbar: Navbar
};
/* harmony default export */ __webpack_exports__["default"] = (PageUI);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false

})
//# sourceMappingURL=index.js.84c2b07697b2f080b230.hot-update.js.map