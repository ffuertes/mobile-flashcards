import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import reducers from './reducers';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import Quiz from './components/Quiz';

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
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
      title: 'MobileFlashCards',
      ...headerStyles
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
