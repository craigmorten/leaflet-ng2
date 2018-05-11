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
var layer_group_provider_1 = require("./layer-group.provider");
var layer_provider_1 = require("./layer.provider");
var lng2lat_1 = require("./lng2lat");
/**
 * Angular2 directive for Leaflet polygons.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-polygon
 *         [(display)]="..."
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
 *         [(renderer)]="..."
 *         [(className)]="..."
 *         [(style)]="..."
 *         [(latLngs)]="..."
 *         [(geoJSON)]="..."
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
 *
 *         [interactive]="..."
 *         [smoothFactor]="..."
 *         [noClip]="..."
 *         [properties]="..."
 *         >
 *     </yaga-polygon>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#polygon Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=Rectangle%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/polygon.directive.js.html Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/polygondirective.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/polygon-directive
 */
var PolygonDirective = /** @class */ (function (_super) {
    __extends(PolygonDirective, _super);
    function PolygonDirective(layerGroupProvider, layerProvider) {
        var _this = _super.call(this, []) || this;
        _this.layerGroupProvider = layerGroupProvider;
        /**
             * Two-Way bound property for the display status of the geometry.
             * Use it with `<yaga-polygon [(display)]="someValue">`
             * or `<yaga-polygon (displayChange)="processEvent($event)">`
             */
        _this.displayChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the stroke state of the geometry.
             * Use it with `<yaga-polygon [(stroke)]="someValue">`
             * or `<yaga-polygon (strokeChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-stroke Original Leaflet documentation
             */
        _this.strokeChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the line-color of the geometry.
             * Use it with `<yaga-polygon [(color)]="someValue">`
             * or `<yaga-polygon (colorChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-color Original Leaflet documentation
             */
        _this.colorChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the weight of the geometry.
             * Use it with `<yaga-polygon [(weight)]="someValue">`
             * or `<yaga-polygon (weightChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-weight Original Leaflet documentation
             */
        _this.weightChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the opacity of the geometry.
             * Use it with `<yaga-polygon [(opacity)]="someValue">`
             * or `<yaga-polygon (opacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-opacity Original Leaflet documentation
             */
        _this.opacityChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the lineCap of the geometry.
             * Use it with `<yaga-polygon [(lineCap)]="someValue">`
             * or `<yaga-polygon (lineCapChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-linecap Original Leaflet documentation
             */
        _this.lineCapChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the lineJoin of the geometry.
             * Use it with `<yaga-polygon [(lineJoin)]="someValue">`
             * or `<yaga-polygon (lineJoinChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-linejoin Original Leaflet documentation
             */
        _this.lineJoinChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the dashArray of the geometry.
             * Use it with `<yaga-polygon [(dashArray)]="someValue">`
             * or `<yaga-polygon (dashArrayChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-dasharray Original Leaflet documentation
             */
        _this.dashArrayChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the dashOffset of the geometry.
             * Use it with `<yaga-polygon [(dashOffset)]="someValue">`
             * or `<yaga-polygon (dashOffsetChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-dashoffset Original Leaflet documentation
             */
        _this.dashOffsetChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill state of the geometry.
             * Use it with `<yaga-polygon [(fill)]="someValue">`
             * or `<yaga-polygon (fillChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-fill Original Leaflet documentation
             */
        _this.fillChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill-color of the geometry.
             * Use it with `<yaga-polygon [(fillColor)]="someValue">`
             * or `<yaga-polygon (fillColorChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillcolor Original Leaflet documentation
             */
        _this.fillColorChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill-opacity of the geometry.
             * Use it with `<yaga-polygon [(fillOpacity)]="someValue">`
             * or `<yaga-polygon (fillOpacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillopacity Original Leaflet documentation
             */
        _this.fillOpacityChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill-rule of the geometry.
             * Use it with `<yaga-polygon [(fillRule)]="someValue">`
             * or `<yaga-polygon (fillRuleChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillrule Original Leaflet documentation
             */
        _this.fillRuleChange = new core_1.EventEmitter();
        // @Output() public rendererChange: EventEmitter<number> = new EventEmitter();
        /**
             * Two-Way bound property for the className of the geometry.
             * Use it with `<yaga-polygon [(className)]="someValue">`
             * or `<yaga-polygon (classNameChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-classname Original Leaflet documentation
             */
        _this.classNameChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the css-style of the geometry.
             * Use it with `<yaga-polygon [(style)]="someValue">`
             * or `<yaga-polygon (styleChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-setstyle Original Leaflet documentation
             */
        _this.styleChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the array of LatLngs of the geometry.
             * Use it with `<yaga-polygon [(latLngs)]="someValue">`
             * or `<yaga-polygon (latLngsChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#polygon-setlatlngs Original Leaflet documentation
             */
        _this.latLngsChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the corresponding GeoJSON.
             * Use it with `<yaga-polygon [(geoJSON)]="someValue">`
             * or `<yaga-polygon (geoJSONChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#polygon-togeojson Original Leaflet documentation
             */
        /* tslint:disable:max-line-length */
        _this.geoJSONChange = new core_1.EventEmitter();
        /* tslint:enable */
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-polygon (add)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-add Original Leaflet documentation
             */
        _this.addEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired remove event.
             * Use it with `<yaga-polygon (remove)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-remove Original Leaflet documentation
             */
        _this.removeEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupopen event.
             * Use it with `<yaga-polygon (popupopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-popupopen Original Leaflet documentation
             */
        _this.popupopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupclose event.
             * Use it with `<yaga-polygon (popupclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-popupclose Original Leaflet documentation
             */
        _this.popupcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipopen event.
             * Use it with `<yaga-polygon (tooltipopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-tooltipopen Original Leaflet documentation
             */
        _this.tooltipopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipclose event.
             * Use it with `<yaga-polygon (tooltipclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-tooltipclose Original Leaflet documentation
             */
        _this.tooltipcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired click event.
             * Use it with `<yaga-polygon (click)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-click Original Leaflet documentation
             */
        _this.clickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired dblclick event.
             * Use it with `<yaga-polygon (dblclick)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-dblclick Original Leaflet documentation
             */
        _this.dblclickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mousedown event.
             * Use it with `<yaga-polygon (mousedown)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-mousedown Original Leaflet documentation
             */
        _this.mousedownEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseover event.
             * Use it with `<yaga-polygon (mouseover)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-mouseover Original Leaflet documentation
             */
        _this.mouseoverEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseout event.
             * Use it with `<yaga-polygon (mouseout)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-mouseout Original Leaflet documentation
             */
        _this.mouseoutEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired contextmenu event.
             * Use it with `<yaga-polygon (contextmenu)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-contextmenu Original Leaflet documentation
             */
        _this.contextmenuEvent = new core_1.EventEmitter();
        layerProvider.ref = _this;
        _this.feature = _this.feature || { type: "Feature", properties: {}, geometry: { type: "Polygon", coordinates: [] } };
        _this.feature.properties = _this.feature.properties || {};
        _this.on("remove", function () {
            _this.displayChange.emit(false);
        });
        _this.on("add", function () {
            _this.displayChange.emit(true);
        });
        _this.layerGroupProvider.ref.addLayer(_this);
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
     * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
     */
    /**
         * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
         */
    PolygonDirective.prototype.ngOnDestroy = /**
         * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
         */
    function () {
        this.removeFrom(this.layerGroupProvider.ref);
    };
    /**
     * Derived method fof the original LatLngs.
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-addlatlngs Original Leaflet documentation
     */
    /**
         * Derived method fof the original LatLngs.
         * @link http://leafletjs.com/reference-1.2.0.html#polygon-addlatlngs Original Leaflet documentation
         */
    PolygonDirective.prototype.setLatLngs = /**
         * Derived method fof the original LatLngs.
         * @link http://leafletjs.com/reference-1.2.0.html#polygon-addlatlngs Original Leaflet documentation
         */
    function (val) {
        _super.prototype.setLatLngs.call(this, val);
        this.latLngsChange.emit(this._latlngs);
        this.geoJSONChange.emit(this.geoJSON);
        return this;
    };
    /**
     * Derived method of the original addLatLng.
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-addlatlngs Original Leaflet documentation
     */
    /**
         * Derived method of the original addLatLng.
         * @link http://leafletjs.com/reference-1.2.0.html#polygon-addlatlngs Original Leaflet documentation
         */
    PolygonDirective.prototype.addLatLng = /**
         * Derived method of the original addLatLng.
         * @link http://leafletjs.com/reference-1.2.0.html#polygon-addlatlngs Original Leaflet documentation
         */
    function (val) {
        _super.prototype.addLatLng.call(this, val);
        this.latLngsChange.emit(this._latlngs);
        this.geoJSONChange.emit(this.geoJSON);
        return this;
    };
    Object.defineProperty(PolygonDirective.prototype, "latLngs", {
        get: function () {
            return this._latlngs;
        },
        set: /**
             * Two-Way bound property for the array of LatLngs for the geometry.
             * Use it with `<yaga-polygon [(latLngs)]="someValue">` or `<yaga-polygon [latLngs]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-setbounds Original Leaflet documentation
             */
        function (val) {
            this.setLatLngs(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "geoJSON", {
        get: function () {
            return this.toGeoJSON();
        },
        set: /**
             * Two-Way bound property for the corresponding GeoJSON.
             * Use it with `<yaga-polygon [(geoJSON)]="someValue">` or `<yaga-polygon [geoJSON]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-togeojson Original Leaflet documentation
             */
        function (val) {
            this.feature.properties = val.properties;
            var geomType = val.geometry.type; // Normally "(Multi)Polygon"
            /* istanbul ignore if */
            if (geomType !== "Polygon" && geomType !== "MultiPolygon") {
                throw new Error("Unsupported geometry type: " + geomType);
            }
            this.setLatLngs(lng2lat_1.lng2lat(val.geometry.coordinates));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setStyle.
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-setstyle Original Leaflet documentation
     */
    /**
         * Derived method of the original setStyle.
         * @link http://leafletjs.com/reference-1.2.0.html#polygon-setstyle Original Leaflet documentation
         */
    PolygonDirective.prototype.setStyle = /**
         * Derived method of the original setStyle.
         * @link http://leafletjs.com/reference-1.2.0.html#polygon-setstyle Original Leaflet documentation
         */
    function (style) {
        _super.prototype.setStyle.call(this, style);
        if (style.hasOwnProperty("stroke")) {
            this.strokeChange.emit(style.stroke);
        }
        if (style.hasOwnProperty("color")) {
            this.colorChange.emit(style.color);
        }
        if (style.hasOwnProperty("weight")) {
            this.weightChange.emit(style.weight);
        }
        if (style.hasOwnProperty("opacity")) {
            this.opacityChange.emit(style.opacity);
        }
        if (style.hasOwnProperty("lineCap")) {
            this.lineCapChange.emit(style.lineCap);
        }
        if (style.hasOwnProperty("lineJoin")) {
            this.lineJoinChange.emit(style.lineJoin);
        }
        if (style.hasOwnProperty("dashArray")) {
            this.dashArrayChange.emit(style.dashArray);
        }
        if (style.hasOwnProperty("dashOffset")) {
            this.dashOffsetChange.emit(style.dashOffset);
        }
        if (style.hasOwnProperty("fill")) {
            this.fillChange.emit(style.fill);
        }
        if (style.hasOwnProperty("fillColor")) {
            this.fillColorChange.emit(style.fillColor);
        }
        if (style.hasOwnProperty("fillOpacity")) {
            this.fillOpacityChange.emit(style.fillOpacity);
        }
        if (style.hasOwnProperty("fillRule")) {
            this.fillRuleChange.emit(style.fillRule);
        }
        if (style.hasOwnProperty("className")) {
            this.classNameChange.emit(style.className);
        }
        this.styleChange.emit(style);
        return this;
    };
    Object.defineProperty(PolygonDirective.prototype, "opacity", {
        get: function () {
            return this.options.opacity;
        },
        set: /**
             * Two-Way bound property for the opacity.
             * Use it with `<yaga-polygon [(opacity)]="someValue">` or `<yaga-polygon [opacity]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-opacity Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ opacity: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "stroke", {
        get: function () {
            return this.options.stroke;
        },
        set: /**
             * Two-Way bound property for the stroke.
             * Use it with `<yaga-polygon [(stroke)]="someValue">` or `<yaga-polygon [stroke]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-stroke Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ stroke: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "color", {
        get: function () {
            return this.options.color;
        },
        set: /**
             * Two-Way bound property for the color.
             * Use it with `<yaga-polygon [(color)]="someValue">` or `<yaga-polygon [color]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-color Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ color: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "weight", {
        get: function () {
            return this.options.weight;
        },
        set: /**
             * Two-Way bound property for the weight.
             * Use it with `<yaga-polygon [(weight)]="someValue">` or `<yaga-polygon [weight]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-weight Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ weight: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "lineCap", {
        get: function () {
            return this.options.lineCap;
        },
        set: /**
             * Two-Way bound property for the lineCap.
             * Use it with `<yaga-polygon [(lineCap)]="someValue">` or `<yaga-polygon [lineCap]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-linecap Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ lineCap: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "lineJoin", {
        get: function () {
            return this.options.lineJoin;
        },
        set: /**
             * Two-Way bound property for the lineJoin.
             * Use it with `<yaga-polygon [(lineJoin)]="someValue">` or `<yaga-polygon [lineJoin]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-linejoin Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ lineJoin: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "dashArray", {
        get: function () {
            return this.options.dashArray;
        },
        set: /**
             * Two-Way bound property for the dashArray.
             * Use it with `<yaga-polygon [(dashArray)]="someValue">` or `<yaga-polygon [dashArray]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-dasharray Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ dashArray: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "dashOffset", {
        get: function () {
            return this.options.dashOffset;
        },
        set: /**
             * Two-Way bound property for the dashOffset.
             * Use it with `<yaga-polygon [(dashOffset)]="someValue">` or `<yaga-polygon [dashOffset]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-dashoffset Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ dashOffset: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "fill", {
        get: function () {
            return this.options.fill;
        },
        set: /**
             * Two-Way bound property for the fill.
             * Use it with `<yaga-polygon [(fill)]="someValue">` or `<yaga-polygon [fill]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-fill Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fill: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "fillColor", {
        get: function () {
            return this.options.fillColor;
        },
        set: /**
             * Two-Way bound property for the fillColor.
             * Use it with `<yaga-polygon [(fillColor)]="someValue">` or `<yaga-polygon [fillColor]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillcolor Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fillColor: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "fillOpacity", {
        get: function () {
            return this.options.fillOpacity;
        },
        set: /**
             * Two-Way bound property for the fillOpacity.
             * Use it with `<yaga-polygon [(fillOpacity)]="someValue">` or `<yaga-polygon [fillOpacity]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillopacity Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fillOpacity: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "fillRule", {
        get: function () {
            return this.options.fillRule;
        },
        set: /**
             * Two-Way bound property for the fillRule.
             * Use it with `<yaga-polygon [(fillRule)]="someValue">` or `<yaga-polygon [fillRule]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillrule Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fillRule: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "className", {
        get: function () {
            return this.options.className;
        },
        set: /**
             * Two-Way bound property for the className.
             * Use it with `<yaga-polygon [(className)]="someValue">` or `<yaga-polygon [className]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-classname Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ className: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "style", {
        get: function () {
            return this.options;
        },
        set: /**
             * Two-Way bound property for the opacity.
             * Use it with `<yaga-polygon [(style)]="someValue">` or `<yaga-polygon [style]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-style Original Leaflet documentation
             */
        function (val) {
            this.setStyle(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "display", {
        get: function () {
            var container;
            try {
                container = this.getElement();
            }
            catch (err) {
                /* istanbul ignore next */
                return false;
            }
            return container.style.display !== "none" && !!container.parentElement;
        },
        set: /**
             * Two-Way bound property for the display state.
             * Use it with `<yaga-polygon [(display)]="someValue">` or `<yaga-polygon [display]="someValue">`
             */
        function (val) {
            var isDisplayed = this.display;
            if (isDisplayed === val) {
                return;
            }
            var container;
            try {
                container = this.getElement();
            }
            catch (err) {
                /* istanbul ignore next */
                return;
            }
            this.displayChange.emit(val);
            container.style.display = val ? "" : "none";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "interactive", {
        get: function () {
            return this.options.interactive;
        },
        set: /**
             * Input for the interactive state.
             * Use it with `<yaga-polygon [interactive]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-interactive Original Leaflet documentation
             */
        function (val) {
            var map = this._map;
            this.options.interactive = val;
            this.onRemove(map);
            this.onAdd(map);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "smoothFactor", {
        get: function () {
            return this.options.smoothFactor;
        },
        set: /**
             * Input for the smoothFactor.
             * Use it with `<yaga-polygon [smoothFactor]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-smoothfactor Original Leaflet documentation
             */
        function (val) {
            this.options.smoothFactor = val;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "noClip", {
        get: function () {
            return this.options.noClip;
        },
        set: /**
             * Input for the noClip state.
             * Use it with `<yaga-polygon [noClip]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#polygon-noclip Original Leaflet documentation
             */
        function (val) {
            this.options.noClip = val;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolygonDirective.prototype, "properties", {
        get: function () {
            return this.feature.properties;
        },
        set: /**
             * Input for the GeoJSON properties.
             * Use it with `<yaga-polygon [properties]="someValue">`
             */
        function (val) {
            this.feature.properties = val;
            this.geoJSONChange.emit(this.geoJSON);
        },
        enumerable: true,
        configurable: true
    });
    PolygonDirective.decorators = [
        { type: core_1.Directive, args: [{
                    providers: [layer_provider_1.LayerProvider],
                    selector: "yaga-polygon",
                },] },
    ];
    /** @nocollapse */
    PolygonDirective.ctorParameters = function () { return [
        { type: layer_group_provider_1.LayerGroupProvider, },
        { type: layer_provider_1.LayerProvider, },
    ]; };
    PolygonDirective.propDecorators = {
        "displayChange": [{ type: core_1.Output },],
        "strokeChange": [{ type: core_1.Output },],
        "colorChange": [{ type: core_1.Output },],
        "weightChange": [{ type: core_1.Output },],
        "opacityChange": [{ type: core_1.Output },],
        "lineCapChange": [{ type: core_1.Output },],
        "lineJoinChange": [{ type: core_1.Output },],
        "dashArrayChange": [{ type: core_1.Output },],
        "dashOffsetChange": [{ type: core_1.Output },],
        "fillChange": [{ type: core_1.Output },],
        "fillColorChange": [{ type: core_1.Output },],
        "fillOpacityChange": [{ type: core_1.Output },],
        "fillRuleChange": [{ type: core_1.Output },],
        "classNameChange": [{ type: core_1.Output },],
        "styleChange": [{ type: core_1.Output },],
        "latLngsChange": [{ type: core_1.Output },],
        "geoJSONChange": [{ type: core_1.Output },],
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
        "latLngs": [{ type: core_1.Input },],
        "geoJSON": [{ type: core_1.Input },],
        "opacity": [{ type: core_1.Input },],
        "stroke": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "weight": [{ type: core_1.Input },],
        "lineCap": [{ type: core_1.Input },],
        "lineJoin": [{ type: core_1.Input },],
        "dashArray": [{ type: core_1.Input },],
        "dashOffset": [{ type: core_1.Input },],
        "fill": [{ type: core_1.Input },],
        "fillColor": [{ type: core_1.Input },],
        "fillOpacity": [{ type: core_1.Input },],
        "fillRule": [{ type: core_1.Input },],
        "className": [{ type: core_1.Input },],
        "style": [{ type: core_1.Input },],
        "display": [{ type: core_1.Input },],
        "interactive": [{ type: core_1.Input },],
        "smoothFactor": [{ type: core_1.Input },],
        "noClip": [{ type: core_1.Input },],
        "properties": [{ type: core_1.Input },],
    };
    return PolygonDirective;
}(leaflet_1.Polygon));
exports.PolygonDirective = PolygonDirective;
//# sourceMappingURL=polygon.directive.js.map