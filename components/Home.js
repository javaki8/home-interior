import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { SliderBox } from './SliderBox' 

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        // 'https://images.unsplash.com/photo-1496595351388-d74ec2c9c9cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80',
        // 위는 주소로 이미지 넣는법
        // 아래는 로컬이미지 넣는 법(내컴퓨터내저장이미지)
        require('../img/home1.jpg'),
        require('../img/home2.jpg'),
        require('../img/home3.jpg'),
        require('../img/home4.jpg'),
        require('../img/home5.jpg'),
      ],
    };
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container} onLayout={this.onLayout}>
        <View style={{ flexDirection: 'row' }}>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate("HomeInterior") }}
          >
            <ImageBackground source={require("../img/homeicon.jpg")} style={{ width: 125, height: 100, marginRight : 20 }}>
            <Text style={styles.text}> 모두의 집 </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => { navigation.navigate("Item") }}
          >
            <ImageBackground source={require("../img/homeMyPage.jpg")} style={{ width: 125, height: 100 }}>
            <Text style={styles.text}> 나만의 아이템 </Text>
            </ImageBackground>

          </TouchableOpacity>
         </View>

        <View >
          <TouchableOpacity onPress={() => { navigation.navigate("MyPage") }}
          >
            <ImageBackground source={require("../img/homeCart.jpg")} style={{ width: 125, height: 100 }}>
            <Text style={styles.text}> 찜하기 </Text>
            </ImageBackground>

          </TouchableOpacity>
         </View>
        </View>


        <SliderBox
          // ImageComponent={FastImage}
          images={this.state.images}
          marginTop={70}
          sliderBoxHeight={250}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          //currentImageEmitter={index => console.warn(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          autoplay
          // autoplayInterval={3000} 이미지 슬라이드 속도 조절할때 쓰기
          circleLoop
          ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
          imageLoadingColor="#2196F3"
        />
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: "black",
    fontSize: 15,
    margin:10,
    textAlign: "center"
  }
});

