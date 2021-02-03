(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../packages/lib/package.json":
/*!***************************************!*\
  !*** ../../packages/lib/package.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@designhubz-widget/lib\",\"version\":\"0.1.0\",\"description\":\"(Implementation) API to load Designhubz XR widgets\",\"main\":\"src/index.ts\",\"scripts\":{\"build\":\"tsc\"},\"author\":\"Designhubz\",\"license\":\"UNLICENSED\",\"devDependencies\":{\"@types/node\":\"latest\",\"typescript\":\"latest\"},\"dependencies\":{\"@designhubz-widget/api\":\"file:../api\",\"@designhubz-widget/data\":\"file:../data\",\"@designhubz-widget/data-source\":\"file:../data-source\",\"@designhubz-widget/utils\":\"file:../utils\"},\"files\":[\"dist/**/*\"]}");

/***/ }),

/***/ "../../packages/data-source/src/MockData.ts":
/*!**************************************************!*\
  !*** ../../packages/data-source/src/MockData.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockData": function() { return /* binding */ MockData; }
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var PRODUCT_DATA = [];
var createProductData = function (workspaceKey, productKey) {
    var pd = PRODUCT_DATA.filter(function (d) { return d.productKey === productKey; })[0];
    if (pd === undefined) {
        pd = {
            workspaceKey: workspaceKey,
            productKey: productKey,
            productType: 'Eyewear',
            properties: { colorCode: productKey, sizeCode: productKey, thumbnailURL: productKey },
            variations: PRODUCT_DATA
        };
        PRODUCT_DATA.push(pd);
    }
    return pd;
};
var SCENE_DATA = {
    descriptorURL: 'descriptors/scene.json'
};
var SKIN_DATA = {
    descriptorURL: 'descriptors/skin.json'
};
var responseTime = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 250); })];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var MockData = /** @class */ (function () {
    function MockData() {
    }
    MockData.prototype.GetSkinResponse = function (workspaceKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, responseTime()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                status: 'success',
                                data: [{
                                        publicFolderUrl: 'skins/',
                                        workspaceId: workspaceKey,
                                        skinData: SKIN_DATA
                                    }]
                            }];
                }
            });
        });
    };
    MockData.prototype.GetSceneResponse = function (workspaceKey, productKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, responseTime()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                status: 'success',
                                data: [{
                                        referenceId: productKey,
                                        workspaceId: workspaceKey,
                                        name: "Product(" + productKey + ")",
                                        publicFolderUrl: "https://" + workspaceKey + ".com",
                                        sceneData: SCENE_DATA
                                    }]
                            }];
                }
            });
        });
    };
    MockData.prototype.FetchProductResponse = function (workspaceKey, productKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, responseTime()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                status: 'success',
                                data: [{
                                        productData: createProductData(workspaceKey, productKey)
                                    }]
                            }];
                }
            });
        });
    };
    MockData.prototype.FetchProductsResponse = function (workspaceKey, productKeys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, responseTime()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                status: 'success',
                                data: productKeys.map(function (key) {
                                    return {
                                        productData: createProductData(workspaceKey, key)
                                    };
                                })
                            }];
                }
            });
        });
    };
    return MockData;
}());



/***/ }),

/***/ "../../packages/data-source/src/TempData.ts":
/*!**************************************************!*\
  !*** ../../packages/data-source/src/TempData.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempData": function() { return /* binding */ TempData; }
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fetchJSON = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url, { method: 'GET' })];
            case 1:
                response = _a.sent();
                if (response.ok)
                    return [2 /*return*/, response.json()];
                return [2 /*return*/];
        }
    });
}); };
// https://designhubz-viewer-data.s3-eu-west-1.amazonaws.com/user/workspace/eyewear/glass1/scene.json
var folder = {
    w: function (root, workspaceKey) { return root + "user/workspace/" + workspaceKey + "/"; },
    s: function (root, workspaceKey, productKey) { return folder.w(root, workspaceKey) + "scene/" + productKey + "/"; }
};
var TempData = /** @class */ (function () {
    function TempData(root) {
        this.root = root;
    }
    TempData.prototype.Resolve = function (url) {
        return this.root + url;
    };
    TempData.prototype.GetSkinResponse = function (workspaceKey) {
        return __awaiter(this, void 0, void 0, function () {
            var dirURL, data, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dirURL = folder.w(this.root, workspaceKey);
                        return [4 /*yield*/, fetchJSON(dirURL + 'skin.json')];
                    case 1:
                        data = _a.sent();
                        if (data !== undefined)
                            data.publicFolderUrl = dirURL;
                        response = {
                            status: data !== undefined ? 'success' : 'error',
                            data: [data]
                        };
                        return [2 /*return*/, response];
                }
            });
        });
    };
    TempData.prototype.GetSceneResponse = function (workspaceKey, productKey) {
        return __awaiter(this, void 0, void 0, function () {
            var dirURL, data, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dirURL = folder.s(this.root, workspaceKey, productKey);
                        return [4 /*yield*/, fetchJSON(dirURL + 'scene.json')];
                    case 1:
                        data = _a.sent();
                        if (data !== undefined)
                            data.publicFolderUrl = dirURL;
                        response = {
                            status: data !== undefined ? 'success' : 'error',
                            data: [data]
                        };
                        return [2 /*return*/, response];
                }
            });
        });
    };
    TempData.prototype.FetchProductResponse = function (workspaceKey, productKey, collectVariationDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var sceneEntry, scene, data, productData, _a, response;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.GetSceneResponse(workspaceKey, productKey)];
                    case 1:
                        sceneEntry = _b.sent();
                        if (sceneEntry.status !== 'success' || sceneEntry.data[0] === undefined)
                            throw new Error("Error FetchProductResponse(" + workspaceKey + ", " + productKey + ")");
                        scene = sceneEntry.data[0];
                        data = {
                            productData: scene.sceneData.productData
                        };
                        productData = data.productData;
                        if (productData.variations === undefined)
                            productData.variations = [];
                        if (!collectVariationDetails) return [3 /*break*/, 3];
                        if (!(productData.variations.length > 0 && typeof productData.variations[0] === 'string')) return [3 /*break*/, 3];
                        _a = productData;
                        return [4 /*yield*/, Promise.all(productData.variations.map(function (v) { return __awaiter(_this, void 0, void 0, function () {
                                var vResponse;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.FetchProductResponse(workspaceKey, v, false)];
                                        case 1:
                                            vResponse = _a.sent();
                                            if (vResponse.status === 'success' && vResponse.data[0] !== undefined) {
                                                return [2 /*return*/, vResponse.data[0]];
                                            }
                                            else {
                                                return [2 /*return*/, v];
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.variations = _b.sent();
                        _b.label = 3;
                    case 3:
                        response = {
                            status: data !== undefined ? 'success' : 'error',
                            data: [data]
                        };
                        return [2 /*return*/, response];
                }
            });
        });
    };
    TempData.prototype.FetchProductsResponse = function (workspaceKey, productKeys, collectVariationDetails) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw 'FetchProductsResponse Not implemented';
            });
        });
    };
    return TempData;
}());



