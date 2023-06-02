import React, { useState } from 'react';
import { TextInput, View,StyleSheet, Platform,TouchableHighlight,TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../assets/colors';
import defaultStyles from '../config/styles'
import AppText from './AppText';
import Screen from '../components/Screen'
import PickerItem from './PickerItem';


function AppPicker({icon,items,placeholder,onSelectItem, selectedItem}) {
   const [modalVisible, setModalVisible] = useState(false)
   
    return ( 
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
         { icon && <MaterialCommunityIcons name={icon} size={25} color={colors.danger} style={styles.icons}/>}
          <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons name='chevron-down' 
          size={25} color={colors.danger} 
          style={styles.icons}/>
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
             <Screen>
                <FlatList 
                  data={items}
                  keyExtractor={item => item.value.toString()}
                  renderItem={({item}) => 
                  <PickerItem label={item.label}
                   onPress={() => {
                    setModalVisible(false) 
                    onSelectItem(item)
                
                   }}
                  />}
                  
                />
            <Button title='Close' onPress={() => setModalVisible(false)}/>
             </Screen>
        </Modal>
        </>
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
    },
    text:{
        flex:1,
    }
})

export default AppPicker;