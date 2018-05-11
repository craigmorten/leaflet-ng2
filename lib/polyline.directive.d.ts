import { EventEmitter, OnDestroy } from "@angular/core";
import { Feature as GeoJSONFeature } from "geojson";
import { FillRule, LatLng, LatLngExpression, LatLngTuple, LeafletEvent, LeafletMouseEvent, LineCapShape, LineJoinShape, PathOptions, Polyline, PolylineOptions, PopupEvent, TooltipEvent } from "leaflet";
import { LayerGroupProvider } from "./layer-group.provider";
import { LayerProvider } from "./layer.provider";
/**
 * Angular2 directive for Leaflet polylines.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-polyline
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
 *     </yaga-polyline>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#polyline Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=Rectangle%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/polyline.directive.js.html Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/polylinedirective.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/polyline-directive
 */
export declare class PolylineDirective<T> extends Polyline implements OnDestroy {
    protected layerGroupProvider: LayerGroupProvider;
    /**
     * Two-Way bound property for the display status of the geometry.
     * Use it with `<yaga-polyline [(display)]="someValue">`
     * or `<yaga-polyline (displayChange)="processEvent($event)">`
     */
    displayChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the stroke state of the geometry.
     * Use it with `<yaga-polyline [(stroke)]="someValue">`
     * or `<yaga-polyline (strokeChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-stroke Original Leaflet documentation
     */
    strokeChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the line-color of the geometry.
     * Use it with `<yaga-polyline [(color)]="someValue">`
     * or `<yaga-polyline (colorChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-color Original Leaflet documentation
     */
    colorChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the weight of the geometry.
     * Use it with `<yaga-polyline [(weight)]="someValue">`
     * or `<yaga-polyline (weightChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-weight Original Leaflet documentation
     */
    weightChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the opacity of the geometry.
     * Use it with `<yaga-polyline [(opacity)]="someValue">`
     * or `<yaga-polyline (opacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-opacity Original Leaflet documentation
     */
    opacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the lineCap of the geometry.
     * Use it with `<yaga-polyline [(lineCap)]="someValue">`
     * or `<yaga-polyline (lineCapChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-linecap Original Leaflet documentation
     */
    lineCapChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the lineJoin of the geometry.
     * Use it with `<yaga-polyline [(lineJoin)]="someValue">`
     * or `<yaga-polyline (lineJoinChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-linejoin Original Leaflet documentation
     */
    lineJoinChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the dashArray of the geometry.
     * Use it with `<yaga-polyline [(dashArray)]="someValue">`
     * or `<yaga-polyline (dashArrayChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-dasharray Original Leaflet documentation
     */
    dashArrayChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the dashOffset of the geometry.
     * Use it with `<yaga-polyline [(dashOffset)]="someValue">`
     * or `<yaga-polyline (dashOffsetChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-dashoffset Original Leaflet documentation
     */
    dashOffsetChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the fill state of the geometry.
     * Use it with `<yaga-polyline [(fill)]="someValue">`
     * or `<yaga-polyline (fillChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-fill Original Leaflet documentation
     */
    fillChange: EventEmitter<boolean>;
    /**
     * Two-Way bound property for the fill-color of the geometry.
     * Use it with `<yaga-polyline [(fillColor)]="someValue">`
     * or `<yaga-polyline (fillColorChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-fillcolor Original Leaflet documentation
     */
    fillColorChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the fill-opacity of the geometry.
     * Use it with `<yaga-polyline [(fillOpacity)]="someValue">`
     * or `<yaga-polyline (fillOpacityChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-fillopacity Original Leaflet documentation
     */
    fillOpacityChange: EventEmitter<number>;
    /**
     * Two-Way bound property for the fill-rule of the geometry.
     * Use it with `<yaga-polyline [(fillRule)]="someValue">`
     * or `<yaga-polyline (fillRuleChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-fillrule Original Leaflet documentation
     */
    fillRuleChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the className of the geometry.
     * Use it with `<yaga-polyline [(className)]="someValue">`
     * or `<yaga-polyline (classNameChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-classname Original Leaflet documentation
     */
    classNameChange: EventEmitter<string>;
    /**
     * Two-Way bound property for the css-style of the geometry.
     * Use it with `<yaga-polyline [(style)]="someValue">`
     * or `<yaga-polyline (styleChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-setstyle Original Leaflet documentation
     */
    styleChange: EventEmitter<PathOptions>;
    /**
     * Two-Way bound property for the array of LatLngs of the geometry.
     * Use it with `<yaga-polyline [(latLngs)]="someValue">`
     * or `<yaga-polyline (latLngsChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#polyline-setlatlngs Original Leaflet documentation
     */
    latLngsChange: EventEmitter<LatLng[]>;
    /**
     * Two-Way bound property for the corresponding GeoJSON.
     * Use it with `<yaga-polyline [(geoJSON)]="someValue">`
     * or `<yaga-polyline (geoJSONChange)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.3.0.html#polyline-togeojson Original Leaflet documentation
     */
    geoJSONChange: EventEmitter<GeoJSONFeature<GeoJSON.LineString | GeoJSON.MultiLineString, T>>;
    /**
     * From leaflet fired add event.
     * Use it with `<yaga-polyline (add)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-add Original Leaflet documentation
     */
    addEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired remove event.
     * Use it with `<yaga-polyline (remove)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-remove Original Leaflet documentation
     */
    removeEvent: EventEmitter<LeafletEvent>;
    /**
     * From leaflet fired popupopen event.
     * Use it with `<yaga-polyline (popupopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-popupopen Original Leaflet documentation
     */
    popupopenEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired popupclose event.
     * Use it with `<yaga-polyline (popupclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-popupclose Original Leaflet documentation
     */
    popupcloseEvent: EventEmitter<PopupEvent>;
    /**
     * From leaflet fired tooltipopen event.
     * Use it with `<yaga-polyline (tooltipopen)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-tooltipopen Original Leaflet documentation
     */
    tooltipopenEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired tooltipclose event.
     * Use it with `<yaga-polyline (tooltipclose)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-tooltipclose Original Leaflet documentation
     */
    tooltipcloseEvent: EventEmitter<TooltipEvent>;
    /**
     * From leaflet fired click event.
     * Use it with `<yaga-polyline (click)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-click Original Leaflet documentation
     */
    clickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired dblclick event.
     * Use it with `<yaga-polyline (dblclick)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-dblclick Original Leaflet documentation
     */
    dblclickEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mousedown event.
     * Use it with `<yaga-polyline (mousedown)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-mousedown Original Leaflet documentation
     */
    mousedownEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseover event.
     * Use it with `<yaga-polyline (mouseover)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-mouseover Original Leaflet documentation
     */
    mouseoverEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired mouseout event.
     * Use it with `<yaga-polyline (mouseout)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-mouseout Original Leaflet documentation
     */
    mouseoutEvent: EventEmitter<LeafletMouseEvent>;
    /**
     * From leaflet fired contextmenu event.
     * Use it with `<yaga-polyline (contextmenu)="processEvent($event)">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-contextmenu Original Leaflet documentation
     */
    contextmenuEvent: EventEmitter<LeafletMouseEvent>;
    constructor(layerGroupProvider: LayerGroupProvider, layerProvider: LayerProvider);
    /**
     * Internal method to provide the removal of the layer in Leaflet, when removing it from the Angular template
     */
    ngOnDestroy(): void;
    /**
     * Derived method fof the original LatLngs.
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-addlatlngs Original Leaflet documentation
     */
    setLatLngs(val: (Array<(LatLng | LatLngTuple | LatLngExpression)> | Array<Array<(LatLng | LatLngTuple | LatLngExpression)>>)): this;
    /**
     * Derived method of the original addLatLng.
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-addlatlngs Original Leaflet documentation
     */
    addLatLng(val: (LatLng | LatLngTuple | LatLngExpression) | Array<(LatLng | LatLngTuple | LatLngExpression)>): this;
    /**
     * Two-Way bound property for the array of LatLngs for the geometry.
     * Use it with `<yaga-polyline [(latLngs)]="someValue">` or `<yaga-polyline [latLngs]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-setbounds Original Leaflet documentation
     */
    latLngs: LatLng[] | LatLng[][];
    /**
     * Two-Way bound property for the corresponding GeoJSON.
     * Use it with `<yaga-polyline [(geoJSON)]="someValue">` or `<yaga-polyline [geoJSON]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-togeojson Original Leaflet documentation
     */
    geoJSON: GeoJSONFeature<GeoJSON.LineString | GeoJSON.MultiLineString, T>;
    /**
     * Derived method of the original setStyle.
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-setstyle Original Leaflet documentation
     */
    setStyle(style: PathOptions): this;
    /**
     * Two-Way bound property for the opacity.
     * Use it with `<yaga-polyline [(opacity)]="someValue">` or `<yaga-polyline [opacity]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-opacity Original Leaflet documentation
     */
    opacity: number;
    /**
     * Two-Way bound property for the stroke.
     * Use it with `<yaga-polyline [(stroke)]="someValue">` or `<yaga-polyline [stroke]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-stroke Original Leaflet documentation
     */
    stroke: boolean;
    /**
     * Two-Way bound property for the color.
     * Use it with `<yaga-polyline [(color)]="someValue">` or `<yaga-polyline [color]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-color Original Leaflet documentation
     */
    color: string;
    /**
     * Two-Way bound property for the weight.
     * Use it with `<yaga-polyline [(weight)]="someValue">` or `<yaga-polyline [weight]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-weight Original Leaflet documentation
     */
    weight: number;
    /**
     * Two-Way bound property for the lineCap.
     * Use it with `<yaga-polyline [(lineCap)]="someValue">` or `<yaga-polyline [lineCap]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-linecap Original Leaflet documentation
     */
    lineCap: LineCapShape;
    /**
     * Two-Way bound property for the lineJoin.
     * Use it with `<yaga-polyline [(lineJoin)]="someValue">` or `<yaga-polyline [lineJoin]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-linejoin Original Leaflet documentation
     */
    lineJoin: LineJoinShape;
    /**
     * Two-Way bound property for the dashArray.
     * Use it with `<yaga-polyline [(dashArray)]="someValue">` or `<yaga-polyline [dashArray]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-dasharray Original Leaflet documentation
     */
    dashArray: string;
    /**
     * Two-Way bound property for the dashOffset.
     * Use it with `<yaga-polyline [(dashOffset)]="someValue">` or `<yaga-polyline [dashOffset]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-dashoffset Original Leaflet documentation
     */
    dashOffset: string;
    /**
     * Two-Way bound property for the fill.
     * Use it with `<yaga-polyline [(fill)]="someValue">` or `<yaga-polyline [fill]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-fill Original Leaflet documentation
     */
    fill: boolean;
    /**
     * Two-Way bound property for the fillColor.
     * Use it with `<yaga-polyline [(fillColor)]="someValue">` or `<yaga-polyline [fillColor]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-fillcolor Original Leaflet documentation
     */
    fillColor: string;
    /**
     * Two-Way bound property for the fillOpacity.
     * Use it with `<yaga-polyline [(fillOpacity)]="someValue">` or `<yaga-polyline [fillOpacity]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-fillopacity Original Leaflet documentation
     */
    fillOpacity: number;
    /**
     * Two-Way bound property for the fillRule.
     * Use it with `<yaga-polyline [(fillRule)]="someValue">` or `<yaga-polyline [fillRule]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-fillrule Original Leaflet documentation
     */
    fillRule: FillRule;
    /**
     * Two-Way bound property for the className.
     * Use it with `<yaga-polyline [(className)]="someValue">` or `<yaga-polyline [className]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-classname Original Leaflet documentation
     */
    className: string;
    /**
     * Two-Way bound property for the opacity.
     * Use it with `<yaga-polyline [(style)]="someValue">` or `<yaga-polyline [style]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-style Original Leaflet documentation
     */
    style: PolylineOptions;
    /**
     * Two-Way bound property for the display state.
     * Use it with `<yaga-polyline [(display)]="someValue">` or `<yaga-polyline [display]="someValue">`
     */
    display: boolean;
    /**
     * Input for the interactive state.
     * Use it with `<yaga-polyline [interactive]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-interactive Original Leaflet documentation
     */
    interactive: boolean;
    /**
     * Input for the smoothFactor.
     * Use it with `<yaga-polyline [smoothFactor]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-smoothfactor Original Leaflet documentation
     */
    smoothFactor: number;
    /**
     * Input for the noClip state.
     * Use it with `<yaga-polyline [noClip]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#polyline-noclip Original Leaflet documentation
     */
    noClip: boolean;
    /**
     * Input for the GeoJSON properties.
     * Use it with `<yaga-polyline [properties]="someValue">`
     */
    properties: T;
}