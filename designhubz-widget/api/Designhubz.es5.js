/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var CustomError = /** @class */ (function () {
    function CustomError(error) {
        var errorObject;
        if (error === undefined || typeof error === 'string')
            errorObject = new Error(error);
        else
            errorObject = error;
        Object.assign(this, errorObject);
    }
    return CustomError;
}());
var Errors;
(function (Errors) {
    var NotFoundError = /** @class */ (function (_super) {
        __extends(NotFoundError, _super);
        function NotFoundError() {
            return _super.call(this, 'NotFoundError') || this;
        }
        return NotFoundError;
    }(CustomError));
    Errors.NotFoundError = NotFoundError;
    var AuthenticationError = /** @class */ (function (_super) {
        __extends(AuthenticationError, _super);
        function AuthenticationError() {
            return _super.call(this, 'AuthenticationError') || this;
        }
        return AuthenticationError;
    }(CustomError));
    Errors.AuthenticationError = AuthenticationError;
})(Errors || (Errors = {}));

var widget;
var editor;
function SetWidgetSource(value) {
    widget = value;
}
function SetViewerSource(value) {
    SetWidgetSource(value);
}
function SetEditorSource(value) {
    editor = value;
    SetViewerSource(value);
}

var searchParams = (new URL(window.location.href)).searchParams;
var local = Boolean(searchParams.get('local'));
var s3 = 'https://designhubz-viewer-data.s3-eu-west-1.amazonaws.com/';
var rootUrl = local ? './storage.ignore/' : s3;
var localFlag = local ? '?local=1' : '';
var apps = {
    viewer: (local ? local + ':2020/example/viewer.html' : 'https://dg0iszzfyf3bz.cloudfront.net/') + localFlag,
    editor: (local ? local + ':2020/example/editor.html' : s3 + 'apps/viewer/editor.html') + localFlag,
    eyewear: (local ? local + ':3000/' : s3 + 'apps/eyewear/index.html') + localFlag
};
var blobToBuffer = function (blob) { return new Response(blob).arrayBuffer(); };
var fetchJSON = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url, { method: 'GET' })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.ok ? response.json() : undefined];
        }
    });
}); };
// #endregion
// https://designhubz-viewer-data.s3-eu-west-1.amazonaws.com/user/workspace/eyewear/glass1/scene.json
var folder = {
    w: function (workspaceKey) { return rootUrl + "user/workspace/" + workspaceKey + "/"; },
    s: function (workspaceKey, productKey) { return folder.w(workspaceKey) + "scene/" + productKey + "/"; },
    f: function (publicFolderUrl) { return publicFolderUrl.slice(rootUrl.length); },
    p: function (workspaceKey) { return rootUrl + "user/workspace/" + workspaceKey + "/productData/"; },
    d: function (workspaceKey) { return rootUrl + "user/workspace/" + workspaceKey + "/digitization/"; },
    a: function () { return rootUrl + "user/sessions/"; }
};
// #region mock server interface (./publish/example/remote/server.js)
var serverUrl = 'http://127.0.0.1:8082/';
function deleteAsync(path) {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = serverUrl + "?path=" + escape(path);
                    return [4 /*yield*/, fetch(url, { method: 'DELETE' })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function storeAsync(path, asset) {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = serverUrl + "?path=" + escape(path);
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            body: asset
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// #endregion
var WidgetData = /** @class */ (function () {
    function WidgetData() {
    }
    WidgetData.prototype.FetchClientConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        workspaces: {
                            '3D': 'eyewear',
                            'Eyewear': 'eyewear',
                            'Makeup': 'makeup'
                        }
                    }];
            });
        });
    };
    WidgetData.prototype.FetchProduct = function (workspaceId, referenceId, collectVariationDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var path, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = folder.p(workspaceId);
                        return [4 /*yield*/, fetchJSON(path + referenceId + '.json')];
                    case 1:
                        product = _a.sent();
                        if (product === undefined)
                            throw new Errors.NotFoundError();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    WidgetData.prototype.FetchSession = function (sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = folder.a();
                        return [4 /*yield*/, fetchJSON(path + sessionId + '.json')];
                    case 1:
                        session = _a.sent();
                        if (session === undefined)
                            throw new Errors.NotFoundError();
                        return [2 /*return*/, session];
                }
            });
        });
    };
    WidgetData.prototype.CreateSession = function (workspaceId, referenceId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var sessionId;
            return __generator(this, function (_a) {
                sessionId = workspaceId + "-" + referenceId + "-" + userId + "-" + Date.now();
                return [2 /*return*/, sessionId];
            });
        });
    };
    WidgetData.prototype.UpdateSession = function (sessionId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = folder.a();
                        return [4 /*yield*/, storeAsync(path + sessionId + '.json', JSON.stringify(data))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return WidgetData;
}());
var resolveUrls = function (publicFolderUrl, assetsUrls) {
    assetsUrls.forEach(function (v) { return v.url = "" + rootUrl + publicFolderUrl + v.name; });
};
var ViewerData = /** @class */ (function (_super) {
    __extends(ViewerData, _super);
    function ViewerData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewerData.prototype.FetchScene = function (workspaceId, referenceId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, scene, publicFolderUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = folder.s(workspaceId, referenceId);
                        return [4 /*yield*/, fetchJSON(path + 'scene.json')];
                    case 1:
                        scene = _a.sent();
                        if (scene === undefined)
                            throw new Errors.NotFoundError();
                        scene._assetsUrls = JSON.parse(JSON.stringify(scene.assetsUrls));
                        publicFolderUrl = folder.f(path);
                        resolveUrls(publicFolderUrl, scene.assetsUrls);
                        return [2 /*return*/, Object.assign({
                                publicFolderUrl: publicFolderUrl
                            }, scene)];
                }
            });
        });
    };
    ViewerData.prototype.FetchSkin = function (workspaceId) {
        return __awaiter(this, void 0, void 0, function () {
            var path, skin, publicFolderUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = folder.w(workspaceId);
                        return [4 /*yield*/, fetchJSON(path + 'skin.json')];
                    case 1:
                        skin = _a.sent();
                        if (skin === undefined)
                            throw new Errors.NotFoundError();
                        skin._assetsUrls = JSON.parse(JSON.stringify(skin.assetsUrls));
                        publicFolderUrl = folder.f(path);
                        resolveUrls(publicFolderUrl, skin.assetsUrls);
                        return [2 /*return*/, Object.assign({
                                publicFolderUrl: publicFolderUrl
                            }, skin)];
                }
            });
        });
    };
    return ViewerData;
}(WidgetData));
var MockData = /** @class */ (function (_super) {
    __extends(MockData, _super);
    function MockData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apps = apps;
        return _this;
    }
    MockData.prototype.CreateScene = function (workspaceId, referenceId, name, sceneData, files) {
        return __awaiter(this, void 0, void 0, function () {
            var path, assetsUrls, scene;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = folder.s(workspaceId, referenceId);
                        assetsUrls = [];
                        if (!(files !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(files.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            assetsUrls.push({
                                                name: file.name,
                                                url: file.name
                                            });
                                            _a = storeAsync;
                                            _b = [path + file.name];
                                            return [4 /*yield*/, blobToBuffer(file.content)];
                                        case 1: return [2 /*return*/, _a.apply(void 0, _b.concat([_c.sent()]))];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        scene = {
                            _assetsUrls: assetsUrls,
                            assetsUrls: assetsUrls,
                            createdAt: Date.now(),
                            isActive: false,
                            name: name,
                            sceneData: sceneData,
                            referenceId: referenceId,
                            workspaceId: workspaceId
                        };
                        return [4 /*yield*/, storeAsync(path + 'scene.json', JSON.stringify(scene))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.FetchScene(workspaceId, referenceId)];
                }
            });
        });
    };
    MockData.prototype.UpdateScene = function (workspaceId, referenceId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var scene, assetsUrls, path;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.FetchScene(workspaceId, referenceId)];
                    case 1:
                        scene = _a.sent();
                        if (update.name !== undefined)
                            scene.name = update.name;
                        if (update.sceneData !== undefined)
                            scene.sceneData = update.sceneData;
                        assetsUrls = scene._assetsUrls;
                        if (!(update.files !== undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Promise.all(update.files.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            assetsUrls.push({
                                                name: file.name,
                                                url: file.name
                                            });
                                            _a = storeAsync;
                                            _b = [path + file.name];
                                            return [4 /*yield*/, blobToBuffer(file.content)];
                                        case 1: return [2 /*return*/, _a.apply(void 0, _b.concat([_c.sent()]))];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(update.deleteFiles !== undefined)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Promise.all(update.deleteFiles.map(function (filename) {
                                var i = assetsUrls.findIndex(function (v) { return v.name === filename; });
                                if (i !== -1)
                                    assetsUrls.splice(i, 1);
                                return deleteAsync(path + filename);
                            }))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        scene.assetsUrls = assetsUrls;
                        path = folder.s(workspaceId, referenceId);
                        return [4 /*yield*/, storeAsync(path + 'scene.json', JSON.stringify(scene))];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, this.FetchScene(workspaceId, referenceId)];
                }
            });
        });
    };
    MockData.prototype.DeleteScene = function (workspaceId, referenceId) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.FetchScene(workspaceId, referenceId)];
                    case 1:
                        _a.sent();
                        path = folder.s(workspaceId, referenceId);
                        return [4 /*yield*/, deleteAsync(path + 'scene.json')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MockData.prototype.UploadSceneAssets = function (workspaceId, referenceId, files) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.UpdateScene(workspaceId, referenceId, { files: files })];
            });
        });
    };
    MockData.prototype.DeleteSceneAssets = function (workspaceId, referenceId, names) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.UpdateScene(workspaceId, referenceId, { deleteFiles: names })];
            });
        });
    };
    MockData.prototype.CreateSkin = function (workspaceId, skinData, files) {
        return __awaiter(this, void 0, void 0, function () {
            var path, assetsUrls, skin;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = folder.w(workspaceId);
                        assetsUrls = [];
                        if (!(files !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(files.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            assetsUrls.push({
                                                name: file.name,
                                                url: file.name
                                            });
                                            _a = storeAsync;
                                            _b = [path + file.name];
                                            return [4 /*yield*/, blobToBuffer(file.content)];
                                        case 1: return [2 /*return*/, _a.apply(void 0, _b.concat([_c.sent()]))];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        skin = {
                            _assetsUrls: assetsUrls,
                            assetsUrls: assetsUrls,
                            createdAt: Date.now(),
                            isActive: false,
                            skinData: skinData,
                            workspaceId: workspaceId
                        };
                        return [4 /*yield*/, storeAsync(path + 'skin.json', JSON.stringify(skin))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.FetchSkin(workspaceId)];
                }
            });
        });
    };
    MockData.prototype.DeleteSkin = function (workspaceId) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.FetchSkin(workspaceId)];
                    case 1:
                        _a.sent();
                        path = folder.w(workspaceId);
                        return [4 /*yield*/, deleteAsync(path + 'skin.json')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MockData.prototype.FetchDigitization = function (workspaceId, modelCode) {
        return __awaiter(this, void 0, void 0, function () {
            var path, digitization;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = folder.d(workspaceId);
                        return [4 /*yield*/, fetchJSON(path + modelCode + '.json')];
                    case 1:
                        digitization = _a.sent();
                        if (digitization === undefined)
                            throw new Errors.NotFoundError();
                        return [2 /*return*/, digitization];
                }
            });
        });
    };
    return MockData;
}(ViewerData));

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

