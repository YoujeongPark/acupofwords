import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import Carousel from 'react-native-snap-carousel';

import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';

import { freeGames, paidGames, sliderData } from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import colors from "../assets/colors/colors"

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);
  const [date, setDate] = useState(new Date().toString());

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  const changeQuestion = () => {
    alert("change")
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.grey }}>
      {/* <View> */}
        <View
          style={{
            padding: 20 ,
            flex : 1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={{
              fontSize: 18,
              color: colors.white,
              fontFamily: 'OpenSans-SemiBold'
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
          <View>
            <Text style={{
              fontSize: 15,
              color: colors.white,
              fontFamily: 'OpenSans-SemiBold'
            }}>
              {date}
            </Text>
          </View>
          <View>
            <Text style={{
              fontSize: 30,
              color: colors.white,
              fontFamily: 'OpenSans-SemiBold'
            }}>Choose your drink & start writing!</Text>
          </View>
        </View>
        <View
          style={{
            padding :20, 
            backgroundColor: colors.white,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            flex : 2.5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#C6C6C6',
              backgroundColor: colors.white,
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}>
            <TextInput
              caretHidden={true}
              placeholder="예 : 지금 떠오르는 행복한 기억은 뭔가요?"
              // pointerEvents="none"
              onTouchStart={changeQuestion}
              style={{
                fontSize: 15,
                fontFamily: 'OpenSans-SemiBold'
              }}
            />
          </View>
          <View style={{ 
            marginVertical: 20, 
            fontSize: 15,
            fontFamily: 'OpenSans-SemiBold'}}>
            <CustomSwitch
              selectionMode={1}
              option1="Recent"
              option2="Favorites"
              onSelectSwitch={onSelectSwitch}
            />
          </View>
          <ScrollView
            horizontal={true}
            style={{
              flex: 0,
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}
          >
            {gamesTab == 1 &&
              freeGames.map(item => (
                <ListItem
                  key={item.id}
                  photo={item.poster}
                  title={item.title}
                  subTitle={item.subtitle}
                  isFree={item.isFree}
                  onPress={() =>
                    navigation.navigate('GameDetails', {
                      title: item.title,
                      id: item.id,
                    })
                  }
                />
              ))}
            {gamesTab == 2 &&
              paidGames.map(item => (
                <ListItem
                  key={item.id}
                  photo={item.poster}
                  title={item.title}
                  subTitle={item.subtitle}
                  isFree={item.isFree}
                  price={item.price}
                  onPress={() =>
                    navigation.navigate('GameDetails', {
                      title: item.title,
                      id: item.id,
                    })
                  }
                />
              ))}
          </ScrollView>
          {gamesTab == 3 &&
            paidGames.map(item => (
              <ListItem
                key={item.id}
                photo={item.poster}
                title={item.title}
                subTitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                onPress={() =>
                  navigation.navigate('GameDetails', {
                    title: item.title,
                    id: item.id,
                  })
                }
              />
            ))}
          <TouchableOpacity 
          style={{
            backgroundColor: colors.darkGrey,
            padding: 10,
            width: 300,
            borderRadius: 10,
            // justifyContent: 'space-between',
            flexDirection: 'column',
            alignSelf: 'center',
            // justifyContent: 'center',
            // alignItems : 'center',
          }}>
            <Text style={{
              color: colors.white,
              textAlign: 'center',
              fontFamily: 'OpenSans-SemiBold',
              fontSize: 14,
            }}>
              Start
            </Text>
          </TouchableOpacity>
        </View>
      {/* </View> */}
    </SafeAreaView>
  );
}
