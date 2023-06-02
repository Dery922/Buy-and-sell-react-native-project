import React from 'react';
import { Image,View,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import colors from '../assets/colors';

function ViewImageScreen(props) {
    return (
            <View style={styles.container}>
                <View style={styles.closeIcon}>
                    <MaterialCommunityIcons name='close' color='red' size={40}/>
                </View>
                <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color='red' size={40}/>
                </View>
                <Image resizeMode='contain' style={styles.image} source={require('../assets/chair11.png')}></Image>
            </View>
          
        
    );
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:colors.black,
    },
    closeIcon:{
   
       position:'absolute',
       top:40,
       left:60
 
    },
    deleteIcon:{
   
     position:'absolute',
     right:60,
     top:40,

    },
    image:{
        width:'100%',
        height:'80%',
        position:'absolute',
        bottom:45
    
    },
})

export default ViewImageScreen;