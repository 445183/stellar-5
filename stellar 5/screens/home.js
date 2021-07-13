import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,StatusBar,Image,Platform,TouchableOpacity,SafeAreaView} from 'react-native';

export default class HomeScreen extends React.Component {
    render(){
  return (
    <View style={styles.container}>
       <SafeAreaView style={styles.droidSafeArea}/>
       <ImageBackground source={require('../assets/space.gif')} style={{flex:1, resizeMode:'cover'}}>
         <Text style={styles.title}>Stellar App</Text>
         <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('DailyPic')}}>
           <View style={styles.subContainer1}>
           <Image source={require('../assets/daily_pictures.png')} style={styles.image}/>
           <Text style={styles.buttonText}>Daily Pictures</Text>
           </View>
           <View style={styles.subContainer}>
           <Text style={styles.buttonText1}>Know More --></Text>
           <Text style={styles.text3}>1</Text>           
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button_} onPress={()=>{this.props.navigation.navigate('SpaceCraft')}}>
           <View style={styles.subContainer1}>
           <Image source={require('../assets/space_crafts.png')} style={styles.image2}/>
           <Text style={styles.buttonText_}>Space Craft</Text>
           </View>
           <View style={styles.subContainer_}>
           <Text style={styles.buttonText1}>Know More --></Text>
           <Text style={styles.text3_2}>2</Text>           
           </View>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('StarMap')}}>
           <View style={styles.subContainer1}>
           <Image source={require('../assets/star_map.png')} style={styles.image3}/>
           <Text style={styles.buttonText_}>Star Map</Text>
           </View>
           <View style={styles.subContainer}>
           <Text style={styles.buttonText1}>Know More --></Text>
           <Text style={styles.text3_2}>3</Text>           
           </View>
         </TouchableOpacity>
       </ImageBackground>
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  droidSafeArea:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
  },
  text3:{
    fontSize:75,
    color:'lightgrey',
    marginBottom:10,
    textShadowColor:'black',
    textShadowRadius:10,
  },
  text3_2:{
    fontSize:75,
    color:'lightgrey',
    marginBottom:15,
    textShadowColor:'black',
    textShadowRadius:10,
  },
  title:{
    flex:0.1,
    color:'white',
    marginLeft: 95,
    marginTop: 15,
    fontSize:40
  },
  button:{
    flex: 0.25,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: '#FBFBFB',
    justifyContent:'space-around'
  },
  button_:{
    flex: 0.25,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: '#FBFBFB',
    justifyContent:'space-around'
  },
  buttonText:{
    marginLeft:20,
    marginTop:25,
    fontSize:25,
    textShadowColor:'black',
    textShadowRadius:6,
    textDecorationStyle:"double"
  },
  buttonText_:{
    marginLeft:20,
    marginTop:37.5,
    fontSize:25,
    textShadowColor:'black',
    textShadowRadius:6,
    textDecorationStyle:"double"
  },
  buttonText1:{
    color:'tomato',
    textShadowColor:'orange',
    textDecorationStyle:"double",
    textShadowRadius:4.5
  },
  image:{
    width:150,
    height:110,
  },
  image2:{
    marginLeft:20,
    width:128,
    height:200,
  },
  image3:{
    marginLeft:20,
    width:164,
    height:150,
  },
  subContainer:{
    marginLeft:220,
    flexDirection:'row'
  },
  subContainer_:{
    marginLeft:220,
    marginTop:-50,
    flexDirection:'row'
  },
  subContainer1:{
    flexDirection:'row'
  }
});