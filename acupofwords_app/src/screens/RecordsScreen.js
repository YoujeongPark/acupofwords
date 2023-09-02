import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import colors from "../assets/colors/colors"


const RecordsScreen = () => {

  const [selected, setSelected] = useState('2023-08-06');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          paddingTop: 30,
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            paddingLeft: 30,
          }}>
          <Text
            style={{
              color: colors.black,
              fontSize: 18,
              // fontFamily: 'Roboto-Medium',
              marginLeft: 10,
            }}>
            {selected}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              backgroundColor: '#E3DDD3',
              alignItems: 'center',
              flex: 1,
              width: 100,
              marginRight: 7,
              borderRadius: 10,
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                margin: 20
              }}
              source={
                require('../assets/images/icon/cup_round.png')
              }
            />
            {/* <Text>나나나나나나나나나나나나</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              backgroundColor: '#E3DDD3',
              alignItems: 'center',
              flex: 1,
              width: 100,
              marginLeft: 7,
              borderRadius: 10,
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                margin: 20
              }}
              source={
                require('../assets/images/icon/cup_round.png')
              }
            />
          </TouchableOpacity>

        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20
        }}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: colors.lightGrey,
          }} />
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: colors.white,
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString); // 2023-08-06
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange'
            }
          }}
        />
      </View>
    </View>
  )
}

export default RecordsScreen