if (!window.location)
    throw new Error('Expected access to window.location');
if (!('href' in window.location))
    throw new Error('Expected href in window.location');
SetEditorSource(new MockData());
/** enabled = ?designhubz_debug=bool */
var DEV_DEBUG_URL_PARAM = 'designhubz_debug';
var bool = function (p) { return p === '1' || p === 'true'; };
var searchParams$1 = (new URL(window.location.href)).searchParams;
if (bool(searchParams$1.get(DEV_DEBUG_URL_PARAM)))
    _dev.debug = true;

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
/** @class */ ((function () {
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
})());

console.log('@designhubz-widget/utils');

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

var DESIGNHUBZ_API_TYPE = 'designhubz-api';

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
            if (((_a = message.data) === null || _a === void 0 ? void 0 : _a.type) === DESIGNHUBZ_API_TYPE)
                _this.OnWidgetMessage(message.data);
        };
        this._variation = defaultVariation;
        this._iframe = Dom.BuildHTML("<iframe\n    style=\"width: 1px; min-width: 100%; *width: 100%; height: 1px; min-height: 100%; *height: 100%;\" \n    width=\"100%\" height=\"100%\" scrolling=\"no\" frameBorder=\"0\"\n</iframe>");
    }
    Object.defineProperty(_Widget.prototype, "variation", {
        get: function () { return this._variation; },
        enumerable: false,
        configurable: true
    });
    _Widget.prototype.loadVariation = function (variation, progressHandler) {
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
                        return [2 /*return*/, new Snapshot(imageData)];
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
                    _dev.Log("No listeners on '" + event + "'", data.value);
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
                        type: DESIGNHUBZ_API_TYPE,
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

var _3DWidget = /** @class */ (function (_super) {
    __extends(_3DWidget, _super);
    function _3DWidget(defaultVariation, domElement, src) {
        var _this = _super.call(this, defaultVariation, domElement) || this;
        _this._3D = true;
        _this._iframe.src = src !== null && src !== void 0 ? src : editor.apps.viewer + "?workspaceId=" + defaultVariation.workspaceKey + "&referenceId=" + defaultVariation.productKey;
        _this.Attach();
        return _this;
    }
    return _3DWidget;
}(_Widget));

var _3DProduct = /** @class */ (function (_super) {
    __extends(_3DProduct, _super);
    function _3DProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._3D = true;
        _this.is3D = function () { return true; };
        return _this;
    }
    _3DProduct.prototype.create3DWidget = function (domElement, progressHandler) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = new _3DWidget(this, domElement);
                        return [4 /*yield*/, widget.waitForInit];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return _3DProduct;
}(_Product));

