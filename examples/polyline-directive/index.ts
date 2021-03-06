// Shims
import 'reflect-metadata';
import 'zone.js';

import { YagaModule } from '../../lib/index'; // @yaga/leflet-ng2

import { Component, PlatformRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ExampleAppComponentBlueprint, IExampleProperties } from '../app-component-blueprint';
import { ExamplePropertiesModule, PROPERTIES_WRAPPER } from '../property.component';

const platform: PlatformRef = platformBrowserDynamic();

/* tslint:disable:max-line-length */
const template: string = `
<example-header [title]="'Polyline-Directive'"></example-header>
<div class="container">
  <div class="map">
    <yaga-map>
      <yaga-polyline
        (click)="handleEvent('click', $event);"
        (dblclick)="handleEvent('dblclick', $event);"
        (mousedown)="handleEvent('mousedown', $event);"
        (mouseup)="handleEvent('mouseup', $event);"
        (mouseover)="handleEvent('mouseover', $event);"
        (mouseout)="handleEvent('mouseout', $event);"
        (mousemove)="handleEvent('mousemove', $event);"
        (contextmenu)="handleEvent('contextmenu', $event);"
        (keypress)="handleEvent('keypress', $event);"
        (preclick)="handleEvent('preclick', $event);"

        [(geoJSON)]="getDuplexPropertyByName('geoJSON').value"
        [(display)]="getDuplexPropertyByName('display').value"
        [(stroke)]="getDuplexPropertyByName('stroke').value"
        [(color)]="getDuplexPropertyByName('color').value"
        [(weight)]="getDuplexPropertyByName('weight').value"
        [(opacity)]="getDuplexPropertyByName('opacity').value"
        [(lineCap)]="getDuplexPropertyByName('lineCap').value"
        [(lineJoin)]="getDuplexPropertyByName('lineJoin').value"
        [(dashArray)]="getDuplexPropertyByName('dashArray').value"
        [(dashOffset)]="getDuplexPropertyByName('dashOffset').value"
        [(fill)]="getDuplexPropertyByName('fill').value"
        [(fillColor)]="getDuplexPropertyByName('fillColor').value"
        [(fillOpacity)]="getDuplexPropertyByName('fillOpacity').value"
        [(fillRule)]="getDuplexPropertyByName('fillRule').value"
        [(className)]="getDuplexPropertyByName('className').value"
        
        [smoothFactor]="getInputPropertyByName('smoothFactor').value"
        [noClip]="getInputPropertyByName('noClip').value"
        >
        <yaga-tooltip>{{ getInputPropertyByName('tooltip directive').value }}</yaga-tooltip>
        <yaga-popup>{{ getInputPropertyByName('popup directive').value }}</yaga-popup>
      </yaga-polyline>
      <yaga-tile-layer [url]="'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'"></yaga-tile-layer>
    </yaga-map>
  </div>
  ${ PROPERTIES_WRAPPER }
</div><!-- /.container -->
<example-footer></example-footer>
`;
/* tslint:enable */

@Component({
    selector: 'app',
    template,
})
export class AppComponent extends ExampleAppComponentBlueprint {
    public properties: IExampleProperties = {
        duplex: [
            {
                name: 'geoJSON',
                value: {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-6.328125, -45.3367019099681],
                            [-60.1171875, 28.304380682962783],
                            [22.8515625, 73.92246884621463],
                            [132.890625, 34.016241889667015],
                            [41.1328125, -50.95842672335992],
                            [73.47656249999999, -60.06484046010449],
                            [73.47656249999999, -49.38237278700955],
                            [92.46093749999999, -44.087585028245165],
                        ],
                    },
                },
                type: 'geoJSON',
            },
            {name: 'display', value: true, type: 'checkbox' },
            {name: 'stroke', value: true, type: 'checkbox' },
            {name: 'color', value: '#f00', type: 'text' },
            {name: 'weight', value: 5, type: 'number' },
            {name: 'opacity', value: 0.8, type: 'relative'},
            {
                additional: { states: ['butt', 'round', 'square', 'inherit']},
                name: 'lineCap',
                type: 'select',
                value: 'inherit',
            },
            {
                additional: { states: ['miter', 'round', 'bevel', 'inherit']},
                name: 'lineJoin',
                type: 'select',
                value: 'inherit',
            },
            {name: 'dashArray', value: '15, 5', type: 'text' },
            {name: 'dashOffset', value: '12px', type: 'text' },
            {name: 'fill', value: false, type: 'checkbox'},
            {name: 'fillColor', value: '#f33', type: 'text' },
            {name: 'fillOpacity', value: 0.3, type: 'relative' },
            {
                additional: { states: ['nonzero', 'evenodd', 'inherit']},
                name: 'fillRule',
                type: 'select',
                value: 'inherit',
            },
            {name: 'className', value: '', type: 'text' },
            // {name: 'tooltipOpened', value: true, type: 'checkbox' },
            // {name: 'popupOpened', value: false, type: 'checkbox' }
            {name: 'tooltip directive', value: 'Tooltip content', type: 'text' },
            {name: 'popup directive', value: 'Popup content', type: 'text' },
        ],
        input: [
            // {name: 'interactive', value: true, type: 'checkbox' },
            {name: 'smoothFactor', value: 10, type: 'number' },
            {name: 'noClip', value: true, type: 'checkbox' },
            {name: 'tooltip directive', value: 'This is the tooltip content', type: 'text' },
            {name: 'popup directive', value: 'This is the popup content', type: 'text' },
        ],
        output: [
            {name: 'click', value: '', type: 'event' },
            {name: 'dblclick', value: '', type: 'event' },
            {name: 'mousedown', value: '', type: 'event' },
            {name: 'mouseup', value: '', type: 'event' },
            {name: 'mouseover', value: '', type: 'event' },
            {name: 'mouseout', value: '', type: 'event' },
            {name: 'mousemove', value: '', type: 'event' },
            {name: 'contextmenu', value: '', type: 'event' },
            {name: 'keypress', value: '', type: 'event' },
            {name: 'preclick', value: '', type: 'event' },
        ],
    };
}

/* tslint:disable:max-classes-per-file */
@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [ AppComponent ],
    imports:      [ BrowserModule, FormsModule, YagaModule, ExamplePropertiesModule ],
})
export class AppModule { }

document.addEventListener('DOMContentLoaded', () => {
    platform.bootstrapModule(AppModule);
});
