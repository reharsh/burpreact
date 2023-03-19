import { StyleSheet, FlatList } from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';
import cards from './assets/data/cards.json';

export default function Homescreen() {
  return (
        <FlatList data={cards} renderItem={({item}) => <Card card={item}/>}
          showsVerticalScrollIndicator={false}/>
  );
}

const styles = StyleSheet.create({});
