
import React, { useEffect, useCallback, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native';
import { addTask } from '../redux/actions/tasks'
import api from '../api/list'
import { useDispatch, useSelector } from 'react-redux'
import { removeTask } from '../redux/actions/tasks'

// 상세 페이지 getItem 

const ShoppingDetails = ({ route, navigation }) => {

  console.log("--ShoppingDetails");
  const { id } = route.params;
  const [item, setItem] = useState({});

  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);
  console.log("--tasks--");
  console.log(tasks);

  const isExistedTask = tasks.filter(item => item.id == id).length > 0 ? true : false;
  console.log("--isExistedTask--");
  console.log(isExistedTask);

  const getDetails = useCallback(async () => {
    const result = await api.getItem(id);
    console.log(result.data);
    setItem(result.data);
  }, [])

  useEffect(() => {
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
        {
          isExistedTask
            ?
            <Button
              onPress={() => { dispatch(removeTask(id))}}
              title="취소하기">
            </Button>
            :
            <Button
              onPress={() => { dispatch(addTask(item)) }}
              title="찜하기">
            </Button>

        }

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
