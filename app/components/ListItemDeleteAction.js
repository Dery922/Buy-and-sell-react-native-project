import React from 'react';
import { View,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import colors from '../assets/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

//the logi for deleting is not going to be implemented here
//because we need this component reusable
//so where we use this component is where we got to decide how to delete an item not here
function ListItemDeleteAction({onPress}) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name='trash-can' size={35} color={colors.black}/>
        </View>
      </TouchableWithoutFeedback>
    );
}




const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.danger,
        width:70,
    }
})


export default ListItemDeleteAction;