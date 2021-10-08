import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, StatusBar } from 'react-native';
import Routes from './routes'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppProvider from './hooks'

const App: React.FC = () => (
  <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer> 
      <StatusBar barStyle="light-content" backgroundColor="#312e38"/>
      <AppProvider>
        <View 
        style={{ 
          flex:1, 
          backgroundColor: '#312e38' 
        }}> 
          <Routes/>
        </View>
      </AppProvider>
    </NavigationContainer>
  </GestureHandlerRootView>  

)

export default App