/***/ }),

/***/ "../../packages/data-source/src/ViewerData.ts":
/*!****************************************************!*\
  !*** ../../packages/data-source/src/ViewerData.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewerData": function() { return /* binding */ ViewerData; }
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ViewerData = /** @class */ (function () {
    function ViewerData() {
    }
    ViewerData.prototype.GetSkinResponse = function (workspaceKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw 'Not implemented';
            });
        });
    };
    ViewerData.prototype.GetSceneResponse = function (workspaceKey, productKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw 'Not implemented';
            });
        });
    };
    ViewerData.prototype.FetchProductResponse = function (workspaceKey, productKey, collectVariationDetails) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw 'Not implemented';
            });
        });
    };
    ViewerData.prototype.FetchProductsResponse = function (workspaceKey, productKeys, collectVariationDetails) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw 'Not implemented';
            });
        });
    };
    return ViewerData;
}());



/***/ }),

/***/ "../../packages/data-source/src/index.ts":
/*!***********************************************!*\
  !*** ../../packages/data-source/src/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockData": function() { return /* reexport safe */ _MockData__WEBPACK_IMPORTED_MODULE_0__.MockData; },
/* harmony export */   "ViewerData": function() { return /* reexport safe */ _ViewerData__WEBPACK_IMPORTED_MODULE_1__.ViewerData; },
/* harmony export */   "TempData": function() { return /* reexport safe */ _TempData__WEBPACK_IMPORTED_MODULE_2__.TempData; }
/* harmony export */ });
/* harmony import */ var _MockData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MockData */ "../../packages/data-source/src/MockData.ts");
/* harmony import */ var _ViewerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewerData */ "../../packages/data-source/src/ViewerData.ts");
/* harmony import */ var _TempData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TempData */ "../../packages/data-source/src/TempData.ts");





/***/ }),

/***/ "../../packages/data/src/DataSource.ts":
/*!*********************************************!*\
  !*** ../../packages/data/src/DataSource.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../packages/data/src/index.ts":
/*!****************************************!*\
  !*** ../../packages/data/src/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": function() { return /* binding */ Data; }
/* harmony export */ });
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataSource */ "../../packages/data/src/DataSource.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log('@designhubz-widget/data');

var Data;
(function (Data) {
    Data.apps = {
        viewer: '',
        eyewear: '',
        editor: ''
    };
    function GetScene(workspaceKey, productKey) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Data.source.GetSceneResponse(workspaceKey, productKey)];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 'success' || typeof response.data[0] !== 'object')
                            throw new Error("Error: GetScene(" + workspaceKey + ": string, " + productKey + ": string)");
                        return [2 /*return*/, {
                                name: response.data[0].name,
                                publicFolderUrl: response.data[0].publicFolderUrl,
                                sceneData: response.data[0].sceneData
                            }];
                }
            });
        });
    }
    Data.GetScene = GetScene;
    function GetSkin(workspaceKey) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Data.source.GetSkinResponse(workspaceKey)];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 'success' || typeof response.data[0] !== 'object')
                            throw new Error("Error: GetSkin(" + workspaceKey + ": string)");
                        return [2 /*return*/, {
                                publicFolderUrl: response.data[0].publicFolderUrl,
                                skinData: response.data[0].skinData
                            }];
                }
            });
        });
    }
    Data.GetSkin = GetSkin;
    function FetchProduct(workspaceKey, productKey) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Data.source.FetchProductResponse(workspaceKey, productKey, true)];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 'success' || typeof response.data[0] !== 'object')
                            throw new Error("Error: GetProductData(" + workspaceKey + ": string, " + productKey + ": string)");
                        return [2 /*return*/, {
                                productData: response.data[0].productData
                            }];
                }
            });
        });
    }
    Data.FetchProduct = FetchProduct;
    function FetchProducts(workspaceKey, productKeys) {
        return __awaiter(this, void 0, void 0, function () {
            var response, map;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Data.source.FetchProductsResponse(workspaceKey, productKeys, true)];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 'success' || typeof response.data[0] !== 'object')
                            throw new Error("Error: GetProductData(" + workspaceKey + ": string, [" + productKeys.join(',') + "]: string[])");
                        map = {};
                        response.data.forEach(function (item) { return map[item.productData.productKey] = item; });
                        return [2 /*return*/, map];
                }
            });
        });
    }
    Data.FetchProducts = FetchProducts;
})(Data || (Data = {}));


