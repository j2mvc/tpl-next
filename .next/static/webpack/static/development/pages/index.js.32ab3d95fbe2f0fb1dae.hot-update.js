webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PageUI.js":
/*!******************************!*\
  !*** ./components/PageUI.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActiveLink */ "./components/ActiveLink.js");



/**
 * 导航条目
 * @param props
 * @returns {*}
 * @constructor
 */

var NavbarItem = function NavbarItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefetch: true,
    as: "/c/".concat(props.item.id),
    href: "/content/list?catId=".concat(props.item.id)
  }, props.item.name));
};
/**
 * 导航栏
 * @param props
 * @returns {*}
 * @constructor
 */


var Navbar = function Navbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2349833234" + " " + 'navbar'
  }, props.list && props.list.length > 0 && props.list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarItem, {
      key: item.id,
      item: item
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2349833234"
  }, ".navbar.jsx-2349833234{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QndCLEFBRWdCLDBFQUNHLGdCQUFDIiwiZmlsZSI6Ii9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3RpdmVMaW5rIGZyb20gXCIuL0FjdGl2ZUxpbmtcIjtcblxuLyoqXG4gKiDlr7zoiKrmnaHnm65cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTmF2YmFySXRlbSA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxBY3RpdmVMaW5rICBwcmVmZXRjaCBhcz17YC9jLyR7cHJvcHMuaXRlbS5pZH1gfSBocmVmPXtgL2NvbnRlbnQvbGlzdD9jYXRJZD0ke3Byb3BzLml0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9saT5cbiAgICApXG59XG5cbi8qKlxuICog5a+86Iiq5qCPXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IE5hdmJhciA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J25hdmJhcic+XG4gICAgICAgICAgICB7cHJvcHMubGlzdCAmJiBwcm9wcy5saXN0Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHByb3BzLmxpc3QubWFwKChpdGVtKT0+PE5hdmJhckl0ZW0gIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0vPil9XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzMzM1xuICAgICAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5jb25zdCBQYWdlVUkgPSB7XG4gICAgTmF2YmFyXG59XG5leHBvcnQgZGVmYXVsdCBQYWdlVUlcbiJdfQ== */\n/*@ sourceURL=/Users/wanjia/Documents/works/gitrepos/tpl/tpl-next/components/PageUI.js */"));
};

var PageUI = {
  Navbar: Navbar
};
/* harmony default export */ __webpack_exports__["default"] = (PageUI);

/***/ })

})
//# sourceMappingURL=index.js.32ab3d95fbe2f0fb1dae.hot-update.js.map