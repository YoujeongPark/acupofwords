import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, Switch, FlatList } from 'react-native'
import colors from "../assets/colors/colors"
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
// import Swipelist from 'react-native-swipeable-list-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()

const FavoriteScreen = () => {



  const [favoriteData, setFavoriteData] = useState([
    {
      id: 1,
      question: 'What defines Happiness?',
      answer: 'good',
      date: '2023-08-06',
      isDay: true,
      drinkType: 0,
      isFavorite: true
    },
    {
      id: 2,
      question: 'What defines Happiness?',
      answer: 'good',
      date: '2023-08-06',
      isDay: false,
      drinkType: 1,
      isFavorite: true
    },
    {
      id: 3,
      question: 'What defines Happiness?',
      answer: 'good',
      date: '2023-08-06',
      isDay: false,
      drinkType: 2,
      isFavorite: true
    },
  ])


  const delteSomething = () => {


  }

  // const styles = StyleSheet.create({
  //   container: {
  //     height: 60,
  //     marginVertical: 10,
  //     backgroundColor: '#ffffff',
  //     justifyContent: 'center',
  //     paddingLeft: 10,
  //     shadowColor: '#000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.25,
  //     shadowRadius: 3.84,
  //     elevation: 5,
  //   },
  
  //   rightAction: {
  //     width: '100%',
  //     marginVertical: 10,
  //     alignItems: 'center',
  //     flex: 1,
  //     justifyContent: 'center',
  //     height: 60,
  //     backgroundColor: '#ffffff',
  //     shadowColor: '#000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.25,
  //     shadowRadius: 3.84,
  //     elevation: 5,
  //   },
  // });


  const getFavoriteItem = ({ item: favorite }) => (
    <ListItem.Swipeable
      containerStyle={{
        backgroundColor: favorite.isDay ? colors.dayBG : colors.nightBG,
        margin: 10,
        borderRadius: 20,
      }}
      leftWidth={30}
      minSlideWidth={40}
      leftContent={(action) => (
        <Button
          title="Delete"
          onPress={() => alert("change")}
          icon={{ 
            name: 'delete', 
            color: 'red' }}
          containerStyle={{
            minHeight: '100%',
            backgroundColor: 'red'
          }}
        />
      )}
    >
      <ListItem.Content>
        <ListItem.Title>{favorite.date}</ListItem.Title>
        <ListItem.Subtitle>{favorite.question}</ListItem.Subtitle>
      </ListItem.Content>
      <Avatar
        rounded
        source={require('../assets/images/icon/cup_round.png')}
      />
    </ListItem.Swipeable>
  )


  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      {
        favoriteData.map(item => (getFavoriteItem({ item })))
      }
    </ScrollView>
    // <SafeAreaView>
    //   <Swipelist
    //     data={data}
    //     renderRightItem={(data, index) => (
    //       <View key={index} style={styles.container}>
    //         <Text>
    //           {index + 1}. {data.name}
    //         </Text>
    //       </View>
    //     )}
    //     renderHiddenItem={(data, index) => (
    //       <View style={{ flexDirection: 'row' }}>
    //         <TouchableOpacity
    //           style={[styles.rightAction, { backgroundColor: '#bfbfbf' }]}
    //           onPress={() => {
    //             Alert.alert('Edit?', data.name);
    //           }}
    //         >
    //           <Image
    //             source={require('./pen.png')}
    //             style={{ width: 25, height: 25 }}
    //           />
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           style={[styles.rightAction, { backgroundColor: 'red' }]}
    //           onPress={() => {
    //             Alert.alert('Delete?', data.name);
    //           }}
    //         >
    //           <Image
    //             source={require('./tash.png')}
    //             style={{ width: 25, height: 25 }}
    //           />
    //         </TouchableOpacity>
    //       </View>
    //     )}
    //     rightOpenValue={200}
    //   />
    // </SafeAreaView>
  )
}

export default FavoriteScreen