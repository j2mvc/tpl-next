webpackHotUpdate("static/development/pages/content/list.js",{

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    prefetch: true,
    as: "/c/".concat(props.item.id),
    href: {
      pathname: '/content/list',
      query: {
        catId: props.item.id
      }
    }
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

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false

})
//# sourceMappingURL=list.js.ea338a480f89ecd217ca.hot-update.js.map