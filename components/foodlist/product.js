import React from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';

export default class Product extends React.Component{
    render(){
        return (
            <TouchableOpacity 
            onPress={this.props.onPress}
            style={{
                backgroundColor:"f5f5fa",
                height:280,
                width:160,
                borderRadius:20,
                marginTop:this.props.marginTop,
                marginRight:10
            }}>
                <ScrollView>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    alignSelf:"center",
                    marginTop:20
                }}>
                    <Image 
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                       
                        />

                </View>
            
                <View style={{
                  backgroundColor:"f5f5fa",
                  borderRadius:20,
                }}>
                <Text style={{
                    paddingHorizontal:15,
                    fontWeight:"bold",
                    fontSize:16
                 }}>290 Calories</Text>

                <Image 
                    source={require('../../App/assets/images/4.png')}
                    style={{
                        height:105,
                        alignSelf:"center",
                        width:130,
                        marginTop:15
                    }}
                    
                    />
                    <Text style={{
                        fontSize:18,
                        fontWeight:"bold",
                        paddingHorizontal:10
                    }}>
                        {this.props.title}
                    </Text>
                    <Text style={{
                        fontSize:15,
                        fontWeight:"bold",
                        paddingHorizontal:10,
                        color:"black"
                    }}>
                        Beef Burger
                    </Text>
                    

                    
                    </View>
        </ScrollView>
        </TouchableOpacity>
        )
    }
}