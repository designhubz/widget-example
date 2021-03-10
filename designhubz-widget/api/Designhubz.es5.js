class CustomError {
    constructor(error) {
        let errorObject;
        if (error === undefined || typeof error === 'string')
            errorObject = new Error(error);
        else
            errorObject = error;
        Object.assign(this, errorObject);
    }
}
var Errors;
(function (Errors) {
    class NotFoundError extends CustomError {
        constructor() {
            super('NotFoundError');
        }
    }
    Errors.NotFoundError = NotFoundError;
    class AuthenticationError extends CustomError {
        constructor() {
            super('AuthenticationError');
        }
    }
    Errors.AuthenticationError = AuthenticationError;
})(Errors || (Errors = {}));

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// Original source in @designhubz-widget
class Com {
    constructor(onError) {
        this._id = 0;
        this._pending = new Map();
        this._streams = new Map();
        this.waitForInit = new Promise(initResolver => {
            window.addEventListener('message', (ev) => __awaiter(this, void 0, void 0, function* () {
                if (ev.origin === window.location.origin)
                    return;
                const msg = ev.data;
                // Com.Log('.');
                // Com.Log(`'message'`, msg);
                // await new Promise( r => setTimeout(r, 2000) );
                if (this._origin === undefined && msg.__Designhubz && msg.__type === "init" /* Init */) {
                    if (typeof msg.__details !== 'string')
                        throw new Error('Com Init error: invalid origin');
                    this._origin = msg.__details;
                    const request = {
                        __type: "init" /* Init */,
                        __details: window.location.origin
                    };
                    this.SendMsg(request);
                    Com.Log('initialized and paired to ' + this._origin);
                    initResolver();
                }
                else if (ev.origin === this._origin) {
                    if (msg.__Designhubz)
                        yield this.ProcessMsgAsync(ev.data);
                }
            }));
        });
        if (onError !== undefined) {
            window.addEventListener('messageerror', ev => {
                if (this._origin === undefined || origin === this._origin)
                    onError(ev);
            });
        }
    }
    ProcessMsgAsync(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            // Com.Log(`'ProcessMsgAsync'`, JSON.parse(JSON.stringify(msg)));
            if (msg.__Designhubz !== true)
                throw new Error('Invalid msg: ' + msg.__type);
            const streamMsg = msg;
            if (typeof streamMsg.__streamId === 'string') {
                // Com.Log('Stream', streamMsg);
                const streamCallback = this._streams.get(streamMsg.__streamId);
                if (streamCallback !== undefined) {
                    if (streamMsg.__completed === true)
                        this._streams.delete(streamMsg.__streamId);
                    streamCallback(msg);
                    return true;
                }
            }
            const progressResponseMsg = msg;
            if (Com.IsProgressResponse(progressResponseMsg)) {
                // Com.Log('Response', progressResponseMsg);
                const progress = Com.GetProgress(progressResponseMsg.__details.id);
                progress.Update(progressResponseMsg.__details);
                return true;
            }
            const progressRequestMsg = msg;
            if (Com.IsProgressRequest(progressRequestMsg)) {
                // Com.Log('Request', progressRequestMsg);
                const progress = Com.GetProgress(progressRequestMsg.__details.id);
                const callback = (data) => {
                    if (data.id !== progressRequestMsg.__details.id)
                        throw new Error(`Progress routing error: callback id '${data.id}' != '${progressRequestMsg.__details.id}'`);
                    const response = {
                        __type: "Progress" /* Progress */,
                        __details: data
                    };
                    this.SendMsg(response);
                    if (data.completed === true && progressRequestMsg.__details.autoRemove === true) {
                        progress.RemoveCallback(callback);
                    }
                };
                progress.AddCallback(callback);
                if (progress.data.completed === true)
                    callback(progress.data);
            }
            const resolver = this._pending.get(msg.__id);
            if (resolver !== undefined) {
                this._pending.delete(msg.__id);
                resolver(msg);
                return true;
            }
            return false;
        });
    }
    SendMsg(msg, transfer) {
        if (transfer !== undefined)
            throw new Error('Had issues with Transferable ImageData: Impl. not tested');
        const message = Object.assign({
            __Designhubz: true,
            __id: this._id++
        }, msg);
        return message;
    }
    SendMsgAsync(msg, transfer) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(r => {
                const message = this.SendMsg(msg, transfer);
                this._pending.set(message.__id, r);
            });
        });
    }
    // protected async StartStreamAsync<T extends Com.IExternalMsg>(msg: Com.IExternalMsg, handler: (arg: T) => void, transfer?: Transferable[]): Promise<void>
    // {
    //     return new Promise( r => {
    //         const message = this.SendMsg(Object.assign({
    //             __completed: false,
    //             __streamId: 's:' + this._id
    //         }, msg), transfer) as Com.IStreamMsgData;
    //         this._streams.set(message.__streamId, handler);
    //         this._pending.set(message.__id, r);
    //     });
    // }
    // #region progress
    TrackProgress(id, onProgress, autoRemove = true) {
        const request = {
            __type: "Progress" /* Progress */,
            __details: {
                id,
                autoRemove
            }
        };
        const callback = data => {
            if (data.id !== id)
                throw new Error(`Progress routing error: received id '${data.id}' != '${id}'`);
            if (data.error !== undefined && typeof data.error !== 'string')
                console.warn('Invalid progress error', data);
            onProgress(data);
        };
        const progress = Com.GetProgress(id);
        progress.AddCallback(callback);
        this.SendMsg(request);
    }
    TrackProgressBundle(ratios, onProgress, autoRemove = true) {
        let ratiosSum = 0;
        const bundle = Object.keys(ratios).map(id => {
            ratiosSum += ratios[id];
            return {
                id,
                ratio: ratios[id],
                completed: false,
                progress: 0,
                error: undefined
            };
        });
        if (ratiosSum > 1 + Number.EPSILON)
            throw new RangeError('Progress bundle ratios over 1');
        const bundleData = {
            id: 'bundle',
            completed: false,
            progress: 0
        };
        const update = () => {
            bundleData.completed = true;
            bundleData.progress = 0;
            delete bundleData.error;
            for (let i = 0; i < bundle.length; i++) {
                const entry = bundle[i];
                bundleData.completed = bundleData.completed && entry.completed;
                bundleData.progress += entry.progress * entry.ratio;
                if (typeof entry.error === 'string')
                    bundleData.error = entry.error;
            }
            if (bundleData.progress < 0 || bundleData.progress > 1) {
                const bundleIds = bundle.map(e => e.id).join(', ');
                const bundleProgress = bundleData.progress.toString();
                throw new Error(`Bundle progress range error:\n[${bundleIds}] > ${bundleProgress}`);
            }
            onProgress(bundleData);
        };
        bundle.forEach(entry => {
            this.TrackProgress(entry.id, data => {
                entry.completed = data.completed;
                entry.progress = data.progress;
                if (typeof data.error === 'string')
                    entry.error = data.error;
                update();
            }, autoRemove);
        });
    }
    static GetProgress(id) {
        if (this._progress[id] === undefined) {
            const data = {
                id,
                completed: false,
                progress: 0
            };
            this._progress[id] = new Com.ProgressObject(data);
        }
        return this._progress[id];
    }
    static StartProgress(id) {
        const progress = this.GetProgress(id);
        const data = progress.data;
        data.completed = false;
        data.progress = 0;
        delete data.error;
        return this._progress[id];
    }
}
Com.source = 'Com';
Com._progress = {};
(function (Com) {
    function Log(...args) {
        args.unshift(`[${Com.source}]`);
        console.log(...args);
    }
    Com.Log = Log;
    function MockProgress(id, notifications, duration, injectErr) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadProgress = Com.StartProgress(id);
            let updates = 0;
            let iid = setInterval(() => {
                loadProgress.Update(updates === notifications, updates / notifications, injectErr === null || injectErr === void 0 ? void 0 : injectErr.error);
                if (updates === notifications)
                    clearInterval(iid);
                else
                    updates++;
            }, duration / notifications);
        });
    }
    Com.MockProgress = MockProgress;
    function IsProgressRequest(msg) {
        const m = msg;
        const d = m.__details;
        if (m.__type === "Progress" /* Progress */ && d && typeof d.id === 'string')
            return true;
        return false;
    }
    Com.IsProgressRequest = IsProgressRequest;
    function IsProgressResponse(msg) {
        const m = msg;
        const d = m.__details;
        if (m.__type === "Progress" /* Progress */ && d
            && typeof d.id === 'string'
            && typeof d.progress === 'number'
            && typeof d.completed === 'boolean')
            return true;
        return false;
    }
    Com.IsProgressResponse = IsProgressResponse;
    class ProgressObject {
        constructor(data) {
            this.data = data;
            this._shouldBroadcast = false;
            this._callbacks = [];
        }
        AddCallback(callback) {
            if (typeof callback !== 'function') {
                console.warn('Not a function', callback);
                throw ("'callback' should be a function.");
            }
            this._callbacks.push(callback);
        }
        RemoveCallback(callback) {
            const index = this._callbacks.indexOf(callback);
            if (index !== -1)
                this._callbacks.splice(index, 1);
        }
        Update(param0, progress, error) {
            let completed = param0;
            if (param0 !== undefined && typeof param0 !== 'boolean') {
                completed = param0.completed;
                progress = param0.progress;
                error = param0.error;
            }
            const data = this.data;
            if (typeof completed === 'boolean')
                data.completed = completed;
            if (typeof progress === 'number') {
                if (data.progress < 0 || data.progress > 1)
                    throw new RangeError(`Progress out of range: ${data.id} > ${data.progress.toString()}`);
                data.progress = progress;
            }
            if (typeof error === 'string')
                data.error = error;
            // throttle updates
            this._shouldBroadcast = true;
            requestAnimationFrame(() => {
                if (this._shouldBroadcast) {
                    this._shouldBroadcast = false;
                    this.Broadcast(this.data);
                }
            });
        }
        Broadcast(arg) {
            // Com.Log('Broadcast:', arg);
            for (let i = 0; i < this._callbacks.length; i++)
                this._callbacks[i](arg);
        }
    }
    Com.ProgressObject = ProgressObject;
})(Com || (Com = {}));

