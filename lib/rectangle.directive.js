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
var lng2lat_1 = require("./lng2lat");
/**
 * Angular2 directive for Leaflet rectangles.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-rectangle
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
 *         [(bounds)]="..."
 *         [(north)]="..."
 *         [(east)]="..."
 *         [(south)]="..."
 *         [(west)]="..."
 *         [(geoJSON)]="..."
 *
 *         (add)="..."
 *         (remove)="..."
 *         (popupopen)="..."
 *         (popupclose)="..."
 *         (tooltipopen)="..."
 *         (tooltipclose)="..."
 *         (click)="..."
 *         (dbclick)="..."
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
 *     </yaga-rectangle>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#rectangle Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=Rectangle%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/rectangle.directive.js.html Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/rectangledirective.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/rectangle-directive
 */
var RectangleDirective = /** @class */ (function (_super) {
    __extends(RectangleDirective, _super);
    function RectangleDirective(layerGroupProvider) {
        var _this = _super.call(this, leaflet_1.latLngBounds([0, 0], [0, 0])) || this;
        /**
             * Two-Way bound property for the display status of the geometry.
             * Use it with `<yaga-rectangle [(display)]="someValue">`
             * or `<yaga-rectangle (displayChange)="processEvent($event)">`
             */
        _this.displayChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the stroke state of the geometry.
             * Use it with `<yaga-rectangle [(stroke)]="someValue">`
             * or `<yaga-rectangle (strokeChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-stroke Original Leaflet documentation
             */
        _this.strokeChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the line-color of the geometry.
             * Use it with `<yaga-rectangle [(color)]="someValue">`
             * or `<yaga-rectangle (colorChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-color Original Leaflet documentation
             */
        _this.colorChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the weight of the geometry.
             * Use it with `<yaga-rectangle [(weight)]="someValue">`
             * or `<yaga-rectangle (weightChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-weight Original Leaflet documentation
             */
        _this.weightChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the opacity of the geometry.
             * Use it with `<yaga-rectangle [(opacity)]="someValue">`
             * or `<yaga-rectangle (opacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-opacity Original Leaflet documentation
             */
        _this.opacityChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the lineCap of the geometry.
             * Use it with `<yaga-rectangle [(lineCap)]="someValue">`
             * or `<yaga-rectangle (lineCapChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-linecap Original Leaflet documentation
             */
        _this.lineCapChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the lineJoin of the geometry.
             * Use it with `<yaga-rectangle [(lineJoin)]="someValue">`
             * or `<yaga-rectangle (lineJoinChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-linejoin Original Leaflet documentation
             */
        _this.lineJoinChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the dashArray of the geometry.
             * Use it with `<yaga-rectangle [(dashArray)]="someValue">`
             * or `<yaga-rectangle (dashArrayChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dasharray Original Leaflet documentation
             */
        _this.dashArrayChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the dashOffset of the geometry.
             * Use it with `<yaga-rectangle [(dashOffset)]="someValue">`
             * or `<yaga-rectangle (dashOffsetChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dashoffset Original Leaflet documentation
             */
        _this.dashOffsetChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill state of the geometry.
             * Use it with `<yaga-rectangle [(fill)]="someValue">`
             * or `<yaga-rectangle (fillChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fill Original Leaflet documentation
             */
        _this.fillChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill-color of the geometry.
             * Use it with `<yaga-rectangle [(fillColor)]="someValue">`
             * or `<yaga-rectangle (fillColorChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillcolor Original Leaflet documentation
             */
        _this.fillColorChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill-opacity of the geometry.
             * Use it with `<yaga-rectangle [(fillOpacity)]="someValue">`
             * or `<yaga-rectangle (fillOpacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillopacity Original Leaflet documentation
             */
        _this.fillOpacityChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the fill-rule of the geometry.
             * Use it with `<yaga-rectangle [(fillRule)]="someValue">`
             * or `<yaga-rectangle (fillRuleChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillrule Original Leaflet documentation
             */
        _this.fillRuleChange = new core_1.EventEmitter();
        // @Output() public rendererChange: EventEmitter<number> = new EventEmitter();
        /**
             * Two-Way bound property for the className of the geometry.
             * Use it with `<yaga-rectangle [(className)]="someValue">`
             * or `<yaga-rectangle (classNameChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-classname Original Leaflet documentation
             */
        _this.classNameChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the css-style of the geometry.
             * Use it with `<yaga-rectangle [(style)]="someValue">`
             * or `<yaga-rectangle (styleChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setstyle Original Leaflet documentation
             */
        _this.styleChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the array of LatLngs of the geometry.
             * Use it with `<yaga-rectangle [(latLngs)]="someValue">`
             * or `<yaga-rectangle (latLngsChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setlatlngs Original Leaflet documentation
             */
        _this.latLngsChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the bounds of the rectangle.
             * Use it with `<yaga-rectangle [(bounds)]="someValue">`
             * or `<yaga-rectangle (boundsChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
             */
        _this.boundsChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the north of the bounds of the rectangle.
             * Use it with `<yaga-rectangle [(north)]="someValue">`
             * or `<yaga-rectangle (northChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
             */
        _this.northChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the east of the bounds of the rectangle.
             * Use it with `<yaga-rectangle [(east)]="someValue">`
             * or `<yaga-rectangle (eastChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
             */
        _this.eastChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the south of the bounds of the rectangle.
             * Use it with `<yaga-rectangle [(south)]="someValue">`
             * or `<yaga-rectangle (southChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
             */
        _this.southChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the west of the bounds of the rectangle.
             * Use it with `<yaga-rectangle [(west)]="someValue">`
             * or `<yaga-rectangle (westChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
             */
        _this.westChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the corresponding GeoJSON.
             * Use it with `<yaga-rectangle [(geoJSON)]="someValue">`
             * or `<yaga-rectangle (geoJSONChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#rectangle-togeojson Original Leaflet documentation
             */
        /* tslint:disable:max-line-length */
        _this.geoJSONChange = new core_1.EventEmitter();
        /* tslint:enable */
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-rectangle (add)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-add Original Leaflet documentation
             */
        _this.addEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired remove event.
             * Use it with `<yaga-rectangle (remove)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-remove Original Leaflet documentation
             */
        _this.removeEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupopen event.
             * Use it with `<yaga-rectangle (popupopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-popupopen Original Leaflet documentation
             */
        _this.popupopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupclose event.
             * Use it with `<yaga-rectangle (popupclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-popupclose Original Leaflet documentation
             */
        _this.popupcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipopen event.
             * Use it with `<yaga-rectangle (tooltipopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-tooltipopen Original Leaflet documentation
             */
        _this.tooltipopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipclose event.
             * Use it with `<yaga-rectangle (tooltipclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-tooltipclose Original Leaflet documentation
             */
        _this.tooltipcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired click event.
             * Use it with `<yaga-rectangle (click)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-click Original Leaflet documentation
             */
        _this.clickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired dbclick event.
             * Use it with `<yaga-rectangle (dbclick)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dbclick Original Leaflet documentation
             */
        _this.dbclickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mousedown event.
             * Use it with `<yaga-rectangle (mousedown)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-mousedown Original Leaflet documentation
             */
        _this.mousedownEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseover event.
             * Use it with `<yaga-rectangle (mouseover)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-mouseover Original Leaflet documentation
             */
        _this.mouseoverEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseout event.
             * Use it with `<yaga-rectangle (mouseout)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-mouseout Original Leaflet documentation
             */
        _this.mouseoutEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired contextmenu event.
             * Use it with `<yaga-rectangle (contextmenu)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-contextmenu Original Leaflet documentation
             */
        _this.contextmenuEvent = new core_1.EventEmitter();
        _this.initialized = false;
        _this.feature = _this.feature || { type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [] } };
        _this.feature.properties = _this.feature.properties || {};
        _this.on('remove', function () {
            _this.displayChange.emit(false);
        });
        _this.on('add', function () {
            _this.displayChange.emit(true);
        });
        layerGroupProvider.ref.addLayer(_this);
        // Events
        // Events
        _this.on('add', function (event) {
            _this.addEvent.emit(event);
        });
        _this.on('remove', function (event) {
            _this.removeEvent.emit(event);
        });
        _this.on('popupopen', function (event) {
            _this.popupopenEvent.emit(event);
        });
        _this.on('popupclose', function (event) {
            _this.popupcloseEvent.emit(event);
        });
        _this.on('tooltipopen', function (event) {
            _this.tooltipopenEvent.emit(event);
        });
        _this.on('tooltipclose', function (event) {
            _this.tooltipcloseEvent.emit(event);
        });
        _this.on('click', function (event) {
            _this.clickEvent.emit(event);
        });
        _this.on('dbclick', function (event) {
            _this.dbclickEvent.emit(event);
        });
        _this.on('mousedown', function (event) {
            _this.mousedownEvent.emit(event);
        });
        _this.on('mouseover', function (event) {
            _this.mouseoverEvent.emit(event);
        });
        _this.on('mouseout', function (event) {
            _this.mouseoutEvent.emit(event);
        });
        _this.on('contextmenu', function (event) {
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
    RectangleDirective.prototype.ngAfterContentInit = /**
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
    RectangleDirective.prototype.ngOnDestroy = /**
         * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
         */
    function () {
        this.removeFrom(this._map);
    };
    /**
     * Derived method of the original setBounds.
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
     */
    /**
         * Derived method of the original setBounds.
         * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
         */
    RectangleDirective.prototype.setBounds = /**
         * Derived method of the original setBounds.
         * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
         */
    function (val) {
        _super.prototype.setBounds.call(this, val);
        if (!this.initialized) {
            return this;
        }
        this.boundsChange.emit(this.getBounds());
        this.northChange.emit(this.getBounds().getNorth());
        this.eastChange.emit(this.getBounds().getEast());
        this.southChange.emit(this.getBounds().getSouth());
        this.westChange.emit(this.getBounds().getWest());
        return this;
    };
    Object.defineProperty(RectangleDirective.prototype, "bounds", {
        get: function () {
            return this.getBounds();
        },
        set: /**
             * Two-Way bound property for the bounds.
             * Use it with `<yaga-rectangle [(bounds)]="someValue">` or `<yaga-rectangle [bounds]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
             */
        function (val) {
            this.setBounds(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "north", {
        get: function () {
            return this.getBounds().getNorth();
        },
        set: /**
             * Two-Way bound property for the north of the bounds.
             * Use it with `<yaga-rectangle [(north)]="someValue">` or `<yaga-rectangle [north]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
             */
        function (val) {
            var oldBounds = this.getBounds();
            // super because we call the change listeners ourselves
            _super.prototype.setBounds.call(this, leaflet_1.latLngBounds([
                [oldBounds.getSouth(), oldBounds.getWest()],
                [val, oldBounds.getEast()],
            ]));
            this.boundsChange.emit(this.bounds);
            this.northChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "east", {
        get: function () {
            return this.getBounds().getEast();
        },
        set: /**
             * Two-Way bound property for the east of the bounds.
             * Use it with `<yaga-rectangle [(east)]="someValue">` or `<yaga-rectangle [east]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
             */
        function (val) {
            var oldBounds = this.getBounds();
            _super.prototype.setBounds.call(this, leaflet_1.latLngBounds([
                [oldBounds.getSouth(), oldBounds.getWest()],
                [oldBounds.getNorth(), val],
            ]));
            this.boundsChange.emit(this.bounds);
            this.eastChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "south", {
        get: function () {
            return this.getBounds().getSouth();
        },
        set: /**
             * Two-Way bound property for the south of the bounds.
             * Use it with `<yaga-rectangle [(south)]="someValue">` or `<yaga-rectangle [south]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
             */
        function (val) {
            var oldBounds = this.getBounds();
            _super.prototype.setBounds.call(this, leaflet_1.latLngBounds([
                [val, oldBounds.getWest()],
                [oldBounds.getNorth(), oldBounds.getEast()],
            ]));
            this.boundsChange.emit(this.bounds);
            this.southChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "west", {
        get: function () {
            return this.getBounds().getWest();
        },
        set: /**
             * Two-Way bound property for the west of the bounds.
             * Use it with `<yaga-rectangle [(west)]="someValue">` or `<yaga-rectangle [west]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
             */
        function (val) {
            var oldBounds = this.getBounds();
            _super.prototype.setBounds.call(this, leaflet_1.latLngBounds([
                [oldBounds.getSouth(), val],
                [oldBounds.getNorth(), oldBounds.getEast()],
            ]));
            this.boundsChange.emit(this.bounds);
            this.westChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method fof the original LatLngs.
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-addlatlngs Original Leaflet documentation
     */
    /**
         * Derived method fof the original LatLngs.
         * @link http://leafletjs.com/reference-1.2.0.html#rectangle-addlatlngs Original Leaflet documentation
         */
    RectangleDirective.prototype.setLatLngs = /**
         * Derived method fof the original LatLngs.
         * @link http://leafletjs.com/reference-1.2.0.html#rectangle-addlatlngs Original Leaflet documentation
         */
    function (val) {
        _super.prototype.setLatLngs.call(this, val);
        this.latLngsChange.emit(this._latlngs);
        this.geoJSONChange.emit(this.geoJSON);
        return this;
    };
    /**
     * Derived method of the original addLatLng.
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-addlatlngs Original Leaflet documentation
     */
    /**
         * Derived method of the original addLatLng.
         * @link http://leafletjs.com/reference-1.2.0.html#rectangle-addlatlngs Original Leaflet documentation
         */
    RectangleDirective.prototype.addLatLng = /**
         * Derived method of the original addLatLng.
         * @link http://leafletjs.com/reference-1.2.0.html#rectangle-addlatlngs Original Leaflet documentation
         */
    function (val) {
        _super.prototype.addLatLng.call(this, val);
        this.latLngsChange.emit(this._latlngs);
        this.geoJSONChange.emit(this.geoJSON);
        return this;
    };
    Object.defineProperty(RectangleDirective.prototype, "latLngs", {
        get: function () {
            return this._latlngs;
        },
        set: /**
             * Two-Way bound property for the array of LatLngs for the geometry.
             * Use it with `<yaga-rectangle [(latLngs)]="someValue">` or `<yaga-rectangle [latLngs]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
             */
        function (val) {
            this.setLatLngs(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "geoJSON", {
        get: function () {
            return this.toGeoJSON();
        },
        set: /**
             * Two-Way bound property for the corresponding GeoJSON.
             * Use it with `<yaga-rectangle [(geoJSON)]="someValue">` or `<yaga-rectangle [geoJSON]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-togeojson Original Leaflet documentation
             */
        function (val) {
            this.feature.properties = val.properties;
            var geomType = val.geometry.type; // Normally '(Multi)Polygon'
            /* istanbul ignore if */
            if (geomType !== 'Polygon' && geomType !== 'MultiPolygon') {
                throw new Error('Unsupported geometry type: ' + geomType);
            }
            this.setLatLngs(lng2lat_1.lng2lat(val.geometry.coordinates));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setStyle.
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setstyle Original Leaflet documentation
     */
    /**
         * Derived method of the original setStyle.
         * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setstyle Original Leaflet documentation
         */
    RectangleDirective.prototype.setStyle = /**
         * Derived method of the original setStyle.
         * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setstyle Original Leaflet documentation
         */
    function (style) {
        _super.prototype.setStyle.call(this, style);
        if (style.hasOwnProperty('stroke')) {
            this.strokeChange.emit(style.stroke);
        }
        if (style.hasOwnProperty('color')) {
            this.colorChange.emit(style.color);
        }
        if (style.hasOwnProperty('weight')) {
            this.weightChange.emit(style.weight);
        }
        if (style.hasOwnProperty('opacity')) {
            this.opacityChange.emit(style.opacity);
        }
        if (style.hasOwnProperty('lineCap')) {
            this.lineCapChange.emit(style.lineCap);
        }
        if (style.hasOwnProperty('lineJoin')) {
            this.lineJoinChange.emit(style.lineJoin);
        }
        if (style.hasOwnProperty('dashArray')) {
            this.dashArrayChange.emit(style.dashArray);
        }
        if (style.hasOwnProperty('dashOffset')) {
            this.dashOffsetChange.emit(style.dashOffset);
        }
        if (style.hasOwnProperty('fill')) {
            this.fillChange.emit(style.fill);
        }
        if (style.hasOwnProperty('fillColor')) {
            this.fillColorChange.emit(style.fillColor);
        }
        if (style.hasOwnProperty('fillOpacity')) {
            this.fillOpacityChange.emit(style.fillOpacity);
        }
        if (style.hasOwnProperty('fillRule')) {
            this.fillRuleChange.emit(style.fillRule);
        }
        if (style.hasOwnProperty('className')) {
            this.classNameChange.emit(style.className);
        }
        this.styleChange.emit(style);
        return this;
    };
    Object.defineProperty(RectangleDirective.prototype, "opacity", {
        get: function () {
            return this.options.opacity;
        },
        set: /**
             * Two-Way bound property for the opacity.
             * Use it with `<yaga-rectangle [(opacity)]="someValue">` or `<yaga-rectangle [opacity]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-opacity Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ opacity: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "stroke", {
        get: function () {
            return this.options.stroke;
        },
        set: /**
             * Two-Way bound property for the stroke.
             * Use it with `<yaga-rectangle [(stroke)]="someValue">` or `<yaga-rectangle [stroke]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-stroke Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ stroke: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "color", {
        get: function () {
            return this.options.color;
        },
        set: /**
             * Two-Way bound property for the color.
             * Use it with `<yaga-rectangle [(color)]="someValue">` or `<yaga-rectangle [color]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-color Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ color: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "weight", {
        get: function () {
            return this.options.weight;
        },
        set: /**
             * Two-Way bound property for the weight.
             * Use it with `<yaga-rectangle [(weight)]="someValue">` or `<yaga-rectangle [weight]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-weight Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ weight: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "lineCap", {
        get: function () {
            return this.options.lineCap;
        },
        set: /**
             * Two-Way bound property for the lineCap.
             * Use it with `<yaga-rectangle [(lineCap)]="someValue">` or `<yaga-rectangle [lineCap]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-linecap Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ lineCap: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "lineJoin", {
        get: function () {
            return this.options.lineJoin;
        },
        set: /**
             * Two-Way bound property for the lineJoin.
             * Use it with `<yaga-rectangle [(lineJoin)]="someValue">` or `<yaga-rectangle [lineJoin]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-linejoin Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ lineJoin: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "dashArray", {
        get: function () {
            return this.options.dashArray;
        },
        set: /**
             * Two-Way bound property for the dashArray.
             * Use it with `<yaga-rectangle [(dashArray)]="someValue">` or `<yaga-rectangle [dashArray]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dasharray Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ dashArray: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "dashOffset", {
        get: function () {
            return this.options.dashOffset;
        },
        set: /**
             * Two-Way bound property for the dashOffset.
             * Use it with `<yaga-rectangle [(dashOffset)]="someValue">` or `<yaga-rectangle [dashOffset]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dashoffset Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ dashOffset: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "fill", {
        get: function () {
            return this.options.fill;
        },
        set: /**
             * Two-Way bound property for the fill.
             * Use it with `<yaga-rectangle [(fill)]="someValue">` or `<yaga-rectangle [fill]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fill Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fill: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "fillColor", {
        get: function () {
            return this.options.fillColor;
        },
        set: /**
             * Two-Way bound property for the fillColor.
             * Use it with `<yaga-rectangle [(fillColor)]="someValue">` or `<yaga-rectangle [fillColor]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillcolor Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fillColor: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "fillOpacity", {
        get: function () {
            return this.options.fillOpacity;
        },
        set: /**
             * Two-Way bound property for the fillOpacity.
             * Use it with `<yaga-rectangle [(fillOpacity)]="someValue">` or `<yaga-rectangle [fillOpacity]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillopacity Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fillOpacity: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "fillRule", {
        get: function () {
            return this.options.fillRule;
        },
        set: /**
             * Two-Way bound property for the fillRule.
             * Use it with `<yaga-rectangle [(fillRule)]="someValue">` or `<yaga-rectangle [fillRule]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillrule Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ fillRule: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "className", {
        get: function () {
            return this.options.className;
        },
        set: /**
             * Two-Way bound property for the className.
             * Use it with `<yaga-rectangle [(className)]="someValue">` or `<yaga-rectangle [className]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-classname Original Leaflet documentation
             */
        function (val) {
            this.setStyle({ className: val });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "style", {
        get: function () {
            return this.options;
        },
        set: /**
             * Two-Way bound property for the opacity.
             * Use it with `<yaga-rectangle [(style)]="someValue">` or `<yaga-rectangle [style]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-style Original Leaflet documentation
             */
        function (val) {
            this.setStyle(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "display", {
        get: function () {
            var container;
            try {
                container = this.getElement();
            }
            catch (err) {
                /* istanbul ignore next */
                return false;
            }
            return container.style.display !== 'none' && !!container.parentElement;
        },
        set: /**
             * Two-Way bound property for the display state.
             * Use it with `<yaga-rectangle [(display)]="someValue">` or `<yaga-rectangle [display]="someValue">`
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
            container.style.display = val ? '' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "interactive", {
        get: function () {
            return this.options.interactive;
        },
        set: /**
             * Input for the interactive state.
             * Use it with `<yaga-rectangle [interactive]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-interactive Original Leaflet documentation
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
    Object.defineProperty(RectangleDirective.prototype, "smoothFactor", {
        get: function () {
            return this.options.smoothFactor;
        },
        set: /**
             * Input for the smoothFactor.
             * Use it with `<yaga-rectangle [smoothFactor]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-smoothfactor Original Leaflet documentation
             */
        function (val) {
            this.options.smoothFactor = val;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "noClip", {
        get: function () {
            return this.options.noClip;
        },
        set: /**
             * Input for the noClip state.
             * Use it with `<yaga-rectangle [noClip]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#rectangle-noclip Original Leaflet documentation
             */
        function (val) {
            this.options.noClip = val;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleDirective.prototype, "properties", {
        get: function () {
            return this.feature.properties;
        },
        set: /**
             * Input for the GeoJSON properties.
             * Use it with `<yaga-rectangle [properties]="someValue">`
             */
        function (val) {
            this.feature.properties = val;
            this.geoJSONChange.emit(this.geoJSON);
        },
        enumerable: true,
        configurable: true
    });
    RectangleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'yaga-rectangle',
                },] },
    ];
    /** @nocollapse */
    RectangleDirective.ctorParameters = function () { return [
        { type: layer_group_provider_1.LayerGroupProvider, },
    ]; };
    RectangleDirective.propDecorators = {
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
        "boundsChange": [{ type: core_1.Output },],
        "northChange": [{ type: core_1.Output },],
        "eastChange": [{ type: core_1.Output },],
        "southChange": [{ type: core_1.Output },],
        "westChange": [{ type: core_1.Output },],
        "geoJSONChange": [{ type: core_1.Output },],
        "addEvent": [{ type: core_1.Output, args: ['add',] },],
        "removeEvent": [{ type: core_1.Output, args: ['remove',] },],
        "popupopenEvent": [{ type: core_1.Output, args: ['popupopen',] },],
        "popupcloseEvent": [{ type: core_1.Output, args: ['popupclose',] },],
        "tooltipopenEvent": [{ type: core_1.Output, args: ['tooltipopen',] },],
        "tooltipcloseEvent": [{ type: core_1.Output, args: ['tooltipclose',] },],
        "clickEvent": [{ type: core_1.Output, args: ['click',] },],
        "dbclickEvent": [{ type: core_1.Output, args: ['dbclick',] },],
        "mousedownEvent": [{ type: core_1.Output, args: ['mousedown',] },],
        "mouseoverEvent": [{ type: core_1.Output, args: ['mouseover',] },],
        "mouseoutEvent": [{ type: core_1.Output, args: ['mouseout',] },],
        "contextmenuEvent": [{ type: core_1.Output, args: ['contextmenu',] },],
        "bounds": [{ type: core_1.Input },],
        "north": [{ type: core_1.Input },],
        "east": [{ type: core_1.Input },],
        "south": [{ type: core_1.Input },],
        "west": [{ type: core_1.Input },],
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
    return RectangleDirective;
}(leaflet_1.Rectangle));
exports.RectangleDirective = RectangleDirective;
//# sourceMappingURL=rectangle.directive.js.map