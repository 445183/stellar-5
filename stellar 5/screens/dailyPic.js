import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View,Platform,TouchableOpacity,SafeAreaView, Linking ,ImageBackground,StatusBar,ScrollView} from 'react-native';

export default class DailyPicScreen extends React.Component {
  constructor(){
    super();
    this.state={
      apod:{}
    }
  }
  getInfo=async()=>{
    try{
     axios.get('https://api.nasa.gov/planetary/apod?api_key=dejCAiuscqd9TJ3Mgbc2CzTPVk6ztLnDCTvUwSNa')
      .then((response)=>{
       this.setState({apod:response.data})
      });
    }catch(error){
      console.log(error.message);
    }
  }
  componentDidMount(){
    this.getInfo();
  }
  render(){
    if(Object.keys(this.state.apod).length===0){
      return(
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
    else{
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.ishika}/>
          <ImageBackground source={require('../assets/stars.gif')} style={{flex:1}}>
          <Text style={styles.title_}>Daily Pic's</Text>
          <Text style={styles.title}>{this.state.apod.title}</Text>
          <ScrollView>
            <Text style={styles.date}>{this.state.apod.date}</Text>
            <Text style={styles.exp}>{this.state.apod.explanation}</Text>
            <TouchableOpacity onPress={()=>{Linking.openURL(this.state.apod.url)}} style={styles.button}>
              <Text style={styles.buttonText}>{this.state.apod.media_type==='video'?'See Videos !':'See Images !'}</Text>
            </TouchableOpacity>
          </ScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  ishika:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  date:{
    fontSize:25,
    marginBottom:15,
    color:'white',
    alignSelf:'center'
  },
  title:{
    fontSize:27.5,
    backgroundColor:'white',
    borderRadius:200,
    marginBottom:20,
    color:'black',
    alignSelf:'center'
  },
  title_:{
    fontSize:43,
    marginBottom:50,
    color:'white',
    alignSelf:'center'
  },
  exp:{
    fontSize:20,
    marginBottom:20,
    color:'red',
    alignSelf:'center'
  },
  buttonText:{
    fontSize:27.5,
    alignSelf:'center'
  },
  button:{
    marginTop:20,
    width:200,
    height:50,
    borderRadius:45,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ECECEC',
    marginBottom:40
  }
});
