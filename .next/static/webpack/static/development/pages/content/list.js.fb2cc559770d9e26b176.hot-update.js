webpackHotUpdate("static/development/pages/content/list.js",{

/***/ "./pages/content/list.js":
/*!*******************************!*\
  !*** ./pages/content/list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api */ "./api/index.js");
/* harmony import */ var _assets_style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/style.scss */ "./assets/style.scss");
/* harmony import */ var _assets_style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_style_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_PageUI__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/PageUI */ "./components/PageUI.js");
/* harmony import */ var _components_HtmlHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/HtmlHeader */ "./components/HtmlHeader.js");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../api/request */ "./api/request.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);


















var loadData =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(query) {
    var props, res1, res2;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            props = {};
            _context.next = 3;
            return _api__WEBPACK_IMPORTED_MODULE_10__["default"].request.get({
              url: '/getCats',
              params: {
                moduleId: '201412290839325502'
              },
              cache: true
            });

          case 3:
            res1 = _context.sent;
            _context.next = 6;
            return _api__WEBPACK_IMPORTED_MODULE_10__["default"].request.get({
              url: '/getContentList',
              params: {
                catId: query.catId
              },
              cache: true
            });

          case 6:
            res2 = _context.sent;
            if (res1.code == 1) props.catList = res1.data.list;else {
              props.catError = res1.error;
            }

            if (res2.code == 1) {
              props.contentList = res2.data.list;
            } else {
              props.contentError = res2.error;
            }

            props.title = props.catList[0].name;
            props.keywords = "文章列表关键词";
            props.description = "这里是文章列表描述";
            console.log('list getInitialProps ended....');
            return _context.abrupt("return", props);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Page =
/*#__PURE__*/
function (_Document) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _Document);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      console.log('start render....');

      if (this.props.error) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_8___default.a, {
          statusCode: this.props.error.code
        });
      }

      var ua = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "example"
      }, "Hello World!");
      var items = this.props.contentList.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          as: "/c/i/".concat(item.id),
          href: {
            pathname: '/content/info',
            query: {
              id: item.id
            }
          },
          passHref: true
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, item.title)));
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_HtmlHeader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: this.props.title,
        keywords: this.props.keywords,
        description: this.props.description
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_PageUI__WEBPACK_IMPORTED_MODULE_12__["default"].Navbar, {
        list: this.props.catList
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, ua), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, items));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(_ref2) {
        var query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = _ref2.query;
                console.log('list getInitialProps....');
                return _context2.abrupt("return", loadData(query));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Page;
}(next_document__WEBPACK_IMPORTED_MODULE_15___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=list.js.fb2cc559770d9e26b176.hot-update.js.map