/***/ }),

/***/ "../../packages/lib/src/_API.ts":
/*!**************************************!*\
  !*** ../../packages/lib/src/_API.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; },
/* harmony export */   "dev": function() { return /* binding */ dev; },
/* harmony export */   "fetchProduct": function() { return /* binding */ fetchProduct; },
/* harmony export */   "fetchProducts": function() { return /* binding */ fetchProducts; }
/* harmony export */ });
/* harmony import */ var _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @designhubz-widget/data */ "../../packages/data/src/index.ts");
/* harmony import */ var _products_Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/Factory */ "../../packages/lib/src/products/Factory.ts");
/* harmony import */ var _Dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Dev */ "../../packages/lib/src/_Dev.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var version = __webpack_require__(/*! ../package.json */ "../../packages/lib/package.json").version;
var dev = _Dev__WEBPACK_IMPORTED_MODULE_2__._dev;
function fetchProduct(workspaceKey, productKey, props) {
    return __awaiter(this, void 0, void 0, function () {
        var product, productData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof workspaceKey !== 'string' || typeof productKey !== 'string')
                        throw new RangeError("Invalid arguments: fetchProduct(" + workspaceKey + ": string, " + productKey + ": string)");
                    product = (0,_products_Factory__WEBPACK_IMPORTED_MODULE_1__.ProductFromCache)(workspaceKey, productKey);
                    if (!(product === undefined)) return [3 /*break*/, 2];
                    _Dev__WEBPACK_IMPORTED_MODULE_2__._dev.Log('#(bold,#f00)', 'fetching product:', '#()', "(" + workspaceKey + ", " + productKey + ")");
                    return [4 /*yield*/, _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__.Data.FetchProduct(workspaceKey, productKey)];
                case 1:
                    productData = (_a.sent()).productData;
                    product = (0,_products_Factory__WEBPACK_IMPORTED_MODULE_1__.ProductFromData)(productData, props);
                    return [3 /*break*/, 3];
                case 2:
                    _Dev__WEBPACK_IMPORTED_MODULE_2__._dev.Log('#(bold,#f88)', '(cache) fetching product:', '#()', "(" + workspaceKey + " | " + productKey + ")");
                    _a.label = 3;
                case 3: return [2 /*return*/, product];
            }
        });
    });
}
function fetchProducts(workspaceKey, productKeys, props) {
    return __awaiter(this, void 0, void 0, function () {
        var result, stats, productsToFetch, productsMap_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof workspaceKey !== 'string' || (productKeys instanceof Array) === false || productKeys.length === 0 || typeof productKeys[0] !== 'string')
                        throw new RangeError("Invalid arguments: fetchProducts(" + workspaceKey + ": string, " + productKeys.join(', ') + ": string[])");
                    _Dev__WEBPACK_IMPORTED_MODULE_2__._dev.Log('#(bold,#000)', 'fetching products:', '#()', "(" + workspaceKey + ", [" + productKeys.join(', ') + "])");
                    result = {};
                    stats = { cache: 0, fetch: 0, missing: productKeys.length };
                    productsToFetch = [];
                    productKeys.forEach(function (productKey) {
                        var product = (0,_products_Factory__WEBPACK_IMPORTED_MODULE_1__.ProductFromCache)(workspaceKey, productKey);
                        if (product === undefined) {
                            productsToFetch.push(productKey);
                        }
                        else {
                            stats.cache++;
                            stats.missing--;
                            result[productKey] = product;
                        }
                    });
                    if (!(productsToFetch.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__.Data.FetchProducts(workspaceKey, productsToFetch)];
                case 1:
                    productsMap_1 = (_a.sent());
                    productsToFetch.forEach(function (productKey) {
                        var product = productsMap_1[productKey];
                        if (product !== undefined) {
                            stats.fetch++;
                            stats.missing--;
                            result[productKey] = (0,_products_Factory__WEBPACK_IMPORTED_MODULE_1__.ProductFromData)(product.productData, props);
                        }
                    });
                    _a.label = 2;
                case 2:
                    _Dev__WEBPACK_IMPORTED_MODULE_2__._dev.Log('#(,#f88)', stats.cache + " from cache", ' | ', stats.fetch > 0 ? '#(bold,#f00)' : '#(bold)', stats.fetch + " fetched", ' | ', stats.missing > 0 ? '#(#fff,#f00)' : '#(bold)', stats.missing + " missing");
                    return [2 /*return*/, result];
            }
        });
    });
}


/***/ }),

/***/ "../../packages/lib/src/_Data.ts":
/*!***************************************!*\
  !*** ../../packages/lib/src/_Data.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @designhubz-widget/data */ "../../packages/data/src/index.ts");
