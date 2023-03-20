import { View, Text, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

const DEFAULT_IMAGE =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";


const Dishdetails = () => {
    const route = useRoute();

    const dish = route.params?.dish;

    const [quantity, setQuantity] = useState(1);

    const onPlus = () => {
        setQuantity(quantity+1);
    }

    const onMinus = () => {
        if (quantity>1) {
            setQuantity(quantity-1);
        }
    }
    const total = quantity*dish.price
  return (
    <View>
        <View style={styles.container}>
       <Image source={{uri: dish.image ? dish.image : DEFAULT_IMAGE}} style={styles.image} />
       <Text style={styles.dishname}>{dish.dish}</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.ldetails}>Chef:</Text>
            <Text style={styles.rdetails}>{dish.chef}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.ldetails}>Price:</Text>
            <Text style={styles.rdetails}>₹{dish.price}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.ldetails}>Pickup Time:</Text>
            <Text style={styles.rdetails}>{dish.mintime} - {dish.maxtime}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.ldetails}>Location:</Text>
            <Text style={styles.rdetails}>{dish.location}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={styles.ldetails}>Rating:</Text>
            <View style={styles.review}>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/143/143547.png"}} style={styles.star}/>
                <Text style={{fontSize: 15,color: 'grey',marginTop: 10,}}>{dish.rating}</Text>
            </View>
        </View>
        <View style={styles.icons}>
            <Ionicons name='remove-circle-outline' size={60} color='black' onPress={onMinus} />
            <Text style={styles.quantity}>{quantity}</Text>
            <Ionicons name='add-circle-outline' size={60} color='black' onPress={onPlus} />
        </View>
        <View style={{alignItems:'center',justifyContent:'center',height:'25%'}}>
            <View style={styles.checkout}>
                <Text style={{fontSize:23,color:'white',fontWeight:'bold'}}>₹{total}</Text>
            </View>
        </View>
    </View>
    </View>
  )
}

export default Dishdetails

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 5/3,
        marginBottom: 15
    },
    dishname: {
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: 'white',
    },
    rdetails:{
        fontSize: 15,
        color: 'grey',
        marginTop: 10,
        marginLeft: 10,
    },
    ldetails:{
        fontSize: 15,
        color: 'black',
        marginTop: 10,
        fontWeight: 'bold'
    },
    star: {
        width:18,
        aspectRatio: 1,
        marginTop: 10,
        marginLeft: 10,
      },
    review: {
        flexDirection:'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        backgroundColor:'white',
        height:'20%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        flexDirection:'row',
    },
    quantity: {
        marginHorizontal:30,
        fontSize:30,
        fontWeight:'bold',
    },
    checkout: {
        width:'80%',
        aspectRatio: 14/3,
        backgroundColor: 'grey',
        marginTop:15,
        backgroundColor:'#DB00FF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})