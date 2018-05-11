import { ElementRef, EventEmitter, OnDestroy } from "@angular/core";
import { Content, LatLng, LatLngExpression, LeafletEvent, Point, Popup } from "leaflet";
import { LayerProvider } from "./layer.provider";
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
export declare class PopupDirective extends Popup implements OnDestroy {
    layerProvider: LayerProvider;
    /**
     * Two-Way bound property for the content of a popup.
     * Use it with `<yaga-popup [(content)]="someValue">` or `<yaga-popup (contentChange)="processEvent($event)">`
     *
     * You can also pass the content directly within the web-component as view-content
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setcontent Original Leaflet documentation
     */
    contentChange: EventEmitter<Content>;
    /**
     * Two-Way bound property for the state of being opened.
     * Use it with `<yaga-popup [(opened)]="someValue">` or `<yaga-popup (openedChange)="processEvent($event)">`
     *
     * You can also use the `popupOpened` property in the parent directives
     * @link http://leafletjs.com/reference-1.2.0.html#popup-openon Original Leaflet documentation
     */
    openedChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the latitude position of the popup.
     * Use it with `<yaga-popup [(lat)]="someValue">` or `<yaga-popup (latChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
     */
    latChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the longitude position of the popup.
     * Use it with `<yaga-popup [(lng)]="someValue">` or `<yaga-popup (lngChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
     */
    lngChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the position (LatLng) of the popup.
     * Use it with `<yaga-popup [(position)]="someValue">` or `<yaga-popup (positionChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
     */
    positionChange: EventEmitter<LatLng>;
    /**
     * From leaflet fired open event.
     * Use it with `<yaga-popup (open)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-popupopen Original Leaflet documentation
     */
    openEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired close event.
     * Use it with `<yaga-popup (close)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-popupclose Original Leaflet documentation
     */
    closeEvent: EventEmitter<LeafletEvent>;
    constructor(elementRef: ElementRef, layerProvider: LayerProvider);
    ngOnDestroy(): void;
    /**
     * Derived method of the original setContent method.
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setcontent Original Leaflet documentation
     */
    setContent(content: any): this;
    /**
     * Two-Way bound property for the content.
     * Use it with `<yaga-popup [(content)]="someValue">` or `<yaga-popup [content]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setcontent Original Leaflet documentation
     */
    content: Content;
    /**
     * Two-Way bound property for the opened state.
     * Use it with `<yaga-popup [(opened)]="someValue">` or `<yaga-popup [opened]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-openon Original Leaflet documentation
     */
    opened: boolean;
    /**
     * Derived method of the original setLatLng method.
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
     */
    setLatLng(latlng: LatLngExpression): this;
    /**
     * Two-Way bound property for the latitude position of the popup.
     * Use it with `<yaga-popup [(lat)]="someValue">` or `<yaga-popup [lat]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
     */
    lat: number;
    /**
     * Two-Way bound property for the longitude position of the popup.
     * Use it with `<yaga-popup [(lng)]="someValue">` or `<yaga-popup [lng]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
     */
    lng: number;
    /**
     * Two-Way bound property for the position of the popup.
     * Use it with `<yaga-popup [(position)]="someValue">` or `<yaga-popup [position]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-setlatlng Original Leaflet documentation
     */
    position: LatLng;
    /**
     * Input for the maxWidth.
     * Use it with `<yaga-popup [maxWidth]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-maxwidth Original Leaflet documentation
     */
    maxWidth: number;
    /**
     * Input for the minWidth.
     * Use it with `<yaga-popup [minWidth]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-minwidth Original Leaflet documentation
     */
    minWidth: number;
    /**
     * Input for the maxHeight.
     * Use it with `<yaga-popup [maxHeight]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-maxheight Original Leaflet documentation
     */
    maxHeight: number;
    /**
     * Input for the autoPan.
     * Use it with `<yaga-popup [autoPan]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-autopan Original Leaflet documentation
     */
    autoPan: boolean;
    /**
     * Input for the autoPanPaddingTopLeft.
     * Use it with `<yaga-popup [autoPanPaddingTopLeft]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-autopanpaddingtopleft Original Leaflet documentation
     */
    autoPanPaddingTopLeft: Point;
    /**
     * Input for the autoPanPaddingBottomRight.
     * Use it with `<yaga-popup [autoPanPaddingBottomRight]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-autopanpaddingbottomleft Original Leaflet documentation
     */
    autoPanPaddingBottomRight: Point;
    /**
     * Input for the autoPanPadding.
     * Use it with `<yaga-popup [autoPanPadding]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-autopanpadding Original Leaflet documentation
     */
    autoPanPadding: Point;
    /**
     * Input for the keyInView.
     * Use it with `<yaga-popup [keyInView]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-keyinview Original Leaflet documentation
     */
    keepInView: boolean;
    /**
     * Input for the closeButton.
     * Use it with `<yaga-popup [closeButton]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-closebutton Original Leaflet documentation
     */
    closeButton: boolean;
    /**
     * Input for the autoClose.
     * Use it with `<yaga-popup [autoClose]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-autoclose Original Leaflet documentation
     */
    autoClose: boolean;
    /**
     * Input for the CSS class name.
     * Use it with `<yaga-popup [autoClose]="className">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-classname Original Leaflet documentation
     */
    className: string;
    /**
     * Input for the pane.
     * Use it with `<yaga-popup [pane]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#popup-pane Original Leaflet documentation
     */
    pane: string;
    reopen(force?: boolean): void;
}