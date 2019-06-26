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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "nav"
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
  }, props.item.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "918962882"
  }, ".nav.jsx-918962882{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style-type:none;font:15px Helvetica,Arial,sans-serif;white-space:nowrap;text-align:center;-webkit-transition:100ms ease-in background;transition:100ms ease-in background;color:#fff;}.nav.jsx-918962882 a.jsx-918962882{padding:20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.nav.jsx-918962882:hover{background:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhNEIsQUFFZ0IsQUFTQSxBQU1HLGFBTEwsR0FLTSxRQUpJLGtEQVZBLEFBV04sZUFBQyxNQVZ1QixxQ0FDcEIsbUJBQ0Qsa0JBQ2tCLGdGQUN6QixXQUFDIiwiZmlsZSI6Ii9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3RpdmVMaW5rIGZyb20gXCIuL0FjdGl2ZUxpbmtcIjtcblxuLyoqXG4gKiDlr7zoiKrmnaHnm65cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTmF2YmFySXRlbSA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICA8QWN0aXZlTGluayBwcmVmZXRjaCBhcz17YC9jLyR7cHJvcHMuaXRlbS5pZH1gfSBocmVmPXt7IHBhdGhuYW1lOiAnL2NvbnRlbnQvbGlzdCcsIHF1ZXJ5OiB7IGNhdElkOiBwcm9wcy5pdGVtLmlkIH19fT5cbiAgICAgICAgICAgICAgICA8YT57cHJvcHMuaXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgICAgICAgICAgICAgZm9udDogMTVweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1pbiBiYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2IGF7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XG4gICAgICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuLyoqXG4gKiDlr7zoiKrmoI9cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTmF2YmFyID0gcHJvcHMgPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2YmFyJz5cbiAgICAgICAgICAgIHtwcm9wcy5saXN0ICYmIHByb3BzLmxpc3QubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgcHJvcHMubGlzdC5tYXAoKGl0ZW0pPT48TmF2YmFySXRlbSAga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfS8+KX1cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMzMzXG4gICAgICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgICA8L3VsPlxuICAgIClcbn1cbmNvbnN0IFBhZ2VVSSA9IHtcbiAgICBOYXZiYXJcbn1cbmV4cG9ydCBkZWZhdWx0IFBhZ2VVSVxuIl19 */\n/*@ sourceURL=/Users/wanjia/Documents/works/gitrepos/tpl/tpl-next/components/PageUI.js */")));
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
  }, ".navbar.jsx-2349833234{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHdCLEFBRWdCLDBFQUNHLGdCQUFDIiwiZmlsZSI6Ii9Vc2Vycy93YW5qaWEvRG9jdW1lbnRzL3dvcmtzL2dpdHJlcG9zL3RwbC90cGwtbmV4dC9jb21wb25lbnRzL1BhZ2VVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3RpdmVMaW5rIGZyb20gXCIuL0FjdGl2ZUxpbmtcIjtcblxuLyoqXG4gKiDlr7zoiKrmnaHnm65cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTmF2YmFySXRlbSA9IHByb3BzID0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J25hdic+XG4gICAgICAgICAgICA8QWN0aXZlTGluayBwcmVmZXRjaCBhcz17YC9jLyR7cHJvcHMuaXRlbS5pZH1gfSBocmVmPXt7IHBhdGhuYW1lOiAnL2NvbnRlbnQvbGlzdCcsIHF1ZXJ5OiB7IGNhdElkOiBwcm9wcy5pdGVtLmlkIH19fT5cbiAgICAgICAgICAgICAgICA8YT57cHJvcHMuaXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgICAgICAgICAgICAgZm9udDogMTVweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1pbiBiYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2IGF7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XG4gICAgICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuLyoqXG4gKiDlr7zoiKrmoI9cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTmF2YmFyID0gcHJvcHMgPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2YmFyJz5cbiAgICAgICAgICAgIHtwcm9wcy5saXN0ICYmIHByb3BzLmxpc3QubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgcHJvcHMubGlzdC5tYXAoKGl0ZW0pPT48TmF2YmFySXRlbSAga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfS8+KX1cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMzMzXG4gICAgICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgICA8L3VsPlxuICAgIClcbn1cbmNvbnN0IFBhZ2VVSSA9IHtcbiAgICBOYXZiYXJcbn1cbmV4cG9ydCBkZWZhdWx0IFBhZ2VVSVxuIl19 */\n/*@ sourceURL=/Users/wanjia/Documents/works/gitrepos/tpl/tpl-next/components/PageUI.js */"));
};

var PageUI = {
  Navbar: Navbar
};
/* harmony default export */ __webpack_exports__["default"] = (PageUI);

/***/ })

})
//# sourceMappingURL=index.js.547e824643679df0c09b.hot-update.js.map