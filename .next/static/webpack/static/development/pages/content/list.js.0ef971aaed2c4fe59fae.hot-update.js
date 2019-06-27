webpackHotUpdate("static/development/pages/content/list.js",{

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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-918962882" + " " + 'nav'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefetch: true,
    as: "/c/".concat(props.item.id),
    href: {
      pathname: '/content/list',
      query: {
        catId: props.item.id
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-918962882"
  }, " ", props.item.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "918962882"
  }, ".nav.jsx-918962882{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style-type:none;font:15px Helvetica,Arial,sans-serif;white-space:nowrap;text-align:center;-webkit-transition:100ms ease-in background;transition:100ms ease-in background;color:#fff;}.nav.jsx-918962882 a.jsx-918962882{padding:20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.nav.jsx-918962882:hover{background:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjd0IsQUFFZ0IsQUFTQSxBQU1HLGFBTEwsR0FLTSxRQUpJLGtEQVZBLEFBV04sZUFBQyxNQVZ1QixxQ0FDcEIsbUJBQ0Qsa0JBQ2tCLGdGQUN6QixXQUFDIiwiZmlsZSI6Ii9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3RpdmVMaW5rIGZyb20gXCIuL0FjdGl2ZUxpbmtcIjtcblxuLyoqXG4gKiDlr7zoiKrmnaHnm65cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTmF2YmFySXRlbSA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICA8QWN0aXZlTGluayAgcHJlZmV0Y2ggYXM9e2AvYy8ke3Byb3BzLml0ZW0uaWR9YH0gaHJlZj17eyBwYXRobmFtZTogJy9jb250ZW50L2xpc3QnLCBxdWVyeTogeyBjYXRJZDogcHJvcHMuaXRlbS5pZCB9fX0+XG4gICAgICAgICAgICAgICAgPGE+IHtwcm9wcy5pdGVtLm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICAgICAgICAgICAgICAgIGZvbnQ6IDE1cHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4gYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdiBhe1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2OmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICAgICAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9saT5cbiAgICApXG59XG5cbi8qKlxuICog5a+86Iiq5qCPXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IE5hdmJhciA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J25hdmJhcic+XG4gICAgICAgICAgICB7cHJvcHMubGlzdCAmJiBwcm9wcy5saXN0Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHByb3BzLmxpc3QubWFwKChpdGVtKT0+PE5hdmJhckl0ZW0gIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0vPil9XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzMzM1xuICAgICAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5jb25zdCBQYWdlVUkgPSB7XG4gICAgTmF2YmFyXG59XG5leHBvcnQgZGVmYXVsdCBQYWdlVUlcbiJdfQ== */\n/*@ sourceURL=/Users/wanjia/Documents/works/gitrepos/tpl/tpl-next/components/PageUI.js */"));
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
  }, ".navbar.jsx-2349833234{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHdCLEFBRWdCLDBFQUNHLGdCQUFDIiwiZmlsZSI6Ii9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3RpdmVMaW5rIGZyb20gXCIuL0FjdGl2ZUxpbmtcIjtcblxuLyoqXG4gKiDlr7zoiKrmnaHnm65cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTmF2YmFySXRlbSA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICA8QWN0aXZlTGluayAgcHJlZmV0Y2ggYXM9e2AvYy8ke3Byb3BzLml0ZW0uaWR9YH0gaHJlZj17eyBwYXRobmFtZTogJy9jb250ZW50L2xpc3QnLCBxdWVyeTogeyBjYXRJZDogcHJvcHMuaXRlbS5pZCB9fX0+XG4gICAgICAgICAgICAgICAgPGE+IHtwcm9wcy5pdGVtLm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICAgICAgICAgICAgICAgIGZvbnQ6IDE1cHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4gYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdiBhe1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2OmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICAgICAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9saT5cbiAgICApXG59XG5cbi8qKlxuICog5a+86Iiq5qCPXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IE5hdmJhciA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J25hdmJhcic+XG4gICAgICAgICAgICB7cHJvcHMubGlzdCAmJiBwcm9wcy5saXN0Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHByb3BzLmxpc3QubWFwKChpdGVtKT0+PE5hdmJhckl0ZW0gIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0vPil9XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzMzM1xuICAgICAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5jb25zdCBQYWdlVUkgPSB7XG4gICAgTmF2YmFyXG59XG5leHBvcnQgZGVmYXVsdCBQYWdlVUlcbiJdfQ== */\n/*@ sourceURL=/Users/wanjia/Documents/works/gitrepos/tpl/tpl-next/components/PageUI.js */"));
};

var PageUI = {
  Navbar: Navbar
};
/* harmony default export */ __webpack_exports__["default"] = (PageUI);

/***/ })

})
//# sourceMappingURL=list.js.0ef971aaed2c4fe59fae.hot-update.js.map