import React, { Children } from 'react';
import { StyleSheet,SafeAreaView,Platform,StatusBar,View } from 'react-native';

function Screen({children,style}) {
    return (
       <SafeAreaView style={[styles.container,style]}>
            <View style={style}>{children}</View>
       </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : '0' 
    }
})

export default Screen;