var WidgetMsgType;
(function (WidgetMsgType) {
    WidgetMsgType["Snapshot"] = "Snapshot";
    WidgetMsgType["Save"] = "Save";
    WidgetMsgType["Debug"] = "Debug";
    WidgetMsgType["Load"] = "Load";
    WidgetMsgType["LoadVariation"] = "LoadVariation";
    WidgetMsgType["TrackingStatusChange"] = "TrackingStatusChange";
    WidgetMsgType["EyewearFit"] = "EyewearFit";
})(WidgetMsgType || (WidgetMsgType = {}));
var Progress;
(function (Progress) {
    (function (ID) {
        ID.load = () => 'load';
        ID.assets = () => 'assets';
        ID.scene = (workspaceKey, productKey) => `LoadScene(${workspaceKey}, ${productKey})`;
    })(Progress.ID || (Progress.ID = {}));
})(Progress || (Progress = {}));
var Editor;
(function (Editor) {
    (function (Mode) {
        Mode["Default"] = "default";
        Mode["Export"] = "export";
        Mode["Geometry"] = "geometry";
        Mode["Variation"] = "variation";
    })(Editor.Mode || (Editor.Mode = {}));
})(Editor || (Editor = {}));

var _WidgetTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get WidgetMsgType () { return WidgetMsgType; },
    get Progress () { return Progress; },
    get Editor () { return Editor; }
});

