"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leaflet_1 = require("leaflet");
var consts_1 = require("./consts");
var layer_group_provider_1 = require("./layer-group.provider");
var layer_provider_1 = require("./layer.provider");
/**
 * Angular2 directive for GeoJSON of Leaflet.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-geojson
 *         [(data)]="..."
 *         [(stroke)]="..."
 *         [(color)]="..."
 *         [(weight)]="..."
 *         [(opacity)]="..."
 *         [(lineCap)]="..."
 *         [(lineJoin)]="..."
 *         [(dashArray)]="..."
 *         [(dashOffset)]="..."
 *         [(fill)]="..."
 *         [(fillColor)]="..."
 *         [(fillOpacity)]="..."
 *         [(fillRule)]="..."
 *         [(className)]="..."
 *         [(lat)]="..."
 *         [(lng)]="..."
 *         [(radius)]="..."
 *
 *         (add)="..."
 *         (remove)="..."
 *         (popupopen)="..."
 *         (popupclose)="..."
 *         (tooltipopen)="..."
 *         (tooltipclose)="..."
 *         (click)="..."
 *         (dblclick)="..."
 *         (mousedown)="..."
 *         (mouseover)="..."
 *         (mouseout)="..."
 *         (contextmenu)="..."
 *         (onEachFeature)="..."
 *
 *         [data]="..."
 *         [filter]="..."
 *         [pointToLayer]="..."
 *         [styler]="..."
 *         [defaultStyle]="..."
 *         >
 *     </yaga-geojson>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#geojson Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=GeoJSON%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/geojson.directive.js.html
 * Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/geojson.directive.js.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/geojson-directive/
 */
var GeoJSONDirective = /** @class */ (function (_super) {
    __extends(GeoJSONDirective, _super);
    function GeoJSONDirective(parentLayerGroupProvider, layerGroupProvider, layerProvider) {
        var _this = _super.call(this, { features: [], type: "FeatureCollection" }, {
            filter: function (feature) {
                if (_this.middleware.filter) {
                    return _this.middleware.filter(feature);
                }
                return true;
            },
            onEachFeature: function (feature, layer) {
                _this.onEachFeatureEvent.emit({ feature: feature, layer: layer });
            },
            pointToLayer: function (geoJSON, latLng) {
                if (_this.middleware.pointToLayer) {
                    return _this.middleware.pointToLayer(geoJSON, latLng);
                }
                return new leaflet_1.Marker(latLng);
            },
            style: function (geoJSON) {
                var defaultStyle = _this.middleware.defaultStyle;
                if (_this.middleware.styler) {
                    return _this.middleware.styler(geoJSON, defaultStyle);
                }
                return defaultStyle;
            },
        }) || this;
        _this.parentLayerGroupProvider = parentLayerGroupProvider;
        /* tslint:disable:max-line-length */
        _this.dataChange = new core_1.EventEmitter();
        /* tslint:enable */
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-geojson (add)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-add Original Leaflet documentation
             */
        _this.addEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired remove event.
             * Use it with `<yaga-geojson (remove)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-remove Original Leaflet documentation
             */
        _this.removeEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupopen event.
             * Use it with `<yaga-geojson (popupopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-popupopen Original Leaflet documentation
             */
        _this.popupopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupclose event.
             * Use it with `<yaga-geojson (popupclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-popupclose Original Leaflet documentation
             */
        _this.popupcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipopen event.
             * Use it with `<yaga-geojson (tooltipopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-tooltipopen Original Leaflet documentation
             */
        _this.tooltipopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipclose event.
             * Use it with `<yaga-geojson (tooltipclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-tooltipclose Original Leaflet documentation
             */
        _this.tooltipcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired click event.
             * Use it with `<yaga-geojson (click)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-click Original Leaflet documentation
             */
        _this.clickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired dblclick event.
             * Use it with `<yaga-geojson (dblclick)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-dblclick Original Leaflet documentation
             */
        _this.dblclickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mousedown event.
             * Use it with `<yaga-geojson (mousedown)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-mousedown Original Leaflet documentation
             */
        _this.mousedownEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseover event.
             * Use it with `<yaga-geojson (mouseover)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-mouseover Original Leaflet documentation
             */
        _this.mouseoverEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseout event.
             * Use it with `<yaga-geojson (mouseout)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-mouseout Original Leaflet documentation
             */
        _this.mouseoutEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired contextmenu event.
             * Use it with `<yaga-geojson (contextmenu)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-contextmenu Original Leaflet documentation
             */
        _this.contextmenuEvent = new core_1.EventEmitter();
        /* tslint:disable:max-line-length */
        _this.onEachFeatureEvent = new core_1.EventEmitter();
        /* tslint:enable */
        /**
             * Property to prevent changes before directive is initialized
             */
        _this.initialized = false;
        /**
             * Object that stores the middleware functions and the default style
             */
        _this.middleware = {
            defaultStyle: consts_1.DEFAULT_STYLE,
        };
        layerProvider.ref = _this;
        layerGroupProvider.ref = _this;
        _this.parentLayerGroupProvider.ref.addLayer(_this);
        // Events
        // Events
        _this.on("add", function (event) {
            _this.addEvent.emit(event);
        });
        _this.on("remove", function (event) {
            _this.removeEvent.emit(event);
        });
        _this.on("popupopen", function (event) {
            _this.popupopenEvent.emit(event);
        });
        _this.on("popupclose", function (event) {
            _this.popupcloseEvent.emit(event);
        });
        _this.on("tooltipopen", function (event) {
            _this.tooltipopenEvent.emit(event);
        });
        _this.on("tooltipclose", function (event) {
            _this.tooltipcloseEvent.emit(event);
        });
        _this.on("click", function (event) {
            _this.clickEvent.emit(event);
        });
        _this.on("dblclick", function (event) {
            _this.dblclickEvent.emit(event);
        });
        _this.on("mousedown", function (event) {
            _this.mousedownEvent.emit(event);
        });
        _this.on("mouseover", function (event) {
            _this.mouseoverEvent.emit(event);
        });
        _this.on("mouseout", function (event) {
            _this.mouseoutEvent.emit(event);
        });
        _this.on("contextmenu", function (event) {
            _this.contextmenuEvent.emit(event);
        });
        return _this;
    }
    /**
     * Internal method that provides the initialization of the child popup or tooltip
     */
    /**
         * Internal method that provides the initialization of the child popup or tooltip
         */
    GeoJSONDirective.prototype.ngAfterContentInit = /**
         * Internal method that provides the initialization of the child popup or tooltip
         */
    function () {
        this.initialized = true;
        this.redraw();
    };
    /**
     * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
     */
    /**
         * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
         */
    GeoJSONDirective.prototype.ngOnDestroy = /**
         * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
         */
    function () {
        this.removeFrom(this.parentLayerGroupProvider.ref);
    };
    /**
     * Derived method of the original addData.
     * @link http://leafletjs.com/reference-1.2.0.html#geojson-adddata Original Leaflet documentation
     */
    /**
         * Derived method of the original addData.
         * @link http://leafletjs.com/reference-1.2.0.html#geojson-adddata Original Leaflet documentation
         */
    GeoJSONDirective.prototype.addData = /**
         * Derived method of the original addData.
         * @link http://leafletjs.com/reference-1.2.0.html#geojson-adddata Original Leaflet documentation
         */
    function (data) {
        var returnValue = _super.prototype.addData.call(this, data);
        if (!this.initialized) {
            return returnValue;
        }
        this.dataChange.emit(this.toGeoJSON());
        return returnValue;
    };
    /**
     * Derived method of the original clearLayers.
     * @link http://leafletjs.com/reference-1.2.0.html#geojson-clearlayers Original Leaflet documentation
     */
    /**
         * Derived method of the original clearLayers.
         * @link http://leafletjs.com/reference-1.2.0.html#geojson-clearlayers Original Leaflet documentation
         */
    GeoJSONDirective.prototype.clearLayers = /**
         * Derived method of the original clearLayers.
         * @link http://leafletjs.com/reference-1.2.0.html#geojson-clearlayers Original Leaflet documentation
         */
    function () {
        _super.prototype.clearLayers.call(this);
        this.dataChange.emit(this.toGeoJSON());
        return this;
    };
    /**
     * Method to remove all existing data and add the new data in one step.
     *
     * *Note: this is a combination of `clearLayers` and `addData`*
     */
    /**
         * Method to remove all existing data and add the new data in one step.
         *
         * *Note: this is a combination of `clearLayers` and `addData`*
         */
    GeoJSONDirective.prototype.setData = /**
         * Method to remove all existing data and add the new data in one step.
         *
         * *Note: this is a combination of `clearLayers` and `addData`*
         */
    function (val) {
        _super.prototype.clearLayers.call(this);
        _super.prototype.addData.call(this, val);
        return this;
    };
    Object.defineProperty(GeoJSONDirective.prototype, "data", {
        get: function () {
            return this.toGeoJSON();
        },
        set: /**
             * Two-Way bound property for the data geoJSON data.
             * Use it with `<yaga-geojson [(data)]="someValue">` or `<yaga-geojson [data]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-l-geojson Original Leaflet documentation
             */
        function (val) {
            _super.prototype.clearLayers.call(this);
            _super.prototype.addData.call(this, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoJSONDirective.prototype, "filter", {
        get: function () {
            return this.middleware.filter;
        },
        set: /**
             * Input for the filter function.
             * Use it with `<yaga-geojson [filter]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-filter Original Leaflet documentation
             */
        function (filterFn) {
            this.middleware.filter = filterFn;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoJSONDirective.prototype, "pointToLayer", {
        get: function () {
            return this.middleware.pointToLayer;
        },
        set: /**
             * Input for the pointToLayer function.
             * Use it with `<yaga-geojson [pointToLayer]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-pointtolayer Original Leaflet documentation
             */
        function (pointToLayerFn) {
            this.middleware.pointToLayer = pointToLayerFn;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoJSONDirective.prototype, "styler", {
        get: function () {
            return this.middleware.styler;
        },
        set: /**
             * Input for the styler function.
             * Use it with `<yaga-geojson [styler]="someValue">`
             *
             * *Note: The function can follow the `IGeoJSONStylerFn` interface. It enhances the leaflet ones with the default
             * style as second parameter*
             * @link http://leafletjs.com/reference-1.2.0.html#geojson-style Original Leaflet documentation
             */
        function (stylerFn) {
            this.middleware.styler = stylerFn;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoJSONDirective.prototype, "defaultStyle", {
        get: function () {
            return this.middleware.defaultStyle;
        },
        set: /**
             * Input for the default style.
             * Use it with `<yaga-geojson [defaultStyle]="someValue">`
             *
             * *Note: Leaflet does not provide a default style, it just provides a style function!*
             */
        function (style) {
            this.middleware.defaultStyle = style;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to apply changes to the geometries
     */
    /**
         * Method to apply changes to the geometries
         */
    GeoJSONDirective.prototype.redraw = /**
         * Method to apply changes to the geometries
         */
    function () {
        if (this.initialized) {
            this.initialized = false;
            var data = this.data;
            _super.prototype.clearLayers.call(this);
            _super.prototype.addData.call(this, data);
            this.initialized = true;
        }
    };
    GeoJSONDirective.decorators = [
        { type: core_1.Directive, args: [{
                    providers: [layer_group_provider_1.LayerGroupProvider, layer_provider_1.LayerProvider],
                    selector: "yaga-geojson",
                },] },
    ];
    /** @nocollapse */
    GeoJSONDirective.ctorParameters = function () { return [
        { type: layer_group_provider_1.LayerGroupProvider, decorators: [{ type: core_1.SkipSelf },] },
        { type: layer_group_provider_1.LayerGroupProvider, },
        { type: layer_provider_1.LayerProvider, },
    ]; };
    GeoJSONDirective.propDecorators = {
        "dataChange": [{ type: core_1.Output },],
        "addEvent": [{ type: core_1.Output, args: ["add",] },],
        "removeEvent": [{ type: core_1.Output, args: ["remove",] },],
        "popupopenEvent": [{ type: core_1.Output, args: ["popupopen",] },],
        "popupcloseEvent": [{ type: core_1.Output, args: ["popupclose",] },],
        "tooltipopenEvent": [{ type: core_1.Output, args: ["tooltipopen",] },],
        "tooltipcloseEvent": [{ type: core_1.Output, args: ["tooltipclose",] },],
        "clickEvent": [{ type: core_1.Output, args: ["click",] },],
        "dblclickEvent": [{ type: core_1.Output, args: ["dblclick",] },],
        "mousedownEvent": [{ type: core_1.Output, args: ["mousedown",] },],
        "mouseoverEvent": [{ type: core_1.Output, args: ["mouseover",] },],
        "mouseoutEvent": [{ type: core_1.Output, args: ["mouseout",] },],
        "contextmenuEvent": [{ type: core_1.Output, args: ["contextmenu",] },],
        "onEachFeatureEvent": [{ type: core_1.Output, args: ["onEachFeature",] },],
        "data": [{ type: core_1.Input },],
        "filter": [{ type: core_1.Input },],
        "pointToLayer": [{ type: core_1.Input },],
        "styler": [{ type: core_1.Input },],
        "defaultStyle": [{ type: core_1.Input },],
    };
    return GeoJSONDirective;
}(leaflet_1.GeoJSON));
exports.GeoJSONDirective = GeoJSONDirective;
//# sourceMappingURL=geojson.directive.js.map