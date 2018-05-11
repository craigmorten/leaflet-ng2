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
 * Angular2 directive for Leaflet circles.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-circle
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
 *         [(className)]="..."
 *         [(style)]="..."
 *         [(position)]="..."
 *         [(lat)]="..."
 *         [(lng)]="..."
 *         [(radius)]="..."
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
 *         [properties]="..."
 *         >
 *     </yaga-circle>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#circle Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=Tile-Layer%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/tile-layer.directive.js.html Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/circledirective.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/tile-layer-directive
 */
var CircleDirective = /** @class */ (function (_super) {
    __extends(CircleDirective, _super);
    function CircleDirective(layerGroupProvider, layerProvider) {
        var _this = _super.call(this, [0, 0]) || this;
        _this.layerGroupProvider = layerGroupProvider;
        /**
             * Two-Way bound property for the display status of the geometry.
             * Use it with `<yaga-circle [(display)]="someValue">`
             * or `<yaga-circle (displayChange)="processEvent($event)">`
             */
        _this.displayChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the stroke state of the geometry.
             * Use it with `<yaga-circle [(stroke)]="someValue">`
             * or `<yaga-circle (strokeChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-stroke Original Leaflet documentation
             */
        _this.strokeChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the line-color of the geometry.
             * Use it with `<yaga-circle [(color)]="someValue">`
             * or `<yaga-circle (colorChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-color Original Leaflet documentation
             */
        _this.colorChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the weight of the geometry.
             * Use it with `<yaga-circle [(weight)]="someValue">`
             * or `<yaga-circle (weightChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-weight Original Leaflet documentation
             */
        _this.weightChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the opacity of the geometry.
             * Use it with `<yaga-circle [(opacity)]="someValue">`
             * or `<yaga-circle (opacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-opacity Original Leaflet documentation
             */
        _this.opacityChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the lineCap of the geometry.
             * Use it with `<yaga-circle [(lineCap)]="someValue">`
             * or `<yaga-circle (lineCapChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-linecap Original Leaflet documentation
             */
        _this.lineCapChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the lineJoin of the geometry.
             * Use it with `<yaga-circle [(lineJoin)]="someValue">`
             * or `<yaga-circle (lineJoinChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-linejoin Original Leaflet documentation
             */
        _this.lineJoinChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the dashArray of the geometry.
             * Use it with `<yaga-circle [(dashArray)]="someValue">`
             * or `<yaga-circle (dashArrayChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-dasharray Original Leaflet documentation
             */
        _this.dashArrayChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the dashOffset of the geometry.
             * Use it with `<yaga-circle [(dashOffset)]="someValue">`
             * or `<yaga-circle (dashOffsetChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-dashoffset Original Leaflet documentation
             */
        _this.dashOffsetChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill state of the geometry.
             * Use it with `<yaga-circle [(fill)]="someValue">`
             * or `<yaga-circle (fillChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-fill Original Leaflet documentation
             */
        _this.fillChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill-color of the geometry.
             * Use it with `<yaga-circle [(fillColor)]="someValue">`
             * or `<yaga-circle (fillColorChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-fillcolor Original Leaflet documentation
             */
        _this.fillColorChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill-opacity of the geometry.
             * Use it with `<yaga-circle [(fillOpacity)]="someValue">`
             * or `<yaga-circle (fillOpacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-fillopacity Original Leaflet documentation
             */
        _this.fillOpacityChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill-rule of the geometry.
             * Use it with `<yaga-circle [(fillRule)]="someValue">`
             * or `<yaga-circle (fillRuleChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-fillrule Original Leaflet documentation
             */
        _this.fillRuleChange = new core_1.EventEmitter();
        // @Output() public rendererChange: EventEmitter<number> = new EventEmitter();
        /**
             * Two-Way bound property for the className of the geometry.
             * Use it with `<yaga-circle [(className)]="someValue">`
             * or `<yaga-circle (classNameChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-classname Original Leaflet documentation
             */
        _this.classNameChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the css-style of the geometry.
             * Use it with `<yaga-circle [(style)]="someValue">`
             * or `<yaga-circle (styleChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-setstyle Original Leaflet documentation
             */
        _this.styleChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the latlng-position of the geometry.
             * Use it with `<yaga-circle [(position)]="someValue">`
             * or `<yaga-circle (positionChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
             */
        _this.positionChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the latitude of the geometry.
             * Use it with `<yaga-circle [(lat)]="someValue">`
             * or `<yaga-circle (latChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
             */
        _this.latChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the longitude of the geometry.
             * Use it with `<yaga-circle [(lng)]="someValue">`
             * or `<yaga-circle (lngChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
             */
        _this.lngChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the radius of the geometry.
             * Use it with `<yaga-circle [(radius)]="someValue">`
             * or `<yaga-circle (radiusChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-setradius Original Leaflet documentation
             */
        _this.radiusChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the geometry represented as GeoJSON.
             * Use it with `<yaga-circle [(geoJSON)]="someValue">`
             * or `<yaga-circle (geoJSONChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-togeojson Original Leaflet documentation
             */
        _this.geoJSONChange = new core_1.EventEmitter();
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-circle (add)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-add Original Leaflet documentation
             */
        _this.addEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired remove event.
             * Use it with `<yaga-circle (remove)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-remove Original Leaflet documentation
             */
        _this.removeEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupopen event.
             * Use it with `<yaga-circle (popupopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-popupopen Original Leaflet documentation
             */
        _this.popupopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupclose event.
             * Use it with `<yaga-circle (popupclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-popupclose Original Leaflet documentation
             */
        _this.popupcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipopen event.
             * Use it with `<yaga-circle (tooltipopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-tooltipopen Original Leaflet documentation
             */
        _this.tooltipopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipclose event.
             * Use it with `<yaga-circle (tooltipclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-tooltipclose Original Leaflet documentation
             */
        _this.tooltipcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired click event.
             * Use it with `<yaga-circle (click)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-click Original Leaflet documentation
             */
        _this.clickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired dblclick event.
             * Use it with `<yaga-circle (dblclick)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-dblclick Original Leaflet documentation
             */
        _this.dblclickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mousedown event.
             * Use it with `<yaga-circle (mousedown)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-mousedown Original Leaflet documentation
             */
        _this.mousedownEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseover event.
             * Use it with `<yaga-circle (mouseover)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-mouseover Original Leaflet documentation
             */
        _this.mouseoverEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseout event.
             * Use it with `<yaga-circle (mouseout)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-mouseout Original Leaflet documentation
             */
        _this.mouseoutEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired contextmenu event.
             * Use it with `<yaga-circle (contextmenu)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-contextmenu Original Leaflet documentation
             */
        _this.contextmenuEvent = new core_1.EventEmitter();
        _this.initialized = false;
        layerProvider.ref = _this;
        _this.feature = _this.feature || { type: "Feature", properties: {}, geometry: { type: "Point", coordinates: [] } };
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
     * Internal method that provides the initialization of the child popup or tooltip
     */
    /**
         * Internal method that provides the initialization of the child popup or tooltip
         */
    CircleDirective.prototype.ngAfterContentInit = /**
         * Internal method that provides the initialization of the child popup or tooltip
         */
    function () {
        this.initialized = true;
    };
    /**
     * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
     */
    /**
         * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
         */
    CircleDirective.prototype.ngOnDestroy = /**
         * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
         */
    function () {
        this.removeFrom(this.layerGroupProvider.ref);
    };
    /**
     * Derived method of the original setLatLng.
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
     */
    /**
         * Derived method of the original setLatLng.
         * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
         */
    CircleDirective.prototype.setLatLng = /**
         * Derived method of the original setLatLng.
         * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
         */
    function (val) {
        _super.prototype.setLatLng.call(this, val);
        if (!this.initialized) {
            return this;
        }
        this.positionChange.emit(this._latlng);
        this.latChange.emit(this._latlng.lat);
        this.lngChange.emit(this._latlng.lng);
        this.geoJSONChange.emit(this.geoJSON);
        return this;
    };
    Object.defineProperty(CircleDirective.prototype, "position", {
        get: function () {
            // it is always a LatLng!
            return this._latlng;
        },
        set: /**
             * Two-Way bound property for the position of the circle.
             * Use it with `<yaga-circle [(position)]="someValue">` or `<yaga-circle [position]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-l-circle Original Leaflet documentation
             */
        function (val) {
            this.setLatLng(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "lat", {
        get: function () {
            return this._latlng.lat;
        },
        set: /**
             * Two-Way bound property for the latitude (position) of the circle.
             * Use it with `<yaga-circle [(lat)]="someValue">` or `<yaga-circle [lat]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-l-circle Original Leaflet documentation
             */
        function (val) {
            this.setLatLng([val, this.lng]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "lng", {
        get: function () {
            return this._latlng.lng;
        },
        set: /**
             * Two-Way bound property for the longitude (position) of the circle.
             * Use it with `<yaga-circle [(lng)]="someValue">` or `<yaga-circle [lng]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-l-circle Original Leaflet documentation
             */
        function (val) {
            this.setLatLng([this.lat, val]);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setRadius.
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setradius Original Leaflet documentation
     */
    /**
         * Derived method of the original setRadius.
         * @link http://leafletjs.com/reference-1.2.0.html#circle-setradius Original Leaflet documentation
         */
    CircleDirective.prototype.setRadius = /**
         * Derived method of the original setRadius.
         * @link http://leafletjs.com/reference-1.2.0.html#circle-setradius Original Leaflet documentation
         */
    function (val) {
        _super.prototype.setRadius.call(this, val);
        this.radiusChange.emit(val);
        return this;
    };
    Object.defineProperty(CircleDirective.prototype, "radius", {
        get: function () {
            return this.getRadius();
        },
        set: /**
             * Two-Way bound property for the radius of the circle.
             * Use it with `<yaga-circle [(radius)]="someValue">` or `<yaga-circle [radius]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-radius Original Leaflet documentation
             */
        function (val) {
            this.setRadius(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "geoJSON", {
        get: function () {
            return this.toGeoJSON();
        },
        set: /**
             * Two-Way bound property for the geoJSON data.
             * Use it with `<yaga-circle [(geoJSON)]="someValue">` or `<yaga-circle [geoJSONChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-togeojson Original Leaflet documentation
             */
        function (val) {
            this.feature.properties = val.properties;
            var geomType = val.geometry.type; // Normally "Point"
            /* istanbul ignore if */
            if (geomType !== "Point") {
                throw new Error("Unsupported geometry type: " + geomType);
            }
            this.setLatLng(lng2lat_1.lng2lat(val.geometry.coordinates));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setStyle.
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setstyle Original Leaflet documentation
     */
    /**
         * Derived method of the original setStyle.
         * @link http://leafletjs.com/reference-1.2.0.html#circle-setstyle Original Leaflet documentation
         */
    CircleDirective.prototype.setStyle = /**
         * Derived method of the original setStyle.
         * @link http://leafletjs.com/reference-1.2.0.html#circle-setstyle Original Leaflet documentation
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
    Object.defineProperty(CircleDirective.prototype, "opacity", {
        get: function () {
            return this.options.opacity;
        },
        set: /**
             * Two-Way bound property for the opacity.
             * Use it with `<yaga-circle [(opacity)]="someValue">` or `<yaga-circle [opacityChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-opacity Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ opacity: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "stroke", {
        get: function () {
            return this.options.stroke;
        },
        set: /**
             * Two-Way bound property for the stroke.
             * Use it with `<yaga-circle [(stroke)]="someValue">` or `<yaga-circle [strokeChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-stroke Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ stroke: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "color", {
        get: function () {
            return this.options.color;
        },
        set: /**
             * Two-Way bound property for the color.
             * Use it with `<yaga-circle [(color)]="someValue">` or `<yaga-circle [colorChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-color Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ color: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "weight", {
        get: function () {
            return this.options.weight;
        },
        set: /**
             * Two-Way bound property for the weight.
             * Use it with `<yaga-circle [(weight)]="someValue">` or `<yaga-circle [weightChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-weight Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ weight: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "lineCap", {
        get: function () {
            return this.options.lineCap;
        },
        set: /**
             * Two-Way bound property for the lineCap.
             * Use it with `<yaga-circle [(lineCap)]="someValue">` or `<yaga-circle [lineCapChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-linecap Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ lineCap: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "lineJoin", {
        get: function () {
            return this.options.lineJoin;
        },
        set: /**
             * Two-Way bound property for the lineJoin.
             * Use it with `<yaga-circle [(lineJoin)]="someValue">` or `<yaga-circle [lineJoinChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-linejoin Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ lineJoin: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "dashArray", {
        get: function () {
            return this.options.dashArray;
        },
        set: /**
             * Two-Way bound property for the dashArray.
             * Use it with `<yaga-circle [(dashArray)]="someValue">` or `<yaga-circle [dashArrayChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-dasharray Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ dashArray: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "dashOffset", {
        get: function () {
            return this.options.dashOffset;
        },
        set: /**
             * Two-Way bound property for the dashOffset.
             * Use it with `<yaga-circle [(dashOffset)]="someValue">` or `<yaga-circle [dashOffsetChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-dashoffset Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ dashOffset: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "fill", {
        get: function () {
            return this.options.fill;
        },
        set: /**
             * Two-Way bound property for the fill.
             * Use it with `<yaga-circle [(fill)]="someValue">` or `<yaga-circle [fillChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-fill Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fill: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "fillColor", {
        get: function () {
            return this.options.fillColor;
        },
        set: /**
             * Two-Way bound property for the fillColor.
             * Use it with `<yaga-circle [(fillColor)]="someValue">` or `<yaga-circle [fillColorChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-fillcolor Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fillColor: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "fillOpacity", {
        get: function () {
            return this.options.fillOpacity;
        },
        set: /**
             * Two-Way bound property for the fillOpacity.
             * Use it with `<yaga-circle [(fillOpacity)]="someValue">` or `<yaga-circle [fillOpacityChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-fillopacity Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fillOpacity: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "fillRule", {
        get: function () {
            return this.options.fillRule;
        },
        set: /**
             * Two-Way bound property for the fillRule.
             * Use it with `<yaga-circle [(fillRule)]="someValue">` or `<yaga-circle [fillRuleChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-fillrule Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fillRule: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "className", {
        get: function () {
            return this.options.className;
        },
        set: /**
             * Two-Way bound property for the className.
             * Use it with `<yaga-circle [(className)]="someValue">` or `<yaga-circle [classNameChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-classname Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ className: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "style", {
        get: function () {
            return this.options;
        },
        set: /**
             * Two-Way bound property for the opacity.
             * Use it with `<yaga-circle [(style)]="someValue">` or `<yaga-circle [styleChange]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-style Original Leaflet documentation
             */
        function (val) {
            this.setStyle(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleDirective.prototype, "display", {
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
             * Use it with `<yaga-circle [(display)]="someValue">` or `<yaga-circle [displayChange]="someValue">`
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
    Object.defineProperty(CircleDirective.prototype, "interactive", {
        get: function () {
            return this.options.interactive;
        },
        set: /**
             * Input for the GeoJSON properties.
             * Use it with `<yaga-circle [interactive]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#circle-interactive Original Leaflet documentation
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
    Object.defineProperty(CircleDirective.prototype, "properties", {
        get: function () {
            return this.feature.properties;
        },
        set: /**
             * Input for the GeoJSON properties.
             * Use it with `<yaga-circle [properties]="someValue">`
             */
        function (val) {
            this.feature.properties = val;
            this.geoJSONChange.emit(this.geoJSON);
        },
        enumerable: true,
        configurable: true
    });
    CircleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    providers: [layer_provider_1.LayerProvider],
                    selector: "yaga-circle",
                },] },
    ];
    /** @nocollapse */
    CircleDirective.ctorParameters = function () { return [
        { type: layer_group_provider_1.LayerGroupProvider, },
        { type: layer_provider_1.LayerProvider, },
    ]; };
    CircleDirective.propDecorators = {
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
        "positionChange": [{ type: core_1.Output },],
        "latChange": [{ type: core_1.Output },],
        "lngChange": [{ type: core_1.Output },],
        "radiusChange": [{ type: core_1.Output },],
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
        "position": [{ type: core_1.Input },],
        "lat": [{ type: core_1.Input },],
        "lng": [{ type: core_1.Input },],
        "radius": [{ type: core_1.Input },],
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
        "properties": [{ type: core_1.Input },],
    };
    return CircleDirective;
}(leaflet_1.Circle));
exports.CircleDirective = CircleDirective;
//# sourceMappingURL=circle.directive.js.map