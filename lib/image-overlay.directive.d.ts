import { EventEmitter, OnDestroy } from "@angular/core";
import { ImageOverlay, LatLngBounds, LatLngBoundsExpression, LeafletEvent, LeafletMouseEvent, PopupEvent, TooltipEvent } from "leaflet";
import { LayerGroupProvider } from "./layer-group.provider";
import { LayerProvider } from "./layer.provider";
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
export declare class ImageOverlayDirective extends ImageOverlay implements OnDestroy {
    protected layerGroupProvider: LayerGroupProvider;
    /**
     * Two-Way bound property for the URL.
     * Use it with `<yaga-image-overlay [(url)]="someValue">` or
     * `<yaga-image-overlay (urlChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-seturl Original Leaflet documentation
     */
    urlChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the display status of the layer.
     * Use it with `<yaga-image-overlay [(display)]="someValue">`
     * or `<yaga-image-overlay (displayChange)="processEvent($event)">`
     */
    displayChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the opacity of the layer.
     * Use it with `<yaga-image-overlay [(opacity)]="someValue">`
     * or `<yaga-image-overlay (opacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-opacity Original Leaflet documentation
     */
    opacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the bounds of the image.
     * Use it with `<yaga-image-overlay [(bounds)]="someValue">`
     * or `<yaga-image-overlay (opacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
     */
    boundsChange: EventEmitter<LatLngBounds>;
    /**
     * Two-Way bound property for the north bounds of the image.
     * Use it with `<yaga-image-overlay [(north)]="someValue">`
     * or `<yaga-image-overlay (northChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
     */
    northChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the east bounds of the image.
     * Use it with `<yaga-image-overlay [(east)]="someValue">`
     * or `<yaga-image-overlay (eastChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
     */
    eastChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the south bounds of the image.
     * Use it with `<yaga-image-overlay [(south)]="someValue">`
     * or `<yaga-image-overlay (southChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
     */
    southChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the west bounds of the image.
     * Use it with `<yaga-image-overlay [(west)]="someValue">`
     * or `<yaga-image-overlay (westChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
     */
    westChange: EventEmitter<number>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-image-overlay (add)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-add Original Leaflet documentation
     */
    addEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired remove event.
     * Use it with `<yaga-image-overlay (remove)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-remove Original Leaflet documentation
     */
    removeEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired popupopen event.
     * Use it with `<yaga-image-overlay (popupopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-popupopen Original Leaflet documentation
     */
    popupopenEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired popupclose event.
     * Use it with `<yaga-image-overlay (popupclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-popupclose Original Leaflet documentation
     */
    popupcloseEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired tooltipopen event.
     * Use it with `<yaga-image-overlay (tooltipopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-tooltipopen Original Leaflet documentation
     */
    tooltipopenEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired tooltipclose event.
     * Use it with `<yaga-image-overlay (tooltipclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-tooltipclose Original Leaflet documentation
     */
    tooltipcloseEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired click event.
     * Use it with `<yaga-image-overlay (click)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-click Original Leaflet documentation
     */
    clickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired dblclick event.
     * Use it with `<yaga-image-overlay (dblclick)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-dblclick Original Leaflet documentation
     */
    dblclickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mousedown event.
     * Use it with `<yaga-image-overlay (mousedown)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-mousedown Original Leaflet documentation
     */
    mousedownEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseover event.
     * Use it with `<yaga-image-overlay (mouseover)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-mouseover Original Leaflet documentation
     */
    mouseoverEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseout event.
     * Use it with `<yaga-image-overlay (mouseout)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-mouseout Original Leaflet documentation
     */
    mouseoutEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired contextmenu event.
     * Use it with `<yaga-image-overlay (contextmenu)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-contextmenu Original Leaflet documentation
     */
    contextmenuEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired load event.
     * Use it with `<yaga-image-overlay (load)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-load Original Leaflet documentation
     */
    loadEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired error event.
     * Use it with `<yaga-image-overlay (error)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-error Original Leaflet documentation
     */
    errorEvent: EventEmitter<LeafletEvent>;
    constructor(layerGroupProvider: LayerGroupProvider, layerProvider: LayerProvider);
    /**
     * This function gets called from Angular on destroy of the html-component.
     * @link https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html
     */
    ngOnDestroy(): void;
    /**
     * Derived method of the original setUrl method.
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-seturl Original Leaflet documentation
     */
    setUrl(url: string): this;
    /**
     * Two-Way bound property for the URL.
     * Use it with `<yaga-image-overlay [(url)]="someValue">` or `<yaga-image-overlay [url]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-seturl Original Leaflet documentation
     */
    url: string;
    /**
     * Derived method of the original setOpacity method.
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setopacity Original Leaflet documentation
     */
    setOpacity(val: number): this;
    /**
     * Two-Way bound property for the opacity.
     * Use it with `<yaga-image-overlay [(opacity)]="someValue">` or `<yaga-image-overlay [opacity]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setopacity Original Leaflet documentation
     */
    opacity: number;
    /**
     * Two-Way bound property for the display status of the layer.
     * Use it with `<yaga-image-overlay [(display)]="someValue">` or `<yaga-image-overlay [display]="someValue">`
     */
    /**
     * Two-Way bound property for the display status of the layer.
     * Use it with `<yaga-image-overlay [(display)]="someValue">` or `<yaga-image-overlay [display]="someValue">`
     */
    display: boolean;
    /**
     * Derived method of the original setBounds method.
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-setbounds Original Leaflet documentation
     */
    setBounds(val: LatLngBoundsExpression): this;
    /**
     * Two-Way bound property for the bounds of the image.
     * Use it with `<yaga-image-overlay [(bounds)]="someValue">` or `<yaga-image-overlay [bounds]="someValue">`
     */
    bounds: LatLngBounds;
    /**
     * Two-Way bound property for the north bounds of the image.
     * Use it with `<yaga-image-overlay [(north)]="someValue">` or `<yaga-image-overlay [north]="someValue">`
     */
    north: number;
    /**
     * Two-Way bound property for the east bounds of the image.
     * Use it with `<yaga-image-overlay [(east)]="someValue">` or `<yaga-image-overlay [east]="someValue">`
     */
    east: number;
    /**
     * Two-Way bound property for the south bounds of the image.
     * Use it with `<yaga-image-overlay [(south)]="someValue">` or `<yaga-image-overlay [south]="someValue">`
     */
    south: number;
    /**
     * Two-Way bound property for the west bounds of the image.
     * Use it with `<yaga-image-overlay [(west)]="someValue">` or `<yaga-image-overlay [west]="someValue">`
     */
    west: number;
    /**
     * Input for the crossOrigin.
     * Use it with `<yaga-image-overlay [crossOrigin]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-crossorigin Original Leaflet documentation
     */
    crossOrigin: boolean;
    /**
     * Input for the alternative text.
     * Use it with `<yaga-image-overlay [alt]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-alt Original Leaflet documentation
     */
    alt: string;
    /**
     * Input for the state of interaction.
     * Use it with `<yaga-image-overlay [interactive]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-interactive Original Leaflet documentation
     */
    interactive: boolean;
    /**
     * Input for the attribution.
     * Use it with `<yaga-image-overlay [attribution]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#imageoverlay-attribution Original Leaflet documentation
     */
    attribution: string;
}
