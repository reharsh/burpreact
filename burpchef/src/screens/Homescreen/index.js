import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import order from '../../../assets/orders.json';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import Card from '../../components/Card'
import Bottom from '../../components/Bottom';

const Homescreen = () => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:22,margin:10}}>My Dishes!</Text>
            <FlatList data={order} renderItem={({item}) => <Card order={item}/>}/>
        </View>
        <Bottom/>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '90%',
        backgroundColor: 'white'
    },
})