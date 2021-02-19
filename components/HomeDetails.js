import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements'

import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { INTERIORDATA } from '../shared/interior'

const HomeDetails = ( { route, navigation }) => {

  console.log("--detail");
  console.log(route.params);

  const { id } = route.params;

  const item = INTERIORDATA.filter(item => item.id == id)[0];
  console.log(item);

  const tasks = useSelector(state => state.tasks);
  console.log("--tasks--");
  console.log(tasks);

  const isExistedTask = tasks.filter(item => item.id == id).length > 0 ? true : false;
  console.log("--isExistedTask--");
  console.log(isExistedTask);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card>
      <ScrollView >
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image 
        style={{ width : 350, height : 280}}
        source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>        
        <Text style={{marginBottom: 10}}>
          {item.subtitle}
        </Text>
        </ScrollView>
      </Card>
    </View>
  )
}
export default HomeDetails;