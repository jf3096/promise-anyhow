"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var successHandler = function (result) { return ({ payload: result, resolved: true }); };
var catchHandler = function (error) { return ({ payload: error, resolved: false }); };
function anyhow(promises) {
    return Promise.all(promises.map(function (result) { return result.then(successHandler).catch(catchHandler); }))
        .then(function (results) {
        return results.reduce(function (results, _a) {
            var payload = _a.payload, resolved = _a.resolved;
            if (resolved) {
                results.resolves.push(payload);
            }
            else {
                results.rejects.push(payload);
            }
            return results;
        }, { resolves: [], rejects: [] });
    });
}
exports.default = anyhow;
//# sourceMappingURL=index.js.map