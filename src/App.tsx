import React from 'react';
import { StatusBar, View } from 'react-native';
import { style } from './config/theme/appTheme';
import { CalculadoraScreen } from './presentation/screens/CalculadoraScreen'

export function App() {
  return (
    <View style={ style.background }>
      <StatusBar 
      barStyle={'light-content'} 
      backgroundColor={'black'}
      />
      <CalculadoraScreen/>
    </View>

  )
}
export default App
