import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { removeTask } from '../redux/actions/tasks'
import { ScrollView } from 'react-native-gesture-handler'
const MyPage = ({ navigation }) => {

  const tasks = useSelector(state => state.tasks);
  console.log("--tasks state in Tasks Component");
  console.log(tasks);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
        {
          tasks.map((item, i) => (
            <ListItem containerStyle={{ width: "80%" }} key={i} onPress={() => { navigation.navigate("ShoppingDetails", { id: item.id }) }}>
              <Avatar source={{ uri: item.image }} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
              <Icon name='close' type='ionicon' color='gray' onPress={() => { dispatch(removeTask(item.id)) }} />
            </ListItem>
          ))
        }
      </ScrollView>

      <View>
        <Text style={styles.titleText}>나만의 집으로 꾸며보세요.</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 60
  }
});


export default MyPage;