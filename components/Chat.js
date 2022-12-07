import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'

const Chat = () => {
  const [isLoading, setLoading] = useState(true);
  cons [data, setData] = useState([])

  const getChats = async () => {
    try {
      const response = await fetch('http://localhost:8000/chats/2/');
      const json = await response.json();
      setData(json)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getChats();
  }, []);

  return (
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({ item }) => (
            <Text>Chat</Text>
          )}
        />
      )}
    </View>
  );
};

export default Chat;