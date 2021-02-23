import React, { useState, useCallback, useEffect } from 'react';
import { View, Button } from "react-native";
import { LISTDATA } from '../shared/list'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import api from '../api/list'


// 나만의 아이템 화면

const Shopping = ({ navigation }) => {

  const [list, setList] = useState([]);

  const getList = useCallback(async () => {
    const result = await api.shoppingItem();
    console.log(result.data);
    setList(result.data);
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        console.log('focus')
        getList();
      }
    )
    
    return unsubscribe;
  }, [navigation])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={
          { flexGrow: 1, alignItems: "center", justifyContent: "center" }}
      >
        {
          list.map((item, i) => (
            <ListItem
              containerStyle={{ width: "80%" }}
              key={i}
            >
              <Avatar source={{ uri: item.image }} style={{ width: 150, height: 130 }} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                <Button style={{ width: 20, height: 20 }}
                  onPress={() => { navigation.navigate("ShoppingDetails", { id: item.id }) }}
                  title="상세보기"
                />
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
    </View>
  )
}
export default Shopping;

