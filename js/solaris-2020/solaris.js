/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		25: 0,
/******/ 		1: 0,
/******/ 		4: 0,
/******/ 		9: 0,
/******/ 		10: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "js/bundles/" + ({}[chunkId]||chunkId) + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var settle = __webpack_require__("./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__("./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__("./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__("./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__("./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__("./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__("./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__("./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__("./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__("./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__("./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__("./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__("./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__("./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__("./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__("./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_components_CarPageTemplate_presentationSlides_PresentationSimpleSlide_vue__ = __webpack_require__("./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_components_CarPageTemplate_presentationSlides_PresentationSimpleSlide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_components_CarPageTemplate_presentationSlides_PresentationSimpleSlide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_components_CarPageTemplate_presentationSlides_PresentationTabsSlide_vue__ = __webpack_require__("./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_components_CarPageTemplate_presentationSlides_PresentationTabsSlide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_components_CarPageTemplate_presentationSlides_PresentationTabsSlide_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "PresentationSection",
    components: { PresentationSimpleSlide: __WEBPACK_IMPORTED_MODULE_0__vue_components_CarPageTemplate_presentationSlides_PresentationSimpleSlide_vue___default.a, PresentationTabsSlide: __WEBPACK_IMPORTED_MODULE_1__vue_components_CarPageTemplate_presentationSlides_PresentationTabsSlide_vue___default.a },
    props: ['title', 'background', 'backgroundMobile', 'slides'],
    data: function data() {
        return {
            id: 0,
            beforeEnter: false,
            enter: false,
            showIcons: false,
            selectedId: 0,
            anim: null,
            out: null,
            controller: null,
            windowWidth: 0
        };
    },

    computed: {
        slide: function slide() {
            var _this = this;

            return this.slides.filter(function (slide, i) {
                return i === _this.selectedId;
            });
        },
        backgroundTotal: function backgroundTotal() {
            if (this.windowWidth > 639) {
                return this.background;
            } else {
                return this.backgroundMobile;
            }
        }
    },
    methods: {
        currentComponent: function currentComponent(slide) {
            if (slide[0].tabs) {
                return 'PresentationTabsSlide';
            } else {
                return 'PresentationSimpleSlide';
            }
        },
        selectItem: function selectItem(index, zoom, cX, cY, r) {
            var back = this.$refs['back'],
                backHeight = $(back).outerHeight(),
                backWidth = $(back).outerWidth(),
                item = this.$refs['icon--' + index],
                r = r ? r : 0,
                itemY = $(item).position().top + r,
                itemX = $(item).position().left + r;

            this.selectedId = index;

            if (this.out) {
                this.out.kill();
                this.anim = null;
            }
            if (this.anim) {
                this.anim.kill();
                this.anim = null;
            }

            this.zoom(back, backWidth, backHeight, itemX, itemY, zoom, cX, cY);
        },
        nextItem: function nextItem() {
            if (this.selectedId < this.slides.length - 1) {
                this.selectItem(this.selectedId + 1, this.slides[this.selectedId + 1].zoom, this.slides[this.selectedId + 1].correct.x, this.slides[this.selectedId + 1].correct.y);
            } else {
                this.selectedId = 0;
                this.selectItem(this.selectedId, this.slides[this.selectedId].zoom, this.slides[this.selectedId].correct.x, this.slides[this.selectedId].correct.y);
            }
        },
        prevItem: function prevItem() {
            if (this.selectedId > 0) {
                this.selectItem(this.selectedId - 1, this.slides[this.selectedId - 1].zoom, this.slides[this.selectedId - 1].correct.x, this.slides[this.selectedId - 1].correct.y);
            } else {
                this.selectedId = this.slides.length - 1;
                this.selectItem(this.selectedId, this.slides[this.selectedId].zoom, this.slides[this.selectedId].correct.x, this.slides[this.selectedId].correct.y);
            }
        },
        close: function close() {
            this.anim.kill();

            this.exit();
        },
        zoom: function zoom(item, w, h, x, y, _zoom, cX, cY) {
            //Анимация приближения области
            //Вычисляем размер сдвига по осям X, Y
            var cX = cX ? cX : 0;
            var cY = cY ? cY : 0;
            var dX = -(w / 2) / 2 - (x - w / 2) - cX;
            var dY = h / 2 - y - cY;
            var that = this;

            this.anim = new TimelineMax({
                onComplete: function onComplete() {
                    that.showIcons = false;
                }
            });

            this.anim.to($(this.$refs['presentation__icons-holder']).find('.presentation__icon'), 0.3, {
                opacity: 0
            }).add('start').to(item, 1, {
                ease: Expo.easeOut,
                transform: 'translate(' + dX + 'px , ' + dY + 'px)'
            }, 'start').to($(this.$refs['presentation__left']), 1, {
                ease: Expo.easeOut,
                transform: 'scale(' + _zoom + ')'
            }, 'start').set(item, {
                willChange: 'auto'
            }).to($(this.$refs['presentation__aside']), 0.5, {
                transform: 'translateX(0)'
            }, 'start').to($(this.$refs['presentation__prev']), 0.3, {
                opacity: 1
            }, 'start+=0.5').to($(this.$refs['presentation__next']), 0.3, {
                opacity: 1
            }, 'start+=0.5').to($(this.$refs['presentation__close']), 0.3, {
                opacity: 1
            }, 'start+=0.5');
        },
        exit: function exit() {
            var item = this.$refs['back'];
            var that = this;

            this.out = new TimelineMax({
                onComplete: function onComplete() {
                    that.showIcons = true;
                }
            });

            this.out.set($(this.$refs['presentation__icons-holder']).find('.presentation__icon'), {
                opacity: 1
            }).to($(this.$refs['presentation__prev']), 0.3, {
                opacity: 0
            }).to($(this.$refs['presentation__next']), 0.3, {
                opacity: 0
            }).to($(this.$refs['presentation__close']), 0.3, {
                opacity: 0
            }).set(item, {
                willChange: 'transform'
            }).add('start').to($(this.$refs['presentation__aside']), 0.5, {
                transform: 'translateX(150%)'
            }).to($(this.$refs['presentation__left']), 1, {
                ease: Expo.easeOut,
                transform: 'scale(1)'
            }, 'start').to(item, 1, {
                ease: Expo.easeOut,
                transform: 'translate(0,0)'
            }, 'start').set(item, {
                willChange: 'auto'
            });
        }

    },
    mounted: function mounted() {
        var that = this;

        this.id = Date.now();

        this.$nextTick(function () {
            that.controller = new ScrollMagic.Controller({});

            var beforePresentation = new ScrollMagic.Scene({ triggerElement: that.$refs[that.id], duration: '0', triggerHook: '1', offset: -500 })
            //.addIndicators({ name: "presentation" })
            .addTo(that.controller);

            beforePresentation.on("enter", function (event) {
                that.beforeEnter = true;

                //Листаем слайды свайпом
                setTimeout(function () {
                    var square = that.$refs['presentation__aside'];
                    var manager = new Hammer.Manager(square, { touchAction: 'pan-y' });
                    var Swipe = new Hammer.Swipe();

                    manager.add(Swipe);

                    var deltaX = 0;
                    var deltaY = 0;

                    manager.on('swipe', function (e) {
                        deltaX = deltaX + e.deltaX;
                        var direction = e.offsetDirection;

                        if (direction === 4) {
                            that.prevItem();
                        } else if (direction === 2) {
                            that.nextItem();
                        }
                    });
                }, 300);

                beforePresentation.destroy();
            });

            var presentation = new ScrollMagic.Scene({ triggerElement: that.$refs[that.id], duration: '0', triggerHook: '0.45' })
            //.addIndicators({ name: "design" })
            .addTo(that.controller);

            presentation.on("enter", function (event) {
                that.enter = true;
                that.showIcons = true;
                presentation.destroy();
            });

            //Отслеживание ширины окна
            $(window).on('resize', function () {
                that.windowWidth = $(window).width();
            });

            that.windowWidth = $(window).width();
        });
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Notifier__ = __webpack_require__("./resources/js/vue/components/Notifier.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Notifier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Notifier__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	name: "SpecsSection",
	components: { Notifier: __WEBPACK_IMPORTED_MODULE_1__components_Notifier___default.a },
	props: ['carId', 'modelType', 'numberOfSeats', 'engine', 'drive', 'gearBox', 'page', 'carName'],
	data: function data() {
		return {
			success: true,
			specifications: [],
			modifications: [],
			footnotes: []
		};
	},

	methods: {
		getData: function getData() {
			var that = this;

			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.$store.state.API.CAR_MODIFICATIONS + this.carId).then(function (response) {
				that.specifications = response.data.specifications;
				that.modifications = response.data.modifications;
				that.footnotes = response.data.footnotes;
				that.success = true;
				setTimeout(function () {
					that.dropdown(0);
				}, 1000);
			}).catch(function (error) {
				if (that.page === 'isDealerCarPage') {
					that.$emit('error');
				} else {
					that.success = false;
					that.$root.$emit('notify', { type: 'error', text: 'Ошибка загрузки данных, повторите попытку позднее' });
					console.log(error);
				}
			});
		},
		dropdown: function dropdown(index) {
			$(this.$refs[index]).slideToggle();
			$(this.$refs['arrow-' + index]).toggleClass('rotate');
		}
	},
	mounted: function mounted() {
		this.getData();
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Notifier__ = __webpack_require__("./resources/js/vue/components/Notifier.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Notifier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Notifier__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_spritespin__ = __webpack_require__("./node_modules/spritespin/release/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: "View360",
    components: { Notifier: __WEBPACK_IMPORTED_MODULE_1__components_Notifier___default.a },
    props: ['title', 'carId', 'defaultColor'],
    data: function data() {
        return {
            success: true,
            spritespinAPI: null,
            colorsAPI: [],
            activeColor: 0,
            prevColor: 0,
            spritespin: null,
            frame: 0,
            lastFrameSrc: 0,
            isLoaded: false,
            isFirstLoaded: false,
            isInit: false,
            progress: 0,
            currentCar: null,
            activeColorObj: null
        };
    },

    computed: {
        sourceArray: function sourceArray() {
            var folder = this.spritespin[this.activeColor].folder;
            var ext = this.spritespin[this.activeColor].extension;
            var result = [];
            for (var i = 0; i < 36; i++) {
                result.push(folder + '/' + i + '.' + ext);
            }

            return result;
        },
        colors: function colors() {
            var colors = [];

            for (var group in this.colorsAPI) {
                for (var color in this.colorsAPI[group]) {
                    colors.push(this.colorsAPI[group][color]);
                }
            }

            return colors;
        },
        currentColor: function currentColor() {
            for (var i = 0; i < this.colors.length; i++) {
                if (this.colors[i].id === this.activeColor) {
                    return this.colors[i].nameRus + ' / ' + this.colors[i].name + ', ' + this.priceFormat(this.colors[i].cost);
                }
            }
        },
        preview: function preview() {
            if ((this.carId == 16 || this.carId == 30 || this.carId == 31) && this.activeColorObj) {
                return this.activeColorObj.carImage;
            }
            if (this.prevColor !== 0 && this.isInit && this.isFirstLoaded) {
                return this.spritespin[this.prevColor].folder + '/' + this.frame + '.' + this.spritespin[this.prevColor].extension;
            }
            if (this.activeColor !== 0 && !this.isLoaded) {
                return this.spritespin[this.activeColor].folder + '/' + this.frame + '.' + this.spritespin[this.activeColor].extension;
            }
            if (this.activeColor === 0) {
                return '';
            }
        },
        progressFormatted: function progressFormatted() {
            return Math.round(this.progress) > 100 ? 100 : Math.round(this.progress);
        }
    },
    methods: {
        set360: function set360() {
            var that = this;

            $("#spritespin").spritespin('destroy');

            $("#spritespin").spritespin({
                source: that.sourceArray,
                animate: false,
                //behavior: 'drag',
                frames: 36,
                frameTime: 40,
                frame: that.frame,
                lanes: 1,
                //mods: ['drag', '360'],
                module: null,
                renderer: 'canvas',
                reverse: false,
                scrollThreshold: 500,
                responsive: true,
                onLoad: function onLoad() {
                    that.isLoaded = true;
                    that.isFirstLoaded = true;
                },
                onFrame: function onFrame() {
                    that.frame = that.spritespinAPI.data.frame;
                    that.lastFrameSrc = that.spritespinAPI.data.source[that.frame];
                },
                onProgress: function onProgress() {
                    that.progress += 100 / 36;
                }
            });

            this.spritespinAPI = $("#spritespin").spritespin('api');
        },
        getData: function getData() {
            var that = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.$store.state.API.CAR + this.carId).then(function (response) {
                that.currentCar = response.data;
                that.colorsAPI = response.data.exterior.colors.groups;
                that.spritespin = response.data.exterior.spritespin;

                var activeColor = 0;

                if (typeof that.defaultColor !== 'undefined') {
                    activeColor = +that.defaultColor;
                } else {
                    activeColor = response.data.exterior.colors.defaultColor;
                }

                for (var group in that.colorsAPI) {
                    for (var color in that.colorsAPI[group]) {
                        if (that.colorsAPI[group][color].id === activeColor) {
                            that.setColor(that.colorsAPI[group][color]);
                        }
                    }
                }

                that.success = true;
            }).catch(function (error) {
                that.success = false;
                that.$root.$emit('notify', { type: 'error', text: 'Ошибка загрузки данных, повторите попытку позднее' });
                console.log(error);
            });
        },
        prev: function prev() {
            this.spritespinAPI.prevFrame();
        },
        next: function next() {
            this.spritespinAPI.nextFrame();
        },
        setColor: function setColor(color) {
            this.prevColor = this.activeColor;
            this.activeColor = color.id;
            this.activeColorObj = color;
        },
        init360: function init360() {
            if (!this.isInit && this.carId != 16 && this.carId != 30 && this.carId != 31) {
                this.isInit = true;
                this.set360();
                //this.preloader();
            }
        },
        preloader: function preloader() {
            // var t = new TimelineMax();

            // t
            //     .to(this, 2, {
            //         progress: 99
            //     })
        },
        priceFormat: function priceFormat(value) {
            return value.toString().replace(/\D/g, '').replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g, ' ') + ' ₽';
        }
    },
    mounted: function mounted() {
        var that = this;

        this.getData();
        this.$nextTick(function () {});
    },
    watch: {
        activeColor: function activeColor() {
            if (this.isInit) {
                this.isLoaded = false;
                this.progress = 0;
                this.set360();
                //this.preloader();
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: "PresentationSimpleSlide",
	components: {},
	props: ['icon', 'title', 'description'],
	data: function data() {
		return {};
	},

	computed: {},
	methods: {},
	filters: {},
	mounted: function mounted() {},

	watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: "PresentationTabsSlide",
	components: {},
	props: ['icon', 'title', 'description', 'slides'],
	data: function data() {
		return {
			currentSlide: 0
		};
	},

	computed: {},
	methods: {
		selectSlide: function selectSlide(slide) {
			this.currentSlide = slide;
		}
	},
	filters: {},
	mounted: function mounted() {},

	watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/Notifier.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//

// using examples:
// this.$root.$emit('notify', { type: 'success', text: 'Success message.', persist: true })
// this.$root.$emit('notify', 'Message string')

// Assepts '\n' and converts to new line via '<br>'

// options object:
// type: @string, error | success – styling class
// text: @string, text message
// persist: @bool, no autohide if true

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Notifier',
  data: function data() {
    return {
      options: {
        text: '',
        type: '',
        persist: false
      },
      active: false,
      timeoutID: null,
      timeoutDuration: 10000
    };
  },

  computed: {
    messageText: function messageText() {
      return this.options.text.toString().replace(/\n/g, '<br>');
    },
    styleType: function styleType() {
      return this.options.type || '';
    }
  },
  methods: {
    show: function show(data) {
      clearTimeout(this.timeoutID);
      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
        Object.assign(this.options, data);
      }
      if (typeof data === 'string') {
        Object.assign(this.options, {
          text: data,
          type: '',
          persist: false
        });
      }
      this.active = true;
    },
    hide: function hide() {
      this.active = false;
    },
    onShow: function onShow() {
      var _this = this;

      if (!this.options.persist) {
        this.timeoutID = setTimeout(function () {
          _this.hide();
        }, this.timeoutDuration);
      }
    },
    onHide: function onHide() {
      Object.assign(this.options, {
        text: '',
        type: '',
        persist: false
      });
    }
  },
  mounted: function mounted() {
    this.$root.$on('notify', this.show);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/common/HotButtons.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: "HotButtons",
	components: {
		'sign-up-test-drive-form-popup': function signUpTestDriveFormPopup() {
			return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./resources/js/vue/components/common/SignUpTestDriveFormPopup.vue"));
		}
	},
	props: {
		carId: Number,
		model: String,
		buttons: Array,
		page: String
	},
	data: function data() {
		return {
			showList: false,
			showButton: false,
			init: false,
			fixed: false,
			initTdPopup: false,
			popups: 0
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
		ENV: "GET_ENV",
		carsIdLinks: 'GET_CARS_ID_LINKS'
	}), {
		isVisible: function isVisible() {
			if (this.$store.state.openTestDrivePopup) {
				this.initTdPopup = true;
			}

			return this.initTdPopup;
		},
		oneButton: function oneButton() {
			var count = 0;

			this.buttons.forEach(function (item) {
				count += item;
			});

			if (count === 1) {
				return true;
			} else {
				return false;
			}
		},
		scrollBarWidth: function scrollBarWidth() {
			var div = document.createElement('div');

			div.style.overflowY = 'scroll';
			div.style.width = '20px';
			div.style.height = '20px';

			div.style.visibility = 'hidden';

			document.body.appendChild(div);
			var scrollWidth = div.offsetWidth - div.clientWidth;
			document.body.removeChild(div);

			return scrollWidth;
		},
		linkFromId: function linkFromId() {
			var _this = this;

			if (this.carsIdLinks.filter(function (car) {
				return car.id == _this.carId;
			}).length > 0) {
				return '/start/' + this.carsIdLinks.filter(function (car) {
					return car.id == _this.carId;
				})[0].link;
			} else {
				return '/start';
			}
		}
	}),
	methods: {
		toggleShowList: function toggleShowList() {
			this.showList = !this.showList;
			this.init = true;
		},
		testDrive: function testDrive() {
			if (typeof this.model !== 'undefined' && this.ENV !== 'dealer') {
				this.$store.dispatch('OPEN_TEST_DRIVE_POPUP', true);
				this.$store.dispatch('SET_SAVED_MODEL', this.model);
			} else {
				window.location = '/test-drive';
			}
		},
		toggleButton: function toggleButton() {
			this.showButton = !this.showButton;
			this.init = true;
		},
		fixOverflow: function fixOverflow(makeFixed) {
			if (makeFixed === true) {
				document.body.style.overflow = 'hidden';
				this.popups++;
			} else {
				this.popups--;

				if (this.popups === 0) {
					document.body.style.overflow = '';
				}
			}
		}
	},
	mounted: function mounted() {
		var _this2 = this;

		this.$root.$on('fixOverflow', this.fixOverflow);

		this.$nextTick(function () {
			_this2.showList = true;
			_this2.showButton = true;

			$(window).on('scroll', function () {
				if (!_this2.init && !_this2.oneButton) {
					_this2.showList = false;
				}
				if (!_this2.init && _this2.oneButton) {
					_this2.showButton = false;
				}

				if (!_this2.fixed) {
					//Рассчитать положение кнопки
					var y = $('.h-buttons').offset().top;
					var x = $('.h-buttons').offset().left;
					var width = $('.h-buttons').width();
					var windowHeight = $(window).outerHeight();
					var windowWidth = $(window).outerWidth();

					$('.h-buttons').css({
						'right': windowWidth - x - width - _this2.scrollBarWidth + 'px',
						'bottom': windowHeight - y - width + 'px'
					});

					setTimeout(function () {
						$('.h-buttons').css({
							'right': '40px',
							'bottom': '40px',
							'transition': '0.5s'
						});
					});
				}

				_this2.fixed = true;
			});
		});
	}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/Notifier.vue":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ic-svg[data-v-3d124400] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  vertical-align: middle;\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n  pointer-events: none;\n  user-select: none;\n}\n.ic-svg.ic-phone[data-v-3d124400] {\n    width: 21px;\n    height: 19px;\n}\n.ic-svg.ic-mail[data-v-3d124400] {\n    width: 16px;\n    height: 12px;\n}\n.ic-svg.ic-arrow-s[data-v-3d124400] {\n    width: 13px;\n    height: 9px;\n}\n.ic-svg.ic-arrow-m[data-v-3d124400] {\n    width: 33px;\n    height: 10px;\n}\n.ic-svg.ic-arrow-b[data-v-3d124400] {\n    width: 30px;\n    height: 12px;\n}\n.ic-svg.ic-ru[data-v-3d124400] {\n    width: 21px;\n    height: 14px;\n}\n.ic-svg.ic-car[data-v-3d124400] {\n    width: 51px;\n    height: 36px;\n}\n.ic-svg.ic-calc[data-v-3d124400] {\n    width: 30px;\n    height: 33px;\n}\n.ic-svg.ic-map[data-v-3d124400] {\n    width: 36px;\n    height: 41px;\n}\n.ic-svg.ic-steering-wheel[data-v-3d124400] {\n    width: 33px;\n    height: 33px;\n}\n.ic-svg.ic-gift[data-v-3d124400] {\n    height: 52px;\n    width: 42px;\n}\n.ic-svg.ic-fix[data-v-3d124400] {\n    height: 47px;\n    width: 50px;\n}\n.ic-svg.ic-pig[data-v-3d124400] {\n    height: 59px;\n    width: 62px;\n}\n.ic-svg.ic-key[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n.ic-svg.ic-shield[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-steering-wheel-thin[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-fix-w-gear[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-gear[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-case[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-car-2[data-v-3d124400] {\n    height: 30px;\n    width: 30px;\n}\n.ic-svg.ic-close-sm[data-v-3d124400] {\n    height: 15px;\n    width: 15px;\n}\n.ic-video[data-v-3d124400] {\n  display: inline-block;\n  background: #e63312;\n  width: 19px;\n  height: 19px;\n  position: relative;\n  vertical-align: middle;\n}\n.ic-video[data-v-3d124400]::after {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 5px;\n    left: 7px;\n    border: 5px solid;\n    border-color: transparent transparent transparent #fff;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.notifier[data-v-3d124400] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background: #082c56;\n  color: #fff;\n  font-size: 1.23077em;\n  font-family: \"HyundaiSansHead\", \"Hevetica\", Arial, sans-serif;\n  font-weight: 500;\n  line-height: 1.2;\n  letter-spacing: .015em;\n  cursor: pointer;\n  z-index: 5000;\n}\n.notifier.error[data-v-3d124400] {\n    background: #e63312;\n}\n.notifier.error .notify__ic[data-v-3d124400] {\n      display: none;\n}\n.notifier.success .notify__text[data-v-3d124400] {\n    max-width: 200px;\n    margin-left: 90px;\n}\n.notifier.success .notify__text[data-v-3d124400]::before {\n      content: url(" + escape(__webpack_require__("./resources/js/vue/assets/image/notifier-success.png")) + ");\n      position: absolute;\n      top: 50%;\n      left: 45px;\n      -webkit-transform: translate(0, -50%);\n              transform: translate(0, -50%);\n}\n.notifier-body[data-v-3d124400] {\n  position: relative;\n  padding: 30px 25px;\n}\n.notify__text[data-v-3d124400] {\n  cursor: inherit;\n  max-width: 350px;\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.specs {\n  position: relative;\n  height: auto;\n  color: #000;\n  padding-top: 57px;\n}\n.specs__title {\n    display: block;\n    font-size: 4.2rem;\n    font-weight: 500;\n    text-align: center;\n    margin-bottom: 26px;\n}\n.specs__main {\n    table-layout: fixed;\n    width: 100%;\n    font-size: 1.6rem;\n    border: 1px solid #E4DCD3;\n}\n.specs__main tr td {\n      padding: 12px 32px;\n      border: 1px solid #E4DCD3;\n}\n.specs__main tr td:first-of-type {\n        width: 311px;\n        background-color: #E4DCD3;\n        font-weight: 500;\n        border-bottom: 1px solid #fff;\n}\n.specs__main .mobile {\n      display: none;\n}\n.specs__error {\n    font-size: 1.6rem;\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n.specs__success {\n    margin-top: 40px;\n}\n.specs-dd {\n  color: #000;\n  border: 1px solid #E4DCD3;\n  border-bottom: none;\n}\n.specs-dd:nth-last-of-type(2) {\n    border-bottom: 1px solid #E4DCD3;\n}\n.specs-dd:not(:first-of-type) th {\n    display: none;\n}\n.specs-dd__head {\n    position: relative;\n    display: block;\n    font-size: 1.6rem;\n    font-weight: 500;\n    padding: 16px 32px;\n}\n.specs-dd__head svg {\n      display: block;\n      position: absolute;\n      top: 50%;\n      right: 32px;\n      -webkit-transform: translateY(-50%) rotate(180deg);\n              transform: translateY(-50%) rotate(180deg);\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n}\n.specs-dd__head svg.rotate {\n        -webkit-transform: translateY(-50%) rotate(0deg);\n                transform: translateY(-50%) rotate(0deg);\n}\n.specs-dd__dropdown {\n    display: none;\n    padding-left: 344px;\n}\n.specs-dd__table {\n    table-layout: fixed;\n    width: 100%;\n}\n.specs-dd__table tr th {\n      font-size: 1.6rem;\n      font-weight: 500;\n      padding-bottom: 29px;\n}\n.specs-dd__table tr td {\n      vertical-align: bottom;\n      padding-bottom: 26px;\n      padding-right: 32px;\n}\n.specs-dd__table tr td:not(:first-of-type) .specs-dd__subtitle {\n        display: none;\n}\n.specs-dd__table--mobile {\n      display: none;\n}\n.specs-dd__subtitle {\n    font-size: 1.6rem;\n    line-height: 1.25;\n    color: #666666;\n    margin-bottom: 7px;\n}\n.specs-dd__value {\n    max-width: 100%;\n    font-size: 1.4rem;\n    line-height: 1.14;\n    font-weight: 500;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.specs-dd__value svg {\n      display: block;\n      width: 14px;\n      height: 14px;\n}\n.dsclmr {\n  position: relative;\n  display: block;\n  padding-left: 32px;\n  margin-top: 37px;\n  padding-bottom: 58px;\n}\n.dsclmr__icon {\n    position: absolute;\n    left: 0;\n    top: 0.5em;\n    margin-top: -3px;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background-color: #C4C4C4;\n}\n.dsclmr__icon svg {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n}\n.dsclmr__item {\n    font-size: 1.2rem;\n    line-height: 1.5;\n    color: #000;\n}\n.dsclmr__item:not(:last-of-type) {\n      margin-right: 10px;\n}\n.dsclmr__item:not(:last-of-type)::after {\n        content: ';';\n        display: inline-block;\n}\n@media only screen and (max-width: 1262px) {\n.specs-dd__dropdown {\n    padding-top: 16px;\n    padding-left: 32px;\n}\n}\n@media only screen and (max-width: 767px) {\n.specs {\n    padding-top: 36px;\n}\n.specs__title {\n      font-size: 30px;\n      margin-bottom: 44px;\n}\n.specs__main tr td {\n      width: 100%;\n      padding: 12px 16px;\n}\n.specs__main tr td:first-of-type {\n        width: 100%;\n}\n.specs__main .desctop {\n      display: none;\n}\n.specs__main .mobile {\n      display: table-row;\n}\n.specs__main .mobile td {\n        width: 100% !important;\n        background-color: transparent !important;\n        border: none !important;\n}\n.specs__success {\n      margin-top: 31px;\n}\n.specs-dd__head {\n    padding-left: 16px;\n}\n.specs-dd__table {\n    display: none;\n}\n.specs-dd__table tr th {\n      position: relative;\n      padding-bottom: 23px;\n}\n.specs-dd__table tr th:not(.first) {\n        padding-top: 26px;\n}\n.specs-dd__table tr th:not(.first)::after {\n          content: '';\n          display: block;\n          position: absolute;\n          top: 0;\n          left: -16px;\n          right: 16px;\n          height: 1px;\n          background-color: #E4DCD3;\n}\n.specs-dd__table tr td {\n      padding-bottom: 0;\n}\n.specs-dd__table--mobile {\n      display: table;\n}\n.specs-dd__subtitle {\n    padding-bottom: 1px !important;\n}\n.specs-dd__value {\n    padding-bottom: 25px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.presentation {\n  position: relative;\n  overflow: hidden;\n  background-color: #000;\n  height: 40vw;\n}\n.presentation.isEntered .presentation__back::after {\n    opacity: 0.35;\n}\n.presentation.showIcons .presentation__icon {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-box-shadow: 0 0 0 12px rgba(0, 170, 210, 0.5);\n            box-shadow: 0 0 0 12px rgba(0, 170, 210, 0.5);\n}\n.presentation__head {\n    position: absolute;\n    top: 26px;\n    left: 32px;\n    overflow: hidden;\n    z-index: 10;\n}\n.presentation__main {\n    color: #fff;\n    font-size: 7.6rem;\n    line-height: 1.05;\n    font-weight: 500;\n    -webkit-transition: -webkit-transform 0.5s;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n}\n.presentation__main--small {\n      opacity: 0.6;\n      color: #C3BAB4;\n      font-size: 2rem;\n      line-height: 1.5;\n}\n.presentation__left {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 50%;\n}\n.presentation__prev, .presentation__next {\n    position: absolute;\n    display: block;\n    width: 80px;\n    height: 80px;\n    background-color: rgba(0, 0, 0, 0.25);\n    z-index: 10;\n    opacity: 0;\n}\n.presentation__prev svg, .presentation__next svg {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      width: 16px;\n      height: 36px;\n      stroke: #fff;\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n}\n.presentation__prev:focus, .presentation__next:focus {\n      background-color: rgba(0, 0, 0, 0.25);\n}\n.presentation__prev:hover svg, .presentation__next:hover svg {\n      stroke: #666666;\n}\n.presentation__next {\n    left: -80px;\n    bottom: 0;\n}\n.presentation__prev {\n    left: -160px;\n    bottom: 0;\n}\n.presentation__back {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    bottom: 0;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover;\n    will-change: transform;\n}\n.presentation__back img {\n      display: block;\n      width: 100%;\n}\n.presentation__back::after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: #000;\n      opacity: 0;\n      -webkit-transition: opacity 0.5s;\n      transition: opacity 0.5s;\n}\n.presentation__icons-holder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.presentation__icon {\n    position: absolute;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background-color: #00AAD2;\n    z-index: 10;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-box-shadow: 0 0 0 0px rgba(0, 170, 210, 0.5);\n            box-shadow: 0 0 0 0px rgba(0, 170, 210, 0.5);\n    -webkit-transition: -webkit-transform 0.3s, -webkit-box-shadow 0.3s;\n    transition: -webkit-transform 0.3s, -webkit-box-shadow 0.3s;\n    transition: transform 0.3s, box-shadow 0.3s;\n    transition: transform 0.3s, box-shadow 0.3s, -webkit-transform 0.3s, -webkit-box-shadow 0.3s;\n}\n.presentation__icon:focus {\n      background-color: #00AAD2;\n}\n.presentation__icon:hover .presentation__center, .presentation__icon:active .presentation__center {\n      -webkit-transform: scale(1.16);\n              transform: scale(1.16);\n}\n.presentation__icon::after, .presentation__icon::before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: auto;\n      width: 16px;\n      height: 2px;\n      background-color: #fff;\n      z-index: 5;\n}\n.presentation__icon::after {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg);\n}\n.presentation__center {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #00AAD2;\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.presentation__aside {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 50%;\n    background-color: #000;\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n    z-index: 20;\n    -ms-touch-action: auto;\n        touch-action: auto;\n}\n.presentation__list {\n    height: 100%;\n}\n.presentation__slide {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    color: #fff;\n    padding: 55px;\n    padding-top: 20px;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    background-size: cover;\n    opacity: 1;\n    -webkit-transition: opacity 0.5s;\n    transition: opacity 0.5s;\n}\n.presentation__animation {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.presentation__frame {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n}\n.presentation__composition {\n    position: absolute;\n    left: 55px;\n    bottom: 55px;\n    max-width: 400px;\n}\n.presentation__img {\n    position: relative;\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    background-color: #E4DCD3;\n    margin-bottom: 15px;\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n}\n.presentation__img img {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      max-width: 80%;\n      max-height: 80%;\n      margin: auto;\n}\n.presentation__title {\n    font-size: 3.6rem;\n    line-height: 1.11;\n    font-weight: 500;\n    margin-bottom: 30px;\n    overflow: hidden;\n}\n.presentation__title span {\n      display: block;\n      -webkit-transition: -webkit-transform 0.3s;\n      transition: -webkit-transform 0.3s;\n      transition: transform 0.3s;\n      transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.presentation__description {\n    font-size: 1.8rem;\n    line-height: 1.33;\n    overflow: hidden;\n}\n.presentation__description span {\n      display: block;\n      -webkit-transition: -webkit-transform 0.5s;\n      transition: -webkit-transform 0.5s;\n      transition: transform 0.5s;\n      transition: transform 0.5s, -webkit-transform 0.5s;\n}\n.presentation__close {\n    position: absolute;\n    display: block;\n    top: 20px;\n    right: 30px;\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.25);\n    opacity: 0;\n    z-index: 10;\n}\n.presentation__close svg {\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: auto;\n      width: 24px;\n      height: 24px;\n      fill: #fff;\n      -webkit-transition: 0.5s;\n      transition: 0.5s;\n}\n.presentation__close:hover svg {\n      fill: #666666;\n}\n.presentation__controls {\n    position: relative;\n    margin-right: 50px;\n    z-index: 10;\n}\n.presentation__controls ul {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.presentation__controls li {\n      width: 100%;\n}\n.presentation__controls a {\n      display: block;\n      line-height: 56px;\n      text-align: center;\n      background-color: rgba(0, 0, 0, 0.25);\n      color: #fff;\n      font-size: 1.8rem;\n      font-weight: 500;\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n}\n.presentation__controls a:hover {\n        color: #B7B7B7;\n}\n.presentation__controls a.active {\n        background-color: #00AAD2;\n}\n.presentation__dots {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: absolute;\n    bottom: 24px;\n    left: 0;\n    width: 100%;\n    z-index: 10;\n}\n.presentation__dot {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background-color: #fff;\n    cursor: pointer;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n.presentation__dot:not(:last-of-type) {\n      margin-right: 10px;\n}\n.presentation__dot.active {\n      background-color: #00AAD2;\n}\n.presentation__icon--0 {\n  -webkit-transition-delay: 0.2s, 0.35s;\n          transition-delay: 0.2s, 0.35s;\n}\n.presentation__icon--1 {\n  -webkit-transition-delay: 0.4s, 0.7s;\n          transition-delay: 0.4s, 0.7s;\n}\n.presentation__icon--2 {\n  -webkit-transition-delay: 0.6s, 1.05s;\n          transition-delay: 0.6s, 1.05s;\n}\n.presentation__icon--3 {\n  -webkit-transition-delay: 0.8s, 1.4s;\n          transition-delay: 0.8s, 1.4s;\n}\n.presentation__icon--4 {\n  -webkit-transition-delay: 1s, 1.75s;\n          transition-delay: 1s, 1.75s;\n}\n.presentation__icon--5 {\n  -webkit-transition-delay: 1.2s, 2.1s;\n          transition-delay: 1.2s, 2.1s;\n}\n.presentation__icon--6 {\n  -webkit-transition-delay: 1.4s, 2.45s;\n          transition-delay: 1.4s, 2.45s;\n}\n.presentation__icon--7 {\n  -webkit-transition-delay: 1.6s, 2.8s;\n          transition-delay: 1.6s, 2.8s;\n}\n.presentation__icon--8 {\n  -webkit-transition-delay: 1.8s, 3.15s;\n          transition-delay: 1.8s, 3.15s;\n}\n.presentation__icon--9 {\n  -webkit-transition-delay: 2s, 3.5s;\n          transition-delay: 2s, 3.5s;\n}\n.slide-enter {\n  opacity: 0.2;\n}\n.slide-enter .presentation__title span, .slide-enter .presentation__description span {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n.slide-leave-active {\n  opacity: 0;\n  -webkit-transition-delay: 0.5s;\n          transition-delay: 0.5s;\n}\n.slide-leave-active .presentation__img {\n    opacity: 0;\n}\n.slide-leave-active .presentation__title span, .slide-leave-active .presentation__description span {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n.main-enter {\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n.main-leave-active {\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n.frame-enter {\n  opacity: 0;\n}\n.frame-leave-active {\n  opacity: 0;\n}\n@media only screen and (max-width: 1262px) {\n.presentation {\n    height: 81vw;\n}\n.presentation__head {\n      top: 30px;\n      left: 40px;\n}\n.presentation__aside {\n      width: 100%;\n}\n.presentation__prev:focus, .presentation__next:focus {\n      background-color: rgba(0, 0, 0, 0.25);\n}\n.presentation__prev:hover svg, .presentation__next:hover svg {\n      stroke: #fff;\n}\n.presentation__next {\n      left: auto;\n      right: 0;\n}\n.presentation__prev {\n      left: auto;\n      right: 80px;\n}\n.presentation__close {\n      right: 40px;\n}\n.presentation__composition {\n      left: 40px;\n}\n}\n@media only screen and (max-width: 767px) {\n.presentation.showIcons .presentation__icon {\n    -webkit-box-shadow: 0 0 0 10px rgba(0, 170, 210, 0.5);\n            box-shadow: 0 0 0 10px rgba(0, 170, 210, 0.5);\n}\n.presentation__head {\n    top: 21px;\n    left: 16px;\n}\n.presentation__main {\n    font-size: 36px;\n}\n.presentation__main--small {\n      font-size: 16px;\n      line-height: 18px;\n}\n.presentation__icon {\n    width: 37px;\n    height: 37px;\n}\n.presentation__close {\n    width: 24px;\n    height: 24px;\n    top: 32px;\n    right: 16px;\n    background-color: transparent;\n}\n.presentation__composition {\n    left: 16px;\n    right: 16px;\n    bottom: 63px;\n}\n.presentation__img {\n    width: 48px;\n    height: 48px;\n}\n.presentation__title {\n    font-size: 20px;\n    margin-bottom: 6px;\n}\n.presentation__description {\n    font-size: 14px;\n}\n.presentation__prev, .presentation__next {\n    display: none;\n}\n.presentation__slide {\n    padding-left: 16px;\n}\n.presentation__controls {\n    margin-right: 0;\n}\n.presentation__controls a {\n      font-size: 16px;\n      line-height: 48px;\n}\n}\n@media only screen and (max-width: 639px) {\n.presentation {\n    height: 398px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.view {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 43px;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-bottom: 54px;\n  height: 100%;\n}\n.view__title {\n    display: block;\n    text-align: center;\n}\n.view__body {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    position: relative;\n    margin: 0 auto;\n    max-width: 910px;\n    width: 100%;\n}\n.view__body::after {\n      content: '';\n      display: block;\n      top: 0;\n      left: 0;\n      padding-bottom: 45%;\n}\n.view__body #spritespin {\n      position: absolute !important;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n}\n.view__back {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-size: 100%;\n}\n.view__nav {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 0;\n}\n.view__next, .view__prev {\n    display: block;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n.view__next svg, .view__prev svg {\n      stroke: #000;\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n}\n.view__next:hover svg, .view__prev:hover svg {\n      stroke: #B7B7B7;\n}\n.view__preloader {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    width: 88px;\n    height: 88px;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.7);\n    cursor: pointer;\n}\n.view__preloader img {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n}\n.view__progress {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    line-height: 88px;\n    font-size: 20px;\n    color: #fff;\n    font-weight: 500;\n    text-align: center;\n}\n.view__bottom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.colors__current {\n  font-size: 2rem;\n  line-height: 1.2;\n  font-weight: 500;\n  color: #000000;\n  margin-bottom: 20px;\n}\n.colors__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.colors__color {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  cursor: pointer;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.colors__color::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -7px;\n    right: -4px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #00AAD2;\n    background-image: url(\"/images/icons/check.svg\");\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: 50%;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.colors__color:not(:last-of-type) {\n    margin-right: 8px;\n}\n.colors__color.active::after {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.preloader-arrow-enter {\n  opacity: 0;\n}\n.preloader-leave-active {\n  opacity: 0;\n}\n@media only screen and (max-width: 1262px) {\n.view {\n    padding: 40px;\n}\n.view__bottom {\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n.view__button {\n      margin-top: 40px;\n}\n.colors {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 767px) {\n.view {\n    padding: 31px 16px 40px 16px;\n}\n.view__button {\n      width: 100%;\n      margin-top: 32px;\n}\n.view__preloader {\n      width: 48px;\n      height: 48px;\n}\n.view__progress {\n      font-size: 14px;\n      line-height: 48px;\n}\n.colors__current {\n    font-size: 16px;\n    margin-bottom: 0;\n}\n.colors__list {\n    overflow: auto;\n    padding-top: 20px;\n    min-width: 100%;\n    margin-right: -16px;\n}\n.colors__color {\n    width: 48px;\n    height: 48px;\n    margin-right: 8px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5194924\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/common/HotButtons.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.h-buttons {\n  display: block;\n  color: #ffffff;\n  z-index: 600;\n  font-size: 0;\n  border-radius: 24px;\n}\n.h-buttons.fixed {\n    position: fixed;\n}\n.h-buttons__main {\n    display: inline-block;\n    position: relative;\n    width: 56px;\n    height: 56px;\n    border-radius: 50%;\n    background-color: #E63312;\n}\n.h-buttons__main::after, .h-buttons__main::before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      background-color: #fff;\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n}\n.h-buttons__main::after {\n      width: 16px;\n      height: 2px;\n}\n.h-buttons__main::before {\n      height: 16px;\n      width: 2px;\n}\n.h-buttons__main.show::after {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n}\n.h-buttons__main.show::before {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n}\n.h-buttons__list {\n    position: absolute;\n    right: 0;\n    padding-top: 50px;\n    padding-bottom: 72px;\n    bottom: 0px;\n    text-align: right;\n    font-size: 1.6rem;\n    line-height: 1.25;\n    border-radius: 56px;\n    pointer-events: none;\n    overflow: hidden;\n}\n.h-buttons__list.show {\n      pointer-events: auto;\n}\n.h-buttons__list.show .h-buttons__link {\n        -webkit-transform: translate(0, 0);\n                transform: translate(0, 0);\n        will-change: transform;\n}\n.h-buttons__list.show .h-buttons__icon {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        will-change: transform;\n}\n.h-buttons__list.show .h-buttons__button {\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n        will-change: transform;\n}\n.h-buttons__item:not(:last-of-type) {\n    margin-bottom: 8px;\n}\n.h-buttons__link {\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    border-radius: 24px;\n    -webkit-transform: translate(0, 400%);\n            transform: translate(0, 400%);\n    -webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.h-buttons__icon {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 48px;\n    height: 48px;\n    border-radius: 24px;\n    background-color: #00AAD2;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    z-index: 1;\n    pointer-events: none;\n}\n.h-buttons__icon svg {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n}\n.h-buttons__button {\n    display: block;\n    line-height: 48px;\n    border-radius: 24px;\n    padding-left: 16px;\n    padding-right: 60px;\n    background-color: rgba(0, 170, 210, 0.6);\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n.h-buttons__button span {\n      white-space: nowrap;\n}\n.oneButton .h-buttons__main {\n  display: none;\n}\n.oneButton .h-buttons__icon {\n  pointer-events: auto;\n}\n.oneButton .h-buttons__list {\n  pointer-events: none;\n}\n.oneButton .h-buttons__list .h-buttons__button {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    -webkit-transition-delay: 0s !important;\n            transition-delay: 0s !important;\n}\n.oneButton .h-buttons__list.showButton {\n  pointer-events: auto;\n}\n.oneButton .h-buttons__list.showButton .h-buttons__button {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(1n) .h-buttons__link {\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(1n) .h-buttons__icon {\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(1n) .h-buttons__button {\n  -webkit-transition-delay: 0.45s;\n          transition-delay: 0.45s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(1n) .h-buttons__link {\n  -webkit-transition-delay: 0.45s;\n          transition-delay: 0.45s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(1n) .h-buttons__icon {\n  -webkit-transition-delay: 0.45s;\n          transition-delay: 0.45s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(1n) .h-buttons__button {\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(2n) .h-buttons__link {\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(2n) .h-buttons__icon {\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(2n) .h-buttons__button {\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(2n) .h-buttons__link {\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(2n) .h-buttons__icon {\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(2n) .h-buttons__button {\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(3n) .h-buttons__link {\n  -webkit-transition-delay: 0.1s;\n          transition-delay: 0.1s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(3n) .h-buttons__icon {\n  -webkit-transition-delay: 0.1s;\n          transition-delay: 0.1s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(3n) .h-buttons__button {\n  -webkit-transition-delay: 0.15s;\n          transition-delay: 0.15s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(3n) .h-buttons__link {\n  -webkit-transition-delay: 0.15s;\n          transition-delay: 0.15s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(3n) .h-buttons__icon {\n  -webkit-transition-delay: 0.15s;\n          transition-delay: 0.15s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(3n) .h-buttons__button {\n  -webkit-transition-delay: 0.1s;\n          transition-delay: 0.1s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(4n) .h-buttons__link {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(4n) .h-buttons__icon {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.h-buttons__list.show .h-buttons__item:nth-of-type(4n) .h-buttons__button {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(4n) .h-buttons__link {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(4n) .h-buttons__icon {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.h-buttons__list .h-buttons__item:nth-of-type(4n) .h-buttons__button {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n@media only screen and (max-width: 767px) {\n.h-buttons.fixed {\n    right: 16px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/spritespin/release/src/api/common.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

// tslint:disable:object-literal-shorthand
// tslint:disable:only-arrow-functions
__WEBPACK_IMPORTED_MODULE_0__core__["c" /* extendApi */]({
    // Gets a value indicating whether the animation is currently running.
    isPlaying: function () {
        return __WEBPACK_IMPORTED_MODULE_0__core__["f" /* getPlaybackState */](this.data).handler != null;
    },
    // Gets a value indicating whether the animation looping is enabled.
    isLooping: function () {
        return this.data.loop;
    },
    // Starts/Stops the animation playback
    toggleAnimation: function () {
        if (this.isPlaying()) {
            this.stopAnimation();
        }
        else {
            this.startAnimation();
        }
    },
    // Stops animation playback
    stopAnimation: function () {
        this.data.animate = false;
        __WEBPACK_IMPORTED_MODULE_0__core__["m" /* stopAnimation */](this.data);
    },
    // Starts animation playback
    startAnimation: function () {
        this.data.animate = true;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](this.data);
    },
    // Sets a value indicating whether the animation should be looped or not.
    // This might start the animation (if the 'animate' data attribute is set to true)
    loop: function (value) {
        this.data.loop = value;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](this.data);
        return this;
    },
    // Gets the current frame number
    currentFrame: function () {
        return this.data.frame;
    },
    // Updates SpriteSpin to the specified frame.
    updateFrame: function (frame) {
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](this.data, frame);
        return this;
    },
    // Skips the given number of frames
    skipFrames: function (step) {
        var data = this.data;
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, data.frame + (data.reverse ? -step : +step));
        return this;
    },
    // Updates SpriteSpin so that the next frame is shown
    nextFrame: function () {
        return this.skipFrames(1);
    },
    // Updates SpriteSpin so that the previous frame is shown
    prevFrame: function () {
        return this.skipFrames(-1);
    },
    // Starts the animations that will play until the given frame number is reached
    // options:
    //   force [boolean] starts the animation, even if current frame is the target frame
    //   nearest [boolean] animates to the direction with minimum distance to the target frame
    playTo: function (frame, options) {
        var data = this.data;
        options = options || {};
        if (!options.force && data.frame === frame) {
            return;
        }
        if (options.nearest) {
            // distance to the target frame
            var a = frame - data.frame;
            // distance to last frame and the to target frame
            var b = frame > data.frame ? a - data.frames : a + data.frames;
            // minimum distance
            var c = Math.abs(a) < Math.abs(b) ? a : b;
            data.reverse = c < 0;
        }
        data.animate = true;
        data.loop = false;
        data.stopFrame = frame;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](data);
        return this;
    }
});
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/api/fullscreen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export exitFullscreen */
/* unused harmony export fullscreenEnabled */
/* unused harmony export fullscreenElement */
/* unused harmony export isFullscreen */
/* unused harmony export toggleFullscreen */
/* unused harmony export requestFullscreen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


function pick(target, names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        if (target[name_1] || name_1 in target) {
            return name_1;
        }
    }
    return names[0];
}
var browser = {
    requestFullscreen: pick(document.documentElement, [
        'requestFullscreen',
        'webkitRequestFullScreen',
        'mozRequestFullScreen',
        'msRequestFullscreen'
    ]),
    exitFullscreen: pick(document, [
        'exitFullscreen',
        'webkitExitFullscreen',
        'webkitCancelFullScreen',
        'mozCancelFullScreen',
        'msExitFullscreen'
    ]),
    fullscreenElement: pick(document, [
        'fullscreenElement',
        'webkitFullscreenElement',
        'webkitCurrentFullScreenElement',
        'mozFullScreenElement',
        'msFullscreenElement'
    ]),
    fullscreenEnabled: pick(document, [
        'fullscreenEnabled',
        'webkitFullscreenEnabled',
        'mozFullScreenEnabled',
        'msFullscreenEnabled'
    ]),
    fullscreenchange: pick(document, [
        'onfullscreenchange',
        'onwebkitfullscreenchange',
        'onmozfullscreenchange',
        'onMSFullscreenChange'
    ]).replace(/^on/, ''),
    fullscreenerror: pick(document, [
        'onfullscreenerror',
        'onwebkitfullscreenerror',
        'onmozfullscreenerror',
        'onMSFullscreenError'
    ]).replace(/^on/, '')
};
var changeEvent = browser.fullscreenchange + '.' + __WEBPACK_IMPORTED_MODULE_0__core__["i" /* namespace */] + '-fullscreen';
function unbindChangeEvent() {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["$"])(document).unbind(changeEvent);
}
function bindChangeEvent(callback) {
    unbindChangeEvent();
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["$"])(document).bind(changeEvent, callback);
}
var orientationEvent = 'orientationchange.' + __WEBPACK_IMPORTED_MODULE_0__core__["i" /* namespace */] + '-fullscreen';
function unbindOrientationEvent() {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["$"])(window).unbind(orientationEvent);
}
function bindOrientationEvent(callback) {
    unbindOrientationEvent();
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["$"])(window).bind(orientationEvent, callback);
}
function requestFullscreenNative(e) {
    e = e || document.documentElement;
    e[browser.requestFullscreen]();
}
function exitFullscreen() {
    return document[browser.exitFullscreen]();
}
function fullscreenEnabled() {
    return document[browser.fullscreenEnabled];
}
function fullscreenElement() {
    return document[browser.fullscreenElement];
}
function isFullscreen() {
    return !!fullscreenElement();
}
function toggleFullscreen(data, opts) {
    if (isFullscreen()) {
        this.apiRequestFullscreen(opts);
    }
    else {
        this.exitFullscreen();
    }
}
function requestFullscreen(data, opts) {
    opts = opts || {};
    var oWidth = data.width;
    var oHeight = data.height;
    var oSource = data.source;
    var oSize = data.sizeMode;
    var oResponsive = data.responsive;
    var enter = function () {
        data.width = window.screen.width;
        data.height = window.screen.height;
        data.source = (opts.source || oSource);
        data.sizeMode = opts.sizeMode || 'fit';
        data.responsive = false;
        Object(__WEBPACK_IMPORTED_MODULE_0__core__["b" /* boot */])(data);
    };
    var exit = function () {
        data.width = oWidth;
        data.height = oHeight;
        data.source = oSource;
        data.sizeMode = oSize;
        data.responsive = oResponsive;
        Object(__WEBPACK_IMPORTED_MODULE_0__core__["b" /* boot */])(data);
    };
    bindChangeEvent(function () {
        if (isFullscreen()) {
            enter();
            bindOrientationEvent(enter);
        }
        else {
            unbindChangeEvent();
            unbindOrientationEvent();
            exit();
        }
    });
    requestFullscreenNative(data.target[0]);
}
Object(__WEBPACK_IMPORTED_MODULE_0__core__["c" /* extendApi */])({
    fullscreenEnabled: fullscreenEnabled,
    fullscreenElement: fullscreenElement,
    exitFullscreen: exitFullscreen,
    toggleFullscreen: function (opts) {
        toggleFullscreen(this.data, opts);
    },
    requestFullscreen: function (opts) {
        requestFullscreen(this.data, opts);
    }
});
//# sourceMappingURL=fullscreen.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__("./node_modules/spritespin/release/src/api/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fullscreen__ = __webpack_require__("./node_modules/spritespin/release/src/api/fullscreen.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony export (immutable) */ __webpack_exports__["b"] = extendApi;
/**
 * @internal
 */
var Api = /** @class */ (function () {
    function Api(data) {
        this.data = data;
    }
    return Api;
}());

/**
 * Adds methods to the SpriteSpin api
 *
 * @public
 */
function extendApi(methods) {
    var api = Api.prototype;
    for (var key in methods) {
        if (methods.hasOwnProperty(key)) {
            if (api[key]) {
                throw new Error('API method is already defined: ' + key);
            }
            else {
                api[key] = methods[key];
            }
        }
    }
    return api;
}
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/boot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export instances */
/* unused harmony export applyEvents */
/* harmony export (immutable) */ __webpack_exports__["a"] = boot;
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["b"] = createOrUpdate;
/* harmony export (immutable) */ __webpack_exports__["c"] = destroy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("./node_modules/spritespin/release/src/core/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playback__ = __webpack_require__("./node_modules/spritespin/release/src/core/playback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins__ = __webpack_require__("./node_modules/spritespin/release/src/core/plugins.js");





var $ = __WEBPACK_IMPORTED_MODULE_0__utils__["$"];
var counter = 0;
/**
 * Collection of all SpriteSpin instances
 */
var instances = {};
function pushInstance(data) {
    counter += 1;
    data.id = String(counter);
    instances[data.id] = data;
}
function popInstance(data) {
    delete instances[data.id];
}
function eachInstance(cb) {
    for (var id in instances) {
        if (instances.hasOwnProperty(id)) {
            cb(instances[id]);
        }
    }
}
var lazyinit = function () {
    // replace function with a noop
    // this logic must run only once
    lazyinit = function () { };
    function onEvent(eventName, e) {
        eachInstance(function (data) {
            for (var _i = 0, _a = data.plugins; _i < _a.length; _i++) {
                var module_1 = _a[_i];
                if (typeof module_1[eventName] === 'function') {
                    module_1[eventName].apply(data.target, [e, data]);
                }
            }
        });
    }
    function onResize() {
        eachInstance(function (data) {
            if (data.responsive) {
                boot(data);
            }
        });
    }
    var _loop_1 = function (eventName) {
        $(window.document).bind(eventName + '.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], function (e) {
            onEvent('document' + eventName, e);
        });
    };
    for (var _i = 0, eventNames_1 = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* eventNames */]; _i < eventNames_1.length; _i++) {
        var eventName = eventNames_1[_i];
        _loop_1(eventName);
    }
    var resizeTimeout = null;
    $(window).on('resize', function () {
        window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(onResize, 100);
    });
};
/**
 * (re)binds all spritespin events on the target element
 *
 * @internal
 */
function applyEvents(data) {
    var target = data.target;
    // Clear all SpriteSpin events on the target element
    __WEBPACK_IMPORTED_MODULE_0__utils__["unbind"](target);
    // disable all default browser behavior on the following events
    // mainly prevents image drag operation
    for (var _i = 0, eventsToPrevent_1 = __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* eventsToPrevent */]; _i < eventsToPrevent_1.length; _i++) {
        var eName = eventsToPrevent_1[_i];
        __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, eName, __WEBPACK_IMPORTED_MODULE_0__utils__["prevent"]);
    }
    // Bind module functions to SpriteSpin events
    for (var _a = 0, _b = data.plugins; _a < _b.length; _a++) {
        var plugin = _b[_a];
        for (var _c = 0, eventNames_2 = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* eventNames */]; _c < eventNames_2.length; _c++) {
            var eName = eventNames_2[_c];
            __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, eName, plugin[eName]);
        }
        for (var _d = 0, callbackNames_1 = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* callbackNames */]; _d < callbackNames_1.length; _d++) {
            var eName = callbackNames_1[_d];
            __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, eName, plugin[eName]);
        }
    }
    // bind auto start function to load event.
    __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, 'onLoad', function (e, d) {
        Object(__WEBPACK_IMPORTED_MODULE_3__playback__["a" /* applyAnimation */])(d);
    });
    // bind all user events that have been passed on initialization
    for (var _e = 0, callbackNames_2 = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* callbackNames */]; _e < callbackNames_2.length; _e++) {
        var eName = callbackNames_2[_e];
        __WEBPACK_IMPORTED_MODULE_0__utils__["bind"](target, eName, data[eName]);
    }
}
function applyMetrics(data) {
    if (!data.images) {
        data.metrics = [];
    }
    data.metrics = __WEBPACK_IMPORTED_MODULE_0__utils__["measure"](data.images, data);
    var spec = __WEBPACK_IMPORTED_MODULE_0__utils__["findSpecs"](data.metrics, data.frames, 0, 0);
    if (spec.sprite) {
        // TODO: try to remove frameWidth/frameHeight
        data.frameWidth = spec.sprite.width;
        data.frameHeight = spec.sprite.height;
    }
}
/**
 * Runs the boot process.
 *
 * @remarks
 * (re)initializes plugins, (re)initializes the layout, (re)binds events and loads source images.
 *
 * @internal
 */
