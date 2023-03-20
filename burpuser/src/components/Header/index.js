import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
      <Image source={require('../../../assets/burplogo.png')} style={styles.logo}/>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 26,
  },
})

export default Header