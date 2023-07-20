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

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{
            fontSize: 18,
            // fontFamily: 'Roboto-Medium'
          }}>
            글한컵3
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ color: '#0aada8' }}>오늘의 질문과 음료를 선택하세요</Text>
          <Text style={{ color: '#0aada8' }}>오늘의 질문과 음료를 선택하세요</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
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
          />
        </View>
        {/* <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, 
            // fontFamily: 'Roboto-Medium'
            }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View> */}
        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Recent"
            option2="Favorites"
            option3="모두보기"
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
        <TouchableOpacity style={{
          backgroundColor: '#454544',
          padding: 10,
          width: 300,
          borderRadius: 10,
          justifyContent: 'space-between',
        }}>
          <Text style={{
            color: '#fff',
            textAlign: 'center',
            // fontFamily: 'Roboto-Medium',
            fontSize: 14,
          }}>
            Start
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
