import { AfterContentInit, EventEmitter, OnDestroy } from "@angular/core";
import { Feature as GeoJSONFeature } from "geojson";
import { Circle, CircleMarkerOptions, FillRule, LatLng, LatLngLiteral, LatLngTuple, LeafletEvent, LeafletMouseEvent, LineCapShape, LineJoinShape, PathOptions, PopupEvent, TooltipEvent } from "leaflet";
import { LayerGroupProvider } from "./layer-group.provider";
import { LayerProvider } from "./layer.provider";
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
export declare class CircleDirective<T> extends Circle implements OnDestroy, AfterContentInit {
    protected layerGroupProvider: LayerGroupProvider;
    /**
     * Two-Way bound property for the display status of the geometry.
     * Use it with `<yaga-circle [(display)]="someValue">`
     * or `<yaga-circle (displayChange)="processEvent($event)">`
     */
    displayChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the stroke state of the geometry.
     * Use it with `<yaga-circle [(stroke)]="someValue">`
     * or `<yaga-circle (strokeChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-stroke Original Leaflet documentation
     */
    strokeChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the line-color of the geometry.
     * Use it with `<yaga-circle [(color)]="someValue">`
     * or `<yaga-circle (colorChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-color Original Leaflet documentation
     */
    colorChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the weight of the geometry.
     * Use it with `<yaga-circle [(weight)]="someValue">`
     * or `<yaga-circle (weightChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-weight Original Leaflet documentation
     */
    weightChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the opacity of the geometry.
     * Use it with `<yaga-circle [(opacity)]="someValue">`
     * or `<yaga-circle (opacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-opacity Original Leaflet documentation
     */
    opacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the lineCap of the geometry.
     * Use it with `<yaga-circle [(lineCap)]="someValue">`
     * or `<yaga-circle (lineCapChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-linecap Original Leaflet documentation
     */
    lineCapChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the lineJoin of the geometry.
     * Use it with `<yaga-circle [(lineJoin)]="someValue">`
     * or `<yaga-circle (lineJoinChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-linejoin Original Leaflet documentation
     */
    lineJoinChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the dashArray of the geometry.
     * Use it with `<yaga-circle [(dashArray)]="someValue">`
     * or `<yaga-circle (dashArrayChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-dasharray Original Leaflet documentation
     */
    dashArrayChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the dashOffset of the geometry.
     * Use it with `<yaga-circle [(dashOffset)]="someValue">`
     * or `<yaga-circle (dashOffsetChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-dashoffset Original Leaflet documentation
     */
    dashOffsetChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the fill state of the geometry.
     * Use it with `<yaga-circle [(fill)]="someValue">`
     * or `<yaga-circle (fillChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-fill Original Leaflet documentation
     */
    fillChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the fill-color of the geometry.
     * Use it with `<yaga-circle [(fillColor)]="someValue">`
     * or `<yaga-circle (fillColorChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-fillcolor Original Leaflet documentation
     */
    fillColorChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the fill-opacity of the geometry.
     * Use it with `<yaga-circle [(fillOpacity)]="someValue">`
     * or `<yaga-circle (fillOpacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-fillopacity Original Leaflet documentation
     */
    fillOpacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the fill-rule of the geometry.
     * Use it with `<yaga-circle [(fillRule)]="someValue">`
     * or `<yaga-circle (fillRuleChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-fillrule Original Leaflet documentation
     */
    fillRuleChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the className of the geometry.
     * Use it with `<yaga-circle [(className)]="someValue">`
     * or `<yaga-circle (classNameChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-classname Original Leaflet documentation
     */
    classNameChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the css-style of the geometry.
     * Use it with `<yaga-circle [(style)]="someValue">`
     * or `<yaga-circle (styleChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setstyle Original Leaflet documentation
     */
    styleChange: EventEmitter<PathOptions>;
    /**
     * Two-Way bound property for the latlng-position of the geometry.
     * Use it with `<yaga-circle [(position)]="someValue">`
     * or `<yaga-circle (positionChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
     */
    positionChange: EventEmitter<LatLng>;
    /**
     * Two-Way bound property for the latitude of the geometry.
     * Use it with `<yaga-circle [(lat)]="someValue">`
     * or `<yaga-circle (latChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
     */
    latChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the longitude of the geometry.
     * Use it with `<yaga-circle [(lng)]="someValue">`
     * or `<yaga-circle (lngChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
     */
    lngChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the radius of the geometry.
     * Use it with `<yaga-circle [(radius)]="someValue">`
     * or `<yaga-circle (radiusChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setradius Original Leaflet documentation
     */
    radiusChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the geometry represented as GeoJSON.
     * Use it with `<yaga-circle [(geoJSON)]="someValue">`
     * or `<yaga-circle (geoJSONChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-togeojson Original Leaflet documentation
     */
    geoJSONChange: EventEmitter<GeoJSONFeature<GeoJSON.Point, T>>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-circle (add)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-add Original Leaflet documentation
     */
    addEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired remove event.
     * Use it with `<yaga-circle (remove)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-remove Original Leaflet documentation
     */
    removeEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired popupopen event.
     * Use it with `<yaga-circle (popupopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-popupopen Original Leaflet documentation
     */
    popupopenEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired popupclose event.
     * Use it with `<yaga-circle (popupclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-popupclose Original Leaflet documentation
     */
    popupcloseEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired tooltipopen event.
     * Use it with `<yaga-circle (tooltipopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-tooltipopen Original Leaflet documentation
     */
    tooltipopenEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired tooltipclose event.
     * Use it with `<yaga-circle (tooltipclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-tooltipclose Original Leaflet documentation
     */
    tooltipcloseEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired click event.
     * Use it with `<yaga-circle (click)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-click Original Leaflet documentation
     */
    clickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired dblclick event.
     * Use it with `<yaga-circle (dblclick)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-dblclick Original Leaflet documentation
     */
    dblclickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mousedown event.
     * Use it with `<yaga-circle (mousedown)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-mousedown Original Leaflet documentation
     */
    mousedownEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseover event.
     * Use it with `<yaga-circle (mouseover)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-mouseover Original Leaflet documentation
     */
    mouseoverEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseout event.
     * Use it with `<yaga-circle (mouseout)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-mouseout Original Leaflet documentation
     */
    mouseoutEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired contextmenu event.
     * Use it with `<yaga-circle (contextmenu)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-contextmenu Original Leaflet documentation
     */
    contextmenuEvent: EventEmitter<LeafletMouseEvent>;
    private initialized;
    constructor(layerGroupProvider: LayerGroupProvider, layerProvider: LayerProvider);
    /**
     * Internal method that provides the initialization of the child popup or tooltip
     */
    ngAfterContentInit(): void;
    /**
     * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
     */
    ngOnDestroy(): void;
    /**
     * Derived method of the original setLatLng.
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setlatlng Original Leaflet documentation
     */
    setLatLng(val: LatLng | LatLngTuple | LatLngLiteral): this;
    /**
     * Two-Way bound property for the position of the circle.
     * Use it with `<yaga-circle [(position)]="someValue">` or `<yaga-circle [position]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-l-circle Original Leaflet documentation
     */
    position: LatLng | LatLngTuple | LatLngLiteral;
    /**
     * Two-Way bound property for the latitude (position) of the circle.
     * Use it with `<yaga-circle [(lat)]="someValue">` or `<yaga-circle [lat]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-l-circle Original Leaflet documentation
     */
    lat: number;
    /**
     * Two-Way bound property for the longitude (position) of the circle.
     * Use it with `<yaga-circle [(lng)]="someValue">` or `<yaga-circle [lng]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-l-circle Original Leaflet documentation
     */
    lng: number;
    /**
     * Derived method of the original setRadius.
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setradius Original Leaflet documentation
     */
    setRadius(val: number): this;
    /**
     * Two-Way bound property for the radius of the circle.
     * Use it with `<yaga-circle [(radius)]="someValue">` or `<yaga-circle [radius]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-radius Original Leaflet documentation
     */
    radius: number;
    /**
     * Two-Way bound property for the geoJSON data.
     * Use it with `<yaga-circle [(geoJSON)]="someValue">` or `<yaga-circle [geoJSONChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-togeojson Original Leaflet documentation
     */
    geoJSON: GeoJSONFeature<GeoJSON.Point, T>;
    /**
     * Derived method of the original setStyle.
     * @link http://leafletjs.com/reference-1.2.0.html#circle-setstyle Original Leaflet documentation
     */
    setStyle(style: PathOptions): this;
    /**
     * Two-Way bound property for the opacity.
     * Use it with `<yaga-circle [(opacity)]="someValue">` or `<yaga-circle [opacityChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-opacity Original Leaflet documentation
     */
    opacity: number;
    /**
     * Two-Way bound property for the stroke.
     * Use it with `<yaga-circle [(stroke)]="someValue">` or `<yaga-circle [strokeChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-stroke Original Leaflet documentation
     */
    stroke: boolean;
    /**
     * Two-Way bound property for the color.
     * Use it with `<yaga-circle [(color)]="someValue">` or `<yaga-circle [colorChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-color Original Leaflet documentation
     */
    color: string;
    /**
     * Two-Way bound property for the weight.
     * Use it with `<yaga-circle [(weight)]="someValue">` or `<yaga-circle [weightChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-weight Original Leaflet documentation
     */
    weight: number;
    /**
     * Two-Way bound property for the lineCap.
     * Use it with `<yaga-circle [(lineCap)]="someValue">` or `<yaga-circle [lineCapChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-linecap Original Leaflet documentation
     */
    lineCap: LineCapShape;
    /**
     * Two-Way bound property for the lineJoin.
     * Use it with `<yaga-circle [(lineJoin)]="someValue">` or `<yaga-circle [lineJoinChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-linejoin Original Leaflet documentation
     */
    lineJoin: LineJoinShape;
    /**
     * Two-Way bound property for the dashArray.
     * Use it with `<yaga-circle [(dashArray)]="someValue">` or `<yaga-circle [dashArrayChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-dasharray Original Leaflet documentation
     */
    dashArray: string;
    /**
     * Two-Way bound property for the dashOffset.
     * Use it with `<yaga-circle [(dashOffset)]="someValue">` or `<yaga-circle [dashOffsetChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-dashoffset Original Leaflet documentation
     */
    dashOffset: string;
    /**
     * Two-Way bound property for the fill.
     * Use it with `<yaga-circle [(fill)]="someValue">` or `<yaga-circle [fillChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-fill Original Leaflet documentation
     */
    fill: boolean;
    /**
     * Two-Way bound property for the fillColor.
     * Use it with `<yaga-circle [(fillColor)]="someValue">` or `<yaga-circle [fillColorChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-fillcolor Original Leaflet documentation
     */
    fillColor: string;
    /**
     * Two-Way bound property for the fillOpacity.
     * Use it with `<yaga-circle [(fillOpacity)]="someValue">` or `<yaga-circle [fillOpacityChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-fillopacity Original Leaflet documentation
     */
    fillOpacity: number;
    /**
     * Two-Way bound property for the fillRule.
     * Use it with `<yaga-circle [(fillRule)]="someValue">` or `<yaga-circle [fillRuleChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-fillrule Original Leaflet documentation
     */
    fillRule: FillRule;
    /**
     * Two-Way bound property for the className.
     * Use it with `<yaga-circle [(className)]="someValue">` or `<yaga-circle [classNameChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-classname Original Leaflet documentation
     */
    className: string;
    /**
     * Two-Way bound property for the opacity.
     * Use it with `<yaga-circle [(style)]="someValue">` or `<yaga-circle [styleChange]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-style Original Leaflet documentation
     */
    style: CircleMarkerOptions;
    /**
     * Two-Way bound property for the display state.
     * Use it with `<yaga-circle [(display)]="someValue">` or `<yaga-circle [displayChange]="someValue">`
     */
    display: boolean;
    /**
     * Input for the GeoJSON properties.
     * Use it with `<yaga-circle [interactive]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#circle-interactive Original Leaflet documentation
     */
    interactive: boolean;
    /**
     * Input for the GeoJSON properties.
     * Use it with `<yaga-circle [properties]="someValue">`
     */
    properties: T;
}