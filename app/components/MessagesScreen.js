import React, {useState} from 'react';
import { View,StyleSheet,FlatList,SafeAreaView,Platform, StatusBar } from 'react-native';
import ListItem from './ListItem';
import Screen from './Screen';
import colors from '../assets/colors';
import ListItemSeparator from './ListItemSeparator';
import ListItemDeleteAction from './ListItemDeleteAction';

function MessagesScreen(props) {
    const initailMessages = [
        {
            id:1,
            title:'T1',
            description:'This is our first message',
            image:require('../assets/Jeff.jpg')
        },
        {
            id:2,
            title:'D1',
            description:'Final Man united for real',
            image:require('../assets/Jeff.jpg')
        },
        {
            id:3, 
            title:'DFTech',
            description:'Franklin Dery Techs Associations',
            image:require('../assets/Jeff.jpg')
        },
    ]

   
     //state for updating list when deleted
    const [messages, setMessages] = useState(initailMessages);
    //refreshing list when pull
    const[refreshing, setRefreshing] = useState(false)

    const handleDelete = (message) => {
           //Delete the message from essages
           //we want to get all messages execpt this message object
        
           //setting new messages without the deleted one
           setMessages(messages.filter((m) => m.id !== message.id));
           //call the server
    }

    return (
        
            <Screen>
                
                <FlatList 
                  data={messages}
                  keyExtractor={message =>message.id}
                  renderItem={({item}) => <ListItem  //List item component here
                   title={item.title}
                   subtitle={item.description}
                   image={item.image}
                   onPress={() => console.log("Message selected", item)}
                   renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
             
                  />}

                  ItemSeparatorComponent={ListItemSeparator}
                  refreshing = {refreshing}
                  onRefresh={() => {
                    setMessages([
                        {
                            id:3, 
                            title:'DFTech',
                            description:'Franklin Dery Techs Associations',
                            image:require('../assets/th.jpg')
                        },
                    ])
                  }}
                />
                
            </Screen>
        
    );
}



export default MessagesScreen;