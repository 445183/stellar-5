import React from 'react';
import { StyleSheet, Text, View ,TextInput,SafeAreaView,Platform,StatusBar,ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends React.Component {
    constructor(){
      super();
      this.state={
        latitude:'',
        longitude:'',
      }
    }
    render(){
      const {latitude,longitude}=this.state;
      const path=`https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
      return(
      <View style={{flex:1,backgroundColor:'#1a0023'}}>
        <ImageBackground source={require('../assets/stars.gif')} style={{flex:1, resizeMode:'cover'}}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={{flex: 0.3, marginTop: 20, alignItems: 'center'}}>
       <Text style={styles.titleText}>Star Map</Text>
        <TextInput
        style={styles.inputStyle}
        placeholder='Enter your longitude'
        placeholderTextColor="black"
        onChangeText={(text)=>{
            this.setState({
              longitude:text
            })
        }}
        />
        <TextInput
        style={styles.inputStyle}
        placeholder='Enter your latitude'
        placeholderTextColor="black"
        onChangeText={(text)=>{
            this.setState({
              latitude:text
            })
        }}
        />
         
      </View>
      <WebView
        scalesPageToFit={true}
        source={{uri:path}}
        style={{marginTop:20,marginBottom:20,width:410,alignSelf:'center'}}
        />
        </ImageBackground>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  droidSafeArea:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
  },
  titleText:{
    fontSize:35,
    marginBottom:25,
    color:'white',
  },
  inputStyle:{
    width:300,
    height:50,
    borderRadius:100,
    marginBottom:15,
    alignContent:'center',
    backgroundColor:'white'
  }
});
