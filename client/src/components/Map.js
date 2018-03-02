import React, { Component } from 'react';

class Map extends Component {
  constructor() {
    const mapStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: [203, 194, 185, 1]
      }),
      stroke: new ol.style.Stroke({
        color: [101, 95, 90, 1],
        width: 1
      })
    });
    const iconStyle = new ol.style.Icon({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.65,
        scale: 0.15,
        src: '../img/marker.png'
      }));
    });

    let countriesLayer;
    let markerSource = new ol.source.Vector({});
    let heatSource = new ol.source.Vector({});
  }

  //converts latitude and longitude to default projections on map
  toDefaultProjection(lat, long) {
    return ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857');
  }

  addMarkersToMap() {
    let marker;
    cities.forEach(city => {
      marker = new ol.Feature({
        geometry: new ol.geom.Point(this.toDefaultProjection(city.lat, city.long)),
        name: city.city,
        country: city.country,
        playlist: city.distinctive_music
      });
      markerSource.addFeature(marker);
    });
  }
}
