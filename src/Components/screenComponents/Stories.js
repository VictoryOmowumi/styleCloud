import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Stories = () => {
const navigation  = useNavigation();
    const storyInfo = [ 
        {
            id:1,
            name:'YBNL',
            image:require('../../Storage/images/img-1.jpg')
        },
        {
            id:2,
            name:'DMW',
            image:require('../../Storage/images/img-2.jpg')
        },
        {
            id:3,
            name:'CHOCO',
            image:require('../../Storage/images/img-3.jpg')
        },
        {
            id:4,
            name:'Mavin',
            image:require('../../Storage/images/img-4.jpg')
        },
        {
            id:5,
            name:'YBNL',
            image:require('../../Storage/images/img-5.jpg')
        },
        {
            id:6,
            name:'DMW',
            image:require('../../Storage/images/img-6.jpg')
        },
        {
            id:7,
            name:'CHOCO',
            image:require('../../Storage/images/img-7.jpg')
        },
        {
            id:8,
            name:'MAVIN',
            image:require('../../Storage/images/img-8.jpg')
        },
        {
            id:9,
            name:'STAR',
            image:require('../../Storage/images/img-9.jpg')
        },
    ]
  return (
    <View style={styles.mainContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:4}}> 
            <Text style={{fontSize:11, fontWeight:"700",}}>Top Labels </Text>
            <Text style={{fontSize:11, fontWeight:"700",}}>See All Labels ... </Text>
        </View>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.storyContainer}>
        {
            storyInfo.map((data, index) =>{
                return(
                    <TouchableOpacity key={index} 
                    onPress={() => navigation.push('Status', {
                        name:data.name,
                        image:data.image,
                    })}>
                        <View style={styles.story}>
                            {
                                data.id === 1 ? 
                                (
                                    <View></View>
                                )
                                : null
                            }
                            <View style={styles.storyImages}>
                                <Image source={data.image} style={styles.img} />
                            </View>
                            <Text style={{textAlign:'center', fontSize:10, opacity:data.id == 0 ? 1 : 0.5, }}>{data.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        }
   </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:10,
        paddingVertical:5,
        // fontFamily:'Segoe UI',
    },
    storyContainer:{
        paddingVertical:10,

    },
    story:{
        paddingHorizontal:5,
        position:'relative',
    },
    storyImages:{
        width:70,
        height:70,
        borderRadius:100,
        backgroundColor:'#ab4fd3',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'white',
        elevation:5,
    },
    img:{
        resizeMode:'cover',
        width:'92%',
        height:'92%',
        borderRadius:100,
        backgroundColor:'#ab4fd3'
    }

})

export default Stories