var WidgetTypes = _WidgetTypes;
let widget;
let editor;
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

const searchParams = (new URL(window.location.href)).searchParams;
const local = Boolean(searchParams.get('local'));
const s3 = 'https://designhubz-viewer-data.s3-eu-west-1.amazonaws.com/';
const rootUrl = local ? 'https://localhost:2020/example/storage.ignore/' : s3;
const contentUrl = local ? 'https://localhost:2020/example/storage.ignore/content/' : s3 + 'content/';
// const s3Apps = 'https://dg0iszzfyf3bz.cloudfront.net/';
const s3Apps = 'https://designhubz-viewer-data.s3-eu-west-1.amazonaws.com/apps/';
const extendsFlags = local ? '?local=1' : '?';
const appsUrls = {
    viewer: (local ? 'https://localhost:2020/example/' : s3Apps + 'index.html') + extendsFlags,
    editor: (local ? 'https://localhost:2020/example/editor.html' : s3Apps + 'editor.html') + extendsFlags,
    digitization: (local ? 'https://localhost:2020/example/digitization.html' : s3Apps + 'digitization.html') + extendsFlags,
    eyewear: (local ? 'https://localhost:2030/' : s3Apps + 'eyewear/index.html') + extendsFlags,
};
const blobToBuffer = (blob) => new Response(blob).arrayBuffer();
const fetchJSON = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url, { method: 'GET' });
        return response.ok ? yield response.json() : undefined;
    }
    catch (err) {
        console.warn(err);
        return undefined;
    }
});
// #endregion
// https://designhubz-viewer-data.s3-eu-west-1.amazonaws.com/user/workspace/eyewear/glass1/scene.json
const folder = {
    w: (workspaceKey) => `${rootUrl}user/workspace/${workspaceKey}/`,
    s: (workspaceKey, productKey) => `${folder.w(workspaceKey)}scene/${productKey}/`,
    sk: (workspaceKey) => `${folder.w(workspaceKey)}skin/`,
    f: (publicFolderUrl) => publicFolderUrl.slice(rootUrl.length),
    p: (workspaceKey) => `${folder.w(workspaceKey)}productData/`,
    d: (workspaceKey) => `${folder.w(workspaceKey)}digitization/`,
    a: () => `${rootUrl}user/sessions/`,
    st: (path) => `storage.ignore/${folder.f(path)}`,
    c: (url) => `${contentUrl}${url}`
};
// #region mock server interface (./publish/example/remote/server.js)
const serverUrl = 'http://127.0.0.1:8082/';
function deleteAsync(path) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `${serverUrl}?path=${escape(folder.st(path))}`;
        yield fetch(url, { method: 'DELETE' });
    });
}
function storeAsync(path, asset) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `${serverUrl}?path=${escape(folder.st(path))}`;
        yield fetch(url, {
            method: 'POST',
            body: asset
        });
    });
}
// #endregion
const buildAppUrl = (url, params) => {
    if (params !== undefined) {
        for (const key in params) {
            const value = params[key];
            if (typeof value === 'string' && value !== 'undefined')
                url += `&${key}=${value}`;
        }
    }
    return url;
};
const widgetApps = {
    viewer: (workspaceId, referenceId) => buildAppUrl(appsUrls.viewer, { workspaceId, referenceId }),
    eyewear: (workspaceId, referenceId) => buildAppUrl(appsUrls.eyewear, { workspaceId, referenceId })
};
class WidgetData {
    constructor() {
        this.apps = widgetApps;
    }
    FetchClientConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                workspaces: {
                    '3D': 'eyewear',
                    'Eyewear': 'eyewear',
                    'Makeup': 'makeup'
                }
            };
        });
    }
    FetchProduct(workspaceId, referenceId, collectVariationDetails = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = folder.p(workspaceId);
            const product = yield fetchJSON(path + referenceId + '.json');
            if (product === undefined)
                throw new Errors.NotFoundError();
            return product;
        });
    }
    FetchProducts(workspaceId, referenceIdArray, collectVariationDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchUtil = (id) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const product = yield this.FetchProduct(workspaceId, id, collectVariationDetails);
                    return product;
                }
                catch (err) {
                    if ((err instanceof Errors.NotFoundError) === false)
                        throw err;
                }
                return undefined;
            });
            const map = {};
            const products = yield Promise.all(referenceIdArray.map(fetchUtil));
            products.forEach(product => {
                if (product !== undefined)
                    map[product.referenceId] = product;
            });
            return map;
        });
    }
    FetchSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = folder.a();
            const session = yield fetchJSON(path + sessionId + '.json');
            if (session === undefined)
                throw new Errors.NotFoundError();
            return session;
        });
    }
    CreateSession(workspaceId, referenceId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionId = `${workspaceId}-${referenceId}-${userId}-${Date.now()}`;
            return sessionId;
        });
    }
    UpdateSession(sessionId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = folder.a();
            yield storeAsync(path + sessionId + '.json', JSON.stringify(data));
        });
    }
}
const resolveUrls = (publicFolderUrl, assetsUrls) => {
    assetsUrls.forEach(v => v.url = `${rootUrl}${publicFolderUrl}${v.name}`);
};
class ViewerData extends WidgetData {
    FetchScene(workspaceId, referenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = folder.s(workspaceId, referenceId);
            const scene = yield fetchJSON(path + 'scene.json');
            if (scene === undefined)
                throw new Errors.NotFoundError();
            scene._assetsUrls = JSON.parse(JSON.stringify(scene.assetsUrls));
            const publicFolderUrl = folder.f(path);
            resolveUrls(publicFolderUrl, scene.assetsUrls);
            return Object.assign({
                publicFolderUrl: publicFolderUrl
            }, scene);
        });
    }
    FetchSkin(workspaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = folder.w(workspaceId);
            const skin = yield fetchJSON(path + 'skin.json');
            if (skin === undefined)
                throw new Errors.NotFoundError();
            skin._assetsUrls = JSON.parse(JSON.stringify(skin.assetsUrls));
            const publicFolderUrl = folder.f(path);
            resolveUrls(publicFolderUrl, skin.assetsUrls);
            return Object.assign({
                publicFolderUrl: publicFolderUrl
            }, skin);
        });
    }
}
const editorApps = Object.assign({
    editor: (params) => buildAppUrl(appsUrls.editor, params),
    digitization: (params) => buildAppUrl(appsUrls.digitization, params)
}, widgetApps);
class MockData extends ViewerData {
    constructor() {
        super();
        this.apps = editorApps;
        console.log('MockData');
    }
    CreateScene(workspaceId, referenceId, name, sceneData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const oldScene = yield this.FetchScene(workspaceId, referenceId);
                console.warn('Scene already exists, will update...');
                return yield this.UpdateScene(workspaceId, referenceId, {
                    deleteFiles: oldScene.assetsUrls.map(asset => asset.name),
                    name: name,
                    files: files,
                    sceneData: sceneData
                });
            }
            catch (err) {
                if (err instanceof Errors.NotFoundError) ;
                else {
                    throw err;
                }
            }
            const path = folder.s(workspaceId, referenceId);
            const assetsUrls = [];
            if (files !== undefined)
                yield Promise.all(files.map((file) => __awaiter(this, void 0, void 0, function* () {
                    assetsUrls.push({
                        name: file.name,
                        url: file.name
                    });
                    return storeAsync(path + file.name, yield blobToBuffer(file.content));
                })));
            const scene = {
                _assetsUrls: assetsUrls,
                assetsUrls: assetsUrls,
                createdAt: Date.now(),
                isActive: false,
                name: name,
                sceneData: sceneData,
                referenceId: referenceId,
                workspaceId: workspaceId
            };
            let store;
            while (store === undefined) {
                try {
                    yield storeAsync(path + 'scene.json', JSON.stringify(scene));
                    yield new Promise(r => setTimeout(r, 1000));
                    store = yield this.FetchScene(workspaceId, referenceId);
                }
                catch (err) {
                    console.log('failed to fetch scene, retrying');
                }
            }
            return store;
        });
    }
    UpdateScene(workspaceId, referenceId, update) {
        return __awaiter(this, void 0, void 0, function* () {
            let scene = yield this.FetchScene(workspaceId, referenceId);
            if (update.name !== undefined)
                scene.name = update.name;
            const path = folder.s(workspaceId, referenceId);
            const assetsUrls = scene._assetsUrls;
            if (update.deleteFiles !== undefined) {
                yield Promise.all(update.deleteFiles.map(filename => {
                    const i = assetsUrls.findIndex(v => v.name === filename);
                    if (i !== -1)
                        assetsUrls.splice(i, 1);
                    return deleteAsync(path + filename);
                }));
            }
            if (update.files !== undefined) {
                yield Promise.all(update.files.map((file) => __awaiter(this, void 0, void 0, function* () {
                    assetsUrls.push({
                        name: file.name,
                        url: file.name
                    });
                    return storeAsync(path + file.name, yield blobToBuffer(file.content));
                })));
            }
            if (update.sceneData !== undefined)
                scene.sceneData = update.sceneData;
            scene.assetsUrls = assetsUrls;
            yield storeAsync(path + 'scene.json', JSON.stringify(scene));
            return this.FetchScene(workspaceId, referenceId);
        });
    }
    DeleteScene(workspaceId, referenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.FetchScene(workspaceId, referenceId);
            const path = folder.s(workspaceId, referenceId);
            yield deleteAsync(path);
        });
    }
    UploadSceneAssets(workspaceId, referenceId, files) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.UpdateScene(workspaceId, referenceId, { files: files });
        });
    }
    DeleteSceneAssets(workspaceId, referenceId, names) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.UpdateScene(workspaceId, referenceId, { deleteFiles: names });
        });
    }
    CreateSkin(workspaceId, skinData, files) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = folder.sk(workspaceId);
            const assetsUrls = [];
            if (files !== undefined)
                yield Promise.all(files.map((file) => __awaiter(this, void 0, void 0, function* () {
                    assetsUrls.push({
                        name: file.name,
                        url: file.name
                    });
                    return storeAsync(path + file.name, yield blobToBuffer(file.content));
                })));
            const skin = {
                _assetsUrls: assetsUrls,
                assetsUrls: assetsUrls,
                createdAt: Date.now(),
                isActive: false,
                skinData: skinData,
                workspaceId: workspaceId
            };
            yield storeAsync(path + 'skin.json', JSON.stringify(skin));
            return this.FetchSkin(workspaceId);
        });
    }
    DeleteSkin(workspaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.FetchSkin(workspaceId);
            const path = folder.sk(workspaceId);
            yield deleteAsync(path);
        });
    }
    FetchDigitization(workspaceId, modelCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = folder.d(workspaceId);
            const digitization = yield fetchJSON(path + modelCode + '.json');
            if (digitization === undefined)
                throw new Errors.NotFoundError();
            return digitization;
        });
    }
    FetchContent(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = folder.c(url);
            const content = yield fetchJSON(path + '.json');
            if (content === undefined)
                throw new Errors.NotFoundError();
            const urlParts = path.split('/');
            if (urlParts[urlParts.length - 1] !== '/') {
                urlParts.pop();
                urlParts.push('');
            }
            const publicFolderUrl = urlParts.join('/');
            return {
                publicFolderUrl: publicFolderUrl,
                content
            };
        });
    }
}

