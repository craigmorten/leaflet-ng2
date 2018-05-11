import { EventEmitter, OnDestroy } from "@angular/core";
import { Feature as GeoJSONFeature } from "geojson";
import { FillRule, LatLng, LatLngExpression, LatLngTuple, LeafletEvent, LeafletMouseEvent, LineCapShape, LineJoinShape, PathOptions, Polygon, PolylineOptions, PopupEvent, TooltipEvent } from "leaflet";
import { LayerGroupProvider } from "./layer-group.provider";
import { LayerProvider } from "./layer.provider";
/**
 * Angular2 directive for Leaflet polygons.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-polygon
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
 *     </yaga-polygon>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#polygon Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=Rectangle%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/polygon.directive.js.html Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/polygondirective.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/polygon-directive
 */
export declare class PolygonDirective<T> extends Polygon implements OnDestroy {
    protected layerGroupProvider: LayerGroupProvider;
    /**
     * Two-Way bound property for the display status of the geometry.
     * Use it with `<yaga-polygon [(display)]="someValue">`
     * or `<yaga-polygon (displayChange)="processEvent($event)">`
     */
    displayChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the stroke state of the geometry.
     * Use it with `<yaga-polygon [(stroke)]="someValue">`
     * or `<yaga-polygon (strokeChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-stroke Original Leaflet documentation
     */
    strokeChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the line-color of the geometry.
     * Use it with `<yaga-polygon [(color)]="someValue">`
     * or `<yaga-polygon (colorChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-color Original Leaflet documentation
     */
    colorChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the weight of the geometry.
     * Use it with `<yaga-polygon [(weight)]="someValue">`
     * or `<yaga-polygon (weightChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-weight Original Leaflet documentation
     */
    weightChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the opacity of the geometry.
     * Use it with `<yaga-polygon [(opacity)]="someValue">`
     * or `<yaga-polygon (opacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-opacity Original Leaflet documentation
     */
    opacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the lineCap of the geometry.
     * Use it with `<yaga-polygon [(lineCap)]="someValue">`
     * or `<yaga-polygon (lineCapChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-linecap Original Leaflet documentation
     */
    lineCapChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the lineJoin of the geometry.
     * Use it with `<yaga-polygon [(lineJoin)]="someValue">`
     * or `<yaga-polygon (lineJoinChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-linejoin Original Leaflet documentation
     */
    lineJoinChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the dashArray of the geometry.
     * Use it with `<yaga-polygon [(dashArray)]="someValue">`
     * or `<yaga-polygon (dashArrayChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-dasharray Original Leaflet documentation
     */
    dashArrayChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the dashOffset of the geometry.
     * Use it with `<yaga-polygon [(dashOffset)]="someValue">`
     * or `<yaga-polygon (dashOffsetChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-dashoffset Original Leaflet documentation
     */
    dashOffsetChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the fill state of the geometry.
     * Use it with `<yaga-polygon [(fill)]="someValue">`
     * or `<yaga-polygon (fillChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-fill Original Leaflet documentation
     */
    fillChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the fill-color of the geometry.
     * Use it with `<yaga-polygon [(fillColor)]="someValue">`
     * or `<yaga-polygon (fillColorChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillcolor Original Leaflet documentation
     */
    fillColorChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the fill-opacity of the geometry.
     * Use it with `<yaga-polygon [(fillOpacity)]="someValue">`
     * or `<yaga-polygon (fillOpacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillopacity Original Leaflet documentation
     */
    fillOpacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the fill-rule of the geometry.
     * Use it with `<yaga-polygon [(fillRule)]="someValue">`
     * or `<yaga-polygon (fillRuleChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillrule Original Leaflet documentation
     */
    fillRuleChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the className of the geometry.
     * Use it with `<yaga-polygon [(className)]="someValue">`
     * or `<yaga-polygon (classNameChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-classname Original Leaflet documentation
     */
    classNameChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the css-style of the geometry.
     * Use it with `<yaga-polygon [(style)]="someValue">`
     * or `<yaga-polygon (styleChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-setstyle Original Leaflet documentation
     */
    styleChange: EventEmitter<PathOptions>;
    /**
     * Two-Way bound property for the array of LatLngs of the geometry.
     * Use it with `<yaga-polygon [(latLngs)]="someValue">`
     * or `<yaga-polygon (latLngsChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#polygon-setlatlngs Original Leaflet documentation
     */
    latLngsChange: EventEmitter<LatLng[]>;
    /**
     * Two-Way bound property for the corresponding GeoJSON.
     * Use it with `<yaga-polygon [(geoJSON)]="someValue">`
     * or `<yaga-polygon (geoJSONChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#polygon-togeojson Original Leaflet documentation
     */
    geoJSONChange: EventEmitter<GeoJSONFeature<GeoJSON.Polygon | GeoJSON.MultiPolygon, T>>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-polygon (add)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-add Original Leaflet documentation
     */
    addEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired remove event.
     * Use it with `<yaga-polygon (remove)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-remove Original Leaflet documentation
     */
    removeEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired popupopen event.
     * Use it with `<yaga-polygon (popupopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-popupopen Original Leaflet documentation
     */
    popupopenEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired popupclose event.
     * Use it with `<yaga-polygon (popupclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-popupclose Original Leaflet documentation
     */
    popupcloseEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired tooltipopen event.
     * Use it with `<yaga-polygon (tooltipopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-tooltipopen Original Leaflet documentation
     */
    tooltipopenEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired tooltipclose event.
     * Use it with `<yaga-polygon (tooltipclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-tooltipclose Original Leaflet documentation
     */
    tooltipcloseEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired click event.
     * Use it with `<yaga-polygon (click)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-click Original Leaflet documentation
     */
    clickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired dblclick event.
     * Use it with `<yaga-polygon (dblclick)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-dblclick Original Leaflet documentation
     */
    dblclickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mousedown event.
     * Use it with `<yaga-polygon (mousedown)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-mousedown Original Leaflet documentation
     */
    mousedownEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseover event.
     * Use it with `<yaga-polygon (mouseover)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-mouseover Original Leaflet documentation
     */
    mouseoverEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseout event.
     * Use it with `<yaga-polygon (mouseout)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-mouseout Original Leaflet documentation
     */
    mouseoutEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired contextmenu event.
     * Use it with `<yaga-polygon (contextmenu)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-contextmenu Original Leaflet documentation
     */
    contextmenuEvent: EventEmitter<LeafletMouseEvent>;
    constructor(layerGroupProvider: LayerGroupProvider, layerProvider: LayerProvider);
    /**
     * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
     */
    ngOnDestroy(): void;
    /**
     * Derived method fof the original LatLngs.
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-addlatlngs Original Leaflet documentation
     */
    setLatLngs(val: (Array<(LatLng | LatLngTuple | LatLngExpression)> | Array<Array<(LatLng | LatLngTuple | LatLngExpression)>> | Array<Array<Array<(LatLng | LatLngTuple | LatLngExpression)>>>)): this;
    /**
     * Derived method of the original addLatLng.
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-addlatlngs Original Leaflet documentation
     */
    addLatLng(val: (LatLng | LatLngTuple | LatLngExpression) | Array<(LatLng | LatLngTuple | LatLngExpression)>): this;
    /**
     * Two-Way bound property for the array of LatLngs for the geometry.
     * Use it with `<yaga-polygon [(latLngs)]="someValue">` or `<yaga-polygon [latLngs]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-setbounds Original Leaflet documentation
     */
    latLngs: LatLng[] | LatLng[][] | LatLng[][][];
    /**
     * Two-Way bound property for the corresponding GeoJSON.
     * Use it with `<yaga-polygon [(geoJSON)]="someValue">` or `<yaga-polygon [geoJSON]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-togeojson Original Leaflet documentation
     */
    geoJSON: GeoJSONFeature<GeoJSON.Polygon | GeoJSON.MultiPolygon, T>;
    /**
     * Derived method of the original setStyle.
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-setstyle Original Leaflet documentation
     */
    setStyle(style: PathOptions): this;
    /**
     * Two-Way bound property for the opacity.
     * Use it with `<yaga-polygon [(opacity)]="someValue">` or `<yaga-polygon [opacity]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-opacity Original Leaflet documentation
     */
    opacity: number;
    /**
     * Two-Way bound property for the stroke.
     * Use it with `<yaga-polygon [(stroke)]="someValue">` or `<yaga-polygon [stroke]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-stroke Original Leaflet documentation
     */
    stroke: boolean;
    /**
     * Two-Way bound property for the color.
     * Use it with `<yaga-polygon [(color)]="someValue">` or `<yaga-polygon [color]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-color Original Leaflet documentation
     */
    color: string;
    /**
     * Two-Way bound property for the weight.
     * Use it with `<yaga-polygon [(weight)]="someValue">` or `<yaga-polygon [weight]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-weight Original Leaflet documentation
     */
    weight: number;
    /**
     * Two-Way bound property for the lineCap.
     * Use it with `<yaga-polygon [(lineCap)]="someValue">` or `<yaga-polygon [lineCap]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-linecap Original Leaflet documentation
     */
    lineCap: LineCapShape;
    /**
     * Two-Way bound property for the lineJoin.
     * Use it with `<yaga-polygon [(lineJoin)]="someValue">` or `<yaga-polygon [lineJoin]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-linejoin Original Leaflet documentation
     */
    lineJoin: LineJoinShape;
    /**
     * Two-Way bound property for the dashArray.
     * Use it with `<yaga-polygon [(dashArray)]="someValue">` or `<yaga-polygon [dashArray]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-dasharray Original Leaflet documentation
     */
    dashArray: string;
    /**
     * Two-Way bound property for the dashOffset.
     * Use it with `<yaga-polygon [(dashOffset)]="someValue">` or `<yaga-polygon [dashOffset]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-dashoffset Original Leaflet documentation
     */
    dashOffset: string;
    /**
     * Two-Way bound property for the fill.
     * Use it with `<yaga-polygon [(fill)]="someValue">` or `<yaga-polygon [fill]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-fill Original Leaflet documentation
     */
    fill: boolean;
    /**
     * Two-Way bound property for the fillColor.
     * Use it with `<yaga-polygon [(fillColor)]="someValue">` or `<yaga-polygon [fillColor]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillcolor Original Leaflet documentation
     */
    fillColor: string;
    /**
     * Two-Way bound property for the fillOpacity.
     * Use it with `<yaga-polygon [(fillOpacity)]="someValue">` or `<yaga-polygon [fillOpacity]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillopacity Original Leaflet documentation
     */
    fillOpacity: number;
    /**
     * Two-Way bound property for the fillRule.
     * Use it with `<yaga-polygon [(fillRule)]="someValue">` or `<yaga-polygon [fillRule]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-fillrule Original Leaflet documentation
     */
    fillRule: FillRule;
    /**
     * Two-Way bound property for the className.
     * Use it with `<yaga-polygon [(className)]="someValue">` or `<yaga-polygon [className]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-classname Original Leaflet documentation
     */
    className: string;
    /**
     * Two-Way bound property for the opacity.
     * Use it with `<yaga-polygon [(style)]="someValue">` or `<yaga-polygon [style]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-style Original Leaflet documentation
     */
    style: PolylineOptions;
    /**
     * Two-Way bound property for the display state.
     * Use it with `<yaga-polygon [(display)]="someValue">` or `<yaga-polygon [display]="someValue">`
     */
    display: boolean;
    /**
     * Input for the interactive state.
     * Use it with `<yaga-polygon [interactive]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-interactive Original Leaflet documentation
     */
    interactive: boolean;
    /**
     * Input for the smoothFactor.
     * Use it with `<yaga-polygon [smoothFactor]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-smoothfactor Original Leaflet documentation
     */
    smoothFactor: number;
    /**
     * Input for the noClip state.
     * Use it with `<yaga-polygon [noClip]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polygon-noclip Original Leaflet documentation
     */
    noClip: boolean;
    /**
     * Input for the GeoJSON properties.
     * Use it with `<yaga-polygon [properties]="someValue">`
     */
    properties: T;
}
