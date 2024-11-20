import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {playbackService} from '../../musicPlayerServices';

// import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Testing seems ok</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

TrackPlayer.registerPlaybackService(() => playbackService);
