(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['promise-anyhow'] = factory());
}(this, (function () { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var src = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var successHandler = function successHandler(result) {
        return { payload: result, resolved: true };
    };
    var catchHandler = function catchHandler(error) {
        return { payload: error, resolved: false };
    };
    function anyhow(promises) {
        return Promise.all(promises.map(function (result) {
            return result.then(successHandler).catch(catchHandler);
        })).then(function (results) {
            return results.reduce(function (results, _a) {
                var payload = _a.payload,
                    resolved = _a.resolved;
                if (resolved) {
                    results.resolves.push(payload);
                } else {
                    results.rejects.push(payload);
                }
                return results;
            }, { resolves: [], rejects: [] });
        });
    }
    exports.default = anyhow;
});

var index = unwrapExports(src);
module.exports = exports["default"];

return index;

})));
//# sourceMappingURL=promise-anyhow.umd.js.map
