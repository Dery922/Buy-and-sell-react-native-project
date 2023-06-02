import React from 'react';
import { TextInput, View,StyleSheet, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../assets/colors';
import defaultStyles from '../config/styles'

function AppTextInput({icon, ...otherProps}) {
    return ( 
        <View style={styles.container}>
         { icon && <MaterialCommunityIcons name={icon} size={25} color={colors.danger} style={styles.icons}/>}
          <TextInput style={defaultStyles.text} {...otherProps}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lightpick,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10,
    },


    icons:{
        marginRight:15,
    }
})

export default AppTextInput;