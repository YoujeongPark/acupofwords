import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import { View, Text, TouchableOpacity, Button, SafeAreaView, Image, Share } from 'react-native'
import colors from '../assets/colors/colors'

const WritingDetailsScreen = ({ navigation, route }) => {

  const onShare = async () => {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
  };

  const beFavorite = () => {

  }

  // function IDText() {
  //   const route = useRoute();
  //   return <Text>id: {route.params.id}</Text>;
  // }



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.grey
      }}>
      <View
        style={{
          marginTop: 20,
          backgroundColor: colors.white,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          flex: 2.5,
        }}>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ width: 10, height: 10 }}>
            <Image
              source={require('../assets/images/icon/Arrow.png')} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              onPress={beFavorite}
              style={{
                width: 10,
                height: 10,
                marginRight: 30,
              }}>
              <Image
                source={require('../assets/images/icon/NotFavorite.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onShare}
              style={{
                width: 10,
                height: 10,
                marginRight: 10,
              }}>
              <Image
                source={require('../assets/images/icon/Share.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 20,
              flex: 1,
            }}>
            <Text style={{
              fontSize: 18,
              color: colors.white,
              // fontFamily: 'OpenSans-SemiBold'
            }}>
              A cup of words
            </Text>
            {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <ImageBackground
                source={require('../assets/images/user-profile.jpg')}
                style={{ width: 35, height: 35 }}
                imageStyle={{ borderRadius: 25 }}
              />
            </TouchableOpacity> */}
          </View>
          <Text>Start writing while we prepare your drink</Text>
          {/* <Text>{route.params?.title}</Text> */}
          <Image
            style={{ width: 130, height: 130, margin: 10 }}
            source={
              require('../assets/images/icon/ChooseCup.png')} />
          <View
            style={{
              // flex : 3
            }}
          >
            <Text>QUESTION OF THE DAY</Text>
            <Text>WHAT IS HAPPINESS?</Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: colors.dayBG,
              margin: 10,
              padding: 10,
              width: 300,
              heigh: 20,
            }}
          >
            <Text>MORNING</Text>
            <Text>Start Writing... </Text>
          </TouchableOpacity>
          <Button 
            title="go to main" 
            onPress={() => navigation.navigate('WritingStart')}
          />
          {/* <Button
            title="다음"
            onPress={() => navigation.push('WritingDetails', {id: route.params.id + 1})}
          /> */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.nightBG,
              margin: 10,
              padding: 10,
              width: 300,
              heigh: 20,
            }}
          >
            <Text>EVENING</Text>
            <Text>Start Writing... </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WritingDetailsScreen
