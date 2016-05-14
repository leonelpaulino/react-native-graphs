


import Render from './render';


import Svg, {
  Line,
  Circle,
  Path,
  G
} from 'react-native-svg';

import React, {
  Component,
  PropTypes,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';


class Chart extends Component {
  static propTypes = {
    points: PropTypes.arrayOf({x:0,y:0}).isRequired,
    border:PropTypes.bool,
    color: PropTypes.string,
    lineWidth : PropTypes.number,
    selectedColor: PropTypes.string,
    selectedPoint: PropTypes.number,
    backgroundColor: PropTypes.string,
    radius: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
    xText: PropTypes.string,
    yText:PropTypes.string,
    yValues: PropTypes.arrayOf(PropTypes.number),
    xValues: PropTypes.arrayOf(PropTypes.number),   
    textColor: PropTypes.string,
    onClick: PropTypes.func 
  };
  static defaultProps = {
    border : true,
    color : 'black',
    selectedColor : 'red',
    selectedPoint : 0,
    backgroundColor : 'white',
    yText: '',
    xText: '',
    radius : 5,
    lineWidth:3,
    borderWidth:4,
    width: 300,
    height: 300,
    textColor:'black'
  }
  maxX = 0;
  width = 0;
  constructor(){
    super();

  }
  /*
  * return the chart.
  */
  getBorderChart(){
    var linePoints = this.getLinePoints();
    return ( 
          <Svg
            height ={this.props.height}
            width  ={this.maxX}>

            {this.drawYAxisLine()}

            {this.drawBorderCircle()}

            {this.drawBottomLine(linePoints)}

            {this.drawTopLine(linePoints)}

            {this.drawLine(linePoints)}

            {this.drawInvisibleCircle()}

            {this.drawPoint()}
      </Svg>);
  }
  getChart(){
    var linePoints = this.getLinePoints();
    return ( 
          <Svg
            height ={this.props.height}
            width  ={this.maxX}>

            {this.drawYAxisLine()}

            {this.drawLine(linePoints)}

            {this.drawPoint()}
      </Svg>);

  }


    /* 
    * Renders the component
    */
    render() {
      var chart = this.props.border? this.getBorderChart(): this.getChart();
      return Render.render.bind(this)(chart);
    }


    /*
    * Scrolls to the selected point on the pass on the prop.
    */
    scrollTo(){

      var x = this.props.points[this.props.selectedPoint].x-this.width+ this.props.radius;
      setTimeout(()=>{this.refs.scrollView.scrollTo({x: x < 0? 0: x})},0);
    }

    componentWillMount(){
    this.maxX = this.getMaxX()+50;
    this.width = this.props.width < Dimensions.get('window').width ? 
                              this.props.width:Dimensions.get('window').width;
    }
    componentDidMount(){
      
      this.scrollTo();
    }

    /*
    * returns the max value of the X Axis
    */
    getMaxX(){
      var points = this.props.points;
      var max  = 0 ;
      for(var i = 0 ; i < points.length; i++){
          if (max < points[i].x)
              max = points[i].x;
      }
      return max;
    }
    /*
    * It calls the function that is hook 
    * to the component when a point is touch
    * @Param The object of the touch it contains the 
    *         coordinate of where the chart was touch
    */
    onClick(obj){
      var touch ={
        x:obj.nativeEvent.locationX,
        y:obj.nativeEvent.locationY
      };
      var radius = (this.props.radius+5)*(this.props.radius+5);
      for(var i =0 ; i < this.props.points.length;i++){
          var point = {
            x: this.props.points[i].x,
            y: this.props.height - this.props.points[i].y
          }
          var d = this.getDistance(touch,point);
          if (d <= radius){
            this.props.onClick(this.props.points[i]);
            break;
          }
      }
    }


    /*
    * Returns  the distance between to points
    */
    getDistance(p1,p2){
      return Math.pow(p1.x-p2.x,2) + Math.pow(p1.y-p2.y,2);
    }


    /*
    *  return all the coordinates of the lines that will be drawn
    */
    getLinePoints(){
     var points = this.props.points;
     var linePoints = [];
      for (var i = 0; i < points.length;i++){
        if (i+1 >= points.length)
          break;
        var lines = [];
        lines.push({x1:points[i+1].x,y1:points[i+1].y,x2:points[i].x,y2:points[i].y});
        lines.push(this.parallelPosition(lines[0].x1,lines[0].y1,lines[0].x2,lines[0].y2,this.props.lineWidth));
        lines.push(this.parallelPosition(lines[0].x1,lines[0].y1,lines[0].x2,lines[0].y2,-1*(this.props.lineWidth)));
        linePoints.push(lines);
      }
      return linePoints;
    }


    /*
    *   returns the lines that will go across the chart from the y axis.
    */
    drawYAxisLine(){
      return (
        <G fill="none" stroke={this.props.color} strokeWidth="1">
                { this.props.yValues.map((obj,index)=>{
                  return(<Path
                          key = {index}
                          strokeDasharray="4,4" 
                          d={"M0  "+(this.props.height-obj)+"h"+this.maxX} />);
                          })}
                <Path d={"M0  "+(this.props.height)+"h"+this.maxX}/>
              </G>);
    }


    /*
    *   returns the borders of the points
    */
    drawBorderCircle(){
    return (this.props.points.map((point,index)=>{
        return(
          <Circle
          key = {index}
          cx = {point.x}
          cy = {this.props.height-point.y}
          r = {this.props.radius+3} 
          fill = {'transparent'}
          stroke = {this.props.color}
          strokeWidth = {this.props.borderWidth-1}/>);
        }));
    }


    /*
    *   returns the top lines of the lines border
    */
    drawTopLine(linePoints){
      return (
        linePoints.map((point,index)=>{
          return(
                  <Line
                    key = {index}
                    x1={point[2].x1}
                    y1={this.props.height-point[2].y1}
                    x2={point[2].x2}
                    y2={this.props.height-point[2].y2}
                    stroke= {this.props.color}
                    strokeWidth={this.props.borderWidth}/>);
          })
        );
    }


    /*
    * return the bottom lines of the lines border
    */
    drawBottomLine(linePoints){
        return (
          linePoints.map((point,index)=>{
                return(
                        <Line
                          key = {index}
                          x1={point[1].x1}
                          y1={this.props.height-point[1].y1}
                          x2={point[1].x2}
                          y2={this.props.height-point[1].y2}
                          stroke= {this.props.color}
                          strokeWidth={this.props.borderWidth}/>);
                })
          );
    }


    /*
    *  returns the lines that goes from one point to another.
    */
    drawLine(linePoints){
    var color = this.props.border? this.props.backgroundColor: this.props.color;
      return (
        linePoints.map((point,index)=>{
                return(
                        <Line
                          key = {index}
                          x1={point[0].x1}
                          y1={this.props.height-point[0].y1}
                          x2={point[0].x2}
                          y2={this.props.height-point[0].y2}
                          stroke= {color}
                          strokeWidth= {this.props.lineWidth}/>);
                })
        );
    }


    /*
    * returns the circle that goes between the point circle and the border circle. 
    */
    drawInvisibleCircle(){
        return (
          this.props.points.map((point,index)=>{
                return (
                    <Circle
                      key = {index}
                      cx = {point.x}
                      cy = {this.props.height-point.y}
                      r = {this.props.radius+2} 
                      fill = {this.props.backgroundColor}/>);
                })
          );
    }


    /*
    *   returns the circle that represent a point on the chart
    */
    drawPoint(){
        return (
            this.props.points.map((point,index)=>{
                var color = index == this.props.selectedPoint? this.props.selectedColor: this.props.color;
                return (
                    <Circle
                      key = {index}
                      cx = {point.x}
                      cy = {this.props.height-point.y}
                      r = {this.props.radius} 
                      fill = {color}/>);
                }) 
          );
    }



  /*
  * returns the parallelPosition of a given line given 
  *  the distance that the new points will have.
  * @param px1 x coordinate of the first position
  * @param py1 y coordinate of the first position
  * @param px2 y coordinate of the second position
  * @param py2 y coordinate of the second position
  * @param distance Distance between the current point and the new point.
  */
  parallelPosition(px1, py1 , px2, py2, distance){
    var xDifference = px1 - px2;
    var yDifference = py1 - py2;
    var length = Math.sqrt(Math.pow(xDifference, 2) + Math.pow(yDifference, 2));
    return {
      x1 : px1 - distance * yDifference/length,
      x2 : px2 - distance * yDifference/length,
      y1 : py1 + distance * xDifference/length,
      y2 : py2 + distance * xDifference/length,
    };
  }
}

module.exports = Chart;