import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const First = ({navigation}) => {
  return (
    <View 
    style={styles.container}
    >
      <Text style={styles.text}>Have you stuck anywhere ? don't worry we are here to help you ! </Text>
      <TouchableOpacity
      onPress={()=>{navigation.navigate('veh type')}}
      style={styles.button}
      >
        <Text style={styles.btnText}>BOOK NOW</Text>
      </TouchableOpacity>
      <Text style={styles.text}><Text style={{fontWeight:'600'}}>!STOPABLE'S</Text> is for your unstopable journeys</Text>
    </View>
  )
}

export default First

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:16
    },
    text:{
        fontSize:18,
        color:'#000',
        textAlign:'center'
    },
    button:{
        height:150,
        width:150,
        borderWidth:1,
        borderRadius:75,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ff0200',
        marginVertical:20,
    },
    btnText:{
     fontSize:28,
        color:'#fff',
        fontWeight:'800'
    },
})