import React, { useState, useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import { freeGames, paidGames, sliderData } from '../model/data';
import { questionData } from '../model/question';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import colors from "../assets/colors/colors"
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';


export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);
  const [list, setList] = useState([]);
  const [date, setDate] = useState(new Date().toString());
  const [time, setTime] = useState(new Date().getHours())
  const [isDay, setIsDay] = useState(true);
  const [question, setQuestion] = useState("")
  const [clickCount, setClickCount] = useState(0);
  // const {t,i18n} = useTranslation();


  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  const changeQuestion = () => {
    setQuestion(questionData[randomIntFromInterval(0, questionData.length - 1)].en)
    setClickCount((clickCount) => clickCount + 1)
  }


  useEffect(() => {
    setDate(formatDate(new Date()))
    //setTime(time.getHours(new Date().getHours()))
    const currentHour = new Date().getHours()
    if (currentHour < 18 && currentHour > 6) {
      setIsDay(true)
    } else {
      setIsDay(false)
    }
    setQuestion(questionData[randomIntFromInterval(0, questionData.length - 1)].en)
  }, [])

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = useRef(null)

  const formatDate = (date) => {
    const months = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  const formatSentence = (isDay) => {
    const stn = isDay ? 'start your morning' : 'end your day'
    return `Choose a drink to ${stn}!`
  }



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDay ? colors.dayBG : colors.nightBG
      }}>
      {/* <View> */}
      <View
        style={{
          padding: 20,
          flex: 1,
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
            color: colors.darkGrey,
            // fontFamily: 'OpenSans-SemiBold'
          }}>
            A cup of words
          </Text>
          {/* <Text style={{
              fontSize: 18,
              color: colors.white,
              fontFamily: 'OpenSans-SemiBold'
            }}>
              {list}
            </Text> */}
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
            color: colors.darkGrey,
            paddingTop: 10,
            paddingBottom: 10,
            // fontFamily: 'OpenSans-SemiBold'
          }}>
            {date}
          </Text>
        </View>
        <View>
          <Text style={{
            fontSize: 28,
            color: colors.darkGrey,
            paddingBottom: 5,
            // fontFamily: 'OpenSans-SemiBold'
          }}>Today’s Question is...</Text>
        </View>
        <View
          onTouchStart={changeQuestion}
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            // backgroundColor: colors.white,
            height: 60,
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 20,
            paddingVertical: 8,
            justifyContent: 'space-between',
            flex: 1
          }}>
          <Text
            caretHidden={true}
            numberOfLines={2}
            // pointerEvents="none"
            // onTouchStart={changeQuestion}
            style={{
              fontSize: 14,
              flex: 11
              // fontFamily: 'OpenSans-SemiBold'
            }}
          >
            {question}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={clickCount == 0 ? require('../assets/images/icon/Home.png') : require('../assets/images/icon/Home.png')}
              style={{ width: 20, height: 20, borderRadius: 10 }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: colors.white,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          flex: 2,
        }}>
        {/* <View style={{
          marginVertical: 20,
          fontSize: 15,
          // fontFamily: 'OpenSans-SemiBold'
        }}>
          <CustomSwitch
            selectionMode={1}
            option1="Recent"
            option2="Favorites"
            onSelectSwitch={onSelectSwitch}
          />
        </View> */}
        <Text style={{
          fontSize: 15,
          color: colors.darkGrey,
          // fontFamily: 'OpenSans-SemiBold'
        }}>
          {formatSentence(isDay)}
        </Text>
        <ScrollView
          horizontal={true}
          style={{
            flex: 0,
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          {freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              color={item.color}
              type={item.type}
              onPress={() =>
                navigation.navigate('WritingStart', { // WritingDetails
                  title: item.title,
                  id: item.id,
                  question : question,
                  fileName : item.fileName,
                })
              }
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: isDay ? colors.btnDay : colors.btnNight,
            padding: 10,
            width: 300,
            borderRadius: 10,
            // justifyContent: 'space-between',
            flexDirection: 'column',
            alignSelf: 'center',
            // justifyContent: 'center',
            // alignItems : 'center',
          }}
          onPress={() => sheetRef.current.snapTo(0)}
        >
          <Text style={{
            color: colors.white,
            textAlign: 'center',
            // fontFamily: 'OpenSans-SemiBold',
            fontSize: 14,
          }}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={sheetRef}
        initialSnap={0}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </SafeAreaView>
  );
}
