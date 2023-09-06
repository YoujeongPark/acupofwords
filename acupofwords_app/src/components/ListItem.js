import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';

export default function ListItem(
  { photo, title, subTitle, type, color, onPress }
  ) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 20,
        backgroundColor: color ,
        padding : 20,
        borderRadius: 20
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
          style={{ 
            width: 120, 
            height: 120, 
            margin : 20,
          }}
        />
        <View 
          style={{ 
          width: windowWidth - 220 
          }}>
          <Text
            style={{
              color: '#333',
              // fontFamily: 'Roboto-Medium',
              fontSize: 10,
            }}>
            {type}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              // fontFamily: 'Roboto-Medium',
              fontSize: 20,
              // textTransform: 'uppercase',
            }}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
