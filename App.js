/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import { View, TouchableOpacity,Text,ToastAndroid,Platform } from "react-native";




export default class App extends Component {
  handleClick(){
    if(Platform.OS==='android'){
      ToastAndroid.showWithGravityAndOffset(
        'What the hell!!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:'skyblue'}}>
        <TouchableOpacity style={{backgroundColor:"blue",width:100,height:50,justifyContent:"center",alignItems:"center"}} onPress={this.handleClick}>
          <Text style={{color:"white",fontSize:20}}>Hit me!</Text></TouchableOpacity>
      </View>
    );
  }
}
