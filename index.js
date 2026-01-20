"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtuoApi = void 0;
var VirtuoApi = /** @class */ (function () {
    function VirtuoApi(canvas_id) {
        this.canvas_id = canvas_id;
    }
    VirtuoApi.prototype.get_canvas_id = function () {
        return this.canvas_id;
    };
    VirtuoApi.prototype.try_quit_game = function () {
    };
    VirtuoApi.prototype.toString = function () {
        return "ici virtuo api";
    };
    return VirtuoApi;
}());
exports.VirtuoApi = VirtuoApi;