function boot(data) {
    Object(__WEBPACK_IMPORTED_MODULE_4__plugins__["a" /* applyPlugins */])(data);
    applyEvents(data);
    Object(__WEBPACK_IMPORTED_MODULE_2__layout__["a" /* applyLayout */])(data);
    data.source = __WEBPACK_IMPORTED_MODULE_0__utils__["toArray"](data.source);
    data.loading = true;
    data.target
        .addClass('loading')
        .trigger('onInit.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
    __WEBPACK_IMPORTED_MODULE_0__utils__["preload"]({
        source: data.source,
        preloadCount: data.preloadCount,
        progress: function (progress) {
            data.progress = progress;
            data.target.trigger('onProgress.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
        },
        complete: function (images) {
            data.images = images;
            data.loading = false;
            data.frames = data.frames || images.length;
            applyMetrics(data);
            Object(__WEBPACK_IMPORTED_MODULE_2__layout__["a" /* applyLayout */])(data);
            data.stage.show();
            data.target
                .removeClass('loading')
                .trigger('onLoad.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data)
                .trigger('onFrame.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data)
                .trigger('onDraw.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data)
                .trigger('onComplete.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
        }
    });
}
/**
 * Creates a new SpriteSpin instance
 *
 * @public
 */
function create(options) {
    var _this = this;
    var target = options.target;
    // SpriteSpin is not initialized
    // Create default settings object and extend with given options
    var data = $.extend(true, {}, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* defaults */], options);
    // ensure source is set
    data.source = data.source || [];
    // ensure plugins are set
    data.plugins = data.plugins || [];
    // if image tags are contained inside this DOM element
    // use these images as the source files
    target.find('img').each(function () {
        if (!Array.isArray(data.source)) {
            data.source = [];
        }
        data.source.push($(_this).attr('src'));
    });
    // build inner html
    // <div>
    //   <div class='spritespin-stage'></div>
    //   <canvas class='spritespin-canvas'></canvas>
    // </div>
    target
        .empty()
        .addClass('spritespin-instance')
        .append("<div class='spritespin-stage'></div>");
    // add the canvas element if canvas rendering is enabled and supported
    if (data.renderer === 'canvas') {
        var canvas = document.createElement('canvas');
        if (!!(canvas.getContext && canvas.getContext('2d'))) {
            data.canvas = $(canvas).addClass('spritespin-canvas');
            data.context = canvas.getContext('2d');
            target.append(data.canvas);
            target.addClass('with-canvas');
        }
        else {
            // fallback to image rendering mode
            data.renderer = 'image';
        }
    }
    // setup references to DOM elements
    data.target = target;
    data.stage = target.find('.spritespin-stage');
    // store the data
    target.data(__WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
    pushInstance(data);
    return data;
}
/**
 * Creates a new SpriteSpin instance, or updates an existing one
 *
 * @public
 */
function createOrUpdate(options) {
    lazyinit();
    var data = options.target.data(__WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */]);
    if (!data) {
        data = create(options);
    }
    else {
        $.extend(data, options);
    }
    boot(data);
    return data;
}
/**
 * Destroys the SpriteSpin instance
 *
 * @remarks
 * - stops running animation
 * - unbinds all events
 * - deletes the data on the target element
 *
 * @public
 */
function destroy(data) {
    popInstance(data);
    Object(__WEBPACK_IMPORTED_MODULE_3__playback__["d" /* stopAnimation */])(data);
    data.target
        .trigger('onDestroy', data)
        .html(null)
        .attr('style', null)
        .attr('unselectable', null)
        .removeClass(['spritespin-instance', 'with-canvas']);
    __WEBPACK_IMPORTED_MODULE_0__utils__["unbind"](data.target);
    data.target.removeData(__WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */]);
}
//# sourceMappingURL=boot.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return eventNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return callbackNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return eventsToPrevent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaults; });
/**
 * The namespace that is used to bind functions to DOM events and store the data object
 */
var namespace = 'spritespin';
/**
 * Event names that are recognized by SpriteSpin. A module can implement any of these and they will be bound
 * to the target element on which the plugin is called.
 */
var eventNames = [
    'mousedown',
    'mousemove',
    'mouseup',
    'mouseenter',
    'mouseover',
    'mouseleave',
    'mousewheel',
    'wheel',
    'click',
    'dblclick',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'selectstart',
    'gesturestart',
    'gesturechange',
    'gestureend'
];
/**
 *
 */
var callbackNames = [
    'onInit',
    'onProgress',
    'onLoad',
    'onFrameChanged',
    'onFrame',
    'onDraw',
    'onComplete',
    'onDestroy'
];
/**
 * Names of events for that the default behavior should be prevented.
 */
var eventsToPrevent = [
    'dragstart'
];
/**
 * Default set of SpriteSpin options. This also represents the majority of data attributes that are used during the
 * lifetime of a SpriteSpin instance. The data is stored inside the target DOM element on which the plugin is called.
 */
var defaults = {
    source: undefined,
    width: undefined,
    height: undefined,
    frames: undefined,
    framesX: undefined,
    lanes: 1,
    sizeMode: undefined,
    renderer: 'canvas',
    lane: 0,
    frame: 0,
    frameTime: 40,
    animate: true,
    retainAnimate: false,
    reverse: false,
    loop: true,
    stopFrame: 0,
    wrap: true,
    wrapLane: false,
    sense: 1,
    senseLane: undefined,
    orientation: 'horizontal',
    detectSubsampling: true,
    preloadCount: undefined,
    responsive: undefined,
    plugins: [
        '360',
        'drag'
    ]
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./node_modules/spritespin/release/src/core/api.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boot__ = __webpack_require__("./node_modules/spritespin/release/src/core/boot.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__boot__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__constants__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input__ = __webpack_require__("./node_modules/spritespin/release/src/core/input.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__input__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__input__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__input__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout__ = __webpack_require__("./node_modules/spritespin/release/src/core/layout.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playback__ = __webpack_require__("./node_modules/spritespin/release/src/core/playback.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__playback__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugins__ = __webpack_require__("./node_modules/spritespin/release/src/core/plugins.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__plugins__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state__ = __webpack_require__("./node_modules/spritespin/release/src/core/state.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__state__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__state__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__state__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jquery__ = __webpack_require__("./node_modules/spritespin/release/src/core/jquery.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInputState;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateInput;
/* harmony export (immutable) */ __webpack_exports__["b"] = resetInput;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__("./node_modules/spritespin/release/src/core/state.js");


/**
 * Gets the current input state
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function getInputState(data) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__state__["c" /* getState */])(data, 'input');
}
/**
 * Updates the input state using a mous or touch event.
 *
 * @public
 * @param e - The input event
 * @param data - The SpriteSpin instance data
 */
function updateInput(e, data) {
    var cursor = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["getCursorPosition"])(e);
    var state = getInputState(data);
    // cache positions from previous frame
    state.oldX = state.currentX;
    state.oldY = state.currentY;
    state.currentX = cursor.x;
    state.currentY = cursor.y;
    // Fix old position.
    if (state.oldX === undefined || state.oldY === undefined) {
        state.oldX = state.currentX;
        state.oldY = state.currentY;
    }
    // Cache the initial click/touch position and store the frame number at which the click happened.
    // Useful for different behavior implementations. This must be restored when the click/touch is released.
    if (state.startX === undefined || state.startY === undefined) {
        state.startX = state.currentX;
        state.startY = state.currentY;
        state.clickframe = data.frame;
        state.clicklane = data.lane;
    }
    // Calculate the vector from start position to current pointer position.
    state.dX = state.currentX - state.startX;
    state.dY = state.currentY - state.startY;
    // Calculate the vector from last frame position to current pointer position.
    state.ddX = state.currentX - state.oldX;
    state.ddY = state.currentY - state.oldY;
    // Normalize vectors to range [-1:+1]
    state.ndX = state.dX / data.target.innerWidth();
    state.ndY = state.dY / data.target.innerHeight();
    state.nddX = state.ddX / data.target.innerWidth();
    state.nddY = state.ddY / data.target.innerHeight();
}
/**
 * Resets the input state.
 *
 * @public
 */
function resetInput(data) {
    var input = getInputState(data);
    input.startX = input.startY = undefined;
    input.currentX = input.currentY = undefined;
    input.oldX = input.oldY = undefined;
    input.dX = input.dY = 0;
    input.ddX = input.ddY = 0;
    input.ndX = input.ndY = 0;
    input.nddX = input.nddY = 0;
}
//# sourceMappingURL=input.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/jquery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__("./node_modules/spritespin/release/src/core/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boot__ = __webpack_require__("./node_modules/spritespin/release/src/core/boot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");




function extension(option, value) {
    var $target = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["$"])(this);
    if (option === 'data') {
        return $target.data(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* namespace */]);
    }
    if (option === 'api') {
        var data = $target.data(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* namespace */]);
        data.api = data.api || new __WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */](data);
        return data.api;
    }
    if (option === 'destroy') {
        return $target.each(function () {
            var data = $target.data(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* namespace */]);
            if (data) {
                Object(__WEBPACK_IMPORTED_MODULE_2__boot__["c" /* destroy */])(data);
            }
        });
    }
    if (arguments.length === 2 && typeof option === 'string') {
        option = (_a = {}, _a[option] = value, _a);
    }
    if (typeof option === 'object') {
        return Object(__WEBPACK_IMPORTED_MODULE_2__boot__["b" /* createOrUpdate */])(__WEBPACK_IMPORTED_MODULE_0__utils__["$"].extend(true, { target: $target }, option)).target;
    }
    throw new Error('Invalid call to spritespin');
    var _a;
}
__WEBPACK_IMPORTED_MODULE_0__utils__["$"].fn[__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* namespace */]] = extension;
//# sourceMappingURL=jquery.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyLayout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");

