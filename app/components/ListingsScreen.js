import React from 'react';


import { FlatList,StyleSheet } from 'react-native';


import Screen from './Screen';
import Card from './Card';
import colors from '../assets/colors';


const listings = [
    {
        id:1,
        title:'Office Chair for sell',
        price: 100,
        image:require('../assets/office.png')
    },
    {
        id:2,
        title:'Red jacket for sell',
        price: 200,
        image:require('../assets/office.png')
    },
]


function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
              data={listings}
              keyExtractor={listings => listings.id.toString()}
              renderItem={({item})=>
              <Card
                title={item.title}
                subtitle={'$' + item.price}
                image={item.image}
              
              />
            
            
             }

            
            />
        </Screen>
    );
}


const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.black
    }
})

export default ListingsScreen;