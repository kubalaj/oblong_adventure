import React, { Component } from 'react'
import * as d3 from 'd3'

import './map.scss'

class Map extends Component {
  constructor() {
    super()
    this.test()
  }

  test() {
    d3.select('body')
      .append('span')
      .text('Hello, d3')
  }

  render() {
    return <div>I am a map</div>
  }
}

export default Map
