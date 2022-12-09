import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useFonts } from 'expo-font'
import Stories from '../Components/screenComponents/Stories'
const Home = () => {

    

  return (
    <View style={styles.mainContainer}  >
       <StatusBar backgroundColor="white" barStyle='dark-content' animated={true} />
       <View style={styles.container}>
            <Text style={{ fontSize:24, fontWeight:"700"}}>Coutana</Text>
            <FontAwesome name='heart-o' style={{fontSize:24}} />
       </View>

       <ScrollView>
        <Stories />
       </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor:'white',
      height:'100%',

    },
    container: {
      justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:15,
        alignItems:'center',
        borderBottomWidth:2,
        borderColor:'#d9d9d9',
        
    },
})

export default Home