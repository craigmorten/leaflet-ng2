import { ElementRef, EventEmitter, OnDestroy } from "@angular/core";
import { Content, Direction, LatLng, LatLngExpression, LeafletEvent, Point, Tooltip } from "leaflet";
import { LayerProvider } from "./layer.provider";
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
export declare class TooltipDirective extends Tooltip implements OnDestroy {
    protected layerProvider: LayerProvider;
    /**
     * Two-Way bound property for the content of a tooltip.
     * Use it with `<yaga-tooltip [(content)]="someValue">` or `<yaga-tooltip (contentChange)="processEvent($event)">`
     *
     * You can also pass the content directly within the web-component as view-content
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
     */
    contentChange: EventEmitter<Content>;
    /**
     * Two-Way bound property for the state of being opened.
     * Use it with `<yaga-tooltip [(opened)]="someValue">` or `<yaga-tooltip (openedChange)="processEvent($event)">`
     *
     * You can also use the `tooltipOpened` property in the parent directives
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-openon Original Leaflet documentation
     */
    openedChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the latitude position of the tooltip.
     * Use it with `<yaga-tooltip [(lat)]="someValue">` or `<yaga-tooltip (latChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
     */
    latChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the longitude position of the tooltip.
     * Use it with `<yaga-tooltip [(lng)]="someValue">` or `<yaga-tooltip (lngChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
     */
    lngChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the position (LatLng) of the tooltip.
     * Use it with `<yaga-tooltip [(position)]="someValue">` or `<yaga-tooltip (positionChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
     */
    positionChange: EventEmitter<LatLng>;
    /**
     * Two-Way bound property for the opacity of the tooltip.
     * Use it with `<yaga-tooltip [(opacity)]="someValue">` or `<yaga-tooltip (opacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
     */
    opacityChange: EventEmitter<number>;
    /**
     * From leaflet fired open event.
     * Use it with `<yaga-tooltip (open)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-tooltipopen Original Leaflet documentation
     */
    openEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired close event.
     * Use it with `<yaga-tooltip (close)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-tooltipclose Original Leaflet documentation
     */
    closeEvent: EventEmitter<LeafletEvent>;
    constructor(layerProvider: LayerProvider, elementRef: ElementRef);
    /**
     * This function gets called from Angular on destroy of the html-component.
     * @link https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html
     */
    ngOnDestroy(): void;
    /**
     * Derived method of the original setContent method.
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
     */
    setContent(content: any): this;
    /**
     * Two-Way bound property for the content.
     * Use it with `<yaga-tooltip [(content)]="someValue">` or `<yaga-tooltip [content]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
     */
    content: Content;
    /**
     * Two-Way bound property for the opened state.
     * Use it with `<yaga-tooltip [(opened)]="someValue">` or `<yaga-tooltip [opened]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-openon Original Leaflet documentation
     */
    opened: boolean;
    /**
     * Derived method of the original setLatLng method.
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
     */
    setLatLng(latlng: LatLngExpression): this;
    /**
     * Two-Way bound property for the latitude position of the tooltip.
     * Use it with `<yaga-tooltip [(lat)]="someValue">` or `<yaga-tooltip [lat]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
     */
    lat: number;
    /**
     * Two-Way bound property for the longitude position of the tooltip.
     * Use it with `<yaga-tooltip [(lng)]="someValue">` or `<yaga-tooltip [lng]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
     */
    lng: number;
    /**
     * Two-Way bound property for the position of the tooltip.
     * Use it with `<yaga-tooltip [(position)]="someValue">` or `<yaga-tooltip [position]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setlatlng Original Leaflet documentation
     */
    position: LatLng;
    /**
     * Derived method of the original setContent method.
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-setcontent Original Leaflet documentation
     */
    setOpacity(val: number): void;
    /**
     * Two-Way bound property for the opacity of the tooltip.
     * Use it with `<yaga-tooltip [(opacity)]="someValue">` or `<yaga-tooltip [opacity]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-opacity Original Leaflet documentation
     */
    opacity: number;
    /**
     * Input for the CSS class name.
     * Use it with `<yaga-tooltip [autoClose]="className">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-classname Original Leaflet documentation
     */
    className: string;
    /**
     * Input for the pane.
     * Use it with `<yaga-tooltip [pane]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-pane Original Leaflet documentation
     */
    pane: string;
    /**
     * Input for the interactive state.
     * Use it with `<yaga-tooltip [interactive]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-interactive Original Leaflet documentation
     */
    interactive: boolean;
    /**
     * Input for the sticky.
     * Use it with `<yaga-tooltip [sticky]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-sticky Original Leaflet documentation
     */
    sticky: boolean;
    /**
     * Input for the direction.
     * Use it with `<yaga-tooltip [direction]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-direction Original Leaflet documentation
     */
    direction: Direction;
    /**
     * Input for the permanent state.
     * Use it with `<yaga-tooltip [permanent]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-permanent Original Leaflet documentation
     */
    permanent: boolean;
    /**
     * Input for the offset.
     * Use it with `<yaga-tooltip [offset]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#tooltip-offset Original Leaflet documentation
     */
    offset: Point;
    reopen(force?: boolean): void;
}