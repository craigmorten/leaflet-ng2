import { AfterContentInit, EventEmitter, OnDestroy } from "@angular/core";
import { Feature as GeoJSONFeature } from "geojson";
import { FillRule, LatLng, LatLngBounds, LatLngBoundsLiteral, LatLngExpression, LatLngTuple, LeafletEvent, LeafletMouseEvent, LineCapShape, LineJoinShape, PathOptions, PolylineOptions, PopupEvent, Rectangle, TooltipEvent } from "leaflet";
import { LayerGroupProvider } from "./layer-group.provider";
import { LayerProvider } from "./layer.provider";
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
 *         (dblclick)="..."
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
export declare class RectangleDirective<T> extends Rectangle implements OnDestroy, AfterContentInit {
    protected layerGroupProvider: LayerGroupProvider;
    /**
     * Two-Way bound property for the display status of the geometry.
     * Use it with `<yaga-rectangle [(display)]="someValue">`
     * or `<yaga-rectangle (displayChange)="processEvent($event)">`
     */
    displayChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the stroke state of the geometry.
     * Use it with `<yaga-rectangle [(stroke)]="someValue">`
     * or `<yaga-rectangle (strokeChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-stroke Original Leaflet documentation
     */
    strokeChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the line-color of the geometry.
     * Use it with `<yaga-rectangle [(color)]="someValue">`
     * or `<yaga-rectangle (colorChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-color Original Leaflet documentation
     */
    colorChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the weight of the geometry.
     * Use it with `<yaga-rectangle [(weight)]="someValue">`
     * or `<yaga-rectangle (weightChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-weight Original Leaflet documentation
     */
    weightChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the opacity of the geometry.
     * Use it with `<yaga-rectangle [(opacity)]="someValue">`
     * or `<yaga-rectangle (opacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-opacity Original Leaflet documentation
     */
    opacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the lineCap of the geometry.
     * Use it with `<yaga-rectangle [(lineCap)]="someValue">`
     * or `<yaga-rectangle (lineCapChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-linecap Original Leaflet documentation
     */
    lineCapChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the lineJoin of the geometry.
     * Use it with `<yaga-rectangle [(lineJoin)]="someValue">`
     * or `<yaga-rectangle (lineJoinChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-linejoin Original Leaflet documentation
     */
    lineJoinChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the dashArray of the geometry.
     * Use it with `<yaga-rectangle [(dashArray)]="someValue">`
     * or `<yaga-rectangle (dashArrayChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dasharray Original Leaflet documentation
     */
    dashArrayChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the dashOffset of the geometry.
     * Use it with `<yaga-rectangle [(dashOffset)]="someValue">`
     * or `<yaga-rectangle (dashOffsetChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dashoffset Original Leaflet documentation
     */
    dashOffsetChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the fill state of the geometry.
     * Use it with `<yaga-rectangle [(fill)]="someValue">`
     * or `<yaga-rectangle (fillChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fill Original Leaflet documentation
     */
    fillChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the fill-color of the geometry.
     * Use it with `<yaga-rectangle [(fillColor)]="someValue">`
     * or `<yaga-rectangle (fillColorChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillcolor Original Leaflet documentation
     */
    fillColorChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the fill-opacity of the geometry.
     * Use it with `<yaga-rectangle [(fillOpacity)]="someValue">`
     * or `<yaga-rectangle (fillOpacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillopacity Original Leaflet documentation
     */
    fillOpacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the fill-rule of the geometry.
     * Use it with `<yaga-rectangle [(fillRule)]="someValue">`
     * or `<yaga-rectangle (fillRuleChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillrule Original Leaflet documentation
     */
    fillRuleChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the className of the geometry.
     * Use it with `<yaga-rectangle [(className)]="someValue">`
     * or `<yaga-rectangle (classNameChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-classname Original Leaflet documentation
     */
    classNameChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the css-style of the geometry.
     * Use it with `<yaga-rectangle [(style)]="someValue">`
     * or `<yaga-rectangle (styleChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setstyle Original Leaflet documentation
     */
    styleChange: EventEmitter<PathOptions>;
    /**
     * Two-Way bound property for the array of LatLngs of the geometry.
     * Use it with `<yaga-rectangle [(latLngs)]="someValue">`
     * or `<yaga-rectangle (latLngsChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setlatlngs Original Leaflet documentation
     */
    latLngsChange: EventEmitter<LatLng[]>;
    /**
     * Two-Way bound property for the bounds of the rectangle.
     * Use it with `<yaga-rectangle [(bounds)]="someValue">`
     * or `<yaga-rectangle (boundsChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
     */
    boundsChange: EventEmitter<LatLngBounds>;
    /**
     * Two-Way bound property for the north of the bounds of the rectangle.
     * Use it with `<yaga-rectangle [(north)]="someValue">`
     * or `<yaga-rectangle (northChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
     */
    northChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the east of the bounds of the rectangle.
     * Use it with `<yaga-rectangle [(east)]="someValue">`
     * or `<yaga-rectangle (eastChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
     */
    eastChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the south of the bounds of the rectangle.
     * Use it with `<yaga-rectangle [(south)]="someValue">`
     * or `<yaga-rectangle (southChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
     */
    southChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the west of the bounds of the rectangle.
     * Use it with `<yaga-rectangle [(west)]="someValue">`
     * or `<yaga-rectangle (westChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#rectangle-setbounds Original Leaflet documentation
     */
    westChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the corresponding GeoJSON.
     * Use it with `<yaga-rectangle [(geoJSON)]="someValue">`
     * or `<yaga-rectangle (geoJSONChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#rectangle-togeojson Original Leaflet documentation
     */
    geoJSONChange: EventEmitter<GeoJSONFeature<GeoJSON.Polygon | GeoJSON.MultiPolygon, T>>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-rectangle (add)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-add Original Leaflet documentation
     */
    addEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired remove event.
     * Use it with `<yaga-rectangle (remove)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-remove Original Leaflet documentation
     */
    removeEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired popupopen event.
     * Use it with `<yaga-rectangle (popupopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-popupopen Original Leaflet documentation
     */
    popupopenEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired popupclose event.
     * Use it with `<yaga-rectangle (popupclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-popupclose Original Leaflet documentation
     */
    popupcloseEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired tooltipopen event.
     * Use it with `<yaga-rectangle (tooltipopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-tooltipopen Original Leaflet documentation
     */
    tooltipopenEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired tooltipclose event.
     * Use it with `<yaga-rectangle (tooltipclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-tooltipclose Original Leaflet documentation
     */
    tooltipcloseEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired click event.
     * Use it with `<yaga-rectangle (click)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-click Original Leaflet documentation
     */
    clickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired dblclick event.
     * Use it with `<yaga-rectangle (dblclick)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dblclick Original Leaflet documentation
     */
    dblclickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mousedown event.
     * Use it with `<yaga-rectangle (mousedown)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-mousedown Original Leaflet documentation
     */
    mousedownEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseover event.
     * Use it with `<yaga-rectangle (mouseover)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-mouseover Original Leaflet documentation
     */
    mouseoverEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseout event.
     * Use it with `<yaga-rectangle (mouseout)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-mouseout Original Leaflet documentation
     */
    mouseoutEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired contextmenu event.
     * Use it with `<yaga-rectangle (contextmenu)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-contextmenu Original Leaflet documentation
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
     * Derived method of the original setBounds.
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
     */
    setBounds(val: LatLngBounds | LatLngBoundsLiteral): this;
    /**
     * Two-Way bound property for the bounds.
     * Use it with `<yaga-rectangle [(bounds)]="someValue">` or `<yaga-rectangle [bounds]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
     */
    bounds: LatLngBounds;
    /**
     * Two-Way bound property for the north of the bounds.
     * Use it with `<yaga-rectangle [(north)]="someValue">` or `<yaga-rectangle [north]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
     */
    north: number;
    /**
     * Two-Way bound property for the east of the bounds.
     * Use it with `<yaga-rectangle [(east)]="someValue">` or `<yaga-rectangle [east]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
     */
    east: number;
    /**
     * Two-Way bound property for the south of the bounds.
     * Use it with `<yaga-rectangle [(south)]="someValue">` or `<yaga-rectangle [south]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
     */
    south: number;
    /**
     * Two-Way bound property for the west of the bounds.
     * Use it with `<yaga-rectangle [(west)]="someValue">` or `<yaga-rectangle [west]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
     */
    west: number;
    /**
     * Derived method fof the original LatLngs.
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-addlatlngs Original Leaflet documentation
     */
    setLatLngs(val: (Array<(LatLng | LatLngTuple | LatLngExpression)> | Array<Array<(LatLng | LatLngTuple | LatLngExpression)>> | Array<Array<Array<(LatLng | LatLngTuple | LatLngExpression)>>>)): this;
    /**
     * Derived method of the original addLatLng.
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-addlatlngs Original Leaflet documentation
     */
    addLatLng(val: (LatLng | LatLngTuple | LatLngExpression) | Array<(LatLng | LatLngTuple | LatLngExpression)>): this;
    /**
     * Two-Way bound property for the array of LatLngs for the geometry.
     * Use it with `<yaga-rectangle [(latLngs)]="someValue">` or `<yaga-rectangle [latLngs]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setbounds Original Leaflet documentation
     */
    latLngs: LatLng[] | LatLng[][] | LatLng[][][];
    /**
     * Two-Way bound property for the corresponding GeoJSON.
     * Use it with `<yaga-rectangle [(geoJSON)]="someValue">` or `<yaga-rectangle [geoJSON]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-togeojson Original Leaflet documentation
     */
    geoJSON: GeoJSONFeature<GeoJSON.Polygon | GeoJSON.MultiPolygon, T>;
    /**
     * Derived method of the original setStyle.
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-setstyle Original Leaflet documentation
     */
    setStyle(style: PathOptions): this;
    /**
     * Two-Way bound property for the opacity.
     * Use it with `<yaga-rectangle [(opacity)]="someValue">` or `<yaga-rectangle [opacity]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-opacity Original Leaflet documentation
     */
    opacity: number;
    /**
     * Two-Way bound property for the stroke.
     * Use it with `<yaga-rectangle [(stroke)]="someValue">` or `<yaga-rectangle [stroke]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-stroke Original Leaflet documentation
     */
    stroke: boolean;
    /**
     * Two-Way bound property for the color.
     * Use it with `<yaga-rectangle [(color)]="someValue">` or `<yaga-rectangle [color]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-color Original Leaflet documentation
     */
    color: string;
    /**
     * Two-Way bound property for the weight.
     * Use it with `<yaga-rectangle [(weight)]="someValue">` or `<yaga-rectangle [weight]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-weight Original Leaflet documentation
     */
    weight: number;
    /**
     * Two-Way bound property for the lineCap.
     * Use it with `<yaga-rectangle [(lineCap)]="someValue">` or `<yaga-rectangle [lineCap]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-linecap Original Leaflet documentation
     */
    lineCap: LineCapShape;
    /**
     * Two-Way bound property for the lineJoin.
     * Use it with `<yaga-rectangle [(lineJoin)]="someValue">` or `<yaga-rectangle [lineJoin]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-linejoin Original Leaflet documentation
     */
    lineJoin: LineJoinShape;
    /**
     * Two-Way bound property for the dashArray.
     * Use it with `<yaga-rectangle [(dashArray)]="someValue">` or `<yaga-rectangle [dashArray]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dasharray Original Leaflet documentation
     */
    dashArray: string;
    /**
     * Two-Way bound property for the dashOffset.
     * Use it with `<yaga-rectangle [(dashOffset)]="someValue">` or `<yaga-rectangle [dashOffset]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-dashoffset Original Leaflet documentation
     */
    dashOffset: string;
    /**
     * Two-Way bound property for the fill.
     * Use it with `<yaga-rectangle [(fill)]="someValue">` or `<yaga-rectangle [fill]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fill Original Leaflet documentation
     */
    fill: boolean;
    /**
     * Two-Way bound property for the fillColor.
     * Use it with `<yaga-rectangle [(fillColor)]="someValue">` or `<yaga-rectangle [fillColor]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillcolor Original Leaflet documentation
     */
    fillColor: string;
    /**
     * Two-Way bound property for the fillOpacity.
     * Use it with `<yaga-rectangle [(fillOpacity)]="someValue">` or `<yaga-rectangle [fillOpacity]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillopacity Original Leaflet documentation
     */
    fillOpacity: number;
    /**
     * Two-Way bound property for the fillRule.
     * Use it with `<yaga-rectangle [(fillRule)]="someValue">` or `<yaga-rectangle [fillRule]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-fillrule Original Leaflet documentation
     */
    fillRule: FillRule;
    /**
     * Two-Way bound property for the className.
     * Use it with `<yaga-rectangle [(className)]="someValue">` or `<yaga-rectangle [className]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-classname Original Leaflet documentation
     */
    className: string;
    /**
     * Two-Way bound property for the opacity.
     * Use it with `<yaga-rectangle [(style)]="someValue">` or `<yaga-rectangle [style]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-style Original Leaflet documentation
     */
    style: PolylineOptions;
    /**
     * Two-Way bound property for the display state.
     * Use it with `<yaga-rectangle [(display)]="someValue">` or `<yaga-rectangle [display]="someValue">`
     */
    display: boolean;
    /**
     * Input for the interactive state.
     * Use it with `<yaga-rectangle [interactive]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-interactive Original Leaflet documentation
     */
    interactive: boolean;
    /**
     * Input for the smoothFactor.
     * Use it with `<yaga-rectangle [smoothFactor]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-smoothfactor Original Leaflet documentation
     */
    smoothFactor: number;
    /**
     * Input for the noClip state.
     * Use it with `<yaga-rectangle [noClip]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#rectangle-noclip Original Leaflet documentation
     */
    noClip: boolean;
    /**
     * Input for the GeoJSON properties.
     * Use it with `<yaga-rectangle [properties]="someValue">`
     */
    properties: T;
}