var _EyewearWidget = /** @class */ (function (_super) {
    __extends(_EyewearWidget, _super);
    function _EyewearWidget(defaultVariation, domElement) {
        var _this = _super.call(this, defaultVariation, domElement) || this;
        _this._eyewear = true;
        _this.onTrackingStatusChange = new Signal();
        _this._iframe.setAttribute('allow', 'camera;microphone');
        _this._iframe.src = editor.apps.viewer + "?workspaceId=" + defaultVariation.workspaceKey + "&referenceId=" + defaultVariation.productKey;
        console.log(_this._iframe.src);
        _this.Attach();
        return _this;
    }
    Object.defineProperty(_EyewearWidget.prototype, "fit", {
        get: function () { return true; },
        enumerable: false,
        configurable: true
    });
    return _EyewearWidget;
}(_Widget));

var _EyewearProduct = /** @class */ (function (_super) {
    __extends(_EyewearProduct, _super);
    function _EyewearProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eyewear = true;
        _this._3D = true;
        _this.isEyewear = function () { return true; };
        return _this;
    }
    _EyewearProduct.prototype.create3DWidget = function (domElement, progressHandler) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = new _3DWidget(this, domElement);
                        return [4 /*yield*/, widget.waitForInit];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _EyewearProduct.prototype.createEyewearWidget = function (domElement, progressHandler) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = new _EyewearWidget(this, domElement);
                        return [4 /*yield*/, widget.waitForInit];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _EyewearProduct.prototype.createMultiWidget = function (domElement, progressHandler) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    return _EyewearProduct;
}(_3DProduct));

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
            product = new (_3DProduct.bind.apply(_3DProduct, __spreadArrays([void 0], productArgs)))();
            break;
        case 'Eyewear':
            product = new (_EyewearProduct.bind.apply(_EyewearProduct, __spreadArrays([void 0], productArgs)))();
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

