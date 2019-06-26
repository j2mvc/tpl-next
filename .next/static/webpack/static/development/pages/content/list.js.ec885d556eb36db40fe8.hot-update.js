webpackHotUpdate("static/development/pages/content/list.js",{

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      as = _ref.as,
      href = _ref.href;
  var style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    window.location.href = as;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    as: as,
    href: href,
    onClick: handleClick,
    style: style
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ })

})
//# sourceMappingURL=list.js.ec885d556eb36db40fe8.hot-update.js.map