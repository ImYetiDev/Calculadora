import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, style } from '../../config/theme/appTheme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  const buttonTextSize = doubleSize ? 40 : 30; 
  const buttonWidth = label === '0' ? 180 : doubleSize ? 120 : 80; 

  return (
    <Pressable
      onPress={() => onPress()}
      style={({ pressed }) => ({
        ...style.button,
        backgroundColor: color,
        width: buttonWidth,
        opacity: pressed ? 0.8 : 1,
        justifyContent: 'center', 
        alignItems: 'center', 
      })}
    >
      <Text
        style={{
          ...style.buttonText,
          color: blackText ? 'black' : 'white',
          fontSize: buttonTextSize,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

