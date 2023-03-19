import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Header from './src/components/Header';
import Homescreen from './src/screens/Homescreen';
import Dishdetails from './src/screens/Dishdetails';
import cards from '../burpuser/assets/data/cards.json';

export default function App() {
  return (
      <SafeAreaView>
        <Header/>
        <View style={styles.container}>
          <Homescreen/>
          {/* <Dishdetails dish={cards[3]}/> */}
          <StatusBar style={"auto"}/>
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
