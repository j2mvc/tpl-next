webpackHotUpdate("static/development/pages/content/info.js",{

/***/ "./api/request.js":
/*!************************!*\
  !*** ./api/request.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ "./node_modules/stream-http/index.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/util */ "./libs/util.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.js */ "./api/config.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_5__);





 // 创建一个 axios 实例

var service = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: _config_js__WEBPACK_IMPORTED_MODULE_5___default.a.api,
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 5000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  // withCredentials: false, // 默认值为false
  // `url` 是用于请求的服务器 URL
  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  // paramsSerializer: function(params) {
  //     return Qs.stringify(params, {arrayFormat: 'brackets'})
  // },
  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  // adapter: function (config) {
  //     /* ... */
  // },
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  // responseType: 'json', // 默认的
  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  // xsrfCookieName: 'XSRF-TOKEN', // default
  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  // xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的
  // `onUploadProgress` 允许为上传处理进度事件
  // onUploadProgress: function (progressEvent) {
  //     // 对原生进度事件的处理
  // },
  // `onDownloadProgress` 允许为下载处理进度事件
  // onDownloadProgress: function (progressEvent) {
  //     // 对原生进度事件的处理
  // },
  // `maxContentLength` 定义允许的响应内容的最大尺寸
  // maxContentLength: 2000,
  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  // validateStatus: function (status) {
  //     return status >= 200 && status < 300; // 默认的
  // },
  // headers: {
  //     referer: 'https://ptjp.gov.cn/',
  //     host: 'ptjp.gov.cn'
  // },
  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  // maxRedirects: 5, // 默认的
  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http__WEBPACK_IMPORTED_MODULE_3___default.a.Agent({
    keepAlive: true
  }),
  // httpsAgent: new https.Agent({ keepAlive: true }),
  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: 'api.ptjp.gov.cn',
    port: 80 // auth: {
    //     username: 'mikeymike',
    //     password: 'rapunz3l'
    // },
    // `cancelToken` 指定用于取消请求的 cancel token
    // cancelToken: new CancelToken(function (cancel) {
    // })

  }
});
/**
 * 处理错误代码
 * @param error
 * @returns {{error: (*|{code: number, message: string})}}
 */

var handleError = function handleError(error) {
  error = error || {
    code: -1,
    message: '请求失败'
  }; // 对响应错误做点什么

  if (error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误';
        break;

      case 401:
        error.message = '未授权，请登录';
        break;

      case 403:
        error.message = '拒绝访问';
        break;

      case 404:
        error.message = "\u8BF7\u6C42\u5730\u5740\u51FA\u9519: ".concat(error.response.config.url);
        break;

      case 408:
        error.message = '请求超时';
        break;

      case 500:
        error.message = '服务器内部错误';
        break;

      case 501:
        error.message = '服务未实现';
        break;

      case 502:
        error.message = '网关错误';
        break;

      case 503:
        error.message = '服务不可用';
        break;

      case 504:
        error.message = '网关超时';
        break;

      case 505:
        error.message = 'HTTP版本不受支持';
        break;

      default:
        break;
    }
  }

  return {
    error: error
  };
};
/**
 * 拼接url的querystring
 * @param params
 * @returns {string}
 */


var parseParams = function parseParams(params) {
  var str = '';

  for (var k in params) {
    var v = params[k];
    str += (str != '' ? '&' : '?') + k + '=' + v;
  }

  return str;
};
/**
 * get数据
 * @param url
 * @param params
 * @param cache
 * @returns {Promise<*>}
 */


var get =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var url, params, cache;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = props.url, params = props.params, cache = props.cache; // 这会在应用中暴露

            params.apikey = _config_js__WEBPACK_IMPORTED_MODULE_5___default.a.apiKey;
            return _context.abrupt("return", service({
              method: 'get',
              url: _config_js__WEBPACK_IMPORTED_MODULE_5___default.a.api + url,
              params: params,
              mode: 'no-cors'
            }).then(function (res) {
              console.log('data:', res.data);

              if (res.error) {
                return {
                  error: res.error
                };
              }

              var json = res.data; // 获取到数据

              if (json.code == 1) {
                return json;
              } // 处理服务器返回的错误


              if (json.error) {
                return handleError(json.error);
              } else {
                var message = json.message ? json.message : '请求失败';
                return handleError({
                  code: -1,
                  message: message
                });
              }
            }).catch(function (error) {
              return handleError(error);
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function get(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 提交数据
 * @param url
 * @param data
 * @param cache
 * @returns {*}
 */


var post = function post(_ref2) {
  var url = _ref2.url,
      data = _ref2.data,
      cache = _ref2.cache;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  post: post
});

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
false,

/***/ "./node_modules/crypt/crypt.js":
false,

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/md5/md5.js":
false

})
//# sourceMappingURL=info.js.8d9402d0766cbaa98139.hot-update.js.map