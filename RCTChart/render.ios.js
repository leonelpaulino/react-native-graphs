import React, {
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

var render = {
//El -20 en el Text es para hacer que el texto aparesca encima de la linea.
// se multiplica por -1 en el Text porque en ios el punto 0,0 del texto estan en la parte de abajo de la pantalla
	render(chart){
		
		return ( 
			<View style={{backgroundColor: this.props.backgroundColor,
			 		height: this.props.height, 
			 		width:this.props.width}}>
				<ScrollView
					ref="scrollView"
          			horizontal={true}
          			showsHorizontalScrollIndicator = {false}
          			showsVerticalScrollIndicator = {false}
          			bounces = {false}
          			style={{height:this.props.height,width:this.width}}>
          			<View>
  					<TouchableWithoutFeedback onPress = {this.onClick.bind(this)}>
  					<View>
  						{chart}
  					</View>
  					</TouchableWithoutFeedback>
  					
  					</View>

				</ScrollView>
        		{this.props.yValues.map((obj,index)=>{
            		return (<Text 
		                    key = {index} 
		                    fontWeight= 'bold'
		                    style={{
		                      position:'absolute',
		                      transform:[{translateX:0},{translateY:-1*(obj+20)}],
		                      color:this.props.textColor,
		                      backgroundColor:'transparent'}}>

		                      {obj+" "+this.props.yText}

                    	</Text>);
            		})
        		}
	          	<Text 
	          	fontWeight= 'bold'
	          	style={{
		            position:'absolute',
		            transform:[{translateX:0},{translateY:-20}],
		            color:this.props.textColor}}>

		            {"0 "+this.props.yText}
	          	</Text>

			</View>);
	}
};
module.exports = render;