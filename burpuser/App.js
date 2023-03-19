import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';
import cards from './assets/data/cards.json';

export default function App() {
  return (
      <SafeAreaView>
        <Header/>
        <View style={styles.container}>
          <Card card={cards[0]}/>
          <Card card={cards[1]}/>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