class InlineFrameContainer extends Com {
    constructor(iframe) {
        super();
        this.iframe = iframe;
    }
    SendMsg(msg, transfer) {
        var _a;
        const message = super.SendMsg(msg, transfer);
        if (this.iframe.contentWindow === null)
            throw new Error(`Can't query iframe's contentWindow.`);
        const origin = (_a = this._origin) !== null && _a !== void 0 ? _a : '*';
        if (transfer !== undefined)
            this.iframe.contentWindow.postMessage(message, origin, transfer);
        else
            this.iframe.contentWindow.postMessage(message, origin);
        return message;
    }
    Dispose() {
        if (this.iframe.parentElement !== null)
            this.iframe.parentElement.removeChild(this.iframe);
    }
}

const formatOptions = ['font-weight', 'color', 'background'];
const _dev = new (class _Dev {
    constructor() {
        this.debug = false;
    }
    Log(...args) {
        if (this.debug) {
            const formatting = [];
            for (let i = 0; i < args.length - 1; i++) {
                const arg = args[i];
                const text = args[i + 1];
                if (typeof arg === 'string' && typeof text === 'string' && arg.slice(0, 2) === '#(') {
                    const optionsArgs = arg.slice(2, arg.length - 1).split(',');
                    let format = formatOptions.map((o, i) => typeof optionsArgs[i] === 'string' && optionsArgs[i].length > 0
                        ? `${o}:${optionsArgs[i]};`
                        : '').join(' ');
                    args.splice(i, 1);
                    args[i] = `%c ${text} `;
                    formatting.push(format);
                }
            }
            if (formatting.length > 0)
                console.log(args.map(arg => arg.toString()).join(''), ...formatting);
            else
                console.log(...args);
        }
    }
    CreateError(name, message) {
        this.Log(`Created ERROR '${name}': '${message}'`);
        const error = new Error(message);
        error.name = name;
        return error;
    }
});