/**
 * Applies css attributes to layout the SpriteSpin containers.
 *
 * @internal
 */
function applyLayout(data) {
    // disable selection
    data.target
        .attr('unselectable', 'on')
        .css({
        width: '',
        height: '',
        '-ms-user-select': 'none',
        '-moz-user-select': 'none',
        '-khtml-user-select': 'none',
        '-webkit-user-select': 'none',
        'user-select': 'none'
    });
    var size = data.responsive ? __WEBPACK_IMPORTED_MODULE_0__utils__["getComputedSize"](data) : __WEBPACK_IMPORTED_MODULE_0__utils__["getOuterSize"](data);
    var layout = __WEBPACK_IMPORTED_MODULE_0__utils__["getInnerLayout"](data.sizeMode, __WEBPACK_IMPORTED_MODULE_0__utils__["getInnerSize"](data), size);
    // apply layout on target
    data.target.css({
        width: size.width,
        height: size.height,
        position: 'relative',
        overflow: 'hidden'
    });
    // apply layout on stage
    data.stage
        .css(layout)
        .hide();
    if (!data.canvas) {
        return;
    }
    // apply layout on canvas
    data.canvas.css(layout).hide();
    // apply pixel ratio on canvas
    data.canvasRatio = data.canvasRatio || __WEBPACK_IMPORTED_MODULE_0__utils__["pixelRatio"](data.context);
    if (typeof layout.width === 'number' && typeof layout.height === 'number') {
        data.canvas[0].width = (layout.width * data.canvasRatio) || size.width;
        data.canvas[0].height = (layout.height * data.canvasRatio) || size.height;
    }
    else {
        data.canvas[0].width = (size.width * data.canvasRatio);
        data.canvas[0].height = (size.height * data.canvasRatio);
    }
    // width and height must be set before calling scale
    data.context.scale(data.canvasRatio, data.canvasRatio);
}
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/playback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getPlaybackState;
/* harmony export (immutable) */ __webpack_exports__["e"] = updateFrame;
/* harmony export (immutable) */ __webpack_exports__["d"] = stopAnimation;
/* harmony export (immutable) */ __webpack_exports__["a"] = applyAnimation;
/* harmony export (immutable) */ __webpack_exports__["c"] = startAnimation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__("./node_modules/spritespin/release/src/core/state.js");



/**
 * Gets the playback state
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function getPlaybackState(data) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__state__["c" /* getState */])(data, 'playback');
}
function updateLane(data, lane) {
    data.lane = data.wrapLane
        ? Object(__WEBPACK_IMPORTED_MODULE_0__utils__["wrap"])(lane, 0, data.lanes - 1, data.lanes)
        : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["clamp"])(lane, 0, data.lanes - 1);
}
function updateAnimationFrame(data) {
    data.frame += (data.reverse ? -1 : 1);
    // wrap the frame value to fit in range [0, data.frames)
    data.frame = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["wrap"])(data.frame, 0, data.frames - 1, data.frames);
    // stop animation if loop is disabled and the stopFrame is reached
    if (!data.loop && (data.frame === data.stopFrame)) {
        stopAnimation(data);
    }
}
function updateInputFrame(data, frame) {
    data.frame = Number(frame);
    data.frame = data.wrap
        ? Object(__WEBPACK_IMPORTED_MODULE_0__utils__["wrap"])(data.frame, 0, data.frames - 1, data.frames)
        : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["clamp"])(data.frame, 0, data.frames - 1);
}
function updateAnimation(data) {
    var state = getPlaybackState(data);
    if (state.handler) {
        updateBefore(data);
        updateAnimationFrame(data);
        updateAfter(data);
    }
}
function updateBefore(data) {
    var state = getPlaybackState(data);
    state.lastFrame = data.frame;
    state.lastLane = data.lane;
}
function updateAfter(data) {
    var state = getPlaybackState(data);
    if (state.lastFrame !== data.frame || state.lastLane !== data.lane) {
        data.target.trigger('onFrameChanged.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
    }
    data.target.trigger('onFrame.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
    data.target.trigger('onDraw.' + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* namespace */], data);
}
/**
 * Updates the frame or lane number of the SpriteSpin data.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param frame - The frame number to set
 * @param lane - The lane number to set
 */
function updateFrame(data, frame, lane) {
    updateBefore(data);
    if (frame != null) {
        updateInputFrame(data, frame);
    }
    if (lane != null) {
        updateLane(data, lane);
    }
    updateAfter(data);
}
/**
 * Stops the running animation.
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function stopAnimation(data) {
    data.animate = false;
    var state = getPlaybackState(data);
    if (state.handler != null) {
        window.clearInterval(state.handler);
        state.handler = null;
    }
}
/**
 * Starts animation playback if needed.
 *
 * @remarks
 * Starts animation playback if `animate` property is `true` and the animation is not yet running.
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function applyAnimation(data) {
    var state = getPlaybackState(data);
    if (state.handler && (!data.animate || state.frameTime !== data.frameTime)) {
        stopAnimation(data);
    }
    if (data.animate && !state.handler) {
        state.frameTime = data.frameTime;
        state.handler = window.setInterval(function () { return updateAnimation(data); }, state.frameTime);
    }
}
/**
 * Starts the animation playback
 *
 * @remarks
 * Starts the animation playback and also sets the `animate` property to `true`
 *
 * @public
 * @param data - The SpriteSpin instance data
 */
function startAnimation(data) {
    data.animate = true;
    applyAnimation(data);
}
//# sourceMappingURL=playback.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/plugins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = registerPlugin;
/* unused harmony export registerModule */
/* unused harmony export getPlugin */
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPlugins;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");

var plugins = {};
/**
 * Registers a plugin.
 *
 * @remarks
 * Use this to add custom Rendering or Updating modules that can be addressed with the 'module' option.
 *
 * @public
 * @param name - The name of the plugin
 * @param plugin - The plugin implementation
 */
function registerPlugin(name, plugin) {
    if (plugins[name]) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["error"])("Plugin name \"" + name + "\" is already taken");
        return;
    }
    plugin = plugin || {};
    plugins[name] = plugin;
    return plugin;
}
/**
 * Registers a plugin.
 *
 * @public
 * @deprecated Use {@link registerPlugin} instead
 * @param name - The name of the plugin
 * @param plugin - The plugin implementation
 */
