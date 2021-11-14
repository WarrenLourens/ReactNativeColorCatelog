import React from "react";
import { StyleSheet,TextInput,View,Button } from "react-native";

export default function colorForm(){
    return(
    <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Input color here"/>
        <Button title="Add"/>
    </View>
    )
} 

const styles= StyleSheet.create({
    container:{
    marginTop:30,
    flexDirection:"row",
    alignItems:"center"
    },
    textInput:{
    flex:1,
    borderWidth:2,
    margin:5,
    borderRadius:5,
    padding:10,
    fontSize:20
    }

})