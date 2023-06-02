import React from 'react';
import { View,StyleSheet, Image } from 'react-native';
import colors from '../assets/colors';
import AppText from './AppText';
import ListItem from './ListItem';

function Card({title,subtitle,image}) {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.image} source={image}/>

            <View style={styles.detailContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
            <ListItem
              image={require('../assets/Jeff.jpg')}
              title='Dery Franklin'
              subtitle='5 listings'
             />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:colors.white,
        borderRadius:15,
        marginBottom:10,
    },

    image:{
       width:'100%',
       height:200,
       overflow:'hidden',
    
    },

    detailContainer:{
       padding:20,
    },
    title:{
        marginBottom:7,
        
    },
    subtitle:{
        color:'green',
        fontWeight:'bold'
    }
})
export default Card;