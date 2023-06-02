import React from 'react';
import { View,StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import colors from '../assets/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View style={styles.detailsContainer}>
           <Image source={require('../assets/th.jpg')}></Image>
           <AppText style={styles.title}>I AM SELLING A JACKET</AppText>
           <AppText style={styles.price}>1000$</AppText>
            <View style={styles.userContainer}>

           <ListItem image={require("../assets/Jeff.jpg")}
              title='Dery Franklin'
              subtitle="5 Listing"
           />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    detailsContainer:{
        padding:50,
    },
    image:{
        width:'100%',
        height:300,
    },
    title:{
        fontSize:24,
        fontWeight:'500'
    },
    price:{
        color:colors.green,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10
    },
    userContainer:{
        marginVertical:40,
    }
})
export default ListingDetailsScreen;