if (!window.location)
    throw new Error('Expected access to window.location');
if (!('href' in window.location))
    throw new Error('Expected href in window.location');
SetEditorSource(new MockData());
/** enabled = ?designhubz_debug=bool */
const DEV_DEBUG_URL_PARAM = 'designhubz_debug';
const bool = (p) => p === '1' || p === 'true';
const searchParams$1 = (new URL(window.location.href)).searchParams;
if (bool(searchParams$1.get(DEV_DEBUG_URL_PARAM)))
    _dev.debug = true;

class _Product {
    constructor(workspaceKey, productKey, properties, variations) {
        this.workspaceKey = workspaceKey;
        this.productKey = productKey;
        this.properties = properties;
        this.is3D = () => false;
        this.isEyewear = () => false;
        this.isMakeup = () => false;
        this.variations = variations;
    }
    get thumbnailURL() { return ''; }
    fetchRecommendations(num, external) {
        const recommendations = new Array(num);
        recommendations.map((_, i) => {
            return {
                sku: i.toString(),
                score: i / num
            };
        });
        return new Promise(r => r(recommendations));
    }
    toJSON() {
        return Object.assign({}, this, {
            variations: this.variations.map(v => {
                const variation = Object.assign({}, v);
                // @ts-ignore
                delete variation.variations;
                return variation;
            })
        });
    }
}

