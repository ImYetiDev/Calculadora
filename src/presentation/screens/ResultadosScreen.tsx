import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { colors, style } from '../../config/theme/appTheme';

export const ResultadosScreen = () => {
  const [resultadoPrincipal, setResultadoPrincipal] = useState(''); 
  const [resultadoSecundario, setResultadoSecundario] = useState('');

  useEffect(() => {
  
    setTimeout(() => {
      setResultadoPrincipal('Resultado Actualizado');
      setResultadoSecundario('Otro Resultado');
    }, 2000); 
  }, []);

  return (
    <View style={style.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={style.mainResult}>
          {resultadoPrincipal}
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={style.subResult}>
          {resultadoSecundario}
        </Text>
      </View>

   
    </View>
  );
};
