import { View, Text, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
const URL = process
console.log(URL, "URL")

const Chat = () => {
  const [isLoading, setLoading] = useState(true);
  const [chats, setChats] = useState([])
  const [selectedId, setSelectedId] = useState(null);

  const getChats = async () => {
    try {
      const response = await fetch('https://dinnerapp-backend.herokuapp.com/' + 'allchats/' + '1');
      const json = await response.json();
      setChats(json)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getChats();
  }, []);


  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress}>
      <Text>{item.subject}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };
   
    return (
      <View>

        <FlatList
          data={chats}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    );
};

export default Chat;