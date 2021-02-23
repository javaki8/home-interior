
import React,{ useEffect, useCallback, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native';
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions/tasks'
import api from '../api/list'


// 상세 페이지 getItem 

const ShoppingDetails = ({ route, navigation }) => {

  console.log("--ShoppingDetails");
  const { id } = route.params;
  const [item, setItem] = useState({});

  const dispatch = useDispatch();

  const getDetails = useCallback(async () => {
    const result = await api.getItem(id);
    console.log(result.data);
    setItem(result.data);
  }, [])

  useEffect(()=>{
    getDetails();
  }, []);


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>

      <ScrollView >
        <Image
          source={{ uri: item.detail }}
          style={styles.img} />
        <Button
          onPress={() => { dispatch(addTask(item)) }}
          title="찜하기">
        </Button>


      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({

  img: {
    height: 1000,
    width: 300
  }
});

export default ShoppingDetails;
