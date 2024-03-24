import { useState } from 'react';

export const useCalculator = () => {
  const [mainResult, setMainResult] = useState<string>('');
  const [subResult, setSubResult] = useState<string>('');

  const handleButtonPress = (buttonLabel: string) => {
    switch (buttonLabel) {
      case 'C':
        clearResults();
        break;
      case '+/-':
        toggleSign();
        break;
      case 'del':
        deleteLastDigit();
        break;
      case '=':
        calculateResult();
        break;
      default:
        updateResults(buttonLabel);
        break;
    }
  };

  const clearResults = () => {
    setMainResult('');
    setSubResult('');
  };

  const toggleSign = () => {
    if (mainResult !== '') {
      setMainResult((prev) => {
        const newMainResult = (parseFloat(prev) * -1).toString();
        return newMainResult;
      });
    }
  };

  const deleteLastDigit = () => {
    if (mainResult !== '') {
      setMainResult((prev) => {
        const newMainResult = prev.slice(0, -1);
        return newMainResult;
      });
    }
  };

  const calculateResult = () => {
    try {
      if (mainResult !== '') {
        const result = eval(mainResult);
        setMainResult(result.toString());
        setSubResult('');
      }
    } catch (error) {
      console.error('Error al calcular el resultado:', error);
    }
  };

  const updateResults = (buttonLabel: string) => {
    setMainResult((prev) => prev + buttonLabel);
  };

  return { handleButtonPress, mainResult, subResult };
};
