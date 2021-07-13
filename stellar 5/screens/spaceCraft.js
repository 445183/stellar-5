import axios from 'axios';
import React from 'react';
import { FlatList, StyleSheet, Text, View,Image ,StatusBar,Platform,SafeAreaView,ImageBackground} from 'react-native';

export default class SpaceCraftScreen extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
    }
  }
  getInfo=async()=>{
    try{
    axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/').then((response)=>{
      this.setState({data:response.data.results});
    })
    }catch(error){
       console.log(error.message);
    }
    console.log(this.state.data);
  }
  componentDidMount(){
    this.getInfo();
  }
  renderItem=({item})=>{
    return(
   <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginLeft:20,marginRight:20,marginBottom:10,elevation:10,backgroundColor:'white'}}>
     <Image
       source={{uri:item.agency.image_url}}
       style={{width:'100%',height:500,marginBottom:15,marginTop:15,marginRight:10}}
     />
     <Text style={{fontWeight:'bold',fontSize:20,color:'darkviolet'}}>{item.name}</Text>
     <Text style={{color:'#696969'}}>{item.agency.name}</Text>
     <Text>DESCRIPTION: </Text>
     <Text style={{color:'#696969',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>
   </View> 
    );
  }
    render(){
      if(Object.keys(this.state.data).length===0){
       return( 
        <View style={
          styles.container
        }>
          <Text>
            Loading...
          </Text>
        </View>
       );
      }else{
        return (
         <View style={styles.container}>
           <ImageBackground source={require('../assets/stars.gif')} style={{flex:1}}>
           <SafeAreaView style={styles.ishika}/>
           <View style={{flex:0.15}}>
            <Text style={styles.title}>Space Crafts</Text>
           </View>
           <View style={{flex:0.85}}>
           <FlatList
             data={this.state.data}
             keyExtractor={(item,index)=>{
               index.toString();
             }}
             renderItem={this.renderItem}
           />
           </View>
           </ImageBackground>
         </View> 
        );
      }
    }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:43,
    marginBottom:50,
    alignSelf:'center',
    color:'white'
  },
  ishika:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
  },
});