function registerModule(name, plugin) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["warn"])('"registerModule" is deprecated, use "registerPlugin" instead');
    registerPlugin(name, plugin);
}
/**
 * Gets an active plugin by name
 *
 * @internal
 * @param name - The name of the plugin
 */
function getPlugin(name) {
    return plugins[name];
}
/**
 * Replaces module names on given SpriteSpin data and replaces them with actual implementations.
 * @internal
 */
function applyPlugins(data) {
    fixPlugins(data);
    for (var i = 0; i < data.plugins.length; i += 1) {
        var name_1 = data.plugins[i];
        if (typeof name_1 !== 'string') {
            continue;
        }
        var plugin = getPlugin(name_1);
        if (!plugin) {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["error"])('No plugin found with name ' + name_1);
            continue;
        }
        data.plugins[i] = plugin;
    }
}
function fixPlugins(data) {
    // tslint:disable no-string-literal
    if (data['mods']) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["warn"])('"mods" option is deprecated, use "plugins" instead');
        data.plugins = data['mods'];
        delete data['mods'];
    }
    if (data['behavior']) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["warn"])('"behavior" option is deprecated, use "plugins" instead');
        data.plugins.push(data['behavior']);
        delete data['behavior'];
    }
    if (data['module']) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["warn"])('"module" option is deprecated, use "plugins" instead');
        data.plugins.push(data['module']);
        delete data['module'];
    }
}
//# sourceMappingURL=plugins.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/core/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getState;
/* harmony export (immutable) */ __webpack_exports__["b"] = getPluginState;
/* harmony export (immutable) */ __webpack_exports__["d"] = is;
/* harmony export (immutable) */ __webpack_exports__["a"] = flag;
/**
 * Gets a state object by name.
 * @internal
 * @param data - The SpriteSpin instance data
 * @param name - The name of the state object
 */
function getState(data, name) {
    data.state = data.state || {};
    data.state[name] = data.state[name] || {};
    return data.state[name];
}
/**
 * Gets a plugin state object by name.
 *
 * @remarks
 * Plugins should use this method to get or create a state object where they can
 * store any instance variables.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param name - The name of the plugin
 */
function getPluginState(data, name) {
    var state = getState(data, 'plugin');
    state[name] = state[name] || {};
    return state[name];
}
/**
 * Checks whether a flag is set. See {@link flag}.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param key - The name of the flag
 */
function is(data, key) {
    return !!getState(data, 'flags')[key];
}
/**
 * Sets a flag value. See {@link is}.
 *
 * @public
 * @param data - The SpriteSpin instance data
 * @param key - The name of the flag
 * @param value - The value to set
 */
function flag(data, key, value) {
    getState(data, 'flags')[key] = !!value;
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Utils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");
/* unused harmony reexport sourceArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("./node_modules/spritespin/release/src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/index.js");



var Utils = __WEBPACK_IMPORTED_MODULE_1__utils__;


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_click__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-click.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_drag__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-drag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_hold__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-hold.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_swipe__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-swipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_wheel__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/input-wheel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/progress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__render_360__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-360.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__render_blur__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-blur.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__render_ease__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-ease.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__render_gallery__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-gallery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__render_panorama__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-panorama.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__render_zoom__ = __webpack_require__("./node_modules/spritespin/release/src/plugins/render-zoom.js");












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-click.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'click';
    function click(e, data) {
        if (data.loading || !data.stage.is(':visible')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        var half, pos;
        var target = data.target, offset = target.offset();
        if (data.orientation === 'horizontal') {
            half = target.innerWidth() / 2;
            pos = input.currentX - offset.left;
        }
        else {
            half = target.innerHeight() / 2;
            pos = input.currentY - offset.top;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, data.frame + (pos > half ? 1 : -1));
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        mouseup: click,
        touchend: click
    });
})();
//# sourceMappingURL=input-click.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-drag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'drag';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getAxis(data) {
        if (typeof data.orientation === 'number') {
            return data.orientation * Math.PI / 180;
        }
        if (data.orientation === 'horizontal') {
            return 0;
        }
        return Math.PI / 2;
    }
    function dragStart(e, data) {
        var state = getState(data);
        if (data.loading || __WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging') || !data.stage.is(':visible')) {
            return;
        }
        // allow browser scroll only on double tap
        var now = new Date().getTime();
        if (state.startAt && (now - state.startAt > 200)) {
            e.preventDefault();
        }
        state.startAt = now;
        state.wasPlaying = !!__WEBPACK_IMPORTED_MODULE_0__core__["f" /* getPlaybackState */](data).handler;
        state.frame = data.frame || 0;
        state.lane = data.lane || 0;
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', true);
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
    }
    function dragEnd(e, data) {
        if (__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', false);
            __WEBPACK_IMPORTED_MODULE_0__core__["k" /* resetInput */](data);
            if (data.retainAnimate && getState(data).wasPlaying) {
                __WEBPACK_IMPORTED_MODULE_0__core__["l" /* startAnimation */](data);
            }
        }
    }
    function drag(e, data) {
        var state = getState(data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        if (!__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        var rad = getAxis(data);
        var sn = Math.sin(rad);
        var cs = Math.cos(rad);
        var x = ((input.nddX * cs - input.nddY * sn) * data.sense) || 0;
        var y = ((input.nddX * sn + input.nddY * cs) * (data.senseLane || data.sense)) || 0;
        // accumulate
        state.frame += data.frames * x;
        state.lane += data.lanes * y;
        // update spritespin
        var oldFrame = data.frame;
        var oldLane = data.lane;
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, Math.floor(state.frame), Math.floor(state.lane));
        __WEBPACK_IMPORTED_MODULE_0__core__["m" /* stopAnimation */](data);
    }
    function mousemove(e, data) {
        dragStart(e, data);
        drag(e, data);
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */]('drag', {
        name: 'drag',
        mousedown: dragStart,
        mousemove: drag,
        mouseup: dragEnd,
        documentmousemove: drag,
        documentmouseup: dragEnd,
        touchstart: dragStart,
        touchmove: drag,
        touchend: dragEnd,
        touchcancel: dragEnd
    });
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */]('move', {
        name: 'move',
        mousemove: mousemove,
        mouseleave: dragEnd,
        touchstart: dragStart,
        touchmove: drag,
        touchend: dragEnd,
        touchcancel: dragEnd
    });
})();
//# sourceMappingURL=input-drag.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-hold.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'hold';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function rememberOptions(data) {
        var state = getState(data);
        state.frameTime = data.frameTime;
        state.animate = data.animate;
        state.reverse = data.reverse;
    }
    function restoreOptions(data) {
        var state = getState(data);
        data.frameTime = state.frameTime;
        data.animate = state.animate;
        data.reverse = state.reverse;
    }
    function start(e, data) {
        if (__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'loading') || __WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging') || !data.stage.is(':visible')) {
            return;
        }
        rememberOptions(data);
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', true);
        data.animate = true;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](data);
    }
    function stop(e, data) {
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', false);
        __WEBPACK_IMPORTED_MODULE_0__core__["k" /* resetInput */](data);
        __WEBPACK_IMPORTED_MODULE_0__core__["m" /* stopAnimation */](data);
        restoreOptions(data);
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](data);
    }
    function update(e, data) {
        if (!__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        var half, delta;
        var target = data.target, offset = target.offset();
        if (data.orientation === 'horizontal') {
            half = target.innerWidth() / 2;
            delta = (input.currentX - offset.left - half) / half;
        }
        else {
            half = (data.height / 2);
            delta = (input.currentY - offset.top - half) / half;
        }
        data.reverse = delta < 0;
        delta = delta < 0 ? -delta : delta;
        data.frameTime = 80 * (1 - delta) + 20;
        if (((data.orientation === 'horizontal') && (input.dX < input.dY)) ||
            ((data.orientation === 'vertical') && (input.dX < input.dY))) {
            e.preventDefault();
        }
    }
    function onFrame(e, data) {
        data.animate = true;
        __WEBPACK_IMPORTED_MODULE_0__core__["a" /* applyAnimation */](data);
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        mousedown: start,
        mousemove: update,
        mouseup: stop,
        mouseleave: stop,
        touchstart: start,
        touchmove: update,
        touchend: stop,
        touchcancel: stop,
        onFrame: onFrame
    });
})();
//# sourceMappingURL=input-hold.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-swipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'swipe';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function init(e, data) {
        var state = getState(data);
        state.fling = getOption(data, 'swipeFling', 10);
        state.snap = getOption(data, 'swipeSnap', 0.50);
    }
    function start(e, data) {
        if (!data.loading && !__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
            __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', true);
        }
    }
    function update(e, data) {
        if (!__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["o" /* updateInput */](e, data);
        var frame = data.frame;
        var lane = data.lane;
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, frame, lane);
    }
    function end(e, data) {
        if (!__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', false);
        var state = getState(data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        var frame = data.frame;
        var lane = data.lane;
        var snap = state.snap;
        var fling = state.fling;
        var dS, dF;
        if (data.orientation === 'horizontal') {
            dS = input.ndX;
            dF = input.ddX;
        }
        else {
            dS = input.ndY;
            dF = input.ddY;
        }
        if (dS >= snap || dF >= fling) {
            frame = data.frame - 1;
        }
        else if (dS <= -snap || dF <= -fling) {
            frame = data.frame + 1;
        }
        __WEBPACK_IMPORTED_MODULE_0__core__["k" /* resetInput */](data);
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, frame, lane);
        __WEBPACK_IMPORTED_MODULE_0__core__["m" /* stopAnimation */](data);
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: init,
        mousedown: start,
        mousemove: update,
        mouseup: end,
        mouseleave: end,
        touchstart: start,
        touchmove: update,
        touchend: end,
        touchcancel: end
    });
})();
//# sourceMappingURL=input-swipe.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/input-wheel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'wheel';
    function wheel(e, data) {
        if (!data.loading && data.stage.is(':visible')) {
            e.preventDefault();
            var we = e.originalEvent;
            var signX = we.deltaX === 0 ? 0 : we.deltaX > 0 ? 1 : -1;
            var signY = we.deltaY === 0 ? 0 : we.deltaY > 0 ? 1 : -1;
            __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, data.frame + signY, data.lane + signX);
        }
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        wheel: wheel
    });
})();
//# sourceMappingURL=input-wheel.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/progress.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var template = "\n<div class='spritespin-progress'>\n  <div class='spritespin-progress-label'></div>\n  <div class='spritespin-progress-bar'></div>\n</div>\n";
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    var NAME = 'progress';
    function onInit(e, data) {
        var state = getState(data);
        if (!state.stage) {
            state.stage = __WEBPACK_IMPORTED_MODULE_1__utils__["$"](template);
            state.stage.appendTo(data.target);
        }
        state.stage.find('.spritespin-progress-label')
            .text("0%")
            .css({ 'text-align': 'center' });
        state.stage.find('.spritespin-progress-bar').css({
            width: "0%"
        });
        state.stage.hide().fadeIn();
    }
    function onProgress(e, data) {
        var state = getState(data);
        state.stage.find('.spritespin-progress-label')
            .text(data.progress.percent + "%")
            .css({ 'text-align': 'center' });
        state.stage.find('.spritespin-progress-bar').css({
            width: data.progress.percent + "%"
        });
    }
    function onLoad(e, data) {
        __WEBPACK_IMPORTED_MODULE_1__utils__["$"](getState(data).stage).fadeOut();
    }
    function onDestroy(e, data) {
        __WEBPACK_IMPORTED_MODULE_1__utils__["$"](getState(data).stage).remove();
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onInit: onInit,
        onProgress: onProgress,
        onLoad: onLoad,
        onDestroy: onDestroy
    });
})();
//# sourceMappingURL=progress.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-360.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var floor = Math.floor;
    var NAME = '360';
    function onLoad(e, data) {
        data.stage.find('.spritespin-frames').detach();
        if (data.renderer === 'image') {
            $(data.images).addClass('spritespin-frames').appendTo(data.stage);
        }
    }
    function onDraw(e, data) {
        var specs = __WEBPACK_IMPORTED_MODULE_1__utils__["findSpecs"](data.metrics, data.frames, data.frame, data.lane);
        var sheet = specs.sheet;
        var sprite = specs.sprite;
        if (!sheet || !sprite) {
            return;
        }
        var src = data.source[sheet.id];
        var image = data.images[sheet.id];
        if (data.renderer === 'canvas') {
            data.canvas.show();
            var w = data.canvas[0].width / data.canvasRatio;
            var h = data.canvas[0].height / data.canvasRatio;
            data.context.clearRect(0, 0, w, h);
            data.context.drawImage(image, sprite.sampledX, sprite.sampledY, sprite.sampledWidth, sprite.sampledHeight, 0, 0, w, h);
            return;
        }
        var scaleX = data.stage.innerWidth() / sprite.sampledWidth;
        var scaleY = data.stage.innerHeight() / sprite.sampledHeight;
        var top = Math.floor(-sprite.sampledY * scaleY);
        var left = Math.floor(-sprite.sampledX * scaleX);
        var width = Math.floor(sheet.sampledWidth * scaleX);
        var height = Math.floor(sheet.sampledHeight * scaleY);
        if (data.renderer === 'background') {
            data.stage.css({
                'background-image': "url('" + src + "')",
                'background-position': left + "px " + top + "px",
                'background-repeat': 'no-repeat',
                // set custom background size to enable responsive rendering
                '-webkit-background-size': width + "px " + height + "px",
                '-moz-background-size': width + "px " + height + "px",
                '-o-background-size': width + "px " + height + "px",
                'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
            });
            return;
        }
        $(data.images).hide();
        $(image).show().css({
            position: 'absolute',
            top: top,
            left: left,
            'max-width': 'initial',
            width: width,
            height: height
        });
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: onLoad,
        onDraw: onDraw
    });
})();
//# sourceMappingURL=render-360.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-blur.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var NAME = 'blur';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function init(e, data) {
        var state = getState(data);
        state.canvas = state.canvas || __WEBPACK_IMPORTED_MODULE_1__utils__["$"]("<canvas class='blur-layer'></canvas>");
        state.context = state.context || state.canvas[0].getContext('2d');
        state.steps = state.steps || [];
        state.fadeTime = Math.max(getOption(data, 'blurFadeTime', 200), 1);
        state.frameTime = Math.max(getOption(data, 'blurFrameTime', data.frameTime), 16);
        state.trackTime = null;
        state.cssBlur = !!getOption(data, 'blurCss', false);
        var inner = __WEBPACK_IMPORTED_MODULE_1__utils__["getInnerSize"](data);
        var outer = data.responsive ? __WEBPACK_IMPORTED_MODULE_1__utils__["getComputedSize"](data) : __WEBPACK_IMPORTED_MODULE_1__utils__["getOuterSize"](data);
        var css = __WEBPACK_IMPORTED_MODULE_1__utils__["getInnerLayout"](data.sizeMode, inner, outer);
        state.canvas[0].width = data.width * data.canvasRatio;
        state.canvas[0].height = data.height * data.canvasRatio;
        state.canvas.css(css).show();
        state.context.scale(data.canvasRatio, data.canvasRatio);
        data.target.append(state.canvas);
    }
    function onFrame(e, data) {
        var state = getState(data);
        trackFrame(data);
        if (state.timeout == null) {
            loop(data);
        }
    }
    function trackFrame(data) {
        var state = getState(data);
        var ani = __WEBPACK_IMPORTED_MODULE_0__core__["f" /* getPlaybackState */](data);
        // distance between frames
        var d = Math.abs(data.frame - ani.lastFrame);
        // shortest distance
        d = d >= data.frames / 2 ? data.frames - d : d;
        state.steps.unshift({
            frame: data.frame,
            lane: data.lane,
            live: 1,
            step: state.frameTime / state.fadeTime,
            d: d,
            alpha: 0
        });
    }
    var toRemove = [];
    function removeOldFrames(frames) {
        toRemove.length = 0;
        for (var i = 0; i < frames.length; i += 1) {
            if (frames[i].alpha <= 0) {
                toRemove.push(i);
            }
        }
        for (var _i = 0, toRemove_1 = toRemove; _i < toRemove_1.length; _i++) {
            var item = toRemove_1[_i];
            frames.splice(item, 1);
        }
    }
    function loop(data) {
        var state = getState(data);
        state.timeout = window.setTimeout(function () { tick(data); }, state.frameTime);
    }
    function killLoop(data) {
        var state = getState(data);
        window.clearTimeout(state.timeout);
        state.timeout = null;
    }
    function applyCssBlur(canvas, d) {
        var amount = Math.min(Math.max((d / 2) - 4, 0), 2.5);
        var blur = "blur(" + amount + "px)";
        canvas.css({
            '-webkit-filter': blur,
            filter: blur
        });
    }
    function clearFrame(data, state) {
        state.canvas.show();
        var w = state.canvas[0].width / data.canvasRatio;
        var h = state.canvas[0].height / data.canvasRatio;
        // state.context.clearRect(0, 0, w, h)
    }
    function drawFrame(data, state, step) {
        if (step.alpha <= 0) {
            return;
        }
        var specs = __WEBPACK_IMPORTED_MODULE_1__utils__["findSpecs"](data.metrics, data.frames, step.frame, step.lane);
        var sheet = specs.sheet;
        var sprite = specs.sprite;
        if (!sheet || !sprite) {
            return;
        }
        var src = data.source[sheet.id];
        var image = data.images[sheet.id];
        if (image.complete === false) {
            return;
        }
        state.canvas.show();
        var w = state.canvas[0].width / data.canvasRatio;
        var h = state.canvas[0].height / data.canvasRatio;
        state.context.globalAlpha = step.alpha;
        state.context.drawImage(image, sprite.sampledX, sprite.sampledY, sprite.sampledWidth, sprite.sampledHeight, 0, 0, w, h);
    }
    function tick(data) {
        var state = getState(data);
        killLoop(data);
        if (!state.context) {
            return;
        }
        var d = 0;
        clearFrame(data, state);
        state.context.clearRect(0, 0, data.width, data.height);
        for (var _i = 0, _a = state.steps; _i < _a.length; _i++) {
            var step = _a[_i];
            step.live = Math.max(step.live - step.step, 0);
            step.alpha = Math.max(step.live - 0.25, 0);
            drawFrame(data, state, step);
            d += step.alpha + step.d;
        }
        if (state.cssBlur) {
            applyCssBlur(state.canvas, d);
        }
        removeOldFrames(state.steps);
        if (state.steps.length) {
            loop(data);
        }
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: init,
        onFrameChanged: onFrame
    });
})();
//# sourceMappingURL=render-blur.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-ease.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var max = Math.max;
    var min = Math.min;
    var NAME = 'ease';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function init(e, data) {
        var state = getState(data);
        state.maxSamples = max(getOption(data, 'easeMaxSamples', 5), 0);
        state.damping = max(min(getOption(data, 'easeDamping', 0.9), 0.999), 0);
        state.abortTime = max(getOption(data, 'easeAbortTime', 250), 16);
        state.updateTime = max(getOption(data, 'easeUpdateTime', data.frameTime), 16);
        state.samples = [];
        state.steps = [];
    }
    function update(e, data) {
        if (__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            killLoop(data);
            sampleInput(data);
        }
    }
    function end(e, data) {
        var state = getState(data);
        var samples = state.samples;
        var last;
        var lanes = 0;
        var frames = 0;
        var time = 0;
        for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
            var sample = samples_1[_i];
            if (!last) {
                last = sample;
                continue;
            }
            var dt = sample.time - last.time;
            if (dt > state.abortTime) {
                lanes = frames = time = 0;
                return killLoop(data);
            }
            frames += sample.frame - last.frame;
            lanes += sample.lane - last.lane;
            time += dt;
            last = sample;
        }
        samples.length = 0;
        if (!time) {
            return;
        }
        state.lane = data.lane;
        state.lanes = 0;
        state.laneStep = lanes / time * state.updateTime;
        state.frame = data.frame;
        state.frames = 0;
        state.frameStep = frames / time * state.updateTime;
        loop(data);
    }
    function sampleInput(data) {
        var state = getState(data);
        // add a new sample
        state.samples.push({
            time: new Date().getTime(),
            frame: data.frame,
            lane: data.lane
        });
        // drop old samples
        while (state.samples.length > state.maxSamples) {
            state.samples.shift();
        }
    }
    function killLoop(data) {
        var state = getState(data);
        if (state.handler != null) {
            window.clearTimeout(state.handler);
            state.handler = null;
        }
    }
    function loop(data) {
        var state = getState(data);
        state.handler = window.setTimeout(function () { tick(data); }, state.updateTime);
    }
    function tick(data) {
        var state = getState(data);
        state.lanes += state.laneStep;
        state.frames += state.frameStep;
        state.laneStep *= state.damping;
        state.frameStep *= state.damping;
        var frame = Math.floor(state.frame + state.frames);
        var lane = Math.floor(state.lane + state.lanes);
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, frame, lane);
        if (__WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging')) {
            killLoop(data);
        }
        else if (Math.abs(state.frameStep) > 0.005 || Math.abs(state.laneStep) > 0.005) {
            loop(data);
        }
        else {
            killLoop(data);
        }
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: init,
        mousemove: update,
        mouseup: end,
        mouseleave: end,
        touchmove: update,
        touchend: end,
        touchcancel: end
    });
})();
//# sourceMappingURL=render-ease.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-gallery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var NAME = 'gallery';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function load(e, data) {
        var state = getState(data);
        state.images = [];
        state.offsets = [];
        state.frame = data.frame;
        state.speed = getOption(data, 'gallerySpeed', 500);
        state.opacity = getOption(data, 'galleryOpacity', 0.25);
        state.stage = getOption(data, 'galleryStage', __WEBPACK_IMPORTED_MODULE_1__utils__["$"]('<div></div>'));
        state.stage.empty().addClass('gallery-stage').prependTo(data.stage);
        var size = 0;
        for (var _i = 0, _a = data.images; _i < _a.length; _i++) {
            var image = _a[_i];
            var naturalSize = __WEBPACK_IMPORTED_MODULE_1__utils__["naturalSize"](image);
            var scale = data.height / naturalSize.height;
            var img = __WEBPACK_IMPORTED_MODULE_1__utils__["$"](image);
            state.stage.append(img);
            state.images.push(img);
            state.offsets.push(-size + (data.width - image.width * scale) / 2);
            size += data.width;
            img.css({
                'max-width': 'initial',
                opacity: state.opacity,
                width: data.width,
                height: data.height
            });
        }
        var innerSize = __WEBPACK_IMPORTED_MODULE_1__utils__["getInnerSize"](data);
        var outerSize = data.responsive ? __WEBPACK_IMPORTED_MODULE_1__utils__["getComputedSize"](data) : __WEBPACK_IMPORTED_MODULE_1__utils__["getOuterSize"](data);
        var layout = __WEBPACK_IMPORTED_MODULE_1__utils__["getInnerLayout"](data.sizeMode, innerSize, outerSize);
        state.stage.css(layout).css({ width: size, left: state.offsets[state.frame] });
        state.images[state.frame].animate({ opacity: 1 }, { duration: state.speed });
    }
    function draw(e, data) {
        var state = getState(data);
        var input = __WEBPACK_IMPORTED_MODULE_0__core__["e" /* getInputState */](data);
        var isDragging = __WEBPACK_IMPORTED_MODULE_0__core__["h" /* is */](data, 'dragging');
        if (state.frame !== data.frame && !isDragging) {
            state.stage.stop(true, false).animate({ left: state.offsets[data.frame] }, { duration: state.speed });
            state.images[state.frame].animate({ opacity: state.opacity }, { duration: state.speed });
            state.frame = data.frame;
            state.images[state.frame].animate({ opacity: 1 }, { duration: state.speed });
            state.stage.animate({ left: state.offsets[state.frame] });
        }
        else if (isDragging || state.dX !== input.dX) {
            state.dX = input.dX;
            state.ddX = input.ddX;
            state.stage.stop(true, true).css({ left: state.offsets[state.frame] + state.dX });
        }
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: load,
        onDraw: draw
    });
})();
//# sourceMappingURL=render-gallery.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-panorama.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");

