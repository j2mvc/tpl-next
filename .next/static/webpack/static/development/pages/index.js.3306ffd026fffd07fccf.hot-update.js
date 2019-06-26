webpackHotUpdate("static/development/pages/index.js",{

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
      href = _ref.href;
  var style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    style: style
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

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
  }, props.item.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "918962882"
  }, ".nav.jsx-918962882{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style-type:none;font:15px Helvetica,Arial,sans-serif;white-space:nowrap;text-align:center;-webkit-transition:100ms ease-in background;transition:100ms ease-in background;color:#fff;}.nav.jsx-918962882 a.jsx-918962882{padding:20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.nav.jsx-918962882:hover{background:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjd0IsQUFFZ0IsQUFTQSxBQU1HLGFBTEwsR0FLTSxRQUpJLGtEQVZBLEFBV04sZUFBQyxNQVZ1QixxQ0FDcEIsbUJBQ0Qsa0JBQ2tCLGdGQUN6QixXQUFDIiwiZmlsZSI6Ii9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3RpdmVMaW5rIGZyb20gXCIuL0FjdGl2ZUxpbmtcIjtcblxuLyoqXG4gKiDlr7zoiKrmnaHnm65cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTmF2YmFySXRlbSA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICA8QWN0aXZlTGluayBwcmVmZXRjaCBhcz17YC9jLyR7cHJvcHMuaXRlbS5pZH1gfSBocmVmPXt7IHBhdGhuYW1lOiAnL2NvbnRlbnQvbGlzdCcsIHF1ZXJ5OiB7IGNhdElkOiBwcm9wcy5pdGVtLmlkIH19fT5cbiAgICAgICAgICAgICAgICA8YT57cHJvcHMuaXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICAgICAgICAgICAgICBmb250OiAxNXB4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlLWluIGJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYgYXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcbiAgICAgICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuXG4vKipcbiAqIOWvvOiIquagj1xuICogQHBhcmFtIHByb3BzXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PntcbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZiYXInPlxuICAgICAgICAgICAge3Byb3BzLmxpc3QgJiYgcHJvcHMubGlzdC5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBwcm9wcy5saXN0Lm1hcCgoaXRlbSk9PjxOYXZiYXJJdGVtICBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19Lz4pfVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMzMzNcbiAgICAgICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuY29uc3QgUGFnZVVJID0ge1xuICAgIE5hdmJhclxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVVJXG4iXX0= */\n/*@ sourceURL=/Users/wanjia/Documents/works/gitrepos/tpl/tpl-next/components/PageUI.js */"));
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
  }, ".navbar.jsx-2349833234{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHdCLEFBRWdCLDBFQUNHLGdCQUFDIiwiZmlsZSI6Ii9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3RpdmVMaW5rIGZyb20gXCIuL0FjdGl2ZUxpbmtcIjtcblxuLyoqXG4gKiDlr7zoiKrmnaHnm65cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTmF2YmFySXRlbSA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICA8QWN0aXZlTGluayBwcmVmZXRjaCBhcz17YC9jLyR7cHJvcHMuaXRlbS5pZH1gfSBocmVmPXt7IHBhdGhuYW1lOiAnL2NvbnRlbnQvbGlzdCcsIHF1ZXJ5OiB7IGNhdElkOiBwcm9wcy5pdGVtLmlkIH19fT5cbiAgICAgICAgICAgICAgICA8YT57cHJvcHMuaXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICAgICAgICAgICAgICBmb250OiAxNXB4IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlLWluIGJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYgYXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcbiAgICAgICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuXG4vKipcbiAqIOWvvOiIquagj1xuICogQHBhcmFtIHByb3BzXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PntcbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZiYXInPlxuICAgICAgICAgICAge3Byb3BzLmxpc3QgJiYgcHJvcHMubGlzdC5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBwcm9wcy5saXN0Lm1hcCgoaXRlbSk9PjxOYXZiYXJJdGVtICBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19Lz4pfVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMzMzNcbiAgICAgICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuY29uc3QgUGFnZVVJID0ge1xuICAgIE5hdmJhclxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZVVJXG4iXX0= */\n/*@ sourceURL=/Users/wanjia/Documents/works/gitrepos/tpl/tpl-next/components/PageUI.js */"));
};

var PageUI = {
  Navbar: Navbar
};
/* harmony default export */ __webpack_exports__["default"] = (PageUI);

/***/ })

})
//# sourceMappingURL=index.js.3306ffd026fffd07fccf.hot-update.js.map