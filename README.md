## react-native-chart

------------------------

`react-native-chart` is built to provide a chart to react native on both iOS and Android

### Features

1. Supports only border charts with circles.
2. Touchables coordinates.
3. Scrollable chart.

#### Install

TODO

#### Usage

There is an easy example

```
import RCTChart from './RCTChart/Component';

import Dimensions from 'Dimensions';
class ChartExample extends Component {
  render() {
    return (   
    <View style = {{ flex:1}}>
       <RCTChart 
            points={[{x:75,y:150},{x:150,y:300},{x:225,y:296},{x:500,y:296}]} 
            border = {true} 
            radius = {10}
            borderWidth = {4}
            lineWidth = {3}
            borderColor = '#E1E2E2'
            selectedColor = '#ED2B74'
            backgroundColor = 'white'
            selectedPoint = {3}
            height = {450}
            width = {600}
            yValues = {[400,200]}
            yText = "mg/dL"
            textColor = "#E1E2E2"
            onClick = {this.pointClick.bind(this)}
            />
    </View>
    );
  }
  pointClick(obj){
    console.log(obj);
  }
}

```

#### Props:

Name            | Default    | Description
----------------|------------|--------------
points          |   null     | The points props specifies the coordinates to be display
border          | true       | This prop specifies if the chart will have border
borderColor     | 'black'    | The borderColor specifies the color of the border
lineWidth       |     1      | the lineWidth specifies the distance between the border lines
selectedPoint   |   0        | selectedPoint specifies the index of the point that will be selected by default
selectedColor   |   'black   | selectedColor specifies the color of the point selected.
backgroundColor | 'white'    | The backgroundColor specifies the background color of the chart.
radius          |   5        | The radius specifies the radius of each point on the chart.
height          |Height/2    | The height specifies the height of the chart. the default value is the height of the screen divide by 2
width           | Width/2    | The width specifies the width of the chart. the default value is the width of the screen divide by 2.
xText           | ''         | The xText specifies the text that will appear on each value of the X axis
yText           | ''         | The yText specifies the text that will appear on each value of the y axis
yValues         | 1          | The value of y that will appear on the chart 
xValues         | null       | The value of x that will appear on the chart 
textColor       | 'black'    | the color of the text that will appear on the chart
onClick         | null       | This function is call everytime the user clicks on a point.


#### TODO:
1. create chart with no border
2. display xText