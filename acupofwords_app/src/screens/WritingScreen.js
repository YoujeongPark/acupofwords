import React, { useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, Button, SafeAreaView, Image, Share, TextInput } from 'react-native'
import colors from '../assets/colors/colors'

const WritingScreen = ({ navigation, route }) => {

  const onShare = async () => {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
  };

  //     1. npx react-native run-ios --simulator "iPhone 8"

  const beFavorite = () => {

  }

  const [text, setText] = useState('');
  const [gifRoute, setGifRoute] = useState('../assets/images/icon/ChooseCup.png');

  const handleInputChange = (inputText) => {
    setText(inputText);
  };





  const handleSubmit = () => {
    //alert('You typed: ' + route.params?.drinkImg);
    navigation.navigate('Home')
    
  };

  const [imagePath,setImagePath] = useState({path: getImage('default')}) 


useEffect(() => {
  if(route.params?.fileName){
  setImagePath({
    path: getImage(route.params?.fileName)
  });
}
},[route])


function getImage(input) {
  switch (input) {
    case "dripcoffee": return require('../assets/images/gif/' + 'dripcoffee'+ '.gif');
    case "chamomiletea": return require('../assets/images/gif/' + 'chamomiletea'+ '.gif');
    case "peachtea": return require('../assets/images/gif/' + 'peachtea'+ '.gif');
  }
}


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.dayBG
      }}>
      <View
        style={{
          backgroundColor: '#FFF',
          flex: 1,
        }}>
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
            }}>
          </View>
          <Text>Your drink is prepared... </Text>
          {/* <Text>{route.params?.fileName}</Text> */}
          <Image
            style={{
               width: 130, 
               height: 180,
               resizeMode: "contain"
              }}
            source={imagePath.path} 
            />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.dayBG
        }}>
        <View
          style={{
            justifyContent: 'space-between',
          }}
        >
          <Text
          style={{
              fontWeight: '700',
              fontSize: 16,
              marginLeft : 10,
              padding : 10
            }}
            >{route.params?.question} </Text>
        </View>
        <TextInput
          style={{ 
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1, 
            marginBottom: 10,
            marginLeft : 15,
            marginRight : 15,
            paddingHorizontal: 8 ,
            flex: 2,
          }}
          onChangeText={handleInputChange}
          value={text}
          multiline ={true}
          placeholder="Type here..."
        />
        {/* <Button 
            title="go to main" 
            onPress={() => navigation.navigate('WritingDetail')}
          /> */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.darkGrey,
            padding: 10,
            width: 300,
            borderRadius: 10,
            flexDirection: 'column',
            alignSelf: 'center',
            marginBottom: 20,
          }}
          // onPress={() => sheetRef.current.snapTo(0)}
          title="Submit"
          onPress={handleSubmit}
        >
          <Text style={{
            color: colors.white,
            textAlign: 'center',
            // fontFamily: 'OpenSans-SemiBold',
            fontSize: 14,
          }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default WritingScreen
