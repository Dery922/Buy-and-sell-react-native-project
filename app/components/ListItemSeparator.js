import React from 'react';


import { View,StyleSheet,FlatList } from 'react-native';
import colors from '../assets/colors';

function ListItemSeparator() {
    return (
       <View style={styles.separator}></View>
    );
}


const styles = StyleSheet.create({
     separator:{
        backgroundColor:colors.light,
        height:1,
        width:'100%',
     }
})

export default ListItemSeparator;