import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './src/screens/Homescreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from './src/components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Homescreen/>
      <StatusBar style={'auto'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