(function () {
    var NAME = 'panorama';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function onLoad(e, data) {
        var state = getState(data);
        var sprite = data.metrics[0];
        if (!sprite) {
            return;
        }
        if (data.orientation === 'horizontal') {
            state.scale = data.target.innerHeight() / sprite.sampledHeight;
            data.frames = sprite.sampledWidth;
        }
        else {
            state.scale = data.target.innerWidth() / sprite.sampledWidth;
            data.frames = sprite.sampledHeight;
        }
        var width = Math.floor(sprite.sampledWidth * state.scale);
        var height = Math.floor(sprite.sampledHeight * state.scale);
        data.stage.css({
            'background-image': "url(" + data.source[sprite.id] + ")",
            'background-repeat': 'repeat-both',
            // set custom background size to enable responsive rendering
            '-webkit-background-size': width + "px " + height + "px",
            '-moz-background-size': width + "px " + height + "px",
            '-o-background-size': width + "px " + height + "px",
            'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
        });
    }
    function onDraw(e, data) {
        var state = getState(data);
        var px = data.orientation === 'horizontal' ? 1 : 0;
        var py = px ? 0 : 1;
        var offset = data.frame % data.frames;
        var left = Math.round(px * offset * state.scale);
        var top = Math.round(py * offset * state.scale);
        data.stage.css({ 'background-position': left + "px " + top + "px" });
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        onLoad: onLoad,
        onDraw: onDraw
    });
})();
//# sourceMappingURL=render-panorama.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/plugins/render-zoom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__("./node_modules/spritespin/release/src/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/index.js");


(function () {
    var NAME = 'zoom';
    function getState(data) {
        return __WEBPACK_IMPORTED_MODULE_0__core__["g" /* getPluginState */](data, NAME);
    }
    function getOption(data, name, fallback) {
        return data[name] || fallback;
    }
    function onInit(e, data) {
        var state = getState(data);
        state.source = getOption(data, 'zoomSource', data.source);
        state.doubleClickTime = getOption(data, 'zoomDoubleClickTime', 500);
        state.stage = state.stage || __WEBPACK_IMPORTED_MODULE_1__utils__["$"]("<div class='zoom-stage'></div>");
        state.stage.css({
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute'
        })
            .appendTo(data.target)
            .hide();
    }
    function onDestroy(e, data) {
        var state = getState(data);
        if (state.stage) {
            state.stage.remove();
            delete state.stage;
        }
    }
    function updateInput(e, data) {
        var state = getState(data);
        if (!state.stage.is(':visible')) {
            return;
        }
        e.preventDefault();
        // hack into drag/move module and disable dragging
        // prevents frame change during zoom mode
        __WEBPACK_IMPORTED_MODULE_0__core__["d" /* flag */](data, 'dragging', false);
        // grab touch/cursor position
        var cursor = __WEBPACK_IMPORTED_MODULE_1__utils__["getCursorPosition"](e);
        // normalize cursor position into [0:1] range
        var x = cursor.x / data.width;
        var y = cursor.y / data.height;
        if (state.oldX == null) {
            state.oldX = x;
            state.oldY = y;
        }
        if (state.currentX == null) {
            state.currentX = x;
            state.currentY = y;
        }
        // calculate move delta since last frame and remember current position
        var dx = x - state.oldX;
        var dy = y - state.oldY;
        state.oldX = x;
        state.oldY = y;
        // invert drag direction for touch events to enable 'natural' scrolling
        if (e.type.match(/touch/)) {
            dx = -dx;
            dy = -dy;
        }
        // accumulate display coordinates
        state.currentX = __WEBPACK_IMPORTED_MODULE_1__utils__["clamp"](state.currentX + dx, 0, 1);
        state.currentY = __WEBPACK_IMPORTED_MODULE_1__utils__["clamp"](state.currentY + dy, 0, 1);
        __WEBPACK_IMPORTED_MODULE_0__core__["n" /* updateFrame */](data, data.frame, data.lane);
    }
    function onClick(e, data) {
        e.preventDefault();
        var state = getState(data);
        // simulate double click
        var clickTime = new Date().getTime();
        if (!state.clickTime) {
            // on first click
            state.clickTime = clickTime;
            return;
        }
        // on second click
        var timeDelta = clickTime - state.clickTime;
        if (timeDelta > state.doubleClickTime) {
            // took too long, back to first click
            state.clickTime = clickTime;
            return;
        }
        // on valid double click
        state.clickTime = undefined;
        if (toggleZoom(data)) {
            updateInput(e, data);
        }
    }
    function onMove(e, data) {
        var state = getState(data);
        if (state.stage.is(':visible')) {
            updateInput(e, data);
        }
    }
    function onDraw(e, data) {
        var state = getState(data);
        // calculate the frame index
        var index = data.lane * data.frames + data.frame;
        // get the zoom image. Use original frames as fallback. This won't work for spritesheets
        var source = state.source[index];
        var spec = __WEBPACK_IMPORTED_MODULE_1__utils__["findSpecs"](data.metrics, data.frames, data.frame, data.lane);
        // get display position
        var x = state.currentX;
        var y = state.currentY;
        // fallback to centered position
        if (x == null) {
            x = state.currentX = 0.5;
            y = state.currentY = 0.5;
        }
        if (source) {
            // scale up from [0:1] to [0:100] range
            x = Math.floor(x * 100);
            y = Math.floor(y * 100);
            // update background image and position
            state.stage.css({
                'background-repeat': 'no-repeat',
                'background-image': "url('" + source + "')",
                'background-position': x + "% " + y + "%"
            });
        }
        else if (spec.sheet && spec.sprite) {
            var sprite = spec.sprite;
            var sheet = spec.sheet;
            var src = data.source[sheet.id];
            var left = -Math.floor(sprite.sampledX + x * (sprite.sampledWidth - data.width));
            var top_1 = -Math.floor(sprite.sampledY + y * (sprite.sampledHeight - data.height));
            var width = sheet.sampledWidth;
            var height = sheet.sampledHeight;
            state.stage.css({
                'background-image': "url('" + src + "')",
                'background-position': left + "px " + top_1 + "px",
                'background-repeat': 'no-repeat',
                // set custom background size to enable responsive rendering
                '-webkit-background-size': width + "px " + height + "px",
                '-moz-background-size': width + "px " + height + "px",
                '-o-background-size': width + "px " + height + "px",
                'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
            });
        }
    }
    function toggleZoom(data) {
        var state = getState(data);
        if (!state.stage) {
            throw new Error('zoom module is not initialized or is not available.');
        }
        if (state.stage.is(':visible')) {
            state.stage.fadeOut();
            data.stage.fadeIn();
        }
        else {
            state.stage.fadeIn();
            data.stage.fadeOut();
            return true;
        }
        return false;
    }
    __WEBPACK_IMPORTED_MODULE_0__core__["j" /* registerPlugin */](NAME, {
        name: NAME,
        mousedown: onClick,
        touchstart: onClick,
        mousemove: onMove,
        touchmove: onMove,
        onInit: onInit,
        onDestroy: onDestroy,
        onDraw: onDraw
    });
    __WEBPACK_IMPORTED_MODULE_0__core__["c" /* extendApi */]({
        toggleZoom: function () { toggleZoom(this.data); } // tslint:disable-line
    });
})();
//# sourceMappingURL=render-zoom.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/cursor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCursorPosition;
function getCursorPosition(event) {
    var touches = event.touches;
    var source = event;
    // jQuery Event normalization does not preserve the 'event.touches'
    // try to grab touches from the original event
    if (event.touches === undefined && event.originalEvent !== undefined) {
        touches = event.originalEvent.touches;
    }
    // get current touch or mouse position
    if (touches !== undefined && touches.length > 0) {
        source = touches[0];
    }
    return {
        x: source.clientX || 0,
        y: source.clientY || 0
    };
}
//# sourceMappingURL=cursor.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/detectSubsampling.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = detectSubsampling;
var canvas;
var context;
function detectionContext() {
    if (context) {
        return context;
    }
    if (!canvas) {
        canvas = document.createElement('canvas');
    }
    if (!canvas || !canvas.getContext) {
        return null;
    }
    context = canvas.getContext('2d');
    return context;
}
/**
 * Idea taken from https://github.com/stomita/ios-imagefile-megapixel
 * Detects whether the image has been sub sampled by the browser and does not have its original dimensions.
 * This method unfortunately does not work for images that have transparent background.
 */
function detectSubsampling(img, width, height) {
    if (!detectionContext()) {
        return false;
    }
    // sub sampling happens on images above 1 megapixel
    if (width * height <= 1024 * 1024) {
        return false;
    }
    // set canvas to 1x1 pixel size and fill it with magenta color
    canvas.width = canvas.height = 1;
    context.fillStyle = '#FF00FF';
    context.fillRect(0, 0, 1, 1);
    // render the image with a negative offset to the left so that it would
    // fill the canvas pixel with the top right pixel of the image.
    context.drawImage(img, -width + 1, 0);
    // check color value to confirm image is covering edge pixel or not.
    // if color still magenta, the image is assumed to be sub sampled.
    try {
        var dat = context.getImageData(0, 0, 1, 1).data;
        return (dat[0] === 255) && (dat[1] === 0) && (dat[2] === 255);
    }
    catch (err) {
        // avoids cross origin exception for chrome when code runs without a server
        return false;
    }
}
//# sourceMappingURL=detectSubsampling.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jquery__ = __webpack_require__("./node_modules/spritespin/release/src/utils/jquery.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$", function() { return __WEBPACK_IMPORTED_MODULE_0__jquery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cursor__ = __webpack_require__("./node_modules/spritespin/release/src/utils/cursor.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getCursorPosition", function() { return __WEBPACK_IMPORTED_MODULE_1__cursor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detectSubsampling__ = __webpack_require__("./node_modules/spritespin/release/src/utils/detectSubsampling.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "detectSubsampling", function() { return __WEBPACK_IMPORTED_MODULE_2__detectSubsampling__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout__ = __webpack_require__("./node_modules/spritespin/release/src/utils/layout.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getOuterSize", function() { return __WEBPACK_IMPORTED_MODULE_3__layout__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getComputedSize", function() { return __WEBPACK_IMPORTED_MODULE_3__layout__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInnerSize", function() { return __WEBPACK_IMPORTED_MODULE_3__layout__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInnerLayout", function() { return __WEBPACK_IMPORTED_MODULE_3__layout__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__measure__ = __webpack_require__("./node_modules/spritespin/release/src/utils/measure.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return __WEBPACK_IMPORTED_MODULE_4__measure__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findSpecs", function() { return __WEBPACK_IMPORTED_MODULE_4__measure__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__naturalSize__ = __webpack_require__("./node_modules/spritespin/release/src/utils/naturalSize.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "naturalSize", function() { return __WEBPACK_IMPORTED_MODULE_5__naturalSize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preload__ = __webpack_require__("./node_modules/spritespin/release/src/utils/preload.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return __WEBPACK_IMPORTED_MODULE_6__preload__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sourceArray__ = __webpack_require__("./node_modules/spritespin/release/src/utils/sourceArray.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sourceArray", function() { return __WEBPACK_IMPORTED_MODULE_7__sourceArray__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__("./node_modules/spritespin/release/src/utils/utils.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "log", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "error", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "prevent", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "unbind", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pixelRatio", function() { return __WEBPACK_IMPORTED_MODULE_8__utils__["g"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/jquery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $; });
var $ = window.jQuery || window.$;
//# sourceMappingURL=jquery.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = getOuterSize;
/* harmony export (immutable) */ __webpack_exports__["a"] = getComputedSize;
/* harmony export (immutable) */ __webpack_exports__["c"] = getInnerSize;
/* harmony export (immutable) */ __webpack_exports__["b"] = getInnerLayout;
/**
 *
 */
function getOuterSize(data) {
    var width = Math.floor(data.width || data.frameWidth || data.target.innerWidth());
    var height = Math.floor(data.height || data.frameHeight || data.target.innerHeight());
    return {
        aspect: width / height,
        height: height,
        width: width
    };
}
function getComputedSize(data) {
    var size = getOuterSize(data);
    if (typeof window.getComputedStyle !== 'function') {
        return size;
    }
    var style = window.getComputedStyle(data.target[0]);
    if (!style.width) {
        return size;
    }
    size.width = Math.floor(Number(style.width.replace('px', '')));
    size.height = Math.floor(size.width / size.aspect);
    return size;
}
/**
 *
 */
function getInnerSize(data) {
    var width = Math.floor(data.frameWidth || data.width || data.target.innerWidth());
    var height = Math.floor(data.frameHeight || data.height || data.target.innerHeight());
    return {
        aspect: width / height,
        height: height,
        width: width
    };
}
/**
 *
 */
function getInnerLayout(mode, inner, outer) {
    // get mode
    var isFit = mode === 'fit';
    var isFill = mode === 'fill';
    var isMatch = mode === 'stretch';
    // resulting layout
    var layout = {
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        overflow: 'hidden'
    };
    // no calculation here
    if (!mode || isMatch) {
        return layout;
    }
    // get size and aspect
    var aspectIsGreater = inner.aspect >= outer.aspect;
    // mode == original
    var width = inner.width;
    var height = inner.height;
    // keep aspect ratio but fit/fill into container
    if (isFit && aspectIsGreater || isFill && !aspectIsGreater) {
        width = outer.width;
        height = outer.width / inner.aspect;
    }
    if (isFill && aspectIsGreater || isFit && !aspectIsGreater) {
        height = outer.height;
        width = outer.height * inner.aspect;
    }
    // floor the numbers
    width = Math.floor(width);
    height = Math.floor(height);
    // position in center
    layout.width = width;
    layout.height = height;
    layout.top = Math.floor((outer.height - height) / 2);
    layout.left = Math.floor((outer.width - width) / 2);
    layout.right = layout.left;
    layout.bottom = layout.top;
    return layout;
}
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/measure.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = measure;
/* harmony export (immutable) */ __webpack_exports__["a"] = findSpecs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detectSubsampling__ = __webpack_require__("./node_modules/spritespin/release/src/utils/detectSubsampling.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__naturalSize__ = __webpack_require__("./node_modules/spritespin/release/src/utils/naturalSize.js");


/**
 * Measures the image frames that are used in the given data object
 */
function measure(images, options) {
    if (images.length === 1) {
        return [measureSheet(images[0], options)];
    }
    else if (options.framesX && options.framesY) {
        return measureMutipleSheets(images, options);
    }
    else {
        return measureFrames(images, options);
    }
}
function measureSheet(image, options) {
    var result = { id: 0, sprites: [] };
    measureImage(image, options, result);
    var frames = options.frames;
    var framesX = Number(options.framesX) || frames;
    var framesY = Math.ceil(frames / framesX);
    var frameWidth = Math.floor(result.width / framesX);
    var frameHeight = Math.floor(result.height / framesY);
    var divisor = result.isSubsampled ? 2 : 1;
    for (var i = 0; i < frames; i++) {
        var x = (i % framesX) * frameWidth;
        var y = Math.floor(i / framesX) * frameHeight;
        result.sprites.push({
            id: i,
            x: x, y: y,
            width: frameWidth,
            height: frameHeight,
            sampledX: x / divisor,
            sampledY: y / divisor,
            sampledWidth: frameWidth / divisor,
            sampledHeight: frameHeight / divisor
        });
    }
    return result;
}
function measureFrames(images, options) {
    var result = [];
    for (var id = 0; id < images.length; id++) {
        // TODO: optimize
        // dont measure images with same size twice
        var sheet = measureSheet(images[id], { frames: 1, framesX: 1, detectSubsampling: options.detectSubsampling });
        sheet.id = id;
        result.push(sheet);
    }
    return result;
}
function measureMutipleSheets(images, options) {
    var result = [];
    for (var id = 0; id < images.length; id++) {
        // TODO: optimize
        // dont measure images with same size twice
        var sheet = measureSheet(images[id], {
            frames: undefined,
            framesX: options.framesX,
            framesY: options.framesY,
            detectSubsampling: options.detectSubsampling
        });
        sheet.id = id;
        result.push(sheet);
    }
    return result;
}
function measureImage(image, options, result) {
    var size = Object(__WEBPACK_IMPORTED_MODULE_1__naturalSize__["a" /* naturalSize */])(image);
    result.isSubsampled = options.detectSubsampling && Object(__WEBPACK_IMPORTED_MODULE_0__detectSubsampling__["a" /* detectSubsampling */])(image, size.width, size.height);
    result.width = size.width;
    result.height = size.height;
    result.sampledWidth = size.width / (result.isSubsampled ? 2 : 1);
    result.sampledHeight = size.height / (result.isSubsampled ? 2 : 1);
    return result;
}
function findSpecs(metrics, frames, frame, lane) {
    var spriteId = lane * frames + frame;
    var sheetId = 0;
    var sprite = null;
    var sheet = null;
    while (true) {
        sheet = metrics[sheetId];
        if (!sheet) {
            break;
        }
        if (spriteId >= sheet.sprites.length) {
            spriteId -= sheet.sprites.length;
            sheetId++;
            continue;
        }
        sprite = sheet.sprites[spriteId];
        break;
    }
    return { sprite: sprite, sheet: sheet };
}
//# sourceMappingURL=measure.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/naturalSize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = naturalSize;
var img;
/**
 * gets the original width and height of an image element
 */
function naturalSize(image) {
    // for browsers that support naturalWidth and naturalHeight properties
    if (image.naturalWidth) {
        return {
            height: image.naturalHeight,
            width: image.naturalWidth
        };
    }
    // browsers that do not support naturalWidth and naturalHeight properties have to fall back to the width and
    // height properties. However, the image might have a css style applied so width and height would return the
    // css size. To avoid thet create a new Image object that is free of css rules and grab width and height
    // properties
    //
    // assume that the src has already been downloaded, so no onload callback is needed.
    img = img || new Image();
    img.src = image.src;
    return {
        height: img.height,
        width: img.width
    };
}
//# sourceMappingURL=naturalSize.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/preload.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = preload;
function indexOf(element, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
}
function noop() {
    //
}
function preload(opts) {
    var src;
    var input = opts.source;
    src = typeof input === 'string' ? [input] : input;
    // const src: string[] =  ? [opts.source] : opts.source
    var images = [];
    var targetCount = (opts.preloadCount || src.length);
    var onInitiated = opts.initiated || noop;
    var onProgress = opts.progress || noop;
    var onComplete = opts.complete || noop;
    var count = 0;
    var completed = false;
    var firstLoaded = false;
    var tick = function () {
        count += 1;
        onProgress({
            index: indexOf(this, images),
            loaded: count,
            total: src.length,
            percent: Math.round((count / src.length) * 100)
        });
        firstLoaded = firstLoaded || (this === images[0]);
        if (firstLoaded && !completed && (count >= targetCount)) {
            completed = true;
            onComplete(images);
        }
    };
    for (var _i = 0, src_1 = src; _i < src_1.length; _i++) {
        var url = src_1[_i];
        var img = new Image();
        // push result
        images.push(img);
        // bind logic, dont care about abort/errors
        img.onload = img.onabort = img.onerror = tick;
        // begin load
        img.src = url;
    }
    onInitiated(images);
}
//# sourceMappingURL=preload.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/sourceArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sourceArray;
function padNumber(num, length, pad) {
    var result = String(num);
    while (result.length < length) {
        result = String(pad) + result;
    }
    return result;
}
/**
 * Generates an array of source strings
 *
 * @remarks
 * Takes a template string and generates an array of strings by interpolating {lane} and {frame} placeholders.
 *
 * ```
 * sourceArray('http://example.com/image_{frame}.jpg, { frame: [1, 3], digits: 2 })
 * // gives:
 * // [ 'http://example.com/image_01.jpg', 'http://example.com/image_02.jpg', 'http://example.com/image_03.jpg' ]
 *
 * sourceArray('http://example.com/image_FRAME.jpg, { frame: [1, 3], digits: 2, framePlacer: 'FRAME' })
 * // gives:
 * // [ 'http://example.com/image_01.jpg', 'http://example.com/image_02.jpg', 'http://example.com/image_03.jpg' ]
 * ```
 *
 * @param template - The template string
 * @param opts - Interpolation options
 *
 * @public
 */
function sourceArray(template, opts) {
    var digits = opts.digits || 2;
    var lPlacer = opts.lanePlacer || '{lane}';
    var fPlacer = opts.framePlacer || '{frame}';
    var fStart = 0;
    var fEnd = 0;
    if (opts.frame) {
        fStart = opts.frame[0];
        fEnd = opts.frame[1];
    }
    var lStart = 0;
    var lEnd = 0;
    if (opts.lane) {
        lStart = opts.lane[0];
        lEnd = opts.lane[1];
    }
    var result = [];
    for (var lane = lStart; lane <= lEnd; lane += 1) {
        for (var frame = fStart; frame <= fEnd; frame += 1) {
            result.push(template
                .replace(lPlacer, padNumber(lane, digits, '0'))
                .replace(fPlacer, padNumber(frame, digits, '0')));
        }
    }
    return result;
}
//# sourceMappingURL=sourceArray.js.map

/***/ }),

