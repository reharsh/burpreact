import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Card = ({order}) => {
  return (
    <View style={styles.container}>
        <Image source = {{uri : 'https://static.toiimg.com/photo/98177097.cms'}} style={styles.image} />
            <View style={{backgroundColor:'white',padding:5,width:256,marginHorizontal:2}}>
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                    <Text style={styles.title}>{order.dish}</Text>
                    <Ionicons name='trash-outline' size={20} color='#DB00FF'/>
                </View>
                <Text style={styles.subtitle}>₹{order.price}</Text>
                <Text style={styles.subtitle}>{order.mintime} - {order.maxtime}</Text>
                <Text style={styles.subtitle}>Current Orders: {order.orders}</Text>
            </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: '100%',
        aspectRatio: 8/3,
        backgroundColor: 'white',
        marginBottom:10,
        flexDirection:'row',
        padding: 5,
    },
    image: {
        height: '100%',
        aspectRatio:1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        flexWrap: 'wrap',
        marginBottom:8
    },
    subtitle: {

        marginBottom:6,
        color: 'grey'
    },
})