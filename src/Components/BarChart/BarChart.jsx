import React, {Component} from 'react'
import Axes from '../Axes'
import {scaleLinear,scaleBand} from 'd3-scale'
class BarChart extends Component{
    constructor() {
        super()
        this.xScale = scaleBand()
        this.yScale = scaleLinear()
      }
    
    render(){
    
    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = {
      width: 500,
      height: 500
    }
    console.log(this.props)
    const maxValue = Math.max(...this.props.data.map(d => d.data_value))

    const xScale = this.xScale
      .padding(0.6)
      .domain(this.props.data.map(d => d.month))
      .range([margins.left, svgDimensions.width - margins.right])

    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top])

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
      </svg>
    )
    }
}
export default BarChart