/* harmony import */ var _designhubz_widget_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @designhubz-widget/data-source */ "../../packages/data-source/src/index.ts");


var searchParams = (new URL(location.href)).searchParams;
var local = Boolean(searchParams.get('local')) ? 'https://localhost' : false;
var s3 = 'https://designhubz-viewer-data.s3-eu-west-1.amazonaws.com/';
var localFlag = local ? '?local=1' : '';
_designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__.Data.apps.viewer = (local ? local + ':2020/example/viewer.html' : s3 + 'apps/viewer/index.html') + localFlag;
_designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__.Data.apps.editor = (local ? local + ':2020/example/editor.html' : s3 + 'apps/viewer/editor.html') + localFlag;
_designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__.Data.apps.eyewear = (local ? local + ':3000/' : s3 + 'apps/eyewear/index.html') + localFlag;
_designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__.Data.source = new _designhubz_widget_data_source__WEBPACK_IMPORTED_MODULE_1__.TempData(local ? local + ':2020/example/storage.ignore/' : s3);


/***/ }),

/***/ "../../packages/lib/src/_Dev.ts":
/*!**************************************!*\
  !*** ../../packages/lib/src/_Dev.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEV_DEBUG_URL_PARAM": function() { return /* binding */ DEV_DEBUG_URL_PARAM; },
/* harmony export */   "_dev": function() { return /* binding */ _dev; }
/* harmony export */ });
/* harmony import */ var _designhubz_widget_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @designhubz-widget/utils */ "../../packages/utils/src/index.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

/** enabled = ?designhubz_debug=bool */
var DEV_DEBUG_URL_PARAM = 'designhubz_debug';
var formatOptions = ['font-weight', 'color', 'background'];
var _dev = new (/** @class */ (function () {
    function _Dev() {
        this.debug = false;
    }
    _Dev.prototype.Log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.debug) {
            var formatting = [];
            var _loop_1 = function (i) {
                var arg = args[i];
                var text = args[i + 1];
                if (typeof arg === 'string' && typeof text === 'string' && arg.slice(0, 2) === '#(') {
                    var optionsArgs_1 = arg.slice(2, arg.length - 1).split(',');
                    var format = formatOptions.map(function (o, i) {
                        return typeof optionsArgs_1[i] === 'string' && optionsArgs_1[i].length > 0
                            ? o + ":" + optionsArgs_1[i] + ";"
                            : '';
                    }).join(' ');
                    args.splice(i, 1);
                    args[i] = "%c " + text + " ";
                    formatting.push(format);
                }
            };
            for (var i = 0; i < args.length - 1; i++) {
                _loop_1(i);
            }
            if (formatting.length > 0)
                console.log.apply(console, __spreadArrays([args.map(function (arg) { return arg.toString(); }).join('')], formatting));
            else
                console.log.apply(console, args);
        }
    };
    _Dev.prototype.CreateError = function (name, message) {
        this.Log("Created ERROR '" + name + "': '" + message + "'");
        var error = new Error(message);
        error.name = name;
        return error;
    };
    return _Dev;
}()));
var bool = function (p) { return p === '1' || p === 'true'; };
if (bool((0,_designhubz_widget_utils__WEBPACK_IMPORTED_MODULE_0__.GetUrlParam)(DEV_DEBUG_URL_PARAM)))
    _dev.debug = true;


/***/ }),

/***/ "../../packages/lib/src/index.ts":
/*!***************************************!*\
  !*** ../../packages/lib/src/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dev": function() { return /* reexport safe */ _API__WEBPACK_IMPORTED_MODULE_1__.dev; },
/* harmony export */   "fetchProduct": function() { return /* reexport safe */ _API__WEBPACK_IMPORTED_MODULE_1__.fetchProduct; },
/* harmony export */   "fetchProducts": function() { return /* reexport safe */ _API__WEBPACK_IMPORTED_MODULE_1__.fetchProducts; },
/* harmony export */   "version": function() { return /* reexport safe */ _API__WEBPACK_IMPORTED_MODULE_1__.version; },
/* harmony export */   "Internal": function() { return /* reexport safe */ _internal__WEBPACK_IMPORTED_MODULE_2__.Internal; }
/* harmony export */ });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Data */ "../../packages/lib/src/_Data.ts");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_API */ "../../packages/lib/src/_API.ts");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal */ "../../packages/lib/src/internal/index.ts");
console.log('@designhubz-widget/lib');





/***/ }),

/***/ "../../packages/lib/src/internal/_EditorWidget.ts":
/*!********************************************************!*\
  !*** ../../packages/lib/src/internal/_EditorWidget.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_EditorWidget": function() { return /* binding */ _EditorWidget; }
/* harmony export */ });
/* harmony import */ var _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @designhubz-widget/data */ "../../packages/data/src/index.ts");
/* harmony import */ var _widgets_3DWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/_3DWidget */ "../../packages/lib/src/widgets/_3DWidget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var _EditorWidget = /** @class */ (function (_super) {
    __extends(_EditorWidget, _super);
    function _EditorWidget(defaultVariation, domElement) {
        var _this = _super.call(this, defaultVariation, domElement, _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_0__.Data.apps.editor + "?workspaceId=" + defaultVariation.workspaceKey + "&referenceId=" + defaultVariation.productKey) || this;
        _this._editor = true;
        return _this;
    }
    _EditorWidget.prototype.debug = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.QueryAsync({
                            event: "Debug" /* Debug */,
                            value: null
                        })];
                    case 1:
                        query = _a.sent();
                        return [2 /*return*/, Boolean(query.value)];
                }
            });
        });
    };
    _EditorWidget.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.QueryAsync({
                            event: "Save" /* Save */,
                            value: null
                        })];
                    case 1:
                        query = _a.sent();
                        return [2 /*return*/, Boolean(query.value)];
                }
            });
        });
    };
    return _EditorWidget;
}(_widgets_3DWidget__WEBPACK_IMPORTED_MODULE_1__._3DWidget));