/***/ "./node_modules/spritespin/release/src/utils/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = noop;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return error; });
/* harmony export (immutable) */ __webpack_exports__["i"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["b"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["l"] = wrap;
/* harmony export (immutable) */ __webpack_exports__["h"] = prevent;
/* harmony export (immutable) */ __webpack_exports__["a"] = bind;
/* harmony export (immutable) */ __webpack_exports__["j"] = unbind;
/* harmony export (immutable) */ __webpack_exports__["d"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["g"] = pixelRatio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_constants__ = __webpack_require__("./node_modules/spritespin/release/src/core/constants.js");

function noop() {
    // noop
}
function wrapConsole(type) {
    return console && console[type] ? function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.log.apply(console, args);
    } : noop;
}
var log = wrapConsole('log');
var warn = wrapConsole('warn');
var error = wrapConsole('error');
function toArray(value) {
    return Array.isArray(value) ? value : [value];
}
/**
 * clamps the given value by the given min and max values
 */
function clamp(value, min, max) {
    return (value > max ? max : (value < min ? min : value));
}
/**
 *
 */
function wrap(value, min, max, size) {
    while (value > max) {
        value -= size;
    }
    while (value < min) {
        value += size;
    }
    return value;
}
/**
 * prevents default action on the given event
 */
function prevent(e) {
    e.preventDefault();
    return false;
}
/**
 * Binds on the given target and event the given function.
 * The SpriteSpin namespace is attached to the event name
 */
function bind(target, event, func) {
    if (func) {
        target.bind(event + '.' + __WEBPACK_IMPORTED_MODULE_0__core_constants__["e" /* namespace */], function (e) {
            func.apply(target, [e, target.spritespin('data')]);
        });
    }
}
/**
 * Unbinds all SpriteSpin events from given target element
 */
function unbind(target) {
    target.unbind('.' + __WEBPACK_IMPORTED_MODULE_0__core_constants__["e" /* namespace */]);
}
/**
 * Checks if given object is a function
 */
function isFunction(fn) {
    return typeof fn === 'function';
}
function pixelRatio(context) {
    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStoreRatio = context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return devicePixelRatio / backingStoreRatio;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d124400\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/Notifier.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide-up"
    },
    on: {
      "enter": _vm.onShow,
      "after-leave": _vm.onHide
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    staticClass: "notifier",
    class: _vm.styleType,
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.hide($event)
      }
    }
  }, [_c('div', {
    staticClass: "notifier-body"
  }, [_c('span', {
    staticClass: "notify__text",
    domProps: {
      "innerHTML": _vm._s(_vm.messageText)
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d124400", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c401f59\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "specs"
  }, [_c('div', {
    staticClass: "section__center"
  }, [_c('h2', {
    staticClass: "specs__title"
  }, [_vm._v("Технические характеристики Hyundai " + _vm._s(_vm.carName))]), _vm._v(" "), _c('table', {
    staticClass: "specs__main"
  }, [_c('tr', [_c('td', [_vm._v("Тип модели")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.modelType))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.modelType))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Количество мест")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.numberOfSeats))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.numberOfSeats))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Двигатель")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.engine))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.engine))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Привод")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.drive))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.drive))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Коробка передач")]), _vm._v(" "), _c('td', {
    staticClass: "desctop"
  }, [_vm._v(_vm._s(_vm.gearBox))])]), _vm._v(" "), _c('tr', {
    staticClass: "mobile"
  }, [_c('td', [_vm._v(_vm._s(_vm.gearBox))])])]), _vm._v(" "), (!_vm.success) ? _c('div', {
    staticClass: "specs__error"
  }, [_vm._v("\n\t\t\tПри загрузке данных произошла ошибка, повторите попытку позднее.\n\t\t")]) : _c('div', {
    staticClass: "specs__success"
  }, [_vm._l((_vm.specifications), function(spec, index) {
    return _c('div', {
      staticClass: "specs-dd"
    }, [_c('a', {
      staticClass: "specs-dd__head",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.dropdown(index)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(spec.name) + "\n\t\t\t\t\t"), _c('svg', {
      ref: 'arrow-' + index,
      refInFor: true,
      attrs: {
        "width": "12",
        "height": "8",
        "viewBox": "0 0 12 8",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, [_c('path', {
      attrs: {
        "d": "M1 7L6 2L11 7",
        "stroke": "black",
        "stroke-width": "2"
      }
    })])]), _vm._v(" "), _c('div', {
      ref: index,
      refInFor: true,
      staticClass: "specs-dd__dropdown"
    }, [_c('table', {
      staticClass: "specs-dd__table"
    }, [_c('tr', _vm._l((_vm.modifications), function(mod) {
      return _c('th', [_vm._v(_vm._s(mod.name))])
    }), 0), _vm._v(" "), _vm._l((spec.data), function(param) {
      return [_c('tr', [_c('td', {
        staticClass: "specs-dd__subtitle",
        attrs: {
          "colspan": param.values.length
        },
        domProps: {
          "innerHTML": _vm._s(param.name)
        }
      })]), _vm._v(" "), _c('tr', _vm._l((param.values), function(value) {
        return _c('td', [(value === true) ? _c('div', {
          staticClass: "specs-dd__value"
        }, [_c('svg', {
          staticClass: "ic-svg ic-checkmark",
          attrs: {
            "tabindex": "-1",
            "aria-visible": "false"
          }
        }, [_c('use', {
          attrs: {
            "xlink:href": "#ic-checkmark"
          }
        })])]) : _vm._e(), _vm._v(" "), (value === false) ? _c('div', {
          staticClass: "specs-dd__value"
        }, [_c('svg', {
          staticClass: "ic-svg ic-minus",
          attrs: {
            "tabindex": "-1",
            "aria-visible": "false"
          }
        }, [_c('use', {
          attrs: {
            "xlink:href": "#ic-minus"
          }
        })])]) : _vm._e(), _vm._v(" "), (value !== false && value !== true) ? _c('div', {
          staticClass: "specs-dd__value",
          domProps: {
            "innerHTML": _vm._s(value)
          }
        }) : _vm._e()])
      }), 0)]
    })], 2), _vm._v(" "), _c('table', {
      staticClass: "specs-dd__table specs-dd__table--mobile"
    }, [_vm._l((_vm.modifications), function(mod, indexMod) {
      return [_c('tr', [_c('th', {
        class: {
          first: indexMod === 0
        }
      }, [_vm._v(_vm._s(mod.name))])]), _vm._v(" "), _vm._l((spec.data), function(param) {
        return [_c('tr', [_c('td', {
          staticClass: "specs-dd__subtitle",
          domProps: {
            "innerHTML": _vm._s(param.name)
          }
        })]), _vm._v(" "), _c('tr', [_c('td', [(param.values[indexMod] === true) ? _c('div', {
          staticClass: "specs-dd__value"
        }, [_c('svg', {
          staticClass: "ic-svg ic-checkmark",
          attrs: {
            "tabindex": "-1",
            "aria-visible": "false"
          }
        }, [_c('use', {
          attrs: {
            "xlink:href": "#ic-checkmark"
          }
        })])]) : _vm._e(), _vm._v(" "), (param.values[indexMod] === false) ? _c('div', {
          staticClass: "specs-dd__value"
        }, [_c('svg', {
          staticClass: "ic-svg ic-minus",
          attrs: {
            "tabindex": "-1",
            "aria-visible": "false"
          }
        }, [_c('use', {
          attrs: {
            "xlink:href": "#ic-minus"
          }
        })])]) : _vm._e(), _vm._v(" "), (param.values[indexMod] !== false && param.values[indexMod] !== true) ? _c('div', {
          staticClass: "specs-dd__value",
          domProps: {
            "innerHTML": _vm._s(param.values[indexMod])
          }
        }) : _vm._e()])])]
      })]
    })], 2)])])
  }), _vm._v(" "), _c('div', {
    staticClass: "dsclmr df-text-small-12px"
  }, [_c('div', {
    staticClass: "dsclmr__icon"
  }, [_c('svg', {
    attrs: {
      "width": "2",
      "height": "9",
      "viewBox": "0 0 2 9",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M2 6.75H0V9H2V6.75Z",
      "fill": "white"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M0.133301 0H1.86663L1.5333 5.55H0.466634L0.133301 0Z",
      "fill": "white"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "dsclmr__body"
  }, _vm._l((_vm.footnotes), function(dsclmr, index) {
    return _c('span', {
      staticClass: "dsclmr__item"
    }, [_vm._v(_vm._s(index) + ". " + _vm._s(dsclmr))])
  }), 0)])], 2)]), _vm._v(" "), _c('notifier')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c401f59", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54799d6f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: _vm.id,
    staticClass: "presentation",
    class: {
      isEntered: _vm.enter, showIcons: _vm.showIcons
    }
  }, [_c('div', {
    staticClass: "presentation__head"
  }, [_c('transition', {
    attrs: {
      "name": "main",
      "duration": {
        enter: 500,
        leave: 500
      },
      "mode": "out-in"
    }
  }, [(!_vm.enter) ? _c('h2', {
    key: "big",
    staticClass: "presentation__main"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })]) : _c('h2', {
    key: "small",
    staticClass: "presentation__main presentation__main--small"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })])])], 1), _vm._v(" "), _c('div', {
    ref: "presentation__left",
    staticClass: "presentation__left"
  }, [(_vm.beforeEnter) ? _c('div', {
    ref: 'back',
    staticClass: "presentation__back",
    style: ({
      'background-image': 'url(' + _vm.backgroundTotal + ')'
    })
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    ref: "presentation__icons-holder",
    staticClass: "presentation__icons-holder",
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        return _vm.close($event)
      }
    }
  }, _vm._l((_vm.slides), function(slide, index) {
    return _c('a', {
      key: index,
      ref: 'icon--' + index,
      refInFor: true,
      staticClass: "presentation__icon",
      class: ['presentation__icon--' + index],
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.selectItem(index, slide.zoom, slide.correct.x, slide.correct.y, 24)
        }
      }
    }, [_c('div', {
      staticClass: "presentation__center"
    })])
  }), 0), _vm._v(" "), (_vm.beforeEnter) ? _c('div', {
    ref: "presentation__aside",
    staticClass: "presentation__aside"
  }, [_c('a', {
    ref: "presentation__prev",
    staticClass: "presentation__prev",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.prevItem($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "18",
      "height": "38",
      "viewBox": "0 0 18 38",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M17 37L1.59055 19.6644C1.25376 19.2855 1.25376 18.7145 1.59055 18.3356L17 1",
      "stroke-width": "2"
    }
  })])]), _vm._v(" "), _c('a', {
    ref: "presentation__next",
    staticClass: "presentation__next",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.nextItem($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "18",
      "height": "38",
      "viewBox": "0 0 18 38",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M1 1L16.4095 18.3356C16.7462 18.7145 16.7462 19.2855 16.4095 19.6644L1 37",
      "stroke-width": "2"
    }
  })])]), _vm._v(" "), _c('a', {
    ref: "presentation__close",
    staticClass: "presentation__close",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.close($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M24 0.8568L23.1432 0L12 11.1432L0.8568 0L0 0.8568L11.1432 12L0 23.1432L0.8568 24L12 12.8568L23.1432 24L24 23.1432L12.8568 12L24 0.8568Z"
    }
  })])]), _vm._v(" "), _c('ul', {
    staticClass: "presentation__dots"
  }, _vm._l((_vm.slides), function(dot, index) {
    return _c('li', {
      key: index,
      staticClass: "presentation__dot",
      class: {
        active: _vm.selectedId === index
      },
      on: {
        "click": function($event) {
          _vm.selectItem(index, _vm.slides[index].zoom, _vm.slides[index].correct.x, _vm.slides[index].correct.y)
        }
      }
    })
  }), 0), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide",
      "duration": {
        enter: 1000,
        leave: 1000
      },
      "mode": "out-in"
    }
  }, [_c(_vm.currentComponent(_vm.slide), {
    key: _vm.slide[0].title,
    tag: "component",
    style: ({
      backgroundImage: 'url(' + _vm.slide[0].background + ')'
    }),
    attrs: {
      "icon": _vm.slide[0].icon,
      "title": _vm.slide[0].title,
      "description": _vm.slide[0].description,
      "slides": _vm.slide[0].slides
    }
  })], 1)], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-54799d6f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57ad691e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "presentation__slide"
  }, [_c('div', {
    staticClass: "presentation__composition"
  }, [_c('div', {
    staticClass: "presentation__img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "presentation__title"
  }, [_c('span', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "presentation__description"
  }, [_c('span', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.description) + "\n\t\t\t")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57ad691e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9b6e269e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "view"
  }, [_c('h2', {
    staticClass: "view__title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "view__body",
    on: {
      "click": _vm.init360
    }
  }, [(!_vm.isLoaded) ? _c('div', {
    staticClass: "view__back",
    style: ({
      backgroundImage: 'url(' + _vm.preview + ')'
    })
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "view__spritespin",
    attrs: {
      "id": "spritespin"
    }
  }), _vm._v(" "), (_vm.carId != 16 && _vm.carId != 30 && _vm.carId != 31) ? _c('transition', {
    attrs: {
      "name": "preloader"
    }
  }, [(!_vm.isLoaded) ? _c('div', {
    staticClass: "view__preloader"
  }, [(!_vm.isInit) ? _c('img', {
    staticClass: "view__img",
    attrs: {
      "src": "/images/icons/360.svg"
    }
  }) : _c('div', {
    staticClass: "view__progress"
  }, [_vm._v(_vm._s(_vm.progressFormatted) + "%")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "view__nav"
  }, [_c('transition', {
    attrs: {
      "name": "preloader-arrow"
    }
  }, [(_vm.isInit) ? _c('a', {
    staticClass: "view__prev",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.prev($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "18",
      "height": "38",
      "viewBox": "0 0 18 38",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M17 37L1.59055 19.6644C1.25376 19.2855 1.25376 18.7145 1.59055 18.3356L17 1",
      "stroke-width": "2"
    }
  })])]) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "preloader-arrow"
    }
  }, [(_vm.isInit) ? _c('a', {
    staticClass: "view__next",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.next($event)
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "18",
      "height": "38",
      "viewBox": "0 0 18 38",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M1 1L16.4095 18.3356C16.7462 18.7145 16.7462 19.2855 16.4095 19.6644L1 37",
      "stroke-width": "2"
    }
  })])]) : _vm._e()])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "view__bottom"
  }, [_c('div', {
    staticClass: "colors"
  }, [_c('div', {
    staticClass: "colors__current"
  }, [_vm._v(_vm._s(_vm.currentColor))]), _vm._v(" "), _c('ul', {
    staticClass: "colors__list"
  }, _vm._l((_vm.colors), function(color) {
    return _c('li', {
      key: color.id,
      staticClass: "colors__color",
      class: {
        active: _vm.activeColor === color.id
      },
      style: ({
        backgroundColor: color.colorCode
      }),
      attrs: {
        "data-name": color.nameRus + ' / ' + color.name
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.setColor(color)
        }
      }
    })
  }), 0)]), _vm._v(" "), _c('a', {
    staticClass: "view__button df-button",
    attrs: {
      "target": "_blank",
      "href": '/configurator/car/' + _vm.carId
    }
  }, [_vm._v("Создать конфигурацию")])]), _vm._v(" "), _c('notifier')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9b6e269e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c5194924\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/common/HotButtons.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-buttons",
    class: {
      oneButton: _vm.oneButton, fixed: _vm.fixed
    }
  }, [_c('ul', {
    staticClass: "h-buttons__list",
    class: {
      show: _vm.showList, showButton: _vm.showButton
    }
  }, [(_vm.buttons[3]) ? _c('li', {
    staticClass: "h-buttons__item"
  }, [_c('div', {
    staticClass: "h-buttons__link"
  }, [_c('a', {
    staticClass: "h-buttons__button",
    attrs: {
      "href": _vm.linkFromId
    }
  }, [_c('span', [_vm._v("Кредит")])]), _vm._v(" "), _c('div', {
    staticClass: "h-buttons__icon",
    on: {
      "click": _vm.toggleButton
    }
  }, [_c('svg', {
    attrs: {
      "width": "36",
      "height": "24",
      "viewBox": "0 0 36 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "29.2259",
      "cy": "16.8064",
      "r": "5.77419",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M28.2373 16.9291C28.9665 16.9291 29.5067 16.4145 29.5067 15.739C29.5067 15.0635 28.9665 14.5488 28.2373 14.5488C27.508 14.5488 26.9678 15.0635 26.9678 15.739C26.9678 16.4145 27.508 16.9291 28.2373 16.9291ZM28.2373 16.2408C27.9334 16.2408 27.7241 16.0092 27.7241 15.739C27.7241 15.4688 27.9334 15.2372 28.2373 15.2372C28.5411 15.2372 28.7505 15.4688 28.7505 15.739C28.7505 16.0092 28.5411 16.2408 28.2373 16.2408ZM28.19 18.9878H28.9868L31.3637 14.6132H30.5737L28.19 18.9878ZM31.3434 19.065C32.0727 19.065 32.6129 18.5503 32.6129 17.8748C32.6129 17.1993 32.0727 16.6847 31.3434 16.6847C30.6142 16.6847 30.074 17.1993 30.074 17.8748C30.074 18.5503 30.6142 19.065 31.3434 19.065ZM31.3434 18.3766C31.0396 18.3766 30.8303 18.145 30.8303 17.8748C30.8303 17.6046 31.0396 17.373 31.3434 17.373C31.6473 17.373 31.8566 17.6046 31.8566 17.8748C31.8566 18.145 31.6473 18.3766 31.3434 18.3766Z",
      "fill": "white"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M21.3669 19.0645H2C1.44771 19.0645 1 18.6168 1 18.0645V2C1 1.44772 1.44772 1 2 1H31.6129C32.1652 1 32.6129 1.44772 32.6129 2V9.67805",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M1.56458 6.48779H32.613",
      "stroke": "white",
      "stroke-width": "2"
    }
  })])])])]) : _vm._e(), _vm._v(" "), (_vm.buttons[0]) ? _c('li', {
    staticClass: "h-buttons__item"
  }, [_c('div', {
    staticClass: "h-buttons__link"
  }, [_c('a', {
    staticClass: "h-buttons__button",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.testDrive($event)
      }
    }
  }, [_c('span', [_vm._v("Тест-драйв")])]), _vm._v(" "), _c('div', {
    staticClass: "h-buttons__icon",
    on: {
      "click": _vm.toggleButton
    }
  }, [_c('svg', {
    attrs: {
      "width": "36",
      "height": "36",
      "viewBox": "0 0 36 36",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "18",
      "cy": "18",
      "r": "13",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('circle', {
    attrs: {
      "cx": "18",
      "cy": "18",
      "r": "17",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('circle', {
    attrs: {
      "r": "2",
      "transform": "matrix(1 0 0 -1 18 17)",
      "fill": "white"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M6 13L10.2389 11.9403C15.3345 10.6664 20.6655 10.6664 25.7611 11.9403L30 13",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M5 18V18C11.0751 18 16 22.9249 16 29V31",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M31 18V18C24.9249 18 20 22.9249 20 29V31",
      "stroke": "white",
      "stroke-width": "2"
    }
  })])])])]) : _vm._e(), _vm._v(" "), (_vm.buttons[1]) ? _c('li', {
    staticClass: "h-buttons__item"
  }, [_c('div', {
    staticClass: "h-buttons__link"
  }, [_c('a', {
    staticClass: "h-buttons__button",
    attrs: {
      "href": '/configurator/car/' + _vm.carId
    }
  }, [_c('span', [_vm._v("Конфигуратор")])]), _vm._v(" "), _c('div', {
    staticClass: "h-buttons__icon",
    on: {
      "click": _vm.toggleButton
    }
  }, [_c('svg', {
    attrs: {
      "width": "28",
      "height": "22",
      "viewBox": "0 0 28 22",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('rect', {
    attrs: {
      "x": "13",
      "y": "9",
      "width": "2",
      "height": "13",
      "fill": "white"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "3",
      "width": "2",
      "height": "12",
      "fill": "white"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "3",
      "y": "18",
      "width": "2",
      "height": "4",
      "fill": "white"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "23",
      "width": "2",
      "height": "11",
      "fill": "white"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "23",
      "y": "17",
      "width": "2",
      "height": "5",
      "fill": "white"
    }
  }), _vm._v(" "), _c('circle', {
    attrs: {
      "cx": "4",
      "cy": "16",
      "r": "3",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('circle', {
    attrs: {
      "cx": "24",
      "cy": "14",
      "r": "3",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('circle', {
    attrs: {
      "cx": "14",
      "cy": "6",
      "r": "3",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "13",
      "width": "2",
      "height": "3",
      "fill": "white"
    }
  })])])])]) : _vm._e(), _vm._v(" "), (_vm.buttons[2] && _vm.ENV !== 'dealer') ? _c('li', {
    staticClass: "h-buttons__item"
  }, [_c('div', {
    staticClass: "h-buttons__link"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "h-buttons__icon",
    on: {
      "click": _vm.toggleButton
    }
  }, [_c('svg', {
    attrs: {
      "width": "26",
      "height": "32",
      "viewBox": "0 0 26 32",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M24.6 13.193C24.6 17.5575 21.6362 22.0142 18.461 25.4973C16.8972 27.2127 15.3302 28.6402 14.1529 29.6394C13.6009 30.1079 13.1363 30.4808 12.8 30.7436C12.4637 30.4808 11.9991 30.1079 11.4471 29.6394C10.2698 28.6402 8.70279 27.2127 7.13901 25.4973C3.9638 22.0142 1 17.5575 1 13.193C1 6.43026 6.31133 1 12.8 1C19.2887 1 24.6 6.43026 24.6 13.193Z",
      "stroke": "white",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M17.4 12.8002C17.4 15.3407 15.3405 17.4002 12.8 17.4002C10.2595 17.4002 8.20001 15.3407 8.20001 12.8002C8.20001 10.2597 10.2595 8.2002 12.8 8.2002C15.3405 8.2002 17.4 10.2597 17.4 12.8002Z",
      "stroke": "white",
      "stroke-width": "2"
    }
  })])])])]) : _vm._e()]), _vm._v(" "), _c('a', {
    staticClass: "h-buttons__main",
    class: {
      show: _vm.showList
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.toggleShowList($event)
      }
    }
  }), _vm._v(" "), (_vm.isVisible) ? _c('sign-up-test-drive-form-popup', {
    attrs: {
      "page": _vm.page
    }
  }) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "h-buttons__button",
    attrs: {
      "href": "/find-dealer"
    }
  }, [_c('span', [_vm._v("Дилеры")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c5194924", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e1ef8adc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "presentation__slide"
  }, [_c('div', {
    staticClass: "presentation__controls"
  }, [_c('ul', _vm._l((_vm.slides), function(slide, index) {
    return _c('li', {
      key: index
    }, [_c('a', {
      class: {
        active: _vm.currentSlide === index
      },
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.selectSlide(index)
        }
      }
    }, [_vm._v(_vm._s(slide.name))])])
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "presentation__carousel"
  }, [_c('transition', {
    attrs: {
      "name": "frame",
      "mode": "in-out"
    }
  }, _vm._l((_vm.slides), function(slide, index) {
    return (index === _vm.currentSlide) ? _c('div', {
      key: index,
      staticClass: "presentation__frame",
      style: ({
        backgroundImage: 'url(' + slide.img + ')'
      })
    }) : _vm._e()
  }), 0)], 1), _vm._v(" "), _c('div', {
    staticClass: "presentation__composition"
  }, [_c('div', {
    staticClass: "presentation__img"
  }, [_c('img', {
    attrs: {
      "src": _vm.icon
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "presentation__title"
  }, [_c('span', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "presentation__description"
  }, [_c('span', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.description) + "\n\t\t\t")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e1ef8adc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/Notifier.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/Notifier.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("37980eb4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notifier.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notifier.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2fa7a7da", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SpecsSection.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SpecsSection.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("12808257", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationSection.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationSection.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("20f125a7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationSimpleSlide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationSimpleSlide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("f08548a2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./View-360.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./View-360.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5194924\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/common/HotButtons.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5194924\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/common/HotButtons.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7dc19e32", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5194924\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HotButtons.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5194924\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HotButtons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("42a25580", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationTabsSlide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationTabsSlide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.22
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ("development" !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    try {
      return fn.apply(null, arguments)
    } finally {
      useMacroTask = false;    
    }
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }

      if (renderCompleted) {
        contexts.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        contexts.length = 0;
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ("development" !== 'production' && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + camelizedKey)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ("development" !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.22';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (true) {
      if (el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys."
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (
          "development" !== 'production' &&
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !(isReservedTag(el.tag) && !el.component); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapGetters; });
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v2.5.0
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.5.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/pages/cars/solaris-2020/solaris.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_store_service__ = __webpack_require__("./resources/js/vue/store-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_components_CarPageTemplate_View_360_vue__ = __webpack_require__("./resources/js/vue/components/CarPageTemplate/View-360.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_components_CarPageTemplate_View_360_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vue_components_CarPageTemplate_View_360_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_components_CarPageTemplate_PresentationSection_vue__ = __webpack_require__("./resources/js/vue/components/CarPageTemplate/PresentationSection.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_components_CarPageTemplate_PresentationSection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vue_components_CarPageTemplate_PresentationSection_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vue_components_CarPageTemplate_SpecsSection_vue__ = __webpack_require__("./resources/js/vue/components/CarPageTemplate/SpecsSection.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vue_components_CarPageTemplate_SpecsSection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vue_components_CarPageTemplate_SpecsSection_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vue_components_common_HotButtons_vue__ = __webpack_require__("./resources/js/vue/components/common/HotButtons.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vue_components_common_HotButtons_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__vue_components_common_HotButtons_vue__);







//Чтобы store был доступен из вне, для создания событий открытия окон
window.vueStore = __WEBPACK_IMPORTED_MODULE_1__vue_store_service__["a" /* default */];

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
	el: '#hotbuttons',
	store: __WEBPACK_IMPORTED_MODULE_1__vue_store_service__["a" /* default */],
	components: {
		'hot-buttons': __WEBPACK_IMPORTED_MODULE_5__vue_components_common_HotButtons_vue___default.a
	}
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
	el: '#view360',
	store: __WEBPACK_IMPORTED_MODULE_1__vue_store_service__["a" /* default */],
	components: {
		'view-360': __WEBPACK_IMPORTED_MODULE_2__vue_components_CarPageTemplate_View_360_vue___default.a
	}
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
	el: '#design',
	components: {
		'presentation-section': __WEBPACK_IMPORTED_MODULE_3__vue_components_CarPageTemplate_PresentationSection_vue___default.a
	}
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
	el: '#comfort',
	components: {
		'presentation-section': __WEBPACK_IMPORTED_MODULE_3__vue_components_CarPageTemplate_PresentationSection_vue___default.a
	}
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
	el: '#specs',
	store: __WEBPACK_IMPORTED_MODULE_1__vue_store_service__["a" /* default */],
	components: {
		'specs-section': __WEBPACK_IMPORTED_MODULE_4__vue_components_CarPageTemplate_SpecsSection_vue___default.a
	}
});

//Открыть попап записи на тестдрайв
$('.js-open-p-td').on('click', function (e) {
	e.preventDefault();

	if (__WEBPACK_IMPORTED_MODULE_1__vue_store_service__["a" /* default */].getters.GET_ENV === 'dealer') {
		window.location = '/test-drive';
	} else {
		//Установим активной модель. Св-во code!!!!!!
		__WEBPACK_IMPORTED_MODULE_1__vue_store_service__["a" /* default */].dispatch('SET_SAVED_MODEL', 'Solaris 2020');
		__WEBPACK_IMPORTED_MODULE_1__vue_store_service__["a" /* default */].dispatch('OPEN_TEST_DRIVE_POPUP', true);
	}
});

/***/ }),

/***/ "./resources/js/vue/assets/image/notifier-success.png":
/***/ (function(module, exports) {

module.exports = "/images/notifier-success.png?ebc854ddcb0facf38df675005c14d1a5";

/***/ }),

/***/ "./resources/js/vue/components/CarPageTemplate/PresentationSection.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54799d6f\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54799d6f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/PresentationSection.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\OpenServer\\OSPanel\\domains\\hyundai\\www\\resources\\js\\vue\\components\\CarPageTemplate\\PresentationSection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PresentationSection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54799d6f", Component.options)
  } else {
    hotAPI.reload("data-v-54799d6f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/components/CarPageTemplate/SpecsSection.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c401f59\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c401f59\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/SpecsSection.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\OpenServer\\OSPanel\\domains\\hyundai\\www\\resources\\js\\vue\\components\\CarPageTemplate\\SpecsSection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SpecsSection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c401f59", Component.options)
  } else {
    hotAPI.reload("data-v-4c401f59", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/components/CarPageTemplate/View-360.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9b6e269e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9b6e269e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/View-360.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\OpenServer\\OSPanel\\domains\\hyundai\\www\\resources\\js\\vue\\components\\CarPageTemplate\\View-360.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] View-360.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b6e269e", Component.options)
  } else {
    hotAPI.reload("data-v-9b6e269e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57ad691e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57ad691e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationSimpleSlide.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\OpenServer\\OSPanel\\domains\\hyundai\\www\\resources\\js\\vue\\components\\CarPageTemplate\\presentationSlides\\PresentationSimpleSlide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PresentationSimpleSlide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57ad691e", Component.options)
  } else {
    hotAPI.reload("data-v-57ad691e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ef8adc\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e1ef8adc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/CarPageTemplate/presentationSlides/PresentationTabsSlide.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\OpenServer\\OSPanel\\domains\\hyundai\\www\\resources\\js\\vue\\components\\CarPageTemplate\\presentationSlides\\PresentationTabsSlide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PresentationTabsSlide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1ef8adc", Component.options)
  } else {
    hotAPI.reload("data-v-e1ef8adc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/components/Notifier.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d124400\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/Notifier.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/Notifier.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3d124400\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/Notifier.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3d124400",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\OpenServer\\OSPanel\\domains\\hyundai\\www\\resources\\js\\vue\\components\\Notifier.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notifier.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d124400", Component.options)
  } else {
    hotAPI.reload("data-v-3d124400", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/components/common/HotButtons.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5194924\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/js/vue/components/common/HotButtons.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/js/vue/components/common/HotButtons.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c5194924\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/js/vue/components/common/HotButtons.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\OpenServer\\OSPanel\\domains\\hyundai\\www\\resources\\js\\vue\\components\\common\\HotButtons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HotButtons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5194924", Component.options)
  } else {
    hotAPI.reload("data-v-c5194924", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/js/vue/store-service/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__s_state__ = __webpack_require__("./resources/js/vue/store-service/s-state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__s_mutations__ = __webpack_require__("./resources/js/vue/store-service/s-mutations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__s_actions__ = __webpack_require__("./resources/js/vue/store-service/s-actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__s_getters__ = __webpack_require__("./resources/js/vue/store-service/s-getters.js");







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: __WEBPACK_IMPORTED_MODULE_2__s_state__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_3__s_mutations__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_4__s_actions__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_5__s_getters__["a" /* default */]
}));

/***/ }),

/***/ "./resources/js/vue/store-service/s-actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("./resources/js/vue/store-service/index.js");



/* harmony default export */ __webpack_exports__["a"] = ({
	SET_MODEL: function SET_MODEL(_ref, data) {
		var commit = _ref.commit,
		    state = _ref.state;

		//Обновим данные
		state.data.forEach(function (car) {
			if (car.code.toLowerCase() === data.toLowerCase() || car.link === '/' + data) {
				__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_CAR_DATA', car);
			}
		});

		//Если модель не найдена, установим первую в списке
		if (state.car.code === '' && state.data.length > 0) {
			__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_MODEL', state.data[0].code);
		}
		//Обновим список двигателей
		if (state.dataEngines.length > 0) {
			__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_YEARS', data);
		}
	},
	SET_SAVED_MODEL: function SET_SAVED_MODEL(_ref2, data) {
		var commit = _ref2.commit,
		    state = _ref2.state;

		commit('SET_SAVED_MODEL', data);
	},
	SET_CAR_DATA: function SET_CAR_DATA(_ref3, data) {
		var commit = _ref3.commit,
		    state = _ref3.state;

		commit('SET_CAR_DATA', data);
	},
	SET_YEARS: function SET_YEARS(_ref4, data) {
		var commit = _ref4.commit,
		    state = _ref4.state;

		//Обновим список двигателей
		state.dataEngines.forEach(function (car) {
			if (car.code === data.toLowerCase() || data.toLowerCase() == 'santa fe' && car.code == 'santafe' || data.toLowerCase() == 'h-1' && car.code == 'h1') {
				commit('SET_YEARS', car.engines);
			}
		});

		//Поставим первый двигатель в списке как активный
		__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_YEAR', Object.keys(state.years)[0]);
	},
	SET_YEAR: function SET_YEAR(_ref5, data) {
		var commit = _ref5.commit,
		    state = _ref5.state;

		commit('SET_YEAR', data);

		//Обновим объёмы
		__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_ENGINES', state.car.engines[state.year]);
	},
	SET_ENGINES: function SET_ENGINES(_ref6, data) {
		var commit = _ref6.commit,
		    state = _ref6.state;

		//Обновим список двигателей
		/*
  		state.dataEngines.forEach((car)=>{
  			if (car.code === data.toLowerCase() || (data.toLowerCase() == 'santa fe' && car.code == 'santafe') || (data.toLowerCase() == 'h-1' && car.code == 'h1')) {
  				commit('SET_ENGINES', car.engines[state.year]);
  			}
  		})
  */
		commit('SET_ENGINES', data);

		//Поставим первый двигатель в списке как активный
		__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_ENGINE', Object.keys(state.engines)[0]);
	},
	SET_ENGINE: function SET_ENGINE(_ref7, data) {
		var commit = _ref7.commit,
		    state = _ref7.state;

		commit('SET_ENGINE', data);

		//Обновим объёмы
		__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_V_ENGINES', state.engines[state.engine]);
	},
	SET_V_ENGINES: function SET_V_ENGINES(_ref8, data) {
		var commit = _ref8.commit,
		    state = _ref8.state;

		commit('SET_V_ENGINES', data);

		//Выберем первый объём в списке
		__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_V_ENGINE', state.vEngines[0]);
	},
	SET_V_ENGINE: function SET_V_ENGINE(_ref9, data) {
		var commit = _ref9.commit;

		commit('SET_V_ENGINE', data);
	},
	SET_MILEAGE: function SET_MILEAGE(_ref10, data) {
		var commit = _ref10.commit;

		commit('SET_MILEAGE', data);
	},
	SET_USER_PHONE: function SET_USER_PHONE(_ref11, data) {
		var commit = _ref11.commit;

		commit('SET_USER_PHONE', data);
	},
	SET_DEALER: function SET_DEALER(_ref12, data) {
		var commit = _ref12.commit,
		    state = _ref12.state;

		//Устанавливаем город дилера (если город не выбран или дилер выбран на карте)
		var dealerCity;
		var currentCity = state.city;

		commit('SET_DEALER', data);

		state.dealers.forEach(function (dealer) {
			if (dealer.code === data) {
				dealerCity = dealer.city_id;
			}
		});

		if (currentCity !== dealerCity) {
			commit('SET_CITY', dealerCity);
		}
	},
	SET_DEALERS_CITIES: function SET_DEALERS_CITIES(_ref13, data) {
		var commit = _ref13.commit;

		var cities = [];

		data.forEach(function (item) {
			if (!cities.some(function (i) {
				return item.city_id == i.city_id;
			})) {
				cities.push({
					'city_id': item.city_id,
					'city_name': item.city_name
				});
			}
		});

		//console.log(cities)

		commit('SET_DEALERS_CITIES', cities);
	},
	SET_CITY: function SET_CITY(_ref14, data) {
		var commit = _ref14.commit;

		commit('SET_CITY', data);
		//При смене города очищаем дилера
		commit('SET_DEALER', '');
	},
	SET_SELECTED_EVENTS: function SET_SELECTED_EVENTS(_ref15, data) {
		var commit = _ref15.commit;

		//Ищем событие в списке событий
		if (!Array.isArray(data)) {
			var data = [data];
		}

		var events = [];

		itemsJson.forEach(function (item) {
			if (data.some(function (event) {
				return event.id === item.id;
			})) {
				var event = {};

				Object.assign(event, item);
				events.push(event);
			}
		});

		commit('SET_SELECTED_EVENTS', events);
	},
	SET_SELECTED_EVENT: function SET_SELECTED_EVENT(_ref16, data) {
		var commit = _ref16.commit;

		commit('SET_SELECTED_EVENT', data);
	},
	GET_START_MODELS_LIST: function GET_START_MODELS_LIST(_ref17, data) {
		var commit = _ref17.commit,
		    state = _ref17.state;

		return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(state.API.CAR_LIST).then(function (response) {
			var list = [];

			for (var car in response.data.cars) {
				list.push(response.data.cars[car]);
			}

			var carcaseList = [];

			response.data.carcaseList[0] = 'Все модели';

			for (var item in response.data.carcaseList) {
				carcaseList.push({
					id: item,
					name: response.data.carcaseList[item]
				});
			}

			commit('SET_START_CARCASE_LIST', carcaseList);
			commit('SET_START_MODELS_LIST', list);
		});
	},
	SET_START_CURRENT_CAR: function SET_START_CURRENT_CAR(_ref18, data) {
		var commit = _ref18.commit,
		    state = _ref18.state;

		commit('SET_START_CURRENT_CAR', data);

		//Данные для попапов
		commit('SET_CAR_DATA', {
			code: data.codeName,
			id: data.id,
			image: data.image,
			link: data.link,
			name: data.name
		});

		return __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_START_CURRENT_CAR_SPEC').then(function (data) {
			//Обновим список модификаций
			commit('SET_START_MODIFICATION_LIST', data.modificationList);

			//Поставим дефолтную модификацию
			return __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_START_MODIFICATION', data.modificationList[state.start.currentCarSpec.defaultModificationId]);
		});
	},
	SET_START_CURRENT_CAR_SPEC: function SET_START_CURRENT_CAR_SPEC(_ref19) {
		var commit = _ref19.commit,
		    state = _ref19.state;

		return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(state.API.CAR + state.start.currentCar.id).then(function (response) {
			commit('SET_START_CURRENT_CAR_SPEC', response.data);

			return response.data;
		});
	},
	SET_START_MODIFICATION: function SET_START_MODIFICATION(_ref20, data) {
		var commit = _ref20.commit,
		    state = _ref20.state;

		commit('SET_START_MODIFICATION', data);

		commit('SET_START_COMPLECTATION_LIST', state.start.modification.complectations);

		//Подгрузим данные модификации
		__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(state.API.CAR_MODIFICATIONS + state.start.currentCar.id).then(function (response) {
			commit('SET_START_DATA_MODIFICATION', response.data);

			//Обновим комплектацию и её данные
			return __WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_START_COMPLECTATION', state.start.modification.complectations[state.start.modification.defaultComplectation]);
		});
	},
	SET_START_COMPLECTATION: function SET_START_COMPLECTATION(_ref21, data) {
		var commit = _ref21.commit,
		    state = _ref21.state;

		commit('SET_START_COMPLECTATION', data);

		//Очистим список выбранных пакетов
		commit('SET_START_SELECTED_PACKETS', []);

		//Обновим список пакетов
		__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_START_PACKETS');

		//Дефолтные цвета
		__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_360_COLORS');

		//Подгрузим данные комплектации
		return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(state.API.CAR_COMPLECTATIONS + state.start.modification.id).then(function (response) {
			commit('SET_START_DATA_COMPLECTATIONS', response.data);
		});
	},
	SET_START_PACKETS: function SET_START_PACKETS(_ref22) {
		var commit = _ref22.commit,
		    state = _ref22.state;

		//Определение списка пакетов, если они есть, при установке комплектации
		if ('packets' in state.start.complectation) {
			commit('SET_START_PACKETS', state.start.complectation.packets);
		} else {
			commit('SET_START_PACKETS', {});
			//this.selectedPackets = [];
		}
	},
	SET_START_SELECTED_PACKETS: function SET_START_SELECTED_PACKETS(_ref23, data) {
		var commit = _ref23.commit,
		    state = _ref23.state;

		commit('SET_START_SELECTED_PACKETS', data);
	},
	SET_START_ACTIVE_COLOR_OBJ: function SET_START_ACTIVE_COLOR_OBJ(_ref24, data) {
		var commit = _ref24.commit;

		commit('SET_START_ACTIVE_COLOR_OBJ', data);
	},
	SET_START_ACTIVE_COLOR: function SET_START_ACTIVE_COLOR(_ref25, data) {
		var commit = _ref25.commit;

		commit('SET_START_ACTIVE_COLOR', data);
	},
	SET_START_PREV_COLOR: function SET_START_PREV_COLOR(_ref26, data) {
		var commit = _ref26.commit;

		commit('SET_START_PREV_COLOR', data);
	},
	SET_360_COLORS: function SET_360_COLORS(_ref27) {
		var commit = _ref27.commit,
		    state = _ref27.state;

		//Берём 360 из текущей комплектации
		commit('SET_START_ACTIVE_COLOR', state.start.complectation.exterior.colors.defaultColor);
		commit('SET_START_COLORS_API', state.start.complectation.exterior.colors.groups);
		commit('SET_START_SPRITESPIN', state.start.complectation.exterior.spritespin);

		for (var group in state.start.colorsAPI) {
			for (var color in state.start.colorsAPI[group]) {
				if (state.start.colorsAPI[group][color].id === state.start.activeColor) {
					commit('SET_START_ACTIVE_COLOR_OBJ', state.start.colorsAPI[group][color]);
				}
			}
		}
	},
	SET_START_SELECTED_PROGRAMS: function SET_START_SELECTED_PROGRAMS(_ref28, data) {
		var commit = _ref28.commit,
		    state = _ref28.state;

		commit('SET_START_SELECTED_PROGRAMS', data);
	},
	SET_START_CURRENT_TERM: function SET_START_CURRENT_TERM(_ref29, data) {
		var commit = _ref29.commit,
		    state = _ref29.state;

		commit('SET_START_CURRENT_TERM', data);
	},
	SET_START_INCLUDE_KASKO: function SET_START_INCLUDE_KASKO(_ref30, data) {
		var commit = _ref30.commit,
		    state = _ref30.state;

		commit('SET_START_INCLUDE_KASKO', data);
	},
	SET_START_COMPARE_SELECTED: function SET_START_COMPARE_SELECTED(_ref31, data) {
		var commit = _ref31.commit,
		    state = _ref31.state;

		commit('SET_START_COMPARE_SELECTED', data);
	},
	SET_START_CREDIT_PACK: function SET_START_CREDIT_PACK(_ref32, data) {
		var commit = _ref32.commit,
		    state = _ref32.state;

		if (data.prepay < 1 && data.prepay !== 0) {
			return console.error('data.prepay должно быть от 0 до 100');
		}
		commit('SET_START_CREDIT_PACK', data);
	},
	SET_DEALER_CARS_CAR_ID: function SET_DEALER_CARS_CAR_ID(_ref33, data) {
		var commit = _ref33.commit,
		    state = _ref33.state;

		commit('SET_DEALER_CARS_CAR_ID', data);
	},
	SET_TRADEIN_CURRENT_CAR: function SET_TRADEIN_CURRENT_CAR(_ref34, data) {
		var commit = _ref34.commit,
		    state = _ref34.state;

		commit('SET_TRADEIN_CURRENT_CAR', data);
		commit('SET_TRADEIN_STATE', { step1: true });
	},
	SET_TRADEIN_STATE: function SET_TRADEIN_STATE(_ref35, data) {
		var commit = _ref35.commit,
		    state = _ref35.state;

		commit('SET_TRADEIN_STATE', data);
	},
	SET_TRADEIN_STEP2: function SET_TRADEIN_STEP2(_ref36, data) {
		var commit = _ref36.commit,
		    state = _ref36.state;

		commit('SET_TRADEIN_STEP2', data);
	},
	SET_TRADEIN_STEP3: function SET_TRADEIN_STEP3(_ref37, data) {
		var commit = _ref37.commit,
		    state = _ref37.state;

		commit('SET_TRADEIN_STEP3', data);
	},
	SET_TRADEIN_URL: function SET_TRADEIN_URL(_ref38, data) {
		var commit = _ref38.commit,
		    state = _ref38.state;

		commit('SET_TRADEIN_URL', data);
	},
	OPEN_START_MOBILE_LINE: function OPEN_START_MOBILE_LINE(_ref39, data) {
		var commit = _ref39.commit;

		commit('OPEN_START_MOBILE_LINE', data);
	},
	OPEN_FIND_DEALER: function OPEN_FIND_DEALER(_ref40, data) {
		var commit = _ref40.commit;

		commit('OPEN_FIND_DEALER', data);
	},
	OPEN_SEND_DEALER: function OPEN_SEND_DEALER(_ref41, data) {
		var commit = _ref41.commit;

		commit('OPEN_SEND_DEALER', data);
	},
	OPEN_OFFER_CREDIT: function OPEN_OFFER_CREDIT(_ref42, data) {
		var commit = _ref42.commit;

		commit('OPEN_OFFER_CREDIT', data);
	},
	OPEN_BACK_CALL: function OPEN_BACK_CALL(_ref43, data) {
		var commit = _ref43.commit;

		commit('OPEN_BACK_CALL', data);
	},
	OPEN_RULES: function OPEN_RULES(_ref44, data) {
		var commit = _ref44.commit;

		commit('OPEN_RULES', data);
	},
	OPEN_SUCCESS: function OPEN_SUCCESS(_ref45, data) {
		var commit = _ref45.commit;

		commit('OPEN_SUCCESS', data);
	},
	OPEN_EVENT_POPUP: function OPEN_EVENT_POPUP(_ref46, data) {
		var commit = _ref46.commit;

		commit('OPEN_EVENT_POPUP', data);
	},
	OPEN_CHECKOUT_EVENT_POPUP: function OPEN_CHECKOUT_EVENT_POPUP(_ref47, data) {
		var commit = _ref47.commit;

		commit('OPEN_CHECKOUT_EVENT_POPUP', data);
	},
	OPEN_TEST_DRIVE_POPUP: function OPEN_TEST_DRIVE_POPUP(_ref48, data) {
		var commit = _ref48.commit;

		commit('OPEN_TEST_DRIVE_POPUP', data);
	},
	OPEN_SEND_EMAIL_POPUP: function OPEN_SEND_EMAIL_POPUP(_ref49, data) {
		var commit = _ref49.commit;

		commit('OPEN_SEND_EMAIL_POPUP', data);
	},
	OPEN_SEND_APPROVAL_POPUP: function OPEN_SEND_APPROVAL_POPUP(_ref50, data) {
		var commit = _ref50.commit;

		commit('OPEN_SEND_APPROVAL_POPUP', data);
	},
	GET_DEALERS: function GET_DEALERS(_ref51, carName) {
		var commit = _ref51.commit,
		    state = _ref51.state;

		return new Promise(function (resolve, reject) {
			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(state.API.DEALERS_LIST).then(function (response) {
				commit('SET_DEALERS_DATA', response.data);
				commit('SET_DEALERS', response.data);

				__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_DEALERS_CITIES', response.data);

				resolve();
			}).catch(function (error) {
				reject(error);
			});
		});
	},
	GET_DATA: function GET_DATA(_ref52, data) {
		var commit = _ref52.commit,
		    state = _ref52.state;

		var params = {};

		if (typeof data !== 'undefined' && data.getOld) {
			params.oldCars = 1;
		}

		return new Promise(function (resolve, reject) {
			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(state.API.CAR_LIST2, { params: params }).then(function (response) {
				var arr = response.data.map(function (item) {
					// item.code = item.code.toLowerCase();
					return item;
				});

				commit('SET_DATA', arr);

				//Установим модель по умолчаню, если модель была установлена до этого момента (на странице модели), ставим её
				if (typeof data === 'undefined' || typeof data !== 'undefined' && data.flag !== 'noDefaultCar') {
					if (state.savedModel) {
						__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_MODEL', state.savedModel);
					} else {
						__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_MODEL', response.data[0].code);
					}
				}

				resolve();
			}).catch(function (error) {
				reject(error);
			});
		});
	},
	GET_DATA_CALC_TO: function GET_DATA_CALC_TO(_ref53, data) {
		var commit = _ref53.commit,
		    state = _ref53.state;

		return new Promise(function (resolve, reject) {
			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(state.API.CAR_LIST3).then(function (response) {
				var arr = response.data.map(function (item) {
					item.code = item.code.toLowerCase();
					return item;
				});

				commit('SET_DATA', arr);

				//Установим модель по умолчаню
				__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_MODEL', response.data[0].code);

				resolve();
			}).catch(function (error) {
				reject(error);
			});
		});
	},
	GET_ENGINES: function GET_ENGINES(_ref54, data) {
		var commit = _ref54.commit,
		    state = _ref54.state;

		return new Promise(function (resolve, reject) {
			//Подгрузим информацию о двигателях
			__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(state.API.ENGINES_LIST).then(function (response) {
				commit('SET_DATA_ENGINES', response.data);

				__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* default */].dispatch('SET_YEARS', state.car.code);

				resolve();
			}).catch(function (error) {
				reject(error);
			});
		});
	},
	GET_COST: function GET_COST(_ref55, data) {
		var commit = _ref55.commit,
		    state = _ref55.state;

		var dealer = '';

		if (!!data.dealer) {
			dealer = '&dealer=' + data.dealer;
		}

		__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(state.API.TO_CALC_COST + '?car=' + data.model + '&year=' + data.year + dealer + '&engine=' + data.vEngine + '&enginetype=' + encodeURIComponent(data.engine) + '&mileage=' + data.mileage + '&spares=0').then(function (response) {
			var data = response.data;

			var works = response.data.repairs_nf || 0;
			var parts = response.data.originspares_nf || 0;
			var partsPl2 = response.data.pl2spares_nf || 0;
			var total = response.data.total_nf || 0;

			commit('SET_COST', {
				works: works,
				parts: parts,
				partsPl2: partsPl2,
				total: total
			});
		});
	},
	SET_SERVICE_PARTS: function SET_SERVICE_PARTS(_ref56, data) {
		var commit = _ref56.commit,
		    state = _ref56.state;

		commit('SET_SERVICE_PARTS', data);
	}
});

/***/ }),

/***/ "./resources/js/vue/store-service/s-getters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  GET_ENV: function GET_ENV(state) {
    return Object({"MIX_PUSHER_APP_CLUSTER":"mt1","MIX_PUSHER_APP_KEY":"","NODE_ENV":"development"}).MIX_BUILD;
  },
  GET_CAR_CODE: function GET_CAR_CODE(state) {
    return state.car.code;
  },
  GET_CAR_NAME: function GET_CAR_NAME(state) {
    return state.car.name;
  },
  GET_CAR_ID: function GET_CAR_ID(state) {
    return state.car.id;
  },
  GET_CAR_LINK: function GET_CAR_LINK(state) {
    return state.car.link;
  },
  GET_CAR_IMG: function GET_CAR_IMG(state) {
    return state.car.image;
  },
  GET_YEAR: function GET_YEAR(state) {
    return state.year;
  },
  GET_YEARS: function GET_YEARS(state) {
    return state.years;
  },
  GET_ENGINE: function GET_ENGINE(state) {
    return state.engine;
  },
  GET_ENGINES: function GET_ENGINES(state) {
    return state.engines;
  },
  GET_V_ENGINES: function GET_V_ENGINES(state) {
    return state.vEngines;
  },
  GET_USER_PHONE: function GET_USER_PHONE(state) {
    return state.user.phone;
  },
  GET_CITY: function GET_CITY(state) {
    return state.city;
  },
  GET_CITY_NAME: function GET_CITY_NAME(state) {
    var cityName = '';

    state.dealersCities.forEach(function (city) {
      if (city.city_id === state.city) {
        cityName = city.city_name;
      }
    });

    return cityName;
  },
  GET_DEALER: function GET_DEALER(state) {
    return state.dealer;
  },
  GET_COST: function GET_COST(state) {
    return state.cost;
  },
  GET_SERVICE_PARTS: function GET_SERVICE_PARTS(state) {
    return state.serviceParts;
  },
  GET_DEALERS: function GET_DEALERS(state) {
    return state.dealers;
  },
  GET_DEALERS_CITIES: function GET_DEALERS_CITIES(state) {
    state.dealersCities.sort(function (a, b) {
      if (a.city_name > b.city_name) {
        return 1;
      } else if (a.city_name < b.city_name) {
        return -1;
      } else {
        return 0;
      }
    });

    state.dealersCities.sort(function (a, b) {
      return a.city_id == '1' || a.city_id == '2' ? -1 : b.city_id == '1' || b.city_id == '2' ? 1 : 0;
    });

    state.dealersCities.sort(function (a, b) {
      return a.city_id == '1' ? -1 : 0;
    });

    return state.dealersCities;
  },
  GET_DATA: function GET_DATA(state) {
    return state.data;
  },
  GET_DATA_SERVICE: function GET_DATA_SERVICE(state) {
    return state.dataService;
  },
  GET_SELECTED_EVENTS: function GET_SELECTED_EVENTS(state) {
    return state.selectedEvents;
  },
  GET_SELECTED_EVENT: function GET_SELECTED_EVENT(state) {
    return state.selectedEvent;
  },
  GET_START_CARCASE_LIST: function GET_START_CARCASE_LIST(state, data) {
    return state.start.carcaseList;
  },

  GET_START_MODELS_LIST: function GET_START_MODELS_LIST(state) {
    return state.start.modelsList;
  },
  GET_START_CURRENT_CAR: function GET_START_CURRENT_CAR(state) {
    return state.start.currentCar;
  },
  GET_START_CURRENT_CAR_SPEC: function GET_START_CURRENT_CAR_SPEC(state) {
    return state.start.currentCarSpec;
  },
  GET_START_ACTIVE_COLOR_OBJ: function GET_START_ACTIVE_COLOR_OBJ(state) {
    return state.start.activeColorObj;
  },
  GET_START_COLORS_API: function GET_START_COLORS_API(state, data) {
    return state.start.colorsAPI;
  },
  GET_START_SPRITESPIN: function GET_START_SPRITESPIN(state, data) {
    return state.start.spritespin;
  },
  GET_START_ACTIVE_COLOR: function GET_START_ACTIVE_COLOR(state, data) {
    return state.start.activeColor;
  },
  GET_START_PREV_COLOR: function GET_START_PREV_COLOR(state, data) {
    return state.start.prevColor;
  },

  GET_START_MODIFICATION_LIST: function GET_START_MODIFICATION_LIST(state) {
    return state.start.modificationList;
  },
  GET_START_MODIFICATION: function GET_START_MODIFICATION(state) {
    return state.start.modification;
  },
  GET_START_COMPLECTATION_LIST: function GET_START_COMPLECTATION_LIST(state) {
    return state.start.complectationList;
  },
  GET_START_COMPLECTATION: function GET_START_COMPLECTATION(state) {
    return state.start.complectation;
  },
  GET_START_PACKETS: function GET_START_PACKETS(state) {
    return state.start.packets;
  },
  GET_START_SELECTED_PACKETS: function GET_START_SELECTED_PACKETS(state) {
    return state.start.selectedPackets;
  },
  GET_START_DATA_MODIFICATIONS: function GET_START_DATA_MODIFICATIONS(state) {
    return state.start.dataModifications;
  },
  GET_START_DATA_COMPLECTATIONS: function GET_START_DATA_COMPLECTATIONS(state) {
    return state.start.dataComplectations;
  },
  GET_START_SELECTED_PROGRAMS: function GET_START_SELECTED_PROGRAMS(state) {
    return state.start.selectedPrograms;
  },
  GET_START_CURRENT_TERM: function GET_START_CURRENT_TERM(state) {
    return state.start.currentTerm;
  },
  GET_START_INCLUDE_KASKO: function GET_START_INCLUDE_KASKO(state) {
    return state.start.includeKASKO;
  },
  GET_START_COMPARE_SELECTED: function GET_START_COMPARE_SELECTED(state) {
    return state.start.compareSelected;
  },
  GET_START_CREDIT_PACK: function GET_START_CREDIT_PACK(state) {
    return state.start.creditPack;
  },
  GET_START_MILLEAGE: function GET_START_MILLEAGE(state) {
    if (state.start.currentTerm === 24) {
      return 'Макс. пробег за 2 года';
    } else if (state.start.currentTerm === 36) {
      return 'Макс. пробег за 3 года';
    }
  },
  GET_START_MILLEAGE_VALUE: function GET_START_MILLEAGE_VALUE(state) {
    if (state.start.currentTerm === 24) {
      if (state.start.creditPack.lastPay === 50) {
        return '90 000 км';
      }
      if (state.start.creditPack.lastPay === 55) {
        return '60 000 км';
      }
      if (state.start.creditPack.lastPay === 60) {
        return '45 000 км';
      }
    }
    if (state.start.currentTerm === 36) {
      if (state.start.creditPack.lastPay === 50) {
        return '90 000 км';
      }
      if (state.start.creditPack.lastPay === 55) {
        return '60 000 км';
      }
      if (state.start.creditPack.lastPay === 60) {
        return '45 000 км';
      }
    }
  },
  GET_DEALER_CARS_CAR_ID: function GET_DEALER_CARS_CAR_ID(state) {
    return state.dealerCars.carId;
  },
  GET_TRADEIN_STATE: function GET_TRADEIN_STATE(state) {
    return state.tradein.state;
  },
  GET_TRADEIN_STEP2: function GET_TRADEIN_STEP2(state) {
    return state.tradein.step2;
  },
  GET_TRADEIN_STEP3: function GET_TRADEIN_STEP3(state) {
    return state.tradein.step3;
  },
  GET_TRADEIN_URL: function GET_TRADEIN_URL(state) {
    return state.tradein.sendUrl;
  },
  GET_TRADEIN_CAR: function GET_TRADEIN_CAR(state) {
    return state.tradein.currentCar;
  },
  OPEN_START_MOBILE_LINE: function OPEN_START_MOBILE_LINE(state) {
    return state.start.openMobileLine;
  },

  OPEN_FIND_DEALER: function OPEN_FIND_DEALER(state) {
    return state.openFindDealerPopup;
  },
  OPEN_OFFER_CREDIT_FORM: function OPEN_OFFER_CREDIT_FORM(state) {
    return state.openOfferCreditPopup;
  },
  OPEN_SEND_DEALER: function OPEN_SEND_DEALER(state) {
    return state.openSendDealerPopup;
  },
  OPEN_BACK_CALL: function OPEN_BACK_CALL(state) {
    return state.openBackCallPopup;
  },
  OPEN_SEND_EMAIL_POPUP: function OPEN_SEND_EMAIL_POPUP(state) {
    return state.openSendEmailPopup;
  },
  OPEN_SEND_APPROVAL_POPUP: function OPEN_SEND_APPROVAL_POPUP(state) {
    return state.openSendApprovalPopup;
  },
  OPEN_RULES: function OPEN_RULES(state) {
    return state.openRules;
  },
  OPEN_SUCCESS: function OPEN_SUCCESS(state) {
    return state.openSuccess;
  },
  OPEN_EVENT_POPUP: function OPEN_EVENT_POPUP(state) {
    return state.openEventPopup;
  },
  OPEN_CHECKOUT_EVENT_POPUP: function OPEN_CHECKOUT_EVENT_POPUP(state) {
    return state.openCheckoutEventPopup;
  },
  OPEN_TEST_DRIVE_POPUP: function OPEN_TEST_DRIVE_POPUP(state) {
    return state.openTestDrivePopup;
  },
  GET_CHECK_CREDIT_API: function GET_CHECK_CREDIT_API(state) {
    return state.API.CHECK_CREDIT;
  },
  GET_CARS_ID_LINKS: function GET_CARS_ID_LINKS(state) {
    return state.carsIdLinks;
  }
});

/***/ }),

/***/ "./resources/js/vue/store-service/s-mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.esm.js");


/* harmony default export */ __webpack_exports__["a"] = ({
	SET_CAR_DATA: function SET_CAR_DATA(state, data) {
		Object.assign(state.car, data);
	},
	SET_SAVED_MODEL: function SET_SAVED_MODEL(state, data) {
		state.savedModel = data;
	},
	SET_YEAR: function SET_YEAR(state, data) {
		state.year = data;
	},
	SET_YEARS: function SET_YEARS(state, data) {
		state.years = data;
	},
	SET_ENGINE: function SET_ENGINE(state, data) {
		state.engine = data;
	},
	SET_ENGINES: function SET_ENGINES(state, data) {
		state.engines = data;
	},
	SET_V_ENGINE: function SET_V_ENGINE(state, data) {
		state.vEngine = data;
	},
	SET_V_ENGINES: function SET_V_ENGINES(state, data) {
		state.vEngines = data;
	},
	SET_MILEAGE: function SET_MILEAGE(state, data) {
		state.mileage = data;
	},
	SET_USER_PHONE: function SET_USER_PHONE(state, data) {
		state.user.phone = data;
	},
	SET_DEALER: function SET_DEALER(state, data) {
		state.dealer = data;
	},
	SET_CITY: function SET_CITY(state, data) {
		state.city = data;
	},
	SET_COST: function SET_COST(state, data) {
		state.cost = Object.assign({}, data);
	},
	SET_SERVICE_PARTS: function SET_SERVICE_PARTS(state, data) {
		state.serviceParts = data;
	},
	SET_DATA: function SET_DATA(state, data) {
		state.data = data;
	},
	SET_DATA_ENGINES: function SET_DATA_ENGINES(state, data) {
		state.dataEngines = data;
	},
	SET_DEALERS_DATA: function SET_DEALERS_DATA(state, data) {
		state.dealersData = data;
	},
	SET_DEALERS: function SET_DEALERS(state, data) {
		state.dealers = data;
	},
	SET_DEALERS_CITIES: function SET_DEALERS_CITIES(state, data) {
		state.dealersCities = data;
	},
	SET_SELECTED_EVENTS: function SET_SELECTED_EVENTS(state, data) {
		state.selectedEvents = data;
	},
	SET_SELECTED_EVENT: function SET_SELECTED_EVENT(state, data) {
		state.selectedEvent = data;
	},
	SET_START_CARCASE_LIST: function SET_START_CARCASE_LIST(state, data) {
		state.start.carcaseList = data;
	},
	SET_START_MODELS_LIST: function SET_START_MODELS_LIST(state, data) {
		state.start.modelsList = data;
	},
	SET_START_CURRENT_CAR: function SET_START_CURRENT_CAR(state, data) {
		state.start.currentCar = data;
	},
	SET_START_CURRENT_CAR_SPEC: function SET_START_CURRENT_CAR_SPEC(state, data) {
		state.start.currentCarSpec = data;
	},
	SET_START_ACTIVE_COLOR_OBJ: function SET_START_ACTIVE_COLOR_OBJ(state, data) {
		state.start.activeColorObj = data;
	},
	SET_START_COLORS_API: function SET_START_COLORS_API(state, data) {
		state.start.colorsAPI = data;
	},
	SET_START_SPRITESPIN: function SET_START_SPRITESPIN(state, data) {
		state.start.spritespin = data;
	},
	SET_START_ACTIVE_COLOR: function SET_START_ACTIVE_COLOR(state, data) {
		state.start.activeColor = data;
	},
	SET_START_PREV_COLOR: function SET_START_PREV_COLOR(state, data) {
		state.start.prevColor = data;
	},
	SET_START_MODIFICATION_LIST: function SET_START_MODIFICATION_LIST(state, data) {
		state.start.modificationList = data;
	},
	SET_START_MODIFICATION: function SET_START_MODIFICATION(state, data) {
		state.start.modification = data;
	},
	SET_START_DATA_MODIFICATION: function SET_START_DATA_MODIFICATION(state, data) {
		state.start.dataModifications = data;
	},
	SET_START_COMPLECTATION_LIST: function SET_START_COMPLECTATION_LIST(state, data) {
		state.start.complectationList = data;
	},
	SET_START_COMPLECTATION: function SET_START_COMPLECTATION(state, data) {
		state.start.complectation = data;
	},
	SET_START_DATA_COMPLECTATIONS: function SET_START_DATA_COMPLECTATIONS(state, data) {
		state.start.dataComplectations = data;
	},
	SET_START_PACKETS: function SET_START_PACKETS(state, data) {
		state.start.packets = data;
	},
	SET_START_SELECTED_PACKETS: function SET_START_SELECTED_PACKETS(state, data) {
		state.start.selectedPackets = data;
	},
	SET_START_SELECTED_PROGRAMS: function SET_START_SELECTED_PROGRAMS(state, data) {
		state.start.selectedPrograms = data;
	},
	SET_START_CURRENT_TERM: function SET_START_CURRENT_TERM(state, data) {
		state.start.currentTerm = data;
	},
	SET_START_INCLUDE_KASKO: function SET_START_INCLUDE_KASKO(state, data) {
		state.start.includeKASKO = data;
	},
	SET_START_COMPARE_SELECTED: function SET_START_COMPARE_SELECTED(state, data) {
		state.start.compareSelected = data;
	},
	SET_START_CREDIT_PACK: function SET_START_CREDIT_PACK(state, data) {
		Object.assign(state.start.creditPack, data);
	},
	SET_DEALER_CARS_CAR_ID: function SET_DEALER_CARS_CAR_ID(state, data) {
		state.dealerCars.carId = data;
	},
	SET_TRADEIN_STATE: function SET_TRADEIN_STATE(state, data) {
		Object.assign(state.tradein.state, data);
	},
	SET_TRADEIN_CURRENT_CAR: function SET_TRADEIN_CURRENT_CAR(state, data) {
		state.tradein.currentCar = data;
	},
	SET_TRADEIN_STEP2: function SET_TRADEIN_STEP2(state, data) {
		Object.assign(state.tradein.step2, data);
	},
	SET_TRADEIN_STEP3: function SET_TRADEIN_STEP3(state, data) {
		Object.assign(state.tradein.step3, data);
	},
	SET_TRADEIN_URL: function SET_TRADEIN_URL(state, data) {
		state.tradein.sendUrl = data;
	},
	OPEN_START_MOBILE_LINE: function OPEN_START_MOBILE_LINE(state, data) {
		state.start.openMobileLine = data;
	},
	OPEN_FIND_DEALER: function OPEN_FIND_DEALER(state, data) {
		state.openFindDealerPopup = data;
	},
	OPEN_SEND_DEALER: function OPEN_SEND_DEALER(state, data) {
		state.openSendDealerPopup = data;
	},
	OPEN_OFFER_CREDIT: function OPEN_OFFER_CREDIT(state, data) {
		state.openOfferCreditPopup = data;
	},
	OPEN_BACK_CALL: function OPEN_BACK_CALL(state, data) {
		state.openBackCallPopup = data;
	},
	OPEN_SEND_EMAIL_POPUP: function OPEN_SEND_EMAIL_POPUP(state, data) {
		state.openSendEmailPopup = data;
	},
	OPEN_SEND_APPROVAL_POPUP: function OPEN_SEND_APPROVAL_POPUP(state, data) {
		state.openSendApprovalPopup = data;
	},
	OPEN_RULES: function OPEN_RULES(state, data) {
		state.openRules = data;
	},
	OPEN_SUCCESS: function OPEN_SUCCESS(state, data) {
		state.openSuccess = data;
	},
	OPEN_EVENT_POPUP: function OPEN_EVENT_POPUP(state, data) {
		state.openEventPopup = data;
	},
	OPEN_CHECKOUT_EVENT_POPUP: function OPEN_CHECKOUT_EVENT_POPUP(state, data) {
		state.openCheckoutEventPopup = data;
	},
	OPEN_TEST_DRIVE_POPUP: function OPEN_TEST_DRIVE_POPUP(state, data) {
		state.openTestDrivePopup = data;
	}
});

/***/ }),

/***/ "./resources/js/vue/store-service/s-state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var domian = 'https://api.cofigurator.hyundai.ru/';
var domian1 = 'https://www.hyundai.ru/';

/* harmony default export */ __webpack_exports__["a"] = ({
	openFindDealerPopup: false,
	openSendDealerPopup: false,
	openOfferCreditPopup: false,
	openBackCallPopup: false,
	openEventPopup: false,
	openCheckoutEventPopup: false,
	openTestDrivePopup: false,
	openSendEmailPopup: false,
	openSendApprovalPopup: false,
	openRules: false,
	openSuccess: false,
	API: {
		CAR: domian + 'car/',
		CAR_LIST: domian + 'carList',
		CAR_LIST2: '/api/carList', //Для дропдаунов со списком авто
		CAR_LIST3: '/ajax/new/getServiceJSON', //Для дропдаунов со списком авто в Калькуляторе ТО
		CAR_MODIFICATIONS: domian + 'car/modifications/',
		CAR_COMPLECTATIONS: domian + 'car/complectations/',
		DEALERS_LIST: '/requestapi/getDealers?notest=1',
		GET_DEALERS_CREDIT: domian + 'dealersCredit', //Также это св-во есть в state конфигуратора
		ENGINES_LIST: '/ajax/new/getServiceJSON',
		TO_CALC_COST: '/ajax/new/calculator', //Расчёт стоимости в калькуляторе ТО
		START_CALC_COST: domian + 'credit/startNew/', //Расчёт стоимости в калькуляторе Start
		CHECK_VIN: '/api/service/checkVin', //Проверка VIN на странице гарантии

		//Формы
		CONTACT_FORM: '/api/send/servicerequest', //Отправка формы на странице калькулятора ТО
		OFFER_CREDIT_FORM: '/api/send/offercreditrequest', //Отправка формы на странице спецпредложений
		START_CONTACT_FORM: '/api/send/start', //Отправка на почту формы на странице Старт
		SERVICE_FORM: '/api/send/servicerequest', //Записть на сервис
		TD_FORM: '/api/send/testdrive', //Записть на ТД
		CONTACT_US_FORM: '/api/send/contactus', //Форма на странице Обратная связь
		MOTORSTUDIO_CHECKOUT_FORM: '/api/send/motorstudio_request', //Форма записи на мероприятие Моторстудия
		VACANCY_FORM: '/api/send/jobseeker', //Форма на странице вакансии
		VACANCY_XMMP_FORM: '/api/send/jobseeker_xmmp', //Форма на странице вакансии
		NEW_EVENT_MOTORSTUDION_FORM: '/api/send/eventRequest', //Форма на странице вакансии
		CHECK_CREDIT: '/api/checkEcredit/' //Показывать ли кнопку Предодобрение кредита на дилерской сборке
	},
	car: { //Данные используются везде
		code: "",
		id: 0,
		image: "",
		link: "",
		name: ""
	},
	savedModel: "", //Устанавливается на странице подели при открытии попапа записи на ТД, т.к. данные с тачкоми подгружаются после открытия попапа
	year: '',
	engine: '',
	vEngine: '',
	mileage: 15,
	user: {
		phone: ''
	},
	years: {},
	engines: {},
	vEngines: [],
	city: '',
	dealer: '',
	cost: {
		works: 0,
		parts: 0,
		partsPl2: 0,
		total: 0
	},
	serviceParts: 'parts',
	data: [],
	dataEngines: [],
	dealersData: [],
	dealers: [],
	dealersCities: [],
	selectedEvents: [],
	selectedEvent: 0,
	carsIdLinks: [{
		id: 22,
		link: 'Creta'
	}, {
		id: 26,
		link: 'NewTucson'
	}, {
		id: 25,
		link: 'NewSantaFe'
	}, {
		id: 23,
		link: 'Solaris'
	}, {
		id: 27,
		link: 'NewElantra'
	}, {
		id: 24,
		link: 'Sonata'
	}, {
		id: 16,
		link: 'H-1'
	}, {
		id: 29,
		link: 'NewSonata'
	}, {
		id: 28,
		link: 'i30N'
	}],
	//Start
	start: {
		carcaseList: [],
		modelsList: [],
		currentCar: {
			name: '',
			id: 0
		},
		currentCarSpec: {
			name: ''
		},
		modificationList: {},
		modification: {
			name: ''
		},
		dataModifications: {},
		complectationList: {},
		complectation: {
			name: '',
			price: 0
		},
		dataComplectations: {},
		packets: {},
		selectedPackets: [],
		activeColorObj: {
			nameRus: '',
			cost: '',
			carImage: ''
		},
		activeColor: 0,
		colorsAPI: {},
		prevColor: 0,
		spritespin: {},
		selectedPrograms: [],
		currentTerm: 36,
		includeKASKO: false,
		compareSelected: '',
		creditPack: {
			pay: 0,
			prepay: 0,
			prepayRub: 0,
			sum: 0,
			addCost: 0,
			lastPay: 0
		},
		openMobileLine: false
	},
	//DealerCars
	dealerCars: {
		carId: 0
	},
	//Trade In
	tradein: {
		currentCar: null,
		sendUrl: '',
		state: {
			step1: false,
			step2: false,
			step3: false
		},
		step2: {
			brand: '',
			model: '',
			age: '',
			year: '',
			complectation: '',
			body: '',
			condition: '',
			milleage: undefined,
			vin: ''
		},
		step3: {
			name: '',
			surname: '',
			patronymic: '',
			tel: '',
			email: '',
			city: ''
		}
	}
});

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/js/pages/cars/solaris-2020/solaris.js");


/***/ })

/******/ });