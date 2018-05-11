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
 * Angular2 directive for Leaflet image overlays.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-image-overlay
 *         [(url)]="..."
 *         [(display)]="..."
 *         [(opacity)]="..."
 *         [(zIndex)]="..."
 *         [(bounds)]="..."
 *         [(north)]="..."
 *         [(east)]="..."
 *         [(south)]="..."
 *         [(west)]="..."
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
 *         (load)="..."
 *         (error)="..."
 *
 *         [crossOrigin]="..."
 *         [alt]="..."
 *         [interactive]="..."
 *         [attribution]="..."
 *         >
 *     </yaga-image-overlay>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=Image-Overlay%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/image-overlay.directive.js.html Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/imageoverlaydirective.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/image-overlay-directive
 */
var ImageOverlayDirective = /** @class */ (function (_super) {
    __extends(ImageOverlayDirective, _super);
    function ImageOverlayDirective(layerGroupProvider, layerProvider) {
        var _this = 
        // Transparent 1px image:
        _super.call(this, consts_1.TRANSPARENT_PIXEL, [[0, 0], [1, 1]], {}) || this;
        _this.layerGroupProvider = layerGroupProvider;
        /**
             * Two-Way bound property for the URL.
             * Use it with `<yaga-image-overlay [(url)]="someValue">` or
             * `<yaga-image-overlay (urlChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-seturl Original Leaflet documentation
             */
        _this.urlChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the display status of the layer.
             * Use it with `<yaga-image-overlay [(display)]="someValue">`
             * or `<yaga-image-overlay (displayChange)="processEvent($event)">`
             */
        _this.displayChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the opacity of the layer.
             * Use it with `<yaga-image-overlay [(opacity)]="someValue">`
             * or `<yaga-image-overlay (opacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-opacity Original Leaflet documentation
             */
        _this.opacityChange = new core_1.EventEmitter();
        // maybe implement -> @Output() public zIndexChange: EventEmitter<number> = new EventEmitter();
        /**
             * Two-Way bound property for the bounds of the image.
             * Use it with `<yaga-image-overlay [(bounds)]="someValue">`
             * or `<yaga-image-overlay (opacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
             */
        _this.boundsChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the north bounds of the image.
             * Use it with `<yaga-image-overlay [(north)]="someValue">`
             * or `<yaga-image-overlay (northChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
             */
        _this.northChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the east bounds of the image.
             * Use it with `<yaga-image-overlay [(east)]="someValue">`
             * or `<yaga-image-overlay (eastChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
             */
        _this.eastChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the south bounds of the image.
             * Use it with `<yaga-image-overlay [(south)]="someValue">`
             * or `<yaga-image-overlay (southChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
             */
        _this.southChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the west bounds of the image.
             * Use it with `<yaga-image-overlay [(west)]="someValue">`
             * or `<yaga-image-overlay (westChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
             */
        _this.westChange = new core_1.EventEmitter();
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-image-overlay (add)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-add Original Leaflet documentation
             */
        _this.addEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired remove event.
             * Use it with `<yaga-image-overlay (remove)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-remove Original Leaflet documentation
             */
        _this.removeEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupopen event.
             * Use it with `<yaga-image-overlay (popupopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-popupopen Original Leaflet documentation
             */
        _this.popupopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupclose event.
             * Use it with `<yaga-image-overlay (popupclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-popupclose Original Leaflet documentation
             */
        _this.popupcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipopen event.
             * Use it with `<yaga-image-overlay (tooltipopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-tooltipopen Original Leaflet documentation
             */
        _this.tooltipopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipclose event.
             * Use it with `<yaga-image-overlay (tooltipclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-tooltipclose Original Leaflet documentation
             */
        _this.tooltipcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired click event.
             * Use it with `<yaga-image-overlay (click)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-click Original Leaflet documentation
             */
        _this.clickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired dblclick event.
             * Use it with `<yaga-image-overlay (dblclick)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-dblclick Original Leaflet documentation
             */
        _this.dblclickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mousedown event.
             * Use it with `<yaga-image-overlay (mousedown)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-mousedown Original Leaflet documentation
             */
        _this.mousedownEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseover event.
             * Use it with `<yaga-image-overlay (mouseover)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-mouseover Original Leaflet documentation
             */
        _this.mouseoverEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseout event.
             * Use it with `<yaga-image-overlay (mouseout)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-mouseout Original Leaflet documentation
             */
        _this.mouseoutEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired contextmenu event.
             * Use it with `<yaga-image-overlay (contextmenu)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-contextmenu Original Leaflet documentation
             */
        _this.contextmenuEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired load event.
             * Use it with `<yaga-image-overlay (load)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-load Original Leaflet documentation
             */
        _this.loadEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired error event.
             * Use it with `<yaga-image-overlay (error)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-error Original Leaflet documentation
             */
        _this.errorEvent = new core_1.EventEmitter();
        layerProvider.ref = _this;
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
        _this.on("load", function (event) {
            _this.loadEvent.emit(event);
        });
        _this.on("error", function (event) {
            _this.errorEvent.emit(event);
        });
        return _this;
    }
    /**
     * This function gets called from Angular on destroy of the html-component.
     * @link https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html
     */
    /**
         * This function gets called from Angular on destroy of the html-component.
         * @link https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html
         */
    ImageOverlayDirective.prototype.ngOnDestroy = /**
         * This function gets called from Angular on destroy of the html-component.
         * @link https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html
         */
    function () {
        this.removeFrom(this.layerGroupProvider.ref);
    };
    /**
     * Derived method of the original setUrl method.
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-seturl Original Leaflet documentation
     */
    /**
         * Derived method of the original setUrl method.
         * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-seturl Original Leaflet documentation
         */
    ImageOverlayDirective.prototype.setUrl = /**
         * Derived method of the original setUrl method.
         * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-seturl Original Leaflet documentation
         */
    function (url) {
        if (this.url === url) {
            return;
        }
        this.urlChange.emit(url);
        return _super.prototype.setUrl.call(this, url);
    };
    Object.defineProperty(ImageOverlayDirective.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: /**
             * Two-Way bound property for the URL.
             * Use it with `<yaga-image-overlay [(url)]="someValue">` or `<yaga-image-overlay [url]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-seturl Original Leaflet documentation
             */
        function (val) {
            this.setUrl(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setOpacity method.
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setopacity Original Leaflet documentation
     */
    /**
         * Derived method of the original setOpacity method.
         * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setopacity Original Leaflet documentation
         */
    ImageOverlayDirective.prototype.setOpacity = /**
         * Derived method of the original setOpacity method.
         * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setopacity Original Leaflet documentation
         */
    function (val) {
        if (this.opacity === val) {
            return;
        }
        this.opacityChange.emit(val);
        return _super.prototype.setOpacity.call(this, val);
    };
    Object.defineProperty(ImageOverlayDirective.prototype, "opacity", {
        get: function () {
            return this.options.opacity;
        },
        set: /**
             * Two-Way bound property for the opacity.
             * Use it with `<yaga-image-overlay [(opacity)]="someValue">` or `<yaga-image-overlay [opacity]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setopacity Original Leaflet documentation
             */
        function (val) {
            this.setOpacity(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageOverlayDirective.prototype, "display", {
        /**
         * Two-Way bound property for the display status of the layer.
         * Use it with `<yaga-image-overlay [(display)]="someValue">` or `<yaga-image-overlay [display]="someValue">`
         */
        get: /**
             * Two-Way bound property for the display status of the layer.
             * Use it with `<yaga-image-overlay [(display)]="someValue">` or `<yaga-image-overlay [display]="someValue">`
             */
        function () {
            var pane;
            var container;
            try {
                pane = this.getPane();
                container = this.getElement();
            }
            catch (err) {
                /* istanbul ignore next */
                return false;
            }
            /* tslint:disable:prefer-for-of */
            for (var i = 0; i < pane.children.length; i += 1) {
                /* tslint:enable */
                /* istanbul ignore else */
                if (pane.children[i] === container) {
                    return true;
                }
            }
            return false;
        },
        set: /**
             * Two-Way bound property for the display status of the layer.
             * Use it with `<yaga-image-overlay [(display)]="someValue">` or `<yaga-image-overlay [display]="someValue">`
             */
        function (val) {
            var isDisplayed = this.display;
            if (isDisplayed === val) {
                return;
            }
            var pane;
            var container;
            var map;
            var events; // Dictionary of functions
            var eventKeys;
            try {
                pane = this.getPane();
                container = this.getElement();
                map = this._map;
                events = this.getEvents();
                eventKeys = Object.keys(events);
            }
            catch (err) {
                /* istanbul ignore next */
                return;
            }
            if (val) {
                // show layer
                pane.appendChild(container);
                for (var _i = 0, eventKeys_1 = eventKeys; _i < eventKeys_1.length; _i++) {
                    var eventKey = eventKeys_1[_i];
                    map.on(eventKey, events[eventKey], this);
                }
            }
            else {
                // hide layer
                pane.removeChild(container);
                for (var _a = 0, eventKeys_2 = eventKeys; _a < eventKeys_2.length; _a++) {
                    var eventKey = eventKeys_2[_a];
                    map.off(eventKey, events[eventKey], this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setBounds method.
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
     */
    /**
         * Derived method of the original setBounds method.
         * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
         */
    ImageOverlayDirective.prototype.setBounds = /**
         * Derived method of the original setBounds method.
         * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
         */
    function (val) {
        _super.prototype.setBounds.call(this, leaflet_1.latLngBounds(val));
        this.boundsChange.emit(this.bounds);
        this.northChange.emit(this.north);
        this.eastChange.emit(this.east);
        this.southChange.emit(this.south);
        this.westChange.emit(this.west);
        return this;
    };
    Object.defineProperty(ImageOverlayDirective.prototype, "bounds", {
        get: function () {
            return this.getBounds();
        },
        set: /**
             * Two-Way bound property for the bounds of the image.
             * Use it with `<yaga-image-overlay [(bounds)]="someValue">` or `<yaga-image-overlay [bounds]="someValue">`
             */
        function (val) {
            this.setBounds(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageOverlayDirective.prototype, "north", {
        get: function () {
            return this.getBounds().getNorth();
        },
        set: /**
             * Two-Way bound property for the north bounds of the image.
             * Use it with `<yaga-image-overlay [(north)]="someValue">` or `<yaga-image-overlay [north]="someValue">`
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
    Object.defineProperty(ImageOverlayDirective.prototype, "east", {
        get: function () {
            return this.getBounds().getEast();
        },
        set: /**
             * Two-Way bound property for the east bounds of the image.
             * Use it with `<yaga-image-overlay [(east)]="someValue">` or `<yaga-image-overlay [east]="someValue">`
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
    Object.defineProperty(ImageOverlayDirective.prototype, "south", {
        get: function () {
            return this.getBounds().getSouth();
        },
        set: /**
             * Two-Way bound property for the south bounds of the image.
             * Use it with `<yaga-image-overlay [(south)]="someValue">` or `<yaga-image-overlay [south]="someValue">`
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
    Object.defineProperty(ImageOverlayDirective.prototype, "west", {
        get: function () {
            return this.getBounds().getWest();
        },
        set: /**
             * Two-Way bound property for the west bounds of the image.
             * Use it with `<yaga-image-overlay [(west)]="someValue">` or `<yaga-image-overlay [west]="someValue">`
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
    Object.defineProperty(ImageOverlayDirective.prototype, "crossOrigin", {
        get: function () {
            return this.options.crossOrigin;
        },
        set: /**
             * Input for the crossOrigin.
             * Use it with `<yaga-image-overlay [crossOrigin]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-crossorigin Original Leaflet documentation
             */
        function (val) {
            this.options.crossOrigin = val;
            this.getElement().crossOrigin = val ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageOverlayDirective.prototype, "alt", {
        get: function () {
            return this.getElement().getAttribute("alt");
        },
        set: /**
             * Input for the alternative text.
             * Use it with `<yaga-image-overlay [alt]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-alt Original Leaflet documentation
             */
        function (val) {
            this.options.alt = val;
            this.getElement().alt = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageOverlayDirective.prototype, "interactive", {
        get: function () {
            return this.options.interactive;
        },
        set: /**
             * Input for the state of interaction.
             * Use it with `<yaga-image-overlay [interactive]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-interactive Original Leaflet documentation
             */
        function (val) {
            this.options.interactive = val;
            this.onRemove(this._map);
            this.onAdd(this._map);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageOverlayDirective.prototype, "attribution", {
        get: function () {
            return this.getAttribution();
        },
        set: /**
             * Input for the attribution.
             * Use it with `<yaga-image-overlay [attribution]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-attribution Original Leaflet documentation
             */
        function (val) {
            if (this._map && this._map.attributionControl) {
                this._map.attributionControl.removeAttribution(this.getAttribution());
                this._map.attributionControl.addAttribution(val);
            }
            this.options.attribution = val;
        },
        enumerable: true,
        configurable: true
    });
    ImageOverlayDirective.decorators = [
        { type: core_1.Directive, args: [{
                    providers: [layer_provider_1.LayerProvider],
                    selector: "yaga-image-overlay",
                },] },
    ];
    /** @nocollapse */
    ImageOverlayDirective.ctorParameters = function () { return [
        { type: layer_group_provider_1.LayerGroupProvider, },
        { type: layer_provider_1.LayerProvider, },
    ]; };
    ImageOverlayDirective.propDecorators = {
        "urlChange": [{ type: core_1.Output },],
        "displayChange": [{ type: core_1.Output },],
        "opacityChange": [{ type: core_1.Output },],
        "boundsChange": [{ type: core_1.Output },],
        "northChange": [{ type: core_1.Output },],
        "eastChange": [{ type: core_1.Output },],
        "southChange": [{ type: core_1.Output },],
        "westChange": [{ type: core_1.Output },],
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
        "loadEvent": [{ type: core_1.Output, args: ["load",] },],
        "errorEvent": [{ type: core_1.Output, args: ["error",] },],
        "url": [{ type: core_1.Input },],
        "opacity": [{ type: core_1.Input },],
        "display": [{ type: core_1.Input },],
        "bounds": [{ type: core_1.Input },],
        "north": [{ type: core_1.Input },],
        "east": [{ type: core_1.Input },],
        "south": [{ type: core_1.Input },],
        "west": [{ type: core_1.Input },],
        "crossOrigin": [{ type: core_1.Input },],
        "alt": [{ type: core_1.Input },],
        "interactive": [{ type: core_1.Input },],
        "attribution": [{ type: core_1.Input },],
    };
    return ImageOverlayDirective;
}(leaflet_1.ImageOverlay));
exports.ImageOverlayDirective = ImageOverlayDirective;
//# sourceMappingURL=image-overlay.directive.js.map