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
 * Angular2 directive for Leaflet popups.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-marker>
 *         <yaga-popup
 *             [(content)]="..."
 *             [(opened)]="..."
 *             [(lat)]="..."
 *             [(lng)]="..."
 *             [(position)]="..."
 *
 *             (open)="..."
 *             (close)="..."
 *
 *             [maxWidth]="..."
 *             [minWidth]="..."
 *             [maxHeight]="..."
 *             [autoPan]="..."
 *             [autoPanPaddingTopLeft]="..."
 *             [autoPanPaddingBottomRight]="..."
 *             [autoPanPadding]="..."
 *             [keepInView]="..."
 *             [closeButton]="..."
 *             [autoClose]="..."
 *             [className]="..."
 *             [pane]="..."
 *             >
 *             <p>You can pass your content right here!</p>
 *         </yaga-popup>
 *     </yaga-marker>
 * </yaga-map>
 * ```
 */
var PopupDirective = /** @class */ (function (_super) {
    __extends(PopupDirective, _super);
    function PopupDirective(elementRef, layerProvider) {
        var _this = _super.call(this) || this;
        _this.layerProvider = layerProvider;
        /**
             * Two-Way bound property for the content of a popup.
             * Use it with `<yaga-popup [(content)]="someValue">` or `<yaga-popup (contentChange)="processEvent($event)">`
             *
             * You can also pass the content directly within the web-component as view-content
             * @link http://leafletjs.com/reference-1.2.0.html#popup-setcontent Original Leaflet documentation
             */
        _this.contentChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the state of being opened.
             * Use it with `<yaga-popup [(opened)]="someValue">` or `<yaga-popup (openedChange)="processEvent($event)">`
             *
             * You can also use the `popupOpened` property in the parent directives
             * @link http://leafletjs.com/reference-1.2.0.html#popup-openon Original Leaflet documentation
             */
        _this.openedChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the latitude position of the popup.
             * Use it with `<yaga-popup [(lat)]="someValue">` or `<yaga-popup (latChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
             */
        _this.latChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the longitude position of the popup.
             * Use it with `<yaga-popup [(lng)]="someValue">` or `<yaga-popup (lngChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
             */
        _this.lngChange = new core_1.EventEmitter();
        /**
             * Two-Way bound property for the position (LatLng) of the popup.
             * Use it with `<yaga-popup [(position)]="someValue">` or `<yaga-popup (positionChange)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
             */
        _this.positionChange = new core_1.EventEmitter();
        /**
             * From leaflet fired open event.
             * Use it with `<yaga-popup (open)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-popupopen Original Leaflet documentation
             */
        _this.openEvent = new core_1.EventEmitter();
        /**
             * From leaflet fired close event.
             * Use it with `<yaga-popup (close)="processEvent($event)">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-popupclose Original Leaflet documentation
             */
        _this.closeEvent = new core_1.EventEmitter();
        _this.setContent(elementRef.nativeElement);
        _this.on('add', function (event) {
            _this.openEvent.emit(event);
            _this.openedChange.emit(true);
        });
        _this.on('remove', function (event) {
            _this.closeEvent.emit(event);
            _this.openedChange.emit(false);
        });
        _this.on('popupopen', function (event) {
            _this.openEvent.emit(event);
        });
        _this.on('popuclose', function (event) {
            _this.closeEvent.emit(event);
        });
        _this.layerProvider.ref.bindPopup(_this);
        return _this;
    }
    PopupDirective.prototype.ngOnDestroy = function () {
        if (this._source) {
            this._source.unbindPopup();
        }
    };
    /**
     * Derived method of the original setContent method.
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setcontent Original Leaflet documentation
     */
    /**
         * Derived method of the original setContent method.
         * @link http://leafletjs.com/reference-1.2.0.html#popup-setcontent Original Leaflet documentation
         */
    PopupDirective.prototype.setContent = /**
         * Derived method of the original setContent method.
         * @link http://leafletjs.com/reference-1.2.0.html#popup-setcontent Original Leaflet documentation
         */
    function (content) {
        // Content
        this.contentChange.emit((content));
        return _super.prototype.setContent.call(this, content);
    };
    Object.defineProperty(PopupDirective.prototype, "content", {
        get: function () {
            return this.getContent();
        },
        set: /**
             * Two-Way bound property for the content.
             * Use it with `<yaga-popup [(content)]="someValue">` or `<yaga-popup [content]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-setcontent Original Leaflet documentation
             */
        function (val) {
            this.setContent(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "opened", {
        get: function () {
            return !!this._map;
        },
        set: /**
             * Two-Way bound property for the opened state.
             * Use it with `<yaga-popup [(opened)]="someValue">` or `<yaga-popup [opened]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-openon Original Leaflet documentation
             */
        function (val) {
            if (val) {
                this.layerProvider.ref.openPopup();
                return;
            }
            this.layerProvider.ref.closePopup();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Derived method of the original setLatLng method.
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
     */
    /**
         * Derived method of the original setLatLng method.
         * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
         */
    PopupDirective.prototype.setLatLng = /**
         * Derived method of the original setLatLng method.
         * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
         */
    function (latlng) {
        _super.prototype.setLatLng.call(this, latlng);
        this.latChange.emit(this.lat);
        this.lngChange.emit(this.lng);
        this.positionChange.emit(leaflet_1.latLng(this.lat, this.lng));
        return this;
    };
    Object.defineProperty(PopupDirective.prototype, "lat", {
        get: function () {
            return this.getLatLng().lat;
        },
        set: /**
             * Two-Way bound property for the latitude position of the popup.
             * Use it with `<yaga-popup [(lat)]="someValue">` or `<yaga-popup [lat]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
             */
        function (val) {
            this.setLatLng([val, this.lng]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "lng", {
        get: function () {
            return this.getLatLng().lng;
        },
        set: /**
             * Two-Way bound property for the longitude position of the popup.
             * Use it with `<yaga-popup [(lng)]="someValue">` or `<yaga-popup [lng]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
             */
        function (val) {
            this.setLatLng([this.lat, val]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "position", {
        get: function () {
            return this.getLatLng();
        },
        set: /**
             * Two-Way bound property for the position of the popup.
             * Use it with `<yaga-popup [(position)]="someValue">` or `<yaga-popup [position]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
             */
        function (val) {
            this.setLatLng(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "maxWidth", {
        get: function () {
            return this.options.maxWidth;
        },
        set: /**
             * Input for the maxWidth.
             * Use it with `<yaga-popup [maxWidth]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-maxwidth Original Leaflet documentation
             */
        function (val) {
            this.options.maxWidth = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "minWidth", {
        get: function () {
            return this.options.minWidth;
        },
        set: /**
             * Input for the minWidth.
             * Use it with `<yaga-popup [minWidth]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-minwidth Original Leaflet documentation
             */
        function (val) {
            this.options.minWidth = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "maxHeight", {
        get: function () {
            return this.options.maxHeight;
        },
        set: /**
             * Input for the maxHeight.
             * Use it with `<yaga-popup [maxHeight]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-maxheight Original Leaflet documentation
             */
        function (val) {
            this.options.maxHeight = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "autoPan", {
        get: function () {
            return this.options.autoPan;
        },
        set: /**
             * Input for the autoPan.
             * Use it with `<yaga-popup [autoPan]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-autopan Original Leaflet documentation
             */
        function (val) {
            this.options.autoPan = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "autoPanPaddingTopLeft", {
        get: function () {
            return this.options.autoPanPaddingTopLeft;
        },
        set: /**
             * Input for the autoPanPaddingTopLeft.
             * Use it with `<yaga-popup [autoPanPaddingTopLeft]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-autopanpaddingtopleft Original Leaflet documentation
             */
        function (val) {
            this.options.autoPanPaddingTopLeft = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "autoPanPaddingBottomRight", {
        get: function () {
            return this.options.autoPanPaddingBottomRight;
        },
        set: /**
             * Input for the autoPanPaddingBottomRight.
             * Use it with `<yaga-popup [autoPanPaddingBottomRight]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-autopanpaddingbottomleft Original Leaflet documentation
             */
        function (val) {
            this.options.autoPanPaddingBottomRight = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "autoPanPadding", {
        get: function () {
            return this.options.autoPanPadding;
        },
        set: /**
             * Input for the autoPanPadding.
             * Use it with `<yaga-popup [autoPanPadding]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-autopanpadding Original Leaflet documentation
             */
        function (val) {
            this.options.autoPanPadding = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "keepInView", {
        get: function () {
            return this.options.keepInView;
        },
        set: /**
             * Input for the keyInView.
             * Use it with `<yaga-popup [keyInView]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-keyinview Original Leaflet documentation
             */
        function (val) {
            this.options.keepInView = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "closeButton", {
        get: function () {
            return this.options.closeButton;
        },
        set: /**
             * Input for the closeButton.
             * Use it with `<yaga-popup [closeButton]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-closebutton Original Leaflet documentation
             */
        function (val) {
            this.options.closeButton = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "autoClose", {
        get: function () {
            return this.options.autoClose;
        },
        set: /**
             * Input for the autoClose.
             * Use it with `<yaga-popup [autoClose]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-autoclose Original Leaflet documentation
             */
        function (val) {
            this.options.autoClose = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "className", {
        get: function () {
            return this.options.className;
        },
        set: /**
             * Input for the CSS class name.
             * Use it with `<yaga-popup [autoClose]="className">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-classname Original Leaflet documentation
             */
        function (val) {
            this.options.className = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupDirective.prototype, "pane", {
        get: function () {
            return this.options.pane;
        },
        set: /**
             * Input for the pane.
             * Use it with `<yaga-popup [pane]="someValue">`
             * @link http://leafletjs.com/reference-1.2.0.html#popup-pane Original Leaflet documentation
             */
        function (val) {
            this.options.pane = val;
            if (this._contentNode) {
                this._updateLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    PopupDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'yaga-popup',
                },] },
    ];
    /** @nocollapse */
    PopupDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, decorators: [{ type: core_1.Inject, args: [core_1.ElementRef,] },] },
        { type: layer_provider_1.LayerProvider, },
    ]; };
    PopupDirective.propDecorators = {
        "contentChange": [{ type: core_1.Output },],
        "openedChange": [{ type: core_1.Output },],
        "latChange": [{ type: core_1.Output },],
        "lngChange": [{ type: core_1.Output },],
        "positionChange": [{ type: core_1.Output },],
        "openEvent": [{ type: core_1.Output, args: ['open',] },],
        "closeEvent": [{ type: core_1.Output, args: ['close',] },],
        "content": [{ type: core_1.Input },],
        "opened": [{ type: core_1.Input },],
        "lat": [{ type: core_1.Input },],
        "lng": [{ type: core_1.Input },],
        "position": [{ type: core_1.Input },],
        "maxWidth": [{ type: core_1.Input },],
        "minWidth": [{ type: core_1.Input },],
        "maxHeight": [{ type: core_1.Input },],
        "autoPan": [{ type: core_1.Input },],
        "autoPanPaddingTopLeft": [{ type: core_1.Input },],
        "autoPanPaddingBottomRight": [{ type: core_1.Input },],
        "autoPanPadding": [{ type: core_1.Input },],
        "keepInView": [{ type: core_1.Input },],
        "closeButton": [{ type: core_1.Input },],
        "autoClose": [{ type: core_1.Input },],
        "className": [{ type: core_1.Input },],
        "pane": [{ type: core_1.Input },],
    };
    return PopupDirective;
}(leaflet_1.Popup));
exports.PopupDirective = PopupDirective;
//# sourceMappingURL=popup.directive.js.map