var configAsync = new Promise(function (resolve, reject) {
    resolve({
        workspaces: {
            '3D': 'eyewear',
            'Eyewear': 'eyewear',
            'Makeup': 'makeup'
        }
    });
});

var version = '0.0.7';
var dev = _dev;
function fetchProduct(workspaceKey, productKey, props) {
    return __awaiter(this, void 0, void 0, function () {
        var product, productData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof workspaceKey !== 'string' || typeof productKey !== 'string')
                        throw new RangeError("Invalid arguments: fetchProduct(" + workspaceKey + ": string, " + productKey + ": string)");
                    product = ProductFromCache(workspaceKey, productKey);
                    if (!(product === undefined)) return [3 /*break*/, 2];
                    _dev.Log('#(bold,#f00)', 'fetching product:', '#()', "(" + workspaceKey + ", " + productKey + ")");
                    return [4 /*yield*/, widget.FetchProduct(workspaceKey, productKey, true)];
                case 1:
                    productData = _a.sent();
                    product = ProductFromData({
                        workspaceKey: workspaceKey,
                        productKey: productKey,
                        name: productData.name,
                        productType: 'Eyewear',
                        properties: Object.assign({}, productData.originalProperties),
                        variations: productData.variations.map(function (v) {
                            return {
                                productKey: v.referenceId,
                                name: v.name,
                                properties: Object.assign({}, v.originalProperties)
                            };
                        })
                    }, props);
                    return [3 /*break*/, 3];
                case 2:
                    _dev.Log('#(bold,#f88)', '(cache) fetching product:', '#()', "(" + workspaceKey + " | " + productKey + ")");
                    _a.label = 3;
                case 3: return [2 /*return*/, product];
            }
        });
    });
}
function fetchProducts(workspaceKey, productKeys, props) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (typeof workspaceKey !== 'string' || (productKeys instanceof Array) === false || productKeys.length === 0 || typeof productKeys[0] !== 'string')
                throw new RangeError("Invalid arguments: fetchProducts(" + workspaceKey + ": string, " + productKeys.join(', ') + ": string[])");
            _dev.Log('#(bold,#000)', 'fetching products:', '#()', "(" + workspaceKey + ", [" + productKeys.join(', ') + "])");
            console.warn('fetchProducts: Not implemented');
            return [2 /*return*/, (void 0)];
        });
    });
}
function fetchEyewearProduct(productKey, props) {
    return __awaiter(this, void 0, void 0, function () {
        var workspaceKey, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof productKey !== 'string')
                        throw new RangeError("Invalid arguments: fetchEyewearProduct(" + productKey + ": string)");
                    return [4 /*yield*/, configAsync];
                case 1:
                    workspaceKey = (_a.sent()).workspaces.Eyewear;
                    return [4 /*yield*/, fetchProduct(workspaceKey, productKey, props)];
                case 2:
                    product = _a.sent();
                    if (product.isEyewear())
                        return [2 /*return*/, product];
                    else
                        throw new Error(productKey + " is not of 'Eyewear' type.");
            }
        });
    });
}
function fetchMakeupProduct(productKey, props) {
    return __awaiter(this, void 0, void 0, function () {
        var workspaceKey, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof productKey !== 'string')
                        throw new RangeError("Invalid arguments: fetchMakeupProduct(" + productKey + ": string)");
                    return [4 /*yield*/, configAsync];
                case 1:
                    workspaceKey = (_a.sent()).workspaces.Makeup;
                    return [4 /*yield*/, fetchProduct(workspaceKey, productKey, props)];
                case 2:
                    product = _a.sent();
                    if (product.isMakeup())
                        return [2 /*return*/, product];
                    else
                        throw new Error(productKey + " is not of 'Makeup' type.");
            }
        });
    });
}

var _EditorWidget = /** @class */ (function (_super) {
    __extends(_EditorWidget, _super);
    function _EditorWidget(defaultVariation, domElement) {
        var _this = _super.call(this, defaultVariation, domElement, editor.apps.viewer + "?workspaceId=" + defaultVariation.workspaceKey + "&referenceId=" + defaultVariation.productKey) || this;
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
}(_3DWidget));

var Internal;
(function (Internal) {
    Internal.EditorWidget = _EditorWidget;
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

console.log('@designhubz-widget/lib');

export { Internal, dev, fetchEyewearProduct, fetchMakeupProduct, fetchProduct, fetchProducts, version };
//# sourceMappingURL=Designhubz.es5.js.map
