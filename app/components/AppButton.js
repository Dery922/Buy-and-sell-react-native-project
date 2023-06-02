import { Button, StyleSheet,View,Text, TouchableOpacity } from 'react-native';

import React from 'react';



import colors from '../assets/colors';

function AppButton({title, onPress, color = "primary"}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.AppButtons, {backgroundColor:colors[color]}]}>
        
            <Text style={styles.text}>{title}</Text>
         
         </TouchableOpacity>
    );
}

export default AppButton;


const styles = StyleSheet.create({
    AppButtons:{
        backgroundColor:colors.primary,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        padding: 15,
        width: '100%',
        marginVertical:10,
    
       
    },

    text:{
        color : 'white',
        fontSize: 19,
        textTransform:'uppercase',
        fontWeight:'bold',
    }


})