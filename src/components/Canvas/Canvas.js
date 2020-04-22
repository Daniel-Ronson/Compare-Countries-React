import React, { Component } from 'react';
import './Canvas.css'

class Canvas extends Component {

    componentDidMount(){
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d");
        const length = this.props.areaKmA % 100
        const width = this.props.areaKmB % 100
        this.setState({canvas:canvas})
    }
    componentDidUpdate(prevProps) {
        if(prevProps.areaKmA !== this.props.areaKmA || prevProps.areaKmB !== this.props.areaKmB) {
            const ctx = this.state.canvas.getContext("2d")
            console.log('A: ' + this.props.areaKmA + 'B: ' + this.props.areaKmB)
            ctx.clearRect(0,0,prevProps.areaKmA,prevProps.areaKmA)
            ctx.clearRect(50,50,prevProps.areaKmB,prevProps.areaKmB)

            ctx.fillRect(0,0,this.props.areaKmA % 100,this.props.areaKmA % 100);
            ctx.fillRect(50,50,this.props.areaKmB % 100,this.props.areaKmB % 100);
        }
    }
      

    render() {
        return (
            <div>
                <canvas className ="canvasStyle" ref="canvas"/>
            </div>
        );
    }
}

export default (Canvas);