import React from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
import Screen from './Screen';
import ListItem from './ListItem';



import colors from '../assets/colors';
import Icon from './Icon';
import ListItemSeparator from './ListItemSeparator';

const menuItems = [
    {
        title:'My Listing',
        icon:{
            name:'format-list-bulleted',
            backgroundColor:colors.primary
        }
    },
    {
        title:'My Messages',
        icon:{
            name:'email',
            backgroundColor:colors.secondary
        }
    }
]


function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>

          <ListItem 
            title='Dery Franklin'
            subtitle='franklindery922@gmail.com'
            image={require('../assets/Jeff.jpg')}
          
          />
        </View>
        <View style={styles.container}>
            <FlatList 
               data={menuItems}
               keyExtractor={menuItems => menuItems.title}
               ItemSeparatorComponent={ListItemSeparator}
               renderItem={({item}) =>
            
                 <ListItem
                   title={item.title}
                   iconComponent={
                    <Icon
                      name={item.icon.name}
                      backgroundColor={item.icon.backgroundColor}
                    />
                   }
                 
                 />
              }
            >

            </FlatList>
        </View>
        <ListItem 
          title="Log Out"
          iconComponent={ <Icon name='email' 
          backgroundColor='#ffe66d'/>}
        />
        </Screen>
    );
}


const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    },
    screen:{
        backgroundColor : colors.lightpick,
    }
})
export default AccountScreen;