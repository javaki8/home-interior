import React,{useState, useCallback, useEffect} from 'react';
import { View } from 'react-native';
import { INTERIORDATA } from '../shared/interior'
import api from '../api/list'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const HomeInterior= ( { navigation }) => {

  const [list, setList] = useState([]);

  const getList = useCallback(async () => {
    const result = await api.interior();
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
              containerStyle={{ width: "95%" }}
              key={i}
              onPress={() => { navigation.navigate("HomeDetails", { id: item.id }) }}
            >
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <Avatar source={{ uri: item.image }} style={{ width: 150, height: 130 }} />
            </ListItem>
          ))
        }
      </ScrollView>
    </View>
  )
}
export default HomeInterior;