var Dom;
(function (Dom) {
    function CreateStylesheet(css) {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
    Dom.CreateStylesheet = CreateStylesheet;
    function BuildHTML(html) {
        const div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstChild;
    }
    Dom.BuildHTML = BuildHTML;
})(Dom || (Dom = {}));

class Signal {
    constructor() {
        this.callbacks = [];
    }
    Add(callback) {
        if (typeof callback !== 'function') {
            console.warn('Not a function', callback);
            throw ("'callback' should be a function.");
        }
        this.callbacks.push(callback);
    }
    Remove(callback) {
        const index = this.callbacks.indexOf(callback);
        if (index !== -1)
            this.callbacks.splice(index, 1);
    }
    Dispatch(arg) {
        for (let i = 0; i < this.callbacks.length; i++)
            this.callbacks[i](arg);
    }
    Once(callback) {
        const once = (arg) => {
            this.Remove(once);
            callback(arg);
        };
        this.Add(once);
    }
}

console.log('@designhubz-widget/utils');

let _canvas;
function DrawToCanvas(source, flip) {
    if (_canvas === undefined)
        _canvas = document.createElement('canvas');
    _canvas.width = source.width;
    _canvas.height = source.height;
    const context = _canvas.getContext('2d');
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
class Snapshot {
    constructor(imageData) {
        this.imageData = imageData;
    }
    getDataURL(type, quality) {
        const canvas = DrawToCanvas(this.imageData, false);
        return canvas.toDataURL(type === 'jpeg' ? 'image/jpeg' : 'image/png', quality);
    }
    getBlobAsync(type, quality) {
        return __awaiter(this, void 0, void 0, function* () {
            const canvas = DrawToCanvas(this.imageData, false);
            const blob = yield new Promise((resolve, reject) => canvas.toBlob(blob => {
                if (blob === null)
                    reject('Failed to generate Blob');
                else
                    resolve(blob);
            }, type === 'jpeg' ? 'image/jpeg' : 'image/png', quality));
            return blob;
        });
    }
}

Com.source = 'Widget';
const createIframe = () => Dom.BuildHTML(`<iframe
style="width: 1px; min-width: 100%; *width: 100%; height: 1px; min-height: 100%; *height: 100%;" 
width="100%" height="100%" scrolling="no" frameBorder="0"
</iframe>`);
class _Widget extends InlineFrameContainer {
    constructor(domElement) {
        super(createIframe());
        this.domElement = domElement;
    }
    get variation() {
        if (this._variation === undefined)
            throw new Error(`Widget's variation is not ready`);
        return this._variation;
    }
    // public async Load(progressHandler?: TProgressCallback)
    // {
    //     await this.waitForInit;
    //     const loadId = WidgetTypes.Progress.ID.load();
    //     this.TrackProgress(loadId, data => {
    //         if(data.error !== undefined) throw data.error;
    //         if(progressHandler !== undefined) progressHandler(data.progress);
    //     });
    // }
    FirstLoadAsync(variation, progressHandler, loadRatio = .2, sceneLoadRatio = .8) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForInit;
            const loadId = Progress.ID.load();
            const sceneLoadId = variation === null
                ? Progress.ID.assets()
                : Progress.ID.scene(variation.workspaceKey, variation.productKey);
            const bundleRatios = {
                [loadId]: loadRatio,
                [sceneLoadId]: sceneLoadRatio
            };
            const loadProgressAsync = new Promise(resolve => {
                this.TrackProgressBundle(bundleRatios, data => {
                    if (data.error !== undefined)
                        throw data.error;
                    if (progressHandler !== undefined)
                        progressHandler(data.progress);
                    if (data.completed) {
                        _dev.Log('FirstLoadAsync', data);
                        resolve();
                    }
                });
            });
            let loadVariationAsync = variation !== null ? this.loadVariation(variation) : Promise.resolve();
            yield Promise.all([loadProgressAsync, loadVariationAsync]);
        });
    }
    loadVariation(variation, progressHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            // First step towards Widget then product
            // if(this._variation !== undefined 
            //     && this._variation.variations.every( v => v.productKey !== variation.productKey )
            // )
            // {
            //     throw new Error(`Product '${variation.productKey}' is not a variation of ${this._variation.variations.map( v => v.productKey ).join(', ')}`);
            // }
            if (progressHandler !== undefined) {
                const id = Progress.ID.scene(variation.workspaceKey, variation.productKey);
                this.TrackProgress(id, data => {
                    if (data.error !== undefined)
                        throw data.error;
                    if (progressHandler !== undefined)
                        progressHandler(data.progress);
                });
            }
            const request = {
                __type: WidgetMsgType.LoadVariation,
                __details: {
                    workspaceKey: variation.workspaceKey,
                    productKey: variation.productKey
                }
            };
            const response = yield this.SendMsgAsync(request);
            if (response.__details.error !== undefined)
                throw new Error(`Error loading variation: ${response.__details.error}`);
            this._variation = variation;
            _dev.Log('#(bold,#f00)', 'variation loaded:', '#()', `(${this._variation.productKey})`);
        });
    }
    takeSnapshotAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {
                __type: WidgetMsgType.Snapshot,
                __details: {
                    flip: false
                }
            };
            const response = yield this.SendMsgAsync(request);
            const source = response.__details;
            const imageData = new ImageData(new Uint8ClampedArray(source.data), source.width, source.height);
            return new Snapshot(imageData);
        });
    }
    sendStat(stat) {
        return Promise.resolve();
    }
    disposeAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            this.Dispose();
        });
    }
    SetApp(url) {
        if (typeof this.iframe.src === 'string' && this.iframe.src.length > 0) {
            throw new Error('Call dispose before setting iframe src again.');
        }
        this.iframe.src = url;
        // TODO: what kind of dom events do we handle?
        this.domElement.appendChild(this.iframe);
    }
    ProcessMsgAsync(msg) {
        const _super = Object.create(null, {
            ProcessMsgAsync: { get: () => super.ProcessMsgAsync }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let resolved = yield _super.ProcessMsgAsync.call(this, msg);
            switch (msg.__type) {
                            }
            return resolved;
        });
    }
}

class _3DWidget extends _Widget {
    constructor(domElement, app) {
        super(domElement);
        this._3D = true;
        if (app === undefined)
            app = editor.apps.viewer();
        this.SetApp(app);
    }
}

class _3DProduct extends _Product {
    constructor() {
        super(...arguments);
        this._3D = true;
        this.is3D = () => true;
    }
    create3DWidget(domElement, progressHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            const widget = new _3DWidget(domElement);
            yield widget.FirstLoadAsync(this, progressHandler, .2, .8);
            return widget;
        });
    }
}

class _EyewearWidget extends _Widget {
    constructor(domElement) {
        super(domElement);
        this._eyewear = true;
        this.onTrackingStatusChange = new Signal();
        this.iframe.setAttribute('allow', 'camera;microphone');
        const app = editor.apps.eyewear();
        // const app = Data.apps.viewer();
        this.SetApp(app);
    }
    queryFit() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {
                __type: WidgetTypes.WidgetMsgType.EyewearFit,
                __details: void 0
            };
            yield this.SendMsgAsync(request);
            return true; //Boolean(response.__details?.value);
        });
    }
    ProcessMsgAsync(msg) {
        const _super = Object.create(null, {
            ProcessMsgAsync: { get: () => super.ProcessMsgAsync }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let resolved = yield _super.ProcessMsgAsync.call(this, msg);
            switch (msg.__type) {
                case WidgetTypes.WidgetMsgType.TrackingStatusChange: {
                    const details = msg.__details;
                    const status = details.status;
                    this.onTrackingStatusChange.Dispatch(status);
                    return true;
                }
            }
            return resolved;
        });
    }
}

class _EyewearProduct extends _3DProduct {
    constructor() {
        super(...arguments);
        this._eyewear = true;
        this._3D = true;
        this.isEyewear = () => true;
    }
    createEyewearWidget(domElement, progressHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            const widget = new _EyewearWidget(domElement);
            console.log('FirstLoadAsync start');
            yield widget.FirstLoadAsync(this, progressHandler, .8, .2);
            console.log('FirstLoadAsync end');
            return widget;
        });
    }
    createMultiWidget(domElement, progressHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
}

const _productsCache = {};
function ProductFromCache(workspaceKey, productKey) {
    return _productsCache[workspaceKey + productKey];
}
const _variationsCache = {};
function VariationsFromCache(workspaceKey, productKey) {
    return _variationsCache[workspaceKey + productKey];
}
function ProductFromData(data, props) {
    // console.log('From product data', data);
    let product = ProductFromCache(data.workspaceKey, data.productKey);
    if (product !== undefined)
        return product;
    let variations = VariationsFromCache(data.workspaceKey, data.productKey);
    if (variations === undefined) {
        variations = [];
        data.variations.forEach(variation => {
            if (variation.productKey !== data.productKey) {
                const vData = Object.assign({}, data, variation);
                _variationsCache[vData.workspaceKey + vData.productKey] = variations;
                variations.push(ProductFromData(vData, props));
            }
        });
    }
    if (props !== undefined) {
        let missingProps = [];
        for (const key in props) {
            const header = props[key];
            if (typeof header === 'string') {
                if (header in data.properties) {
                    if (key in data.properties)
                        console.warn(`Custom property accessor '${key}' will override existing property.`);
                    Object.defineProperty(data.properties, key, {
                        get: () => data.properties[header]
                    });
                }
                else {
                    missingProps.push(header);
                }
            }
        }
        if (missingProps.length > 0) {
            const plr = missingProps.length > 1;
            console.warn(`Custom propert${plr ? 'ies' : 'y'}: '${missingProps.join(`', '`)}' ${plr ? 'are' : 'is'} missing from '${data.productKey}'`);
        }
    }
    const productArgs = [
        data.workspaceKey,
        data.productKey,
        data.properties,
        variations
    ];
    // console.log('productArgs', productArgs);
    switch (data.productType) {
        case '3D':
            product = new _3DProduct(...productArgs);
            break;
        case 'Eyewear':
            product = new _EyewearProduct(...productArgs);
            break;
        case 'Makeup':
            throw 'Makeup type not implemented';
        default:
            throw 'productType is undefined';
    }
    variations.push(product);
    _productsCache[data.workspaceKey + data.productKey] = product;
    return product;
}

const configAsync = new Promise((resolve, reject) => {
    resolve({
        workspaces: {
            '3D': 'eyewear',
            'Eyewear': 'eyewear',
            'Makeup': 'makeup'
        }
    });
});

const version = '0.0.7';
const dev = _dev;
function fetchProduct(workspaceKey, productKey, props) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof workspaceKey !== 'string' || typeof productKey !== 'string')
            throw new RangeError(`Invalid arguments: fetchProduct(${workspaceKey}: string, ${productKey}: string)`);
        let product = ProductFromCache(workspaceKey, productKey);
        if (product === undefined) {
            _dev.Log('#(bold,#f00)', 'fetching product:', '#()', `(${workspaceKey}, ${productKey})`);
            const productData = yield widget.FetchProduct(workspaceKey, productKey, true);
            const variations = [];
            productData.variations.forEach(v => {
                // if(v.referenceId !== productKey)
                // {
                variations.push({
                    productKey: v.referenceId,
                    name: v.name,
                    properties: Object.assign({}, v.originalProperties)
                });
                // }
            });
            product = ProductFromData({
                workspaceKey: workspaceKey,
                productKey: productKey,
                name: productData.name,
                productType: 'Eyewear',
                properties: Object.assign({}, productData.originalProperties),
                variations: variations
            }, props);
            // console.log('*** fetched product', JSON.parse(JSON.stringify(product)));
        }
        else {
            _dev.Log('#(bold,#f88)', '(cache) fetching product:', '#()', `(${workspaceKey} | ${productKey})`);
        }
        return product;
    });
}
function fetchProducts(workspaceKey, productKeys, props) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof workspaceKey !== 'string' || (productKeys instanceof Array) === false || productKeys.length === 0 || typeof productKeys[0] !== 'string')
            throw new RangeError(`Invalid arguments: fetchProducts(${workspaceKey}: string, ${productKeys.join(', ')}: string[])`);
        _dev.Log('#(bold,#000)', 'fetching products:', '#()', `(${workspaceKey}, [${productKeys.join(', ')}])`);
        const result = {};
        const stats = { cache: 0, fetch: 0, missing: productKeys.length };
        const productsToFetch = [];
        productKeys.forEach(productKey => {
            const product = ProductFromCache(workspaceKey, productKey);
            if (product === undefined) {
                productsToFetch.push(productKey);
            }
            else {
                stats.cache++;
                stats.missing--;
                result[productKey] = product;
            }
        });
        if (productsToFetch.length > 0) {
            const productsDataMap = yield widget.FetchProducts(workspaceKey, productsToFetch, true);
            productsToFetch.forEach(productKey => {
                const productData = productsDataMap[productKey];
                if (productData !== undefined) {
                    stats.fetch++;
                    stats.missing--;
                    result[productKey] = ProductFromData({
                        workspaceKey: workspaceKey,
                        productKey: productKey,
                        name: productData.name,
                        productType: 'Eyewear',
                        properties: Object.assign({}, productData.originalProperties),
                        variations: productData.variations.filter(v => v.referenceId !== productKey).map(v => {
                            return {
                                productKey: v.referenceId,
                                name: v.name,
                                properties: Object.assign({}, v.originalProperties)
                            };
                        })
                    }, props);
                }
            });
        }
        _dev.Log('#(,#f88)', `${stats.cache} from cache`, ' | ', stats.fetch > 0 ? '#(bold,#f00)' : '#(bold)', `${stats.fetch} fetched`, ' | ', stats.missing > 0 ? '#(#fff,#f00)' : '#(bold)', `${stats.missing} missing`);
        return result;
    });
}
function fetchEyewearProduct(productKey, props) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof productKey !== 'string')
            throw new RangeError(`Invalid arguments: fetchEyewearProduct(${productKey}: string)`);
        const workspaceKey = (yield configAsync).workspaces.Eyewear;
        const product = yield fetchProduct(workspaceKey, productKey, props);
        if (product.isEyewear())
            return product;
        else
            throw new Error(`${productKey} is not of 'Eyewear' type.`);
    });
}
function fetchMakeupProduct(productKey, props) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof productKey !== 'string')
            throw new RangeError(`Invalid arguments: fetchMakeupProduct(${productKey}: string)`);
        const workspaceKey = (yield configAsync).workspaces.Makeup;
        const product = yield fetchProduct(workspaceKey, productKey, props);
        if (product.isMakeup())
            return product;
        else
            throw new Error(`${productKey} is not of 'Makeup' type.`);
    });
}

console.log('@designhubz-widget/lib');

export { dev, fetchEyewearProduct, fetchMakeupProduct, fetchProduct, fetchProducts, version };
//# sourceMappingURL=Designhubz.es5.js.map
