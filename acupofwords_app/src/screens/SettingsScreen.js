import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, Switch, FlatList } from 'react-native'
import colors from "../assets/colors/colors"
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()

const SettingsScreen = (props) => {

  const [alertsData, setAlertsData] = useState([
    {
      id: 1,
      name: 'morning',
      reminder: 'Morning Reminders',
      time: 'everyday at 6 a.m.',
      switchState: false
    },
    {
      id: 2,
      name: 'evening',
      reminder: 'Evening Reminders',
      time: 'everyday at 6 p.m.',
      switchState: true
    },
    {
      id: 3,
      name: 'daily',
      reminder: 'Daily Reminders',
      time: 'one time a day',
      switchState: true
    },
  ])

  const [settingData, setSettingData] = useState([
    {
      id: 1,
      name: 'Lock',
      switchState: true
    }
  ])


  const [aboutData, setAboutData] = useState([
    {
      id: 1,
      name: 'FAQ',
    },
    {
      id: 2,
      name: 'Help Center',
    },
    // {
    //   id: 3,
    //   name: 'Privacy Policy',
    // },
  ])

  const toggleAlertSwitch = (itemId) => {
    setAlertsData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, switchState: !item.switchState } : item
      )
    );
  };


  const toggleSettingSwitch = (itemId) => {
    setSettingData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, switchState: !item.switchState } : item
      )
    );
  };



  const getAlertsItem = ({ item: alert }) => (
    <ListItem
      containerStyle={{
        backgroundColor: colors.white,
        marginLeft: 10
      }}>
      <ListItem.Content>
        <ListItem.Title>{alert.reminder}</ListItem.Title>
        <ListItem.Subtitle>{alert.time}</ListItem.Subtitle>
      </ListItem.Content>
      <Switch
        trackColor={{
          false: colors.lightGrey,
          true: colors.grey
        }}
        thumbColor={
          alert.switchState ? '#f4f3f4' : colors.white
        }
        ios_backgroundColor={colors.lightGrey}
        onValueChange={() => toggleAlertSwitch(alert.id)}
        value={alert.switchState}
      />
    </ListItem>
  );

  const getSettingsItem = ({ item: setting }) => (
    <ListItem
      containerStyle={{
        backgroundColor: colors.white,
        marginLeft: 10
      }}>
      <ListItem.Content>
        <ListItem.Title>{setting.name}</ListItem.Title>
      </ListItem.Content>
      <Switch
        trackColor={{
          false: colors.lightGrey,
          true: colors.grey
        }}
        thumbColor={
          alert.switchState ? '#f4f3f4' : colors.white
        }
        ios_backgroundColor={colors.lightGrey}
        onValueChange={() => toggleSettingSwitch(setting.id)}
        value={setting.switchState}
      />
    </ListItem>
  )


  const getAboutItem = ({ item: about }) => (
    <ListItem
      containerStyle={{
        backgroundColor: colors.white,
        marginLeft: 10
      }}
      onPress={() => props.navigation.navigate(about.name, about)}>
      <ListItem.Content>
        <ListItem.Title>{about.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron/>
    </ListItem>
  )



  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          marginTop: 10,
          alignItems: 'center',
          backgroundColor: colors.white
        }}>
        <Image
          source={require('../assets/images/icon/Bell.png')}
          style={{
            height: 20,
            width: 20,
            borderRadius: 40,
            marginLeft: 5
          }}
        />
        <Text
          style={{
            color: colors.black,
            fontSize: 18,
            // fontFamily: 'Roboto-Medium',
            marginLeft: 10,
          }}>
          Alerts
        </Text>
      </View>
      {
        alertsData.map(item => (getAlertsItem({ item })))
      }
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
            backgroundColor: colors.lightGrey
          }} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          marginTop: 10,
          alignItems: 'center',
          backgroundColor: colors.white
        }}>
        <Image
          source={require('../assets/images/icon/Setting.png')}
          style={{
            height: 20,
            width: 20,
            borderRadius: 40,
            marginLeft: 5
          }}
        />
        <Text
          style={{
            color: colors.black,
            fontSize: 18,
            // fontFamily: 'Roboto-Medium',
            marginLeft: 10,
          }}>
          General
        </Text>
      </View>
      {
        settingData.map(item => (getSettingsItem({ item })))
      }
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
            backgroundColor: colors.lightGrey
          }} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          marginTop: 10,
          alignItems: 'center',
          backgroundColor: colors.white
        }}>
        <Image
          source={require('../assets/images/icon/Info.png')}
          style={{
            height: 20,
            width: 20,
            borderRadius: 40,
            marginLeft: 5
          }}
        />
        <Text
          style={{
            color: colors.black,
            fontSize: 18,
            // fontFamily: 'Roboto-Medium',
            marginLeft: 10,
          }}>
          About
        </Text>
      </View>
      {
        aboutData.map(item => (getAboutItem({ item })))
      }
    </ScrollView>
  )
}

export default SettingsScreen