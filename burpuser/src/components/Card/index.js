import {Text, StyleSheet, View, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Card = ({card}) => {

  const navigation = useNavigation();

  const onPress = () => {
            navigation.navigate('Dishdetails',{dish: card});
  };

    return(
      <Pressable style={styles.card} onPress={onPress}>
      <Image source={{uri:card.image}} style={styles.image} />
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.dish}>{card.dish}</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{color: 'grey',fontSize:12}}>{card.location}    ₹{card.price} &#8226; {card.mintime} - {card.maxtime}</Text>
            </View>
          </View>
          <View style={styles.profile}>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/143/143547.png"}} style={styles.star}/>
                <Text>{card.rating}</Text>
            </View>
        </View>
      </Pressable>
    )
  };

  export default Card;

  const styles = StyleSheet.create({
    container: {
      
    },
    image : {
      width: '100%',
      aspectRatio: 5/3,
      marginBottom: 3,
    },
    card: {
      width: '100%',
      backgroundColor: 'white',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    dish: {
      fontSize: 15,
      fontWeight: "500",
      marginVertical: 2.5,
  
    },
    profile: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    star: {
      width:22,
      aspectRatio: 1,
    },
  });