import { AfterContentInit, EventEmitter, OnDestroy } from '@angular/core';
import { DivIcon, DragEndEvent, Icon, LatLng, LatLngLiteral, LatLngTuple, LeafletEvent, LeafletMouseEvent, Marker, PopupEvent, TooltipEvent } from 'leaflet';
import { LayerGroupProvider } from './layer-group.provider';
import { LayerProvider } from './layer.provider';
import { MarkerProvider } from './marker.provider';
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
export declare class MarkerDirective extends Marker implements AfterContentInit, OnDestroy {
    /**
     * Two-Way bound property for the latlng-position of the geometry.
     * Use it with `<yaga-marker [(position)]="someValue">`
     * or `<yaga-marker (positionChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
     */
    positionChange: EventEmitter<LatLng>;
    /**
     * Two-Way bound property for the latitude of the geometry.
     * Use it with `<yaga-marker [(lat)]="someValue">`
     * or `<yaga-marker (latChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
     */
    latChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the longitude of the geometry.
     * Use it with `<yaga-marker [(lng)]="someValue">`
     * or `<yaga-marker (lngChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
     */
    lngChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the opacity of the geometry.
     * Use it with `<yaga-marker [(opacity)]="someValue">`
     * or `<yaga-marker (opacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setopacity Original Leaflet documentation
     */
    opacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the display status of the geometry.
     * Use it with `<yaga-marker [(display)]="someValue">`
     * or `<yaga-marker (displayChange)="processEvent($event)">`
     */
    displayChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the offset of the zIndex.
     * Use it with `<yaga-marker [(zIndexOffset)]="someValue">`
     * or `<yaga-marker (zIndexOffsetChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#marker-zindexoffset Original Leaflet documentation
     */
    zIndexOffsetChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the draggable state.
     * Use it with `<yaga-marker [(draggable)]="someValue">`
     * or `<yaga-marker (draggableChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#marker-dragging Original Leaflet documentation
     */
    draggableChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the icon.
     * Use it with `<yaga-marker [(icon)]="someValue">`
     * or `<yaga-marker (iconChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#marker-seticon Original Leaflet documentation
     */
    iconChange: EventEmitter<Icon | DivIcon>;
    tooltipOpenedChange: EventEmitter<boolean>;
    popupOpenedChange: EventEmitter<boolean>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-marker (dragend)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-dragend Original Leaflet documentation
     */
    dragendEvent: EventEmitter<DragEndEvent>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-marker (dragstart)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-dragstart Original Leaflet documentation
     */
    dragstartEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-marker (movestart)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-movestart Original Leaflet documentation
     */
    movestartEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-marker (drag)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-drag Original Leaflet documentation
     */
    dragEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-marker (moveend)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-moveend Original Leaflet documentation
     */
    moveendEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-marker (add)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-add Original Leaflet documentation
     */
    addEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired remove event.
     * Use it with `<yaga-marker (remove)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-remove Original Leaflet documentation
     */
    removeEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired popupopen event.
     * Use it with `<yaga-marker (popupopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-popupopen Original Leaflet documentation
     */
    popupopenEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired popupclose event.
     * Use it with `<yaga-marker (popupclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-popupclose Original Leaflet documentation
     */
    popupcloseEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired tooltipopen event.
     * Use it with `<yaga-marker (tooltipopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-tooltipopen Original Leaflet documentation
     */
    tooltipopenEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired tooltipclose event.
     * Use it with `<yaga-marker (tooltipclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-tooltipclose Original Leaflet documentation
     */
    tooltipcloseEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired click event.
     * Use it with `<yaga-marker (click)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-click Original Leaflet documentation
     */
    clickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired dbclick event.
     * Use it with `<yaga-marker (dbclick)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-dbclick Original Leaflet documentation
     */
    dbclickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mousedown event.
     * Use it with `<yaga-marker (mousedown)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-mousedown Original Leaflet documentation
     */
    mousedownEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseover event.
     * Use it with `<yaga-marker (mouseover)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-mouseover Original Leaflet documentation
     */
    mouseoverEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseout event.
     * Use it with `<yaga-marker (mouseout)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-mouseout Original Leaflet documentation
     */
    mouseoutEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired contextmenu event.
     * Use it with `<yaga-marker (contextmenu)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-contextmenu Original Leaflet documentation
     */
    contextmenuEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * Internal property to stop further processing while it is not initialized
     */
    private initialized;
    constructor(layerGroupProvider: LayerGroupProvider, layerProvider: LayerProvider, markerProvider: MarkerProvider);
    /**
     * Internal method that provides the initialization of the directive
     */
    ngAfterContentInit(): void;
    /**
     * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
     */
    ngOnDestroy(): void;
    /**
     * Two-Way bound property for the display status of the layer.
     * Use it with `<yaga-marker [(display)]="someValue">` or `<yaga-marker [display]="someValue">`
     */
    display: boolean;
    /**
     * Derived method of the original setLatLng method.
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
     */
    setLatLng(val: LatLng | LatLngLiteral | LatLngTuple): this;
    /**
     * Two-Way bound property for the position of the marker.
     * Use it with `<yaga-marker [(position)]="someValue">` or `<yaga-marker [position]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
     */
    position: LatLng;
    /**
     * Two-Way bound property for the position of the marker.
     * Use it with `<yaga-marker [(lat)]="someValue">` or `<yaga-marker [lat]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
     */
    lat: number;
    /**
     * Two-Way bound property for the position of the marker.
     * Use it with `<yaga-marker [(lng)]="someValue">` or `<yaga-marker [lng]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setlatlng Original Leaflet documentation
     */
    lng: number;
    /**
     * Derived method of the original setOpacity method.
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setopacity Original Leaflet documentation
     */
    setOpacity(val: number): this;
    /**
     * Two-Way bound property for the opacity of the marker.
     * Use it with `<yaga-marker [(opacity)]="someValue">` or `<yaga-marker [opacity]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-setopacity Original Leaflet documentation
     */
    opacity: number;
    /**
     * Two-Way bound property for the state of the popup.
     * Use it with `<yaga-marker [(popupOpened)]="someValue">` or `<yaga-marker [popupOpened]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-openpopup Original Leaflet documentation
     */
    popupOpened: boolean;
    /**
     * Two-Way bound property for the state of the popup.
     * Use it with `<yaga-marker [(tooltipOpened)]="someValue">` or `<yaga-marker [tooltipOpened]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-opentooltip Original Leaflet documentation
     */
    tooltipOpened: boolean;
    /**
     * Derived method of the original setIcon method.
     * @link http://leafletjs.com/reference-1.2.0.html#marker-seticon Original Leaflet documentation
     */
    setIcon(val: Icon | DivIcon): this;
    /**
     * Two-Way bound property for the state of the popup.
     * Use it with `<yaga-marker [(icon)]="someValue">` or `<yaga-marker [icon]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-seticon Original Leaflet documentation
     */
    icon: Icon | DivIcon;
    /**
     * Two-Way bound property for the state of the dragging.
     * Use it with `<yaga-marker [(draggable)]="someValue">` or `<yaga-marker [draggable]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-dragging Original Leaflet documentation
     */
    draggable: boolean;
    /**
     * Derived method of the original setZIndexOffset method.
     * @link http://leafletjs.com/reference-1.2.0.html#marker-zindexoffset Original Leaflet documentation
     */
    setZIndexOffset(val: number): this;
    /**
     * Two-Way bound property for the offset of the zIndex.
     * Use it with `<yaga-marker [(draggable)]="someValue">` or `<yaga-marker [draggable]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-zindexoffset Original Leaflet documentation
     */
    zIndexOffset: number;
    /**
     * Input for the title.
     * Use it with `<yaga-marker [title]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-title Original Leaflet documentation
     */
    title: string;
    /**
     * Input for the alternative text.
     * Use it with `<yaga-marker [alt]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#marker-title Original Leaflet documentation
     */
    alt: string;
}
