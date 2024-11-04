import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Snackbar from 'react-native-snackbar';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter an amount',
        backgroundColor: '#EA7773',
        textColor: '#000000',
        duration: Snackbar.LENGTH_SHORT,
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedAmount = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedAmount.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Please enter a valid amount',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text>1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
