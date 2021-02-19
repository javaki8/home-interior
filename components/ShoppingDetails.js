
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { IMGDATA } from '../shared/shoppingItem'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native';
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions/tasks'


const ShoppingDetails = ({ route, navigation }) => {


  const { id } = route.params;
  const item = IMGDATA.filter(item => item.id == id)[0];
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>

      <ScrollView >
        <Image
          source={{ uri: item.image }}
          style={pages.img} />
        <Button
          onPress={() => { dispatch(addTask(item)) }}
          title="찜하기">
        </Button>


      </ScrollView>
    </View>
  )
}
const pages = StyleSheet.create({

  img: {
    height: 1000,
    width: 300
  }
});

export default ShoppingDetails;
