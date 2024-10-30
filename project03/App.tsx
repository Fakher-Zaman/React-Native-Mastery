import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Form Validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Length is required'),
})

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
