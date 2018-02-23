import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import reducers from './reducers';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';

import { FontAwesome } from '@expo/vector-icons';

const TopButton = () => {
  return (
    <View style={{paddingLeft: 10, paddingTop: 5}}>
        <FontAwesome name='pencil-square-o' size={25} color='#ffffff' />
    </View>
  )
}

const headerStyles = {
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#000000',
  }
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: 'FlashCards',
      headerLeft: <TopButton />,
      ...headerStyles,
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: headerStyles
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: headerStyles
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: headerStyles
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: headerStyles
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
