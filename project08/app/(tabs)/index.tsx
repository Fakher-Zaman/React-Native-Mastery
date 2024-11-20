import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {playbackService, addTrack, setupPlayer} from '../../musicPlayerServices';
import { useEffect, useState } from 'react';

// import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    const isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPlayerReady(true);
  }

  useEffect(() => {
    setup();
  }, []);
  
  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Testing seems ok</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

TrackPlayer.registerPlaybackService(() => playbackService);
