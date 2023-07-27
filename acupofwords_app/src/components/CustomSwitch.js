import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from "../assets/colors/colors"

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 20,
        width: '50%',
        fontFamily: 'OpenSans-SemiBold',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ?  colors.darkGrey:  colors.darkGrey,
            fontSize: 15,
            fontFamily: 'OpenSans-SemiBold',
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ?  colors.darkGrey:  colors.darkGrey,
            fontSize: 15,
            fontFamily: 'OpenSans-SemiBold',
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