/***/ }),

/***/ "../../packages/lib/src/internal/index.ts":
/*!************************************************!*\
  !*** ../../packages/lib/src/internal/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Internal": function() { return /* binding */ Internal; }
/* harmony export */ });
/* harmony import */ var _EditorWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_EditorWidget */ "../../packages/lib/src/internal/_EditorWidget.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Internal;
(function (Internal) {
    Internal.EditorWidget = _EditorWidget__WEBPACK_IMPORTED_MODULE_0__._EditorWidget;
    function createEditorWidget(defaultVariation, domElement) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = new Internal.EditorWidget(defaultVariation, domElement);
                        return [4 /*yield*/, widget.waitForInit];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    Internal.createEditorWidget = createEditorWidget;
})(Internal || (Internal = {}));


/***/ }),

/***/ "../../packages/lib/src/products/Factory.ts":
/*!**************************************************!*\
  !*** ../../packages/lib/src/products/Factory.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFromCache": function() { return /* binding */ ProductFromCache; },
/* harmony export */   "ProductFromData": function() { return /* binding */ ProductFromData; }
/* harmony export */ });
/* harmony import */ var _3DProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_3DProduct */ "../../packages/lib/src/products/_3DProduct.ts");
/* harmony import */ var _EyewearProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_EyewearProduct */ "../../packages/lib/src/products/_EyewearProduct.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


var _productsCache = {};
function ProductFromCache(workspaceKey, productKey) {
    return _productsCache[workspaceKey + productKey];
}
var _variationsCache = {};
function VariationsFromCache(workspaceKey, productKey) {
    return _variationsCache[workspaceKey + productKey];
}
function ProductFromData(data, props) {
    var product = ProductFromCache(data.workspaceKey, data.productKey);
    if (product !== undefined)
        return product;
    var variations = VariationsFromCache(data.workspaceKey, data.productKey);
    if (variations === undefined) {
        variations = [];
        data.variations.forEach(function (variation) {
            var vData = variation;
            _variationsCache[vData.workspaceKey + vData.productKey] = variations;
        });
    }
    if (props !== undefined) {
        var missingProps = [];
        var _loop_1 = function (key) {
            var header = props[key];
            if (header in data.properties) {
                if (key in data.properties)
                    console.warn("Custom property accessor '" + key + "' will override existing property.");
                Object.defineProperty(data.properties, key, {
                    get: function () { return data.properties[header]; }
                });
            }
            else {
                missingProps.push(header);
            }
        };
        for (var key in props) {
            _loop_1(key);
        }
        if (missingProps.length > 0) {
            var plr = missingProps.length > 1;
            console.warn("Custom propert" + (plr ? 'ies' : 'y') + ": '" + missingProps.join("', '") + "' " + (plr ? 'are' : 'is') + " missing from '" + data.productKey + "'");
        }
    }
    var productArgs = [
        data.workspaceKey,
        data.productKey,
        data.properties,
        variations
    ];
    switch (data.productType) {
        case '3D':
            product = new (_3DProduct__WEBPACK_IMPORTED_MODULE_0__._3DProduct.bind.apply(_3DProduct__WEBPACK_IMPORTED_MODULE_0__._3DProduct, __spreadArrays([void 0], productArgs)))();
            break;
        case 'Eyewear':
            product = new (_EyewearProduct__WEBPACK_IMPORTED_MODULE_1__._EyewearProduct.bind.apply(_EyewearProduct__WEBPACK_IMPORTED_MODULE_1__._EyewearProduct, __spreadArrays([void 0], productArgs)))();
            break;
        case 'Makeup':
            throw 'Not implemented';
        default:
            throw 'Not implemented';
    }
    variations.push(product);
    _productsCache[data.workspaceKey + data.productKey] = product;
    return product;
}


/***/ }),

/***/ "../../packages/lib/src/products/_3DProduct.ts":
/*!*****************************************************!*\
  !*** ../../packages/lib/src/products/_3DProduct.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_3DProduct": function() { return /* binding */ _3DProduct; }
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Product */ "../../packages/lib/src/products/_Product.ts");
/* harmony import */ var _widgets_3DWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/_3DWidget */ "../../packages/lib/src/widgets/_3DWidget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var _3DProduct = /** @class */ (function (_super) {
    __extends(_3DProduct, _super);
    function _3DProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._3D = true;
        _this.is3D = function () { return true; };
        return _this;
    }
    _3DProduct.prototype.create3DWidget = function (domElement) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = new _widgets_3DWidget__WEBPACK_IMPORTED_MODULE_1__._3DWidget(this, domElement);
                        return [4 /*yield*/, widget.waitForInit];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return _3DProduct;
}(_Product__WEBPACK_IMPORTED_MODULE_0__._Product));



/***/ }),

/***/ "../../packages/lib/src/products/_EyewearProduct.ts":
/*!**********************************************************!*\
  !*** ../../packages/lib/src/products/_EyewearProduct.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_EyewearProduct": function() { return /* binding */ _EyewearProduct; }
