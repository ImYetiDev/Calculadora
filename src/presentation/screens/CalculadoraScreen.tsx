
import React from 'react';
import { Text, View } from 'react-native';
import { colors, style } from '../../config/theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculadoraScreen = () => {
  const { handleButtonPress, mainResult, subResult } = useCalculator();

  return (
    <View style={style.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={style.mainResult}>
          {mainResult}
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={style.subResult}>
          {subResult}
        </Text>
      </View>

      <View style={style.row}>
        <CalculatorButton onPress={() => handleButtonPress('C')} label='C'  color={colors.red} />
        <CalculatorButton onPress={() => handleButtonPress('+/-')} label='+/-'  color={colors.red} />
        <CalculatorButton onPress={() => handleButtonPress('del')} label='del'  color={colors.red} />
        <CalculatorButton onPress={() => handleButtonPress('/')} label='/' color={colors.red} />
      </View>

  
      <View style={style.row}>
        <CalculatorButton onPress={() => handleButtonPress('7')} label='7' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('8')} label='8' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('9')} label='9' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('*')} label='*' color={colors.red} />
      </View>

      <View style={style.row}>
        <CalculatorButton onPress={() => handleButtonPress('4')} label='4' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('5')} label='5' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('6')} label='6' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('-')} label='-' color={colors.red} />
      </View>

      <View style={style.row}>
        <CalculatorButton onPress={() => handleButtonPress('1')} label='1' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('2')} label='2' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('3')} label='3' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('+')} label='+' color={colors.red} />
      </View>

      <View style={style.row}>
        <CalculatorButton onPress={() => handleButtonPress('0')} label='0' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('.')} label='.' blackText color={colors.white} />
        <CalculatorButton onPress={() => handleButtonPress('=')} label='=' color={colors.red} />
      </View>
    </View>
  );
};
