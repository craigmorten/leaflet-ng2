import { LayerGroup, Map } from "leaflet";
/**
 * Injectable Angular provider to structure Leaflet layer-groups with Angulars DI
 * @link http://leafletjs.com/reference-1.2.0.html#layer-group
 */
export declare class LayerGroupProvider {
    ref: Map | LayerGroup;
}