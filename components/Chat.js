import { View, Text } from 'react-native'
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
  
  return (
    <View>
      <Text>Chat</Text>
    </View>
  )
}

export default Chat