import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'

const Addorder = () => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.imagecontent}>
            <Image source={{uri: 'https://media.istockphoto.com/id/500595486/vector/foods-service-icon.jpg?s=612x612&w=0&k=20&c=voWmB1eXhF8KesPfLXQGOVn_cdzIIn70Zgf-oRCmgdk='}} style={styles.image}/>
            </View>
        <View style={styles.input}>
            <Text style={styles.text}>Add Dish</Text>
            <Text style={styles.text}>Add Dish</Text>
            <Text style={styles.text}>Add Dish</Text>
        </View>
        </View>
        <View style={styles.bottom}>
            <View style={styles.box}>
                <Text style={styles.addtext}>
                    ADD DISH!
                </Text>
            </View>
        </View>
    </View>
  )
}

export default Addorder

const styles = StyleSheet.create({
    container: {       
         backgroundColor: 'white',
         width: '100%',
         height: '90%',
    },
    content: {
        padding: 20
    },
    imagecontent: {
        alignItems: 'center',
        marginTop:100,
    },
    image: {
        width: '50%',
        aspectRatio: 1,
    },
    input: {
        marginTop:50,
        marginLeft:20,
    },
    text: {
        fontSize:20,
        marginVertical: 15
    },
    bottom: {
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box:{
        width: 200,
        height: 50,
        backgroundColor: '#DB00FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    addtext: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    }
})