/* harmony export */ });
/* harmony import */ var _3DProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_3DProduct */ "../../packages/lib/src/products/_3DProduct.ts");
/* harmony import */ var _widgets_3DWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/_3DWidget */ "../../packages/lib/src/widgets/_3DWidget.ts");
/* harmony import */ var _widgets_EyewearWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/_EyewearWidget */ "../../packages/lib/src/widgets/_EyewearWidget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var _EyewearProduct = /** @class */ (function (_super) {
    __extends(_EyewearProduct, _super);
    function _EyewearProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eyewear = true;
        _this._3D = true;
        _this.isEyewear = function () { return true; };
        return _this;
    }
    _EyewearProduct.prototype.create3DWidget = function (domElement) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = new _widgets_3DWidget__WEBPACK_IMPORTED_MODULE_1__._3DWidget(this, domElement);
                        return [4 /*yield*/, widget.waitForInit];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _EyewearProduct.prototype.createEyewearWidget = function (domElement) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = new _widgets_EyewearWidget__WEBPACK_IMPORTED_MODULE_2__._EyewearWidget(this, domElement);
                        return [4 /*yield*/, widget.waitForInit];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _EyewearProduct.prototype.createMultiWidget = function (domElement) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    return _EyewearProduct;
}(_3DProduct__WEBPACK_IMPORTED_MODULE_0__._3DProduct));



/***/ }),

/***/ "../../packages/lib/src/products/_Product.ts":
/*!***************************************************!*\
  !*** ../../packages/lib/src/products/_Product.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_Product": function() { return /* binding */ _Product; }
/* harmony export */ });
var _Product = /** @class */ (function () {
    function _Product(workspaceKey, productKey, properties, variations) {
        this.workspaceKey = workspaceKey;
        this.productKey = productKey;
        this.properties = properties;
        this.is3D = function () { return false; };
        this.isEyewear = function () { return false; };
        this.isMakeup = function () { return false; };
        this.variations = variations;
    }
    Object.defineProperty(_Product.prototype, "thumbnailURL", {
        get: function () { return ''; },
        enumerable: false,
        configurable: true
    });
    _Product.prototype.fetchRecommendations = function (num, external) {
        var recommendations = new Array(num);
        recommendations.map(function (_, i) {
            return {
                sku: i.toString(),
                score: i / num
            };
        });
        return new Promise(function (r) { return r(recommendations); });
    };
    return _Product;
}());



/***/ }),

/***/ "../../packages/lib/src/widgets/Messaging.ts":
/*!***************************************************!*\
  !*** ../../packages/lib/src/widgets/Messaging.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DESIGNHUBZ_API_TYPE": function() { return /* binding */ DESIGNHUBZ_API_TYPE; }
/* harmony export */ });
var DESIGNHUBZ_API_TYPE = 'designhubz-api';


/***/ }),

/***/ "../../packages/lib/src/widgets/Snapshot.ts":
/*!**************************************************!*\
  !*** ../../packages/lib/src/widgets/Snapshot.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Snapshot": function() { return /* binding */ Snapshot; }
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _canvas;
function DrawToCanvas(source, flip) {
    if (_canvas === undefined)
        _canvas = document.createElement('canvas');
    _canvas.width = source.width;
    _canvas.height = source.height;
    var context = _canvas.getContext('2d');
    context.resetTransform();
    if (flip) {
        context.translate(0, _canvas.height);
        context.scale(1, -1);
    }
    if (source instanceof ImageData)
        context.putImageData(source, 0, 0);
    else
        context.drawImage(source, 0, 0, source.width, source.height);
    return _canvas;
}
var Snapshot = /** @class */ (function () {
    function Snapshot(imageData) {
        this.imageData = imageData;
    }
    Snapshot.prototype.getDataURL = function (type, quality) {
        var canvas = DrawToCanvas(this.imageData, false);
        return canvas.toDataURL(type === 'jpeg' ? 'image/jpeg' : 'image/png', quality);
    };
    Snapshot.prototype.getBlobAsync = function (type, quality) {
        return __awaiter(this, void 0, void 0, function () {
            var canvas, blob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canvas = DrawToCanvas(this.imageData, false);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return canvas.toBlob(function (blob) {
                                    if (blob === null)
                                        reject('Failed to generate Blob');
                                    else
                                        resolve(blob);
                                }, type === 'jpeg' ? 'image/jpeg' : 'image/png', quality);
                            })];
                    case 1:
                        blob = _a.sent();
                        return [2 /*return*/, blob];
                }
            });
        });
    };
    return Snapshot;
}());



/***/ }),

/***/ "../../packages/lib/src/widgets/_3DWidget.ts":
/*!***************************************************!*\
  !*** ../../packages/lib/src/widgets/_3DWidget.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_3DWidget": function() { return /* binding */ _3DWidget; }
/* harmony export */ });
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Widget */ "../../packages/lib/src/widgets/_Widget.ts");
/* harmony import */ var _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @designhubz-widget/data */ "../../packages/data/src/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var _3DWidget = /** @class */ (function (_super) {
    __extends(_3DWidget, _super);
    function _3DWidget(defaultVariation, domElement, src) {
        var _this = _super.call(this, defaultVariation, domElement) || this;
        _this._3D = true;
        _this._iframe.src = src !== null && src !== void 0 ? src : _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_1__.Data.apps.viewer + "?workspaceId=" + defaultVariation.workspaceKey + "&referenceId=" + defaultVariation.productKey;
        _this.Attach();
        return _this;
    }
    return _3DWidget;
}(_Widget__WEBPACK_IMPORTED_MODULE_0__._Widget));



/***/ }),

/***/ "../../packages/lib/src/widgets/_EyewearWidget.ts":
/*!********************************************************!*\
  !*** ../../packages/lib/src/widgets/_EyewearWidget.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_EyewearWidget": function() { return /* binding */ _EyewearWidget; }
/* harmony export */ });
/* harmony import */ var _designhubz_widget_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @designhubz-widget/utils */ "../../packages/utils/src/index.ts");
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Widget */ "../../packages/lib/src/widgets/_Widget.ts");
/* harmony import */ var _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @designhubz-widget/data */ "../../packages/data/src/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var _EyewearWidget = /** @class */ (function (_super) {
    __extends(_EyewearWidget, _super);
    function _EyewearWidget(defaultVariation, domElement) {
        var _this = _super.call(this, defaultVariation, domElement) || this;
        _this._eyewear = true;
        _this.onTrackingStatusChange = new _designhubz_widget_utils__WEBPACK_IMPORTED_MODULE_0__.Signal();
        _this._iframe.setAttribute('allow', 'camera;microphone');
        _this._iframe.src = _designhubz_widget_data__WEBPACK_IMPORTED_MODULE_2__.Data.apps.viewer + "?workspaceId=" + defaultVariation.workspaceKey + "&referenceId=" + defaultVariation.productKey;
        _this.Attach();
        return _this;
    }
    Object.defineProperty(_EyewearWidget.prototype, "fit", {
        get: function () { return true; },
        enumerable: false,
        configurable: true
    });
    return _EyewearWidget;
}(_Widget__WEBPACK_IMPORTED_MODULE_1__._Widget));



/***/ }),

/***/ "../../packages/lib/src/widgets/_Widget.ts":
/*!*************************************************!*\
  !*** ../../packages/lib/src/widgets/_Widget.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_Widget": function() { return /* binding */ _Widget; }
/* harmony export */ });
/* harmony import */ var _designhubz_widget_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @designhubz-widget/utils */ "../../packages/utils/src/index.ts");
/* harmony import */ var _Dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Dev */ "../../packages/lib/src/_Dev.ts");
/* harmony import */ var _Snapshot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Snapshot */ "../../packages/lib/src/widgets/Snapshot.ts");
/* harmony import */ var _Messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messaging */ "../../packages/lib/src/widgets/Messaging.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var _Widget = /** @class */ (function () {
    function _Widget(defaultVariation, domElement) {
        var _this = this;
        this.domElement = domElement;
        this.waitForInit = new Promise(function (resolve) { return _this._waitForInit = resolve; });
        this._id = Math.floor(Math.random() * 1000) + '-';
        this._queriesCount = 0;
        this._pending = new Map();
        onmessage = function (message) {
            var _a;
            if (((_a = message.data) === null || _a === void 0 ? void 0 : _a.type) === _Messaging__WEBPACK_IMPORTED_MODULE_3__.DESIGNHUBZ_API_TYPE)
                _this.OnWidgetMessage(message.data);
        };
        this._variation = defaultVariation;
        this._iframe = _designhubz_widget_utils__WEBPACK_IMPORTED_MODULE_0__.Dom.BuildHTML("<iframe\n    style=\"width: 1px; min-width: 100%; *width: 100%; height: 1px; min-height: 100%; *height: 100%;\" \n    width=\"100%\" height=\"100%\" scrolling=\"no\" frameBorder=\"0\"\n</iframe>");
    }
    Object.defineProperty(_Widget.prototype, "variation", {
        get: function () { return this._variation; },
        enumerable: false,
        configurable: true
    });
    _Widget.prototype.loadVariation = function (variation) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._variation.variations.every(function (v) { return v.productKey !== variation.productKey; }))
                    throw new Error("Product '" + variation.productKey + "' is not a variation of " + this._variation.variations.map(function (v) { return v.productKey; }).join(', '));
                return [2 /*return*/];
            });
        });
    };
    _Widget.prototype.takeSnapshotAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, imageData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.QueryAsync({
                            event: "SnapshotRequest" /* SnapshotRequest */,
                            value: {
                                flip: false
                            }
                        })];
                    case 1:
                        query = _a.sent();
                        imageData = new ImageData(new Uint8ClampedArray(query.value.data.buffer), query.value.width, query.value.height);
                        return [2 /*return*/, new _Snapshot__WEBPACK_IMPORTED_MODULE_2__.Snapshot(imageData)];
                }
            });
        });
    };
    _Widget.prototype.sendStat = function (stat) {
        return Promise.resolve();
    };
    _Widget.prototype.disposeAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._iframe.parentElement !== null)
                    this._iframe.parentElement.removeChild(this._iframe);
                return [2 /*return*/];
            });
        });
    };
    _Widget.prototype.OnWidgetMessage = function (data) {
        var resolver = this._pending.get(data.id);
        if (resolver !== undefined) {
            resolver(data);
        }
        else {
            switch (data.event) {
                case "Init" /* Init */:
                    this._waitForInit(this);
                    break;
                default:
                    _Dev__WEBPACK_IMPORTED_MODULE_1__._dev.Log("No listeners on '" + event + "'", data.value);
                    break;
            }
        }
    };
    _Widget.prototype.QueryAsync = function (message, waitForReply) {
        if (waitForReply === void 0) { waitForReply = true; }
        return __awaiter(this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return __generator(this, function (_a) {
                if (this._iframe.contentWindow === null)
                    throw new Error("Can't query iframe's contentWindow.");
                if (('type' in message && 'id' in message) === false) {
                    message = Object.assign({
                        type: _Messaging__WEBPACK_IMPORTED_MODULE_3__.DESIGNHUBZ_API_TYPE,
                        id: this._id + (this._queriesCount++)
                    }, message);
                }
                promise = waitForReply
                    ? new Promise(function (r) { return _this._pending.set(message.id, r); })
                    : Promise.resolve(message);
                this._iframe.contentWindow.postMessage(message, '*');
                return [2 /*return*/, promise];
            });
        });
    };
    _Widget.prototype.Attach = function () {
        // what kind of dom events do I need to handle?
        this.domElement.appendChild(this._iframe);
    };
    return _Widget;
}());



/***/ }),

/***/ "../../packages/utils/src/Browser.ts":
/*!*******************************************!*\
  !*** ../../packages/utils/src/Browser.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetUrlParam": function() { return /* binding */ GetUrlParam; },
/* harmony export */   "Dom": function() { return /* binding */ Dom; }
/* harmony export */ });
function GetUrlParam(name, url) {
    if (url === void 0) { url = location.href; }
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var results = new RegExp("[\\?&]" + name + "=([^&#]*)").exec(url);
    return results ? results[1] || '1' : undefined;
}
var Dom;
(function (Dom) {
    function CreateStylesheet(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
    Dom.CreateStylesheet = CreateStylesheet;
    function BuildHTML(html) {
        var div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstChild;
    }
    Dom.BuildHTML = BuildHTML;
})(Dom || (Dom = {}));


/***/ }),

/***/ "../../packages/utils/src/Signals.ts":
/*!*******************************************!*\
  !*** ../../packages/utils/src/Signals.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Signal": function() { return /* binding */ Signal; }
/* harmony export */ });
var Signal = /** @class */ (function () {
    function Signal() {
        this.callbacks = [];
    }
    Signal.prototype.Add = function (callback) {
        if (typeof callback !== 'function') {
            console.warn('Not a function', callback);
            throw ("'callback' should be a function.");
        }
        this.callbacks.push(callback);
    };
    Signal.prototype.Remove = function (callback) {
        var index = this.callbacks.indexOf(callback);
        if (index !== -1)
            this.callbacks.splice(index, 1);
    };
    Signal.prototype.Dispatch = function (arg) {
        for (var i = 0; i < this.callbacks.length; i++)
            this.callbacks[i](arg);
    };
    Signal.prototype.Once = function (callback) {
        var _this = this;
        var once = function (arg) {
            _this.Remove(once);
            callback(arg);
        };
        this.Add(once);
    };
    return Signal;
}());

// Example
var Keyboard = /** @class */ (function () {
    function Keyboard() {
        this._onInput = new Signal();
    }
    Object.defineProperty(Keyboard.prototype, "Input", {
        get: function () { return this._onInput; },
        enumerable: false,
        configurable: true
    });
    Keyboard.prototype.Enter = function (text) {
        this._onInput.Dispatch(text);
    };
    Keyboard.Example = function () {
        var keyboard = new Keyboard();
        keyboard.Input.Add(function (key) { return console.log("keyboard.Input -> " + key); });
        keyboard.Enter('x');
    };
    return Keyboard;
}());


/***/ }),

/***/ "../../packages/utils/src/index.ts":
/*!*****************************************!*\
  !*** ../../packages/utils/src/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dom": function() { return /* reexport safe */ _Browser__WEBPACK_IMPORTED_MODULE_0__.Dom; },
/* harmony export */   "GetUrlParam": function() { return /* reexport safe */ _Browser__WEBPACK_IMPORTED_MODULE_0__.GetUrlParam; },
/* harmony export */   "Signal": function() { return /* reexport safe */ _Signals__WEBPACK_IMPORTED_MODULE_1__.Signal; }
/* harmony export */ });
/* harmony import */ var _Browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browser */ "../../packages/utils/src/Browser.ts");
/* harmony import */ var _Signals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signals */ "../../packages/utils/src/Signals.ts");
console.log('@designhubz-widget/utils');




/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Internal": function() { return /* reexport safe */ _designhubz_widget_lib__WEBPACK_IMPORTED_MODULE_0__.Internal; },
/* harmony export */   "dev": function() { return /* reexport safe */ _designhubz_widget_lib__WEBPACK_IMPORTED_MODULE_0__.dev; },
/* harmony export */   "fetchProduct": function() { return /* reexport safe */ _designhubz_widget_lib__WEBPACK_IMPORTED_MODULE_0__.fetchProduct; },
/* harmony export */   "fetchProducts": function() { return /* reexport safe */ _designhubz_widget_lib__WEBPACK_IMPORTED_MODULE_0__.fetchProducts; },
/* harmony export */   "version": function() { return /* reexport safe */ _designhubz_widget_lib__WEBPACK_IMPORTED_MODULE_0__.version; }
/* harmony export */ });
/* harmony import */ var _designhubz_widget_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @designhubz-widget/lib */ "../../packages/lib/src/index.ts");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});
//# sourceMappingURL=index.js.map