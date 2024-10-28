import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Define styles based on the color scheme
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#FFFFFF' : '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: isDarkMode ? '#000000' : '#FFFFFF',
    }
  });

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.text}>Hello World!</Text>
      <StatusBar style={isDarkMode ? 'dark' : 'light'} />
    </View>
  );
}
