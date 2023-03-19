import { StyleSheet, FlatList } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import cards from '../../../assets/data/cards.json';
import { View } from 'react-native';

export default function Homescreen() {
  return (
    <View>
        <FlatList data={cards} renderItem={({item}) => <Card card={item}/>}
          showsVerticalScrollIndicator={false}/>
          <Header/>
    </View>
  );
}

const styles = StyleSheet.create({});