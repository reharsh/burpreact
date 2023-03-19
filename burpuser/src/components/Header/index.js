import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/burplogo.png')} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width : '100%',
    aspectRatio: 30/3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    height: 26,
  },
})

export default Header