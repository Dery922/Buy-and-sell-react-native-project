import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View,
  Button,
  Image, 
  SafeAreaView,
  Dimensions } from 'react-native';


export default function App() {
     

 

  return (


    <View style={styles.container}>
  
     

  <View style={styles.container2}>
         <View style={styles.col1}></View>
         <View style={styles.col2}></View>
      </View>

      <View style={styles.container3}>
        <View>
          <Image style={styles.img} source={require('./assets/icon.png')}></Image>
          <Text>Open GL coming out</Text>
        </View>
         
      </View>


      <View style={styles.container1}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      </View>


  
 
    </View>

  );
}
const styles = StyleSheet.create({

   container:{
    flex:1,
   },
   container1:{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-end',
   },

   container2:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      margin:25,
      
   }, 
   container3:{
     flex:1,
     flexDirection:'row',
     justifyContent:'center'
   },
    img:{
      width:100,
      height:100,
    },
   col1:{
     width:50,
     height:50,
     backgroundColor:'blue'
   }, 

   col2:{
    width:50,
    height:50,
    backgroundColor:'orange'
  }, 

   box1:{
    width:'100%',
    height:60,
    backgroundColor:'green'
   },
   box2:{
    width:'100%',
    height:60,
    backgroundColor:'red'
   }


});
 