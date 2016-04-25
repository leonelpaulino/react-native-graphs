import React, {
  View,
  Text,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';


import Dimensions from 'Dimensions';

var render = {
	render(){
  //El -20 en el Text es para hacer que el texto aparesca encima de la linea.
		return ( 
			<View style={{backgroundColor: this.props.backgroundColor, height: this.props.height, width:this.props.width}}>
        {this.props.yValues.map((obj,index)=>{
            return (<Text 
                    key = {index} 
                    fontWeight= 'bold'
                    style={{
                      position:'absolute',
                      transform:[{translateX:0},{translateY:this.props.height-obj-20}],
                      color:this.props.textColor}}>
                      {obj+" "+this.props.yText}
                    </Text>);
          })
        }
          <Text 
          fontWeight= 'bold'
          style={{
            position:'absolute',
            transform:[{translateX:0},{translateY:this.props.height-20}],
            color:this.props.textColor}}>
            {"0 "+this.props.yText}
          </Text>
				<ScrollView
          ref='scrollView'
          onScroll = {this.onScroll}
    			horizontal={true}
    			showsHorizontalScrollIndicator = {false}
    			showsVerticalScrollIndicator = {false}
    			style={{position:'absolute',height:this.props.height,width:Dimensions.get('window').width}}>
          <TouchableNativeFeedback 
          onPress = {this.onClick.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
              <View>
                {this.getChart()}
              </View>
          </TouchableNativeFeedback>
				</ScrollView>
				</View>
				);
	}
};
module.exports = render;