import React from 'react';
import { View } from 'react-native';

import { INTERIORDATA } from '../shared/interior'

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const HomeInterior = ({ navigation }) => {

  const list = INTERIORDATA;

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