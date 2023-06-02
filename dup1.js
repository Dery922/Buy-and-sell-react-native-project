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
        <View style={styles.container1}></View>
        <View style={styles.container2}></View>
        <View style={styles.container3}></View>
        <View style={styles.container4}></View>
        <View style={styles.container5}></View>
        


      </View>
   

  );
}
``
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    backgroundColor: '#fff',
    justifyContent:'center', 
    alignItems:"center",
    flexWrap:'wrap',
    alignContent:'center'
    
    
  },


  container1:{
    backgroundColor:"lightgreen",
    height:100,
    position:'relative',
    width:100,
    

  },
  container2:{
    backgroundColor:"lightblue",
    height:100,
    width:100,

  },
  container3:{
    backgroundColor:"orange",
    height:100,
    width:100

  },
  container4:{
    backgroundColor:"gray",
    height:100,
    width:100

  },

  container5:{
    backgroundColor:"blue",
    height:100,
    width:100

  },


});
