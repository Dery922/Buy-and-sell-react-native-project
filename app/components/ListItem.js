import React from 'react';
import { View, StyleSheet,Image,TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../assets/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';



function ListItem({title,subtitle,image,iconComponent,onPress,renderRightActions}) {
    return (


        <GestureHandlerRootView>

       <Swipeable renderRightActions={renderRightActions}>

        <TouchableHighlight  underlayColor={colors.lightpick}
        onPress={onPress}>

        <View style={styles.container}>
           
            {image && <Image style={styles.image} source={image}/>}
            {iconComponent}
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
            </View>
            <MaterialCommunityIcons size={25} name='chevron-right'/>
        </View>
        </TouchableHighlight>
     
       </Swipeable>
        </GestureHandlerRootView>
    );
}



const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
         alignItems:'center',
        padding:15,
        backgroundColor:colors.white
    },

    image:{
        width:70,
        height:70,
        borderRadius:50,
  
    },
    detailContainer:{
        flex:1,
        marginLeft:10,
        justifyContent:'center',
        
    },
    title:{
       fontWeight:500,
       top:10,
    },
    subtitle:{
        color:colors.light,
        fontWeight:500,
        top:5,
    },
})

export default ListItem;

