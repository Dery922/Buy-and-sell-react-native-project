import { Image, ImageBackground,StyleSheet,View,Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../assets/colors";


function WelcomeScreen(props){
    
    return (
        <ImageBackground style={styles.background} source={require('../assets/Moon.jpeg')}>
        
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../assets/icon.png')}/>
              <Text style={styles.tagline}>Buy sell your used Goods for affordable Price</Text>
            </View>

               <View style={styles.buttonContainer}>

              <AppButton title='login'/>
              <AppButton title='register' color="secondary"/>
       
               </View>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
   background:{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'center'
      
  
   },


   buttonContainer:{
       padding:20,
       width:'100%',
   }, 



   logo:{
      position:'absolute',
      width:100,
      height:100,
      borderRadius:50,
    

   }, 
   logoContainer:{
      position:'absolute',
      top:20,
      alignItems:'center'
   },


   tagline:{
      fontSize:25,
      fontWeight:"600",
      paddingVertical:20,
      top:90,
      color:colors.white,
   },

   registerButton:{
    backgroundColor:'#4ecdc4',
    width:'100%',
    height:70,
    borderRadius:40,
    
   }


})

export default WelcomeScreen;