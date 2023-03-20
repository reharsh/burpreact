import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const Bottom = () => {
    const onPress = () => {
        
    };
  return (
        <Pressable style={styles.bottom} onPress={onPress}>
            <Ionicons name='add-circle-outline' size={70} color='#DB00FF'/>
        </Pressable>
  )
}

export default Bottom

const styles = StyleSheet.create({
    bottom: {
        height: '10%',
        backgroundColor: 'transparent',
        alignItems: 'center',

    },
})