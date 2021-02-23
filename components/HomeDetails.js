import React,{useState, useCallback, useEffect} from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'

import api from '../api/list'

// 모두의 집 페이지 ( 홈에서 아이콘 )

const HomeDetails = ( {route, navigation }) => {

  const [item, setItem] = useState({});

  const getDetails = useCallback(async () => {
    const result = await api.get(id);
    console.log(result.data);
    setItem(result.data);
  }, [])

  useEffect(()=>{
    getDetails();
  }, []);

  console.log("--Homedetail");
  console.log(route.params);

  const { id } = route.params;

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