import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';

export default function ListItem({ photo, title, subTitle, isFree, price, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 10,
        backgroundColor: '#E3DDD3',
        padding : 20,
      }}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          borderColor: 'black',
          flex: 1
        }}>
        <Image
          source={photo}
          style={{ width: 100, height: 100, marginRight: 8 }}
        />
        <View style={{ width: windowWidth - 220 }}>
          <Text
            style={{
              color: '#333',
              // fontFamily: 'Roboto-Medium',
              fontSize: 14,
            }}>
            {subTitle}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              // fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            {title}
          </Text>
        </View>
      </View>
      {/* <TouchableOpacity style={{
        backgroundColor: '#0aada8',
        padding: 10,
        width: 100,
        borderRadius: 10,
      }}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          // fontFamily: 'Roboto-Medium',
          fontSize: 14,
        }}>
          {isFree == 'Yes' && 'Play'}
          {isFree == 'No' && price}
        </Text>
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
}
