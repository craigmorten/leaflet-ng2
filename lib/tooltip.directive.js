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
var layer_provider_1 = require("./layer.provider");
/**
 * Angular2 directive for Leaflet tooltips.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-marker>
 *         <yaga-tooltip
 *             [(content)]="..."
 *             [(opened)]="..."
 *             [(lat)]="..."
 *             [(lng)]="..."
 *             [(position)]="..."
 *             [(opacity)]="..."
 *
 *             (open)="..."
 *             (close)="..."
 *
 *             [className]="..."
 *             [pane]="..."
 *             [interactive]="..."
 *             [sticky]="..."
 *             [direction]="..."
 *             [permanent]="..."
 *             [offset]="..."
 *             >
 *             <p>You can pass your content right here!</p>
 *         </yaga-tooltip>
 *     </yaga-marker>
 * </yaga-map>
 * ```
 */
var TooltipDirective = /** @class */ (function (_super) {
    __extends(TooltipDirective, _super);
    function TooltipDirective(layerProvider, elementRef) {
        var _this = _super.call(this) || this;
        _this.layerProvider = layerProvider;
        /**
             * Two-Way bound property for the content of a tooltip.
             * Use it with `<yaga-tooltip [(content)]="someValue">` or `<yaga-tooltip (contentChange)="processEvent($event)">`
             *
             * You can also pass the content directly within the web-component as view-content
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
             */
        _this.contentChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the state of being opened.
             * Use it with `<yaga-tooltip [(opened)]="someValue">` or `<yaga-tooltip (openedChange)="processEvent($event)">`
             *
             * You can also use the `tooltipOpened` property in the parent directives
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-openon Original Leaflet documentation
             */
        _this.openedChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the latitude position of the tooltip.
             * Use it with `<yaga-tooltip [(lat)]="someValue">` or `<yaga-tooltip (latChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
             */
        _this.latChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the longitude position of the tooltip.
             * Use it with `<yaga-tooltip [(lng)]="someValue">` or `<yaga-tooltip (lngChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
             */
        _this.lngChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the position (LatLng) of the tooltip.
             * Use it with `<yaga-tooltip [(position)]="someValue">` or `<yaga-tooltip (positionChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
             */
        _this.positionChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the opacity of the tooltip.
             * Use it with `<yaga-tooltip [(opacity)]="someValue">` or `<yaga-tooltip (opacityChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
             */
        _this.opacityChange = new core_1.EventEmitter();
        /**
             * From leaflet fired open event.
             * Use it with `<yaga-tooltip (open)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-tooltipopen Original Leaflet documentation
             */
        _this.openEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired close event.
             * Use it with `<yaga-tooltip (close)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-tooltipclose Original Leaflet documentation
             */
        _this.closeEvent = new core_1.EventEmitter();
        _this.setContent(elementRef.nativeElement);
        _this.on("add", function (event) {
            _this.openEvent.emit(event);
            _this.openedChange.emit(true);
        });
        _this.on("remove", function (event) {
            _this.closeEvent.emit(event);
            _this.openedChange.emit(false);
        });
        _this.layerProvider.ref.bindTooltip(_this);
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
    TooltipDirective.prototype.ngOnDestroy = /**
         * This function gets called from Angular on destroy of the html-component.
         * @link https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html
         */
    function () {
        this.layerProvider.ref.unbindTooltip();
    };
    /**
     * Derived method of the original setContent method.
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
     */
    /**
         * Derived method of the original setContent method.
         * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
         */
    TooltipDirective.prototype.setContent = /**
         * Derived method of the original setContent method.
         * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
         */
    function (content) {
        // Content
        this.contentChange.emit((content));
        return _super.prototype.setContent.call(this, content);
    };
    Object.defineProperty(TooltipDirective.prototype, "content", {
        get: function () {
            return this.getContent();
        },
        set: /**
             * Two-Way bound property for the content.
             * Use it with `<yaga-tooltip [(content)]="someValue">` or `<yaga-tooltip [content]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
             */
        function (val) {
            this.setContent(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "opened", {
        get: function () {
            return !!this._map;
        },
        set: /**
             * Two-Way bound property for the opened state.
             * Use it with `<yaga-tooltip [(opened)]="someValue">` or `<yaga-tooltip [opened]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-openon Original Leaflet documentation
             */
        function (val) {
            if (val) {
                this.layerProvider.ref.openTooltip();
                return;
            }
            this.layerProvider.ref.closeTooltip();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setLatLng method.
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
     */
    /**
         * Derived method of the original setLatLng method.
         * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
         */
    TooltipDirective.prototype.setLatLng = /**
         * Derived method of the original setLatLng method.
         * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
         */
    function (latlng) {
        _super.prototype.setLatLng.call(this, latlng);
        this.latChange.emit(this.lat);
        this.lngChange.emit(this.lng);
        this.positionChange.emit(leaflet_1.latLng(this.lat, this.lng));
        return this;
    };
    Object.defineProperty(TooltipDirective.prototype, "lat", {
        get: function () {
            return this.getLatLng().lat;
        },
        set: /**
             * Two-Way bound property for the latitude position of the tooltip.
             * Use it with `<yaga-tooltip [(lat)]="someValue">` or `<yaga-tooltip [lat]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
             */
        function (val) {
            this.setLatLng([val, this.lng]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "lng", {
        get: function () {
            return this.getLatLng().lng;
        },
        set: /**
             * Two-Way bound property for the longitude position of the tooltip.
             * Use it with `<yaga-tooltip [(lng)]="someValue">` or `<yaga-tooltip [lng]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
             */
        function (val) {
            this.setLatLng([this.lat, val]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "position", {
        get: function () {
            return this.getLatLng();
        },
        set: /**
             * Two-Way bound property for the position of the tooltip.
             * Use it with `<yaga-tooltip [(position)]="someValue">` or `<yaga-tooltip [position]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
             */
        function (val) {
            this.setLatLng(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setContent method.
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
     */
    /**
         * Derived method of the original setContent method.
         * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
         */
    TooltipDirective.prototype.setOpacity = /**
         * Derived method of the original setContent method.
         * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
         */
    function (val) {
        _super.prototype.setOpacity.call(this, val);
        this.opacityChange.emit(val);
    };
    Object.defineProperty(TooltipDirective.prototype, "opacity", {
        get: function () {
            return this.options.opacity;
        },
        set: /**
             * Two-Way bound property for the opacity of the tooltip.
             * Use it with `<yaga-tooltip [(opacity)]="someValue">` or `<yaga-tooltip [opacity]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-opacity Original Leaflet documentation
             */
        function (val) {
            this.setOpacity(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "className", {
        get: function () {
            return this.options.className;
        },
        set: /**
             * Input for the CSS class name.
             * Use it with `<yaga-tooltip [autoClose]="className">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-classname Original Leaflet documentation
             */
        function (val) {
            if (!this._container) {
                this.options.className = val;
                return;
            }
            var oldClassName = this._container.getAttribute("class") || "";
            var newClassNameSplited = oldClassName.split(" " + this.options.className + " ");
            if (newClassNameSplited.length === 1) {
                newClassNameSplited.push("");
            }
            this._container.setAttribute("class", newClassNameSplited.join(" " + val + " ").trim());
            this.options.className = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "pane", {
        get: function () {
            return this.options.pane;
        },
        set: /**
             * Input for the pane.
             * Use it with `<yaga-tooltip [pane]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-pane Original Leaflet documentation
             */
        function (val) {
            this.options.pane = val;
            this._updateLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "interactive", {
        get: function () {
            return this.options.interactive;
        },
        set: /**
             * Input for the interactive state.
             * Use it with `<yaga-tooltip [interactive]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-interactive Original Leaflet documentation
             */
        function (val) {
            this.options.interactive = val;
            this._updateLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "sticky", {
        get: function () {
            return this.options.sticky;
        },
        set: /**
             * Input for the sticky.
             * Use it with `<yaga-tooltip [sticky]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-sticky Original Leaflet documentation
             */
        function (val) {
            this._initTooltipInteractions.call(this.layerProvider.ref, true);
            this.options.sticky = val;
            this._initTooltipInteractions.call(this.layerProvider.ref, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "direction", {
        get: function () {
            return this.options.direction;
        },
        set: /**
             * Input for the direction.
             * Use it with `<yaga-tooltip [direction]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-direction Original Leaflet documentation
             */
        function (val) {
            this.options.direction = val;
            this.reopen();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "permanent", {
        get: function () {
            return this.options.permanent;
        },
        set: /**
             * Input for the permanent state.
             * Use it with `<yaga-tooltip [permanent]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-permanent Original Leaflet documentation
             */
        function (val) {
            this._initTooltipInteractions.call(this.layerProvider.ref, true);
            this.options.permanent = val;
            this._initTooltipInteractions.call(this.layerProvider.ref, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "offset", {
        get: function () {
            return this.options.offset;
        },
        set: /**
             * Input for the offset.
             * Use it with `<yaga-tooltip [offset]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#tooltip-offset Original Leaflet documentation
             */
        function (val) {
            this.options.offset = val;
            this.reopen();
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.reopen = function (force) {
        if (force === void 0) { force = false; }
        if (force || this.opened) {
            this.layerProvider.ref.closeTooltip();
            this.layerProvider.ref.openTooltip();
        }
    };
    TooltipDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "yaga-tooltip",
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: layer_provider_1.LayerProvider, },
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
    ]; };
    TooltipDirective.propDecorators = {
        "contentChange": [{ type: core_1.Output },],
        "openedChange": [{ type: core_1.Output },],
        "latChange": [{ type: core_1.Output },],
        "lngChange": [{ type: core_1.Output },],
        "positionChange": [{ type: core_1.Output },],
        "opacityChange": [{ type: core_1.Output },],
        "openEvent": [{ type: core_1.Output, args: ["open",] },],
        "closeEvent": [{ type: core_1.Output, args: ["close",] },],
        "content": [{ type: core_1.Input },],
        "opened": [{ type: core_1.Input },],
        "lat": [{ type: core_1.Input },],
        "lng": [{ type: core_1.Input },],
        "position": [{ type: core_1.Input },],
        "opacity": [{ type: core_1.Input },],
        "className": [{ type: core_1.Input },],
        "pane": [{ type: core_1.Input },],
        "interactive": [{ type: core_1.Input },],
        "sticky": [{ type: core_1.Input },],
        "direction": [{ type: core_1.Input },],
        "permanent": [{ type: core_1.Input },],
        "offset": [{ type: core_1.Input },],
    };
    return TooltipDirective;
}(leaflet_1.Tooltip));
exports.TooltipDirective = TooltipDirective;
//# sourceMappingURL=tooltip.directive.js.map