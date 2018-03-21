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
var marker_provider_1 = require("./marker.provider");
/**
 * Angular2 directive for markers of Leaflet.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-marker
 *         [(draggable)]="..."
 *         [(display)]="..."
 *         [(opacity)]="..."
 *         [(lat)]="..."
 *         [(lng)]="..."
 *         [(position)]="..."
 *         [(zIndexOffset)]="..."
 *         [(icon)]="..."
 *
 *         (dragend)="..."
 *         (dragstart)="..."
 *         (movestart)="..."
 *         (drag)="..."
 *         (moveend)="..."
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
 *         [title]="..."
 *         [alt]="..."
 *         >
 *     </yaga-marker>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#marker Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=Marker%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/marker.directive.js.html
 * Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/marker.directive.js.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/marker-directive/
 */
var MarkerDirective = /** @class */ (function (_super) {
    __extends(MarkerDirective, _super);
    function MarkerDirective(layerGroupProvider, layerProvider, markerProvider) {
        var _this = _super.call(this, [0, 0]) || this;
        /**
             * Two-Way bound property for the latlng-position of the geometry.
             * Use it with `<yaga-marker [(position)]="someValue">`
             * or `<yaga-marker (positionChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
             */
        _this.positionChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the latitude of the geometry.
             * Use it with `<yaga-marker [(lat)]="someValue">`
             * or `<yaga-marker (latChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
             */
        _this.latChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the longitude of the geometry.
             * Use it with `<yaga-marker [(lng)]="someValue">`
             * or `<yaga-marker (lngChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
             */
        _this.lngChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the opacity of the geometry.
             * Use it with `<yaga-marker [(opacity)]="someValue">`
             * or `<yaga-marker (opacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-setopacity Original Leaflet documentation
             */
        _this.opacityChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the display status of the geometry.
             * Use it with `<yaga-marker [(display)]="someValue">`
             * or `<yaga-marker (displayChange)="processEvent($event)">`
             */
        _this.displayChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the offset of the zIndex.
             * Use it with `<yaga-marker [(zIndexOffset)]="someValue">`
             * or `<yaga-marker (zIndexOffsetChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#marker-zindexoffset Original Leaflet documentation
             */
        _this.zIndexOffsetChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the draggable state.
             * Use it with `<yaga-marker [(draggable)]="someValue">`
             * or `<yaga-marker (draggableChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#marker-dragging Original Leaflet documentation
             */
        _this.draggableChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the icon.
             * Use it with `<yaga-marker [(icon)]="someValue">`
             * or `<yaga-marker (iconChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.3.0.html#marker-seticon Original Leaflet documentation
             */
        _this.iconChange = new core_1.EventEmitter();
        _this.tooltipOpenedChange = new core_1.EventEmitter();
        _this.popupOpenedChange = new core_1.EventEmitter();
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-marker (dragend)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-dragend Original Leaflet documentation
             */
        _this.dragendEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-marker (dragstart)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-dragstart Original Leaflet documentation
             */
        _this.dragstartEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-marker (movestart)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-movestart Original Leaflet documentation
             */
        _this.movestartEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-marker (drag)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-drag Original Leaflet documentation
             */
        _this.dragEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-marker (moveend)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-moveend Original Leaflet documentation
             */
        _this.moveendEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired add event.
             * Use it with `<yaga-marker (add)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-add Original Leaflet documentation
             */
        _this.addEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired remove event.
             * Use it with `<yaga-marker (remove)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-remove Original Leaflet documentation
             */
        _this.removeEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupopen event.
             * Use it with `<yaga-marker (popupopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-popupopen Original Leaflet documentation
             */
        _this.popupopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired popupclose event.
             * Use it with `<yaga-marker (popupclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-popupclose Original Leaflet documentation
             */
        _this.popupcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipopen event.
             * Use it with `<yaga-marker (tooltipopen)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-tooltipopen Original Leaflet documentation
             */
        _this.tooltipopenEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired tooltipclose event.
             * Use it with `<yaga-marker (tooltipclose)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-tooltipclose Original Leaflet documentation
             */
        _this.tooltipcloseEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired click event.
             * Use it with `<yaga-marker (click)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-click Original Leaflet documentation
             */
        _this.clickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired dbclick event.
             * Use it with `<yaga-marker (dbclick)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-dbclick Original Leaflet documentation
             */
        _this.dbclickEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mousedown event.
             * Use it with `<yaga-marker (mousedown)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-mousedown Original Leaflet documentation
             */
        _this.mousedownEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseover event.
             * Use it with `<yaga-marker (mouseover)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-mouseover Original Leaflet documentation
             */
        _this.mouseoverEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired mouseout event.
             * Use it with `<yaga-marker (mouseout)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-mouseout Original Leaflet documentation
             */
        _this.mouseoutEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired contextmenu event.
             * Use it with `<yaga-marker (contextmenu)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-contextmenu Original Leaflet documentation
             */
        _this.contextmenuEvent = new core_1.EventEmitter();
        /**
             * Internal property to stop further processing while it is not initialized
             */
        _this.initialized = false;
        layerProvider.ref = _this;
        markerProvider.ref = _this;
        layerGroupProvider.ref.addLayer(_this);
        _this.on('remove', function () {
            _this.displayChange.emit(false);
        });
        _this.on('add', function () {
            _this.displayChange.emit(true);
        });
        _this.on('drag', function (event) {
            _this.latChange.emit(_this.getLatLng().lat);
            _this.lngChange.emit(_this.getLatLng().lng);
            _this.positionChange.emit(_this.getLatLng());
        });
        // Events
        // Events
        _this.on('dragend', function (event) {
            _this.dragendEvent.emit(event);
        });
        _this.on('dragstart', function (event) {
            _this.dragstartEvent.emit(event);
        });
        _this.on('movestart', function (event) {
            _this.movestartEvent.emit(event);
        });
        _this.on('drag', function (event) {
            _this.dragEvent.emit(event);
        });
        _this.on('moveend', function (event) {
            _this.moveendEvent.emit(event);
        });
        _this.on('add', function (event) {
            _this.addEvent.emit(event);
        });
        _this.on('remove', function (event) {
            _this.removeEvent.emit(event);
        });
        _this.on('popupopen', function (event) {
            _this.popupopenEvent.emit(event);
            _this.popupOpenedChange.emit(true);
        });
        _this.on('popupclose', function (event) {
            _this.popupcloseEvent.emit(event);
            _this.popupOpenedChange.emit(false);
        });
        _this.on('tooltipopen', function (event) {
            _this.tooltipopenEvent.emit(event);
            _this.tooltipOpenedChange.emit(true);
        });
        _this.on('tooltipclose', function (event) {
            _this.tooltipcloseEvent.emit(event);
            _this.tooltipOpenedChange.emit(false);
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
        var oldDraggingEnable = _this.dragging.enable;
        var oldDraggingDisable = _this.dragging.disable;
        _this.dragging.enable = function () {
            var val = oldDraggingEnable.call(_this.dragging);
            _this.draggableChange.emit(true);
            return val;
        };
        _this.dragging.disable = function () {
            var val = oldDraggingDisable.call(_this.dragging);
            _this.draggableChange.emit(false);
            return val;
        };
        return _this;
    }
    /**
     * Internal method that provides the initialization of the directive
     */
    /**
         * Internal method that provides the initialization of the directive
         */
    MarkerDirective.prototype.ngAfterContentInit = /**
         * Internal method that provides the initialization of the directive
         */
    function () {
        this.initialized = true; // Otherwise lng gets overwritten to 0
    };
    /**
     * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
     */
    /**
         * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
         */
    MarkerDirective.prototype.ngOnDestroy = /**
         * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
         */
    function () {
        this.removeFrom(this._map);
    };
    Object.defineProperty(MarkerDirective.prototype, "display", {
        get: function () {
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
             * Use it with `<yaga-marker [(display)]="someValue">` or `<yaga-marker [display]="someValue">`
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
     * Derived method of the original setLatLng method.
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
     */
    /**
         * Derived method of the original setLatLng method.
         * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
         */
    MarkerDirective.prototype.setLatLng = /**
         * Derived method of the original setLatLng method.
         * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
         */
    function (val) {
        _super.prototype.setLatLng.call(this, val);
        if (this.initialized) {
            this.positionChange.emit(this.getLatLng());
            this.latChange.emit(this.getLatLng().lat);
            this.lngChange.emit(this.getLatLng().lng);
        }
        return this;
    };
    Object.defineProperty(MarkerDirective.prototype, "position", {
        get: function () {
            return this.getLatLng();
        },
        set: /**
             * Two-Way bound property for the position of the marker.
             * Use it with `<yaga-marker [(position)]="someValue">` or `<yaga-marker [position]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
             */
        function (val) {
            this.setLatLng(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerDirective.prototype, "lat", {
        get: function () {
            return this.getLatLng().lat;
        },
        set: /**
             * Two-Way bound property for the position of the marker.
             * Use it with `<yaga-marker [(lat)]="someValue">` or `<yaga-marker [lat]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
             */
        function (val) {
            this.setLatLng([val, this.lng]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerDirective.prototype, "lng", {
        get: function () {
            return this.getLatLng().lng;
        },
        set: /**
             * Two-Way bound property for the position of the marker.
             * Use it with `<yaga-marker [(lng)]="someValue">` or `<yaga-marker [lng]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
             */
        function (val) {
            this.setLatLng([this.lat, val]);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setOpacity method.
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setopacity Original Leaflet documentation
     */
    /**
         * Derived method of the original setOpacity method.
         * @link http://leafletjs.com/reference-1.2.0.html#marker-setopacity Original Leaflet documentation
         */
    MarkerDirective.prototype.setOpacity = /**
         * Derived method of the original setOpacity method.
         * @link http://leafletjs.com/reference-1.2.0.html#marker-setopacity Original Leaflet documentation
         */
    function (val) {
        if (this.opacity === val) {
            return this;
        }
        this.opacityChange.emit(val);
        return _super.prototype.setOpacity.call(this, val);
    };
    Object.defineProperty(MarkerDirective.prototype, "opacity", {
        get: function () {
            return this.options.opacity;
        },
        set: /**
             * Two-Way bound property for the opacity of the marker.
             * Use it with `<yaga-marker [(opacity)]="someValue">` or `<yaga-marker [opacity]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-setopacity Original Leaflet documentation
             */
        function (val) {
            this.setOpacity(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerDirective.prototype, "popupOpened", {
        get: function () {
            return this.isPopupOpen();
        },
        set: /**
             * Two-Way bound property for the state of the popup.
             * Use it with `<yaga-marker [(popupOpened)]="someValue">` or `<yaga-marker [popupOpened]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-openpopup Original Leaflet documentation
             */
        function (val) {
            if (val) {
                // It would not work without timeout!
                this.openPopup();
                return;
            }
            this.closePopup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerDirective.prototype, "tooltipOpened", {
        get: function () {
            return this.isTooltipOpen();
        },
        set: /**
             * Two-Way bound property for the state of the popup.
             * Use it with `<yaga-marker [(tooltipOpened)]="someValue">` or `<yaga-marker [tooltipOpened]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-opentooltip Original Leaflet documentation
             */
        function (val) {
            if (val) {
                this.openTooltip();
                return;
            }
            this.closeTooltip();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setIcon method.
     * @link http://leafletjs.com/reference-1.2.0.html#marker-seticon Original Leaflet documentation
     */
    /**
         * Derived method of the original setIcon method.
         * @link http://leafletjs.com/reference-1.2.0.html#marker-seticon Original Leaflet documentation
         */
    MarkerDirective.prototype.setIcon = /**
         * Derived method of the original setIcon method.
         * @link http://leafletjs.com/reference-1.2.0.html#marker-seticon Original Leaflet documentation
         */
    function (val) {
        _super.prototype.setIcon.call(this, val);
        this.iconChange.emit(val);
        return this;
    };
    Object.defineProperty(MarkerDirective.prototype, "icon", {
        get: function () {
            return this.options.icon;
        },
        set: /**
             * Two-Way bound property for the state of the popup.
             * Use it with `<yaga-marker [(icon)]="someValue">` or `<yaga-marker [icon]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-seticon Original Leaflet documentation
             */
        function (val) {
            this.setIcon(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerDirective.prototype, "draggable", {
        get: function () {
            return this.dragging.enabled();
        },
        set: /**
             * Two-Way bound property for the state of the dragging.
             * Use it with `<yaga-marker [(draggable)]="someValue">` or `<yaga-marker [draggable]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-dragging Original Leaflet documentation
             */
        function (val) {
            if (val) {
                this.dragging.enable();
                return;
            }
            this.dragging.disable();
            return;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setZIndexOffset method.
     * @link http://leafletjs.com/reference-1.2.0.html#marker-zindexoffset Original Leaflet documentation
     */
    /**
         * Derived method of the original setZIndexOffset method.
         * @link http://leafletjs.com/reference-1.2.0.html#marker-zindexoffset Original Leaflet documentation
         */
    MarkerDirective.prototype.setZIndexOffset = /**
         * Derived method of the original setZIndexOffset method.
         * @link http://leafletjs.com/reference-1.2.0.html#marker-zindexoffset Original Leaflet documentation
         */
    function (val) {
        if (this.zIndexOffset === val) {
            return this;
        }
        this.zIndexOffsetChange.emit(val);
        return _super.prototype.setZIndexOffset.call(this, val);
    };
    Object.defineProperty(MarkerDirective.prototype, "zIndexOffset", {
        get: function () {
            return this.options.zIndexOffset;
        },
        set: /**
             * Two-Way bound property for the offset of the zIndex.
             * Use it with `<yaga-marker [(draggable)]="someValue">` or `<yaga-marker [draggable]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-zindexoffset Original Leaflet documentation
             */
        function (val) {
            this.setZIndexOffset(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerDirective.prototype, "title", {
        get: function () {
            return this.getElement().getAttribute('title');
        },
        set: /**
             * Input for the title.
             * Use it with `<yaga-marker [title]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-title Original Leaflet documentation
             */
        function (val) {
            this.options.title = val;
            this.getElement().setAttribute('title', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerDirective.prototype, "alt", {
        get: function () {
            return this.getElement().getAttribute('alt');
        },
        set: /**
             * Input for the alternative text.
             * Use it with `<yaga-marker [alt]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#marker-title Original Leaflet documentation
             */
        function (val) {
            this.options.alt = val;
            this.getElement().setAttribute('alt', val);
        },
        enumerable: true,
        configurable: true
    });
    MarkerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    providers: [layer_provider_1.LayerProvider, marker_provider_1.MarkerProvider],
                    selector: 'yaga-marker',
                },] },
    ];
    /** @nocollapse */
    MarkerDirective.ctorParameters = function () { return [
        { type: layer_group_provider_1.LayerGroupProvider, },
        { type: layer_provider_1.LayerProvider, },
        { type: marker_provider_1.MarkerProvider, },
    ]; };
    MarkerDirective.propDecorators = {
        "positionChange": [{ type: core_1.Output },],
        "latChange": [{ type: core_1.Output },],
        "lngChange": [{ type: core_1.Output },],
        "opacityChange": [{ type: core_1.Output },],
        "displayChange": [{ type: core_1.Output },],
        "zIndexOffsetChange": [{ type: core_1.Output },],
        "draggableChange": [{ type: core_1.Output },],
        "iconChange": [{ type: core_1.Output },],
        "tooltipOpenedChange": [{ type: core_1.Output },],
        "popupOpenedChange": [{ type: core_1.Output },],
        "dragendEvent": [{ type: core_1.Output, args: ['dragend',] },],
        "dragstartEvent": [{ type: core_1.Output, args: ['dragstart',] },],
        "movestartEvent": [{ type: core_1.Output, args: ['movestart',] },],
        "dragEvent": [{ type: core_1.Output, args: ['drag',] },],
        "moveendEvent": [{ type: core_1.Output, args: ['moveend',] },],
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
        "display": [{ type: core_1.Input },],
        "position": [{ type: core_1.Input },],
        "lat": [{ type: core_1.Input },],
        "lng": [{ type: core_1.Input },],
        "opacity": [{ type: core_1.Input },],
        "popupOpened": [{ type: core_1.Input },],
        "tooltipOpened": [{ type: core_1.Input },],
        "icon": [{ type: core_1.Input },],
        "draggable": [{ type: core_1.Input },],
        "zIndexOffset": [{ type: core_1.Input },],
        "title": [{ type: core_1.Input },],
        "alt": [{ type: core_1.Input },],
    };
    return MarkerDirective;
}(leaflet_1.Marker));
exports.MarkerDirective = MarkerDirective;
//# sourceMappingURL=marker.directive.js.map