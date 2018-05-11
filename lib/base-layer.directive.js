"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var layer_provider_1 = require("./layer.provider");
var layers_control_provider_1 = require("./layers-control.provider");
/**
 * Angular2 directive for adding layers to the layers-control of Leaflet as base-layer.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-layers-control>
 *         <!-- This can be any other layer... -->
 *         <yaga-tile-layer yaga-base-layer [caption]="'OSM'"></yaga-tile-layer>
 *     </yaga-attribution-control>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#control-layers-addbaselayer Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=Base-Layer%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/base-layer.directive.js.html
 * Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/baselayerdirective.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/layers-control-directive/
 */
var BaseLayerDirective = /** @class */ (function () {
    function BaseLayerDirective(layer, layersControlProvider) {
        this.layer = layer;
        this.layersControlProvider = layersControlProvider;
    }
    Object.defineProperty(BaseLayerDirective.prototype, "caption", {
        get: function () {
            for (var _i = 0, _a = this._layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                if (layer.layer === this.layer.ref) {
                    return layer.name;
                }
            }
            return "";
        },
        set: function (value) {
            this.layersControlProvider.ref.removeLayer(this.layer.ref);
            this.layersControlProvider.ref.addBaseLayer(this.layer.ref, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Internal method to provide the removal from the control in Leaflet, when removing it from the Angular template
     */
    /**
         * Internal method to provide the removal from the control in Leaflet, when removing it from the Angular template
         */
    BaseLayerDirective.prototype.ngOnDestroy = /**
         * Internal method to provide the removal from the control in Leaflet, when removing it from the Angular template
         */
    function () {
        this.layersControlProvider.ref.removeLayer(this.layer.ref);
    };
    BaseLayerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[yaga-base-layer]",
                },] },
    ];
    /** @nocollapse */
    BaseLayerDirective.ctorParameters = function () { return [
        { type: layer_provider_1.LayerProvider, },
        { type: layers_control_provider_1.LayersControlProvider, },
    ]; };
    BaseLayerDirective.propDecorators = {
        "caption": [{ type: core_1.Input },],
    };
    return BaseLayerDirective;
}());
exports.BaseLayerDirective = BaseLayerDirective;
//# sourceMappingURL=base-layer.directive.js.map