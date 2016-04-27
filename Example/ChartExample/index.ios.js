/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

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

AppRegistry.registerComponent('ChartExample', () => ChartExample);
