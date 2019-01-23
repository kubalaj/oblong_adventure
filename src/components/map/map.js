import React, { Component } from 'react'
import * as d3 from 'd3'

import './map.scss'

class Map extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.drawMap()
  }

  drawMap() {
    setTimeout(function() {
      // DEFINE VARIABLES
      // Define size of map group
      // Full world map is 2:1 ratio
      // Using 12:5 because we will crop top and bottom of map
      const w = 3000
      const h = 1250
      // variables for catching min and max zoom factors
      var minZoom
      var maxZoom
      // Define map projection
      var projection = d3
        .geoEquirectangular()
        .center([0, 15]) // set centre to further North
        .scale([w / (2 * Math.PI)]) // scale to fit group width
        .translate([w / 2, h / 2]) // ensure centred in group
      var path = d3.geoPath().projection(projection)
      // apply zoom to countriesGroup
      var svg = d3
        .select('#map-holder')
        .append('svg')
        // set to the same size as the "map-holder" div
        .attr('width', document.getElementById('#map-holder').width())
        .attr('height', document.getElementById('#map-holder').height())
      // get map data
      d3.json(
        'https://raw.githubusercontent.com/andybarefoot/andybarefoot-www/master/maps/mapdata/custom50.json',
        function(json) {
          /////////////////////////////////////////////
          //////// Here we will put a lot of code concerned
          //////// with drawing the map. This will be defined
          //////// in the next sections.
          /////////////////////////////////////////////
        }
      )
    }, 5000)
  }

  render() {
    return <div id="map-holder" />
  }
}

export default Map
