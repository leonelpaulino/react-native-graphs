## react-native-graphs

------------------------

`react-native-graphs` is built to provide a chart to react native on both iOS and Android

### Features

1. Supports only border charts with circles.
2. Touchables coordinates.
3. Scrollable chart.

#### Install

npm install react-native-graphs

rnpm link react-native-svg 

#### Usage

There is an easy example

```

import Chart from 'react-native-graphs';
class ChartExample extends Component {
constructor(){
  super();
  this.state = {
    touch:'none',
    selected: 0
  }
}
  render() {
    return (   
    <View style = {{ flex:1}}>
       <Chart 
            points={[{x:75,y:150,id:0},{x:150,y:300,id:1},{x:225,y:296,id:2},{x:500,y:296,id:3}]} 
            border = {true} 
            radius = {10}
            borderWidth = {4}
            lineWidth = {3}
            borderColor = 'black'
            selectedColor = 'blue'
            backgroundColor = 'white'
            selectedPoint = {this.state.selected}
            height = {450}
            width = {400}
            yValues = {[400,200]}
            yText = ""
            textColor = "black"
            onClick = {this.pointClick.bind(this)}
            />
            <Text>
              {this.state.touch}
            </Text>
     
    </View>
    );
  }
  pointClick(obj){
    this.setState({touch:"x:"+obj.x+" y:"+obj.y, selected:obj.id});
  }
}

```
![](https://github.com/leonelpaulino/react-native-chart/blob/master/ImageExamples/ChartExample.gif)
#### Props:

Name            | Default    | Description
----------------|------------|--------------
points          |   null     | The points props specifies the coordinates to be display
border          | true       | This prop specifies if the chart will have border.TODO
borderColor     | 'black'    | The borderColor specifies the color of the border
lineWidth       |     1      | the lineWidth specifies the distance between the border lines
selectedPoint   |   0        | selectedPoint specifies the index of the point that will be selected by default
selectedColor   |   'black   | selectedColor specifies the color of the point selected.
backgroundColor | 'white'    | The backgroundColor specifies the background color of the chart.
radius          |   5        | The radius specifies the radius of each point on the chart.
height          |  300       | The height specifies the height of the chart.
width           | 300        | The width specifies the width of the chart.
xText           | ''         | The xText specifies the text that will appear on each value of the X axis
yText           | ''         | The yText specifies the text that will appear on each value of the y axis
yValues         | 1          | The value of y that will appear on the chart 
xValues         | null       | The value of x that will appear on the chart. TODO.
textColor       | 'black'    | the color of the text that will appear on the chart
onClick         | null       | This function is call everytime the user clicks on a point.


#### TODO:
1. Create chart without borders
2. Display xText
