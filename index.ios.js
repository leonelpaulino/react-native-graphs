  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  PropTypes,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import RCTChart from './RCTChart/Component';

import Dimensions from 'Dimensions';
class Chart extends Component {
constructor(){
  super();
  this.state = {
    touch:'none'
  }
}
  render() {
    return (   
    <View style = {{ flex:1}}>
       <RCTChart 
            points={[{x:75,y:150,id:0},{x:150,y:300},{x:225,y:296},{x:500,y:296},{x:600,y:100}]} 
            border = {true} 
            radius = {10}
            borderWidth = {4}
            lineWidth = {3}
            borderColor = '#E1E2E2'
            selectedColor = 'blue'
            backgroundColor = 'white'
            selectedPoint = {3}
            height = {450}
            width = {600}
            yValues = {[400,200]}
            yText = ""
            textColor = "#E1E2E2"
            onClick = {this.pointClick.bind(this)}
            />
            <Text>
              {this.state.touch}
            </Text>
     
    </View>
    );
  }
  pointClick(obj){
    console.log(obj);
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Chart', () => Chart);
