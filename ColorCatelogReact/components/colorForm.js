import React, {useState,useRef} from "react";
import { StyleSheet,TextInput,View,Button } from "react-native";

export default function colorForm({onNewColor =f =>f}){
    const [inputValue,setValue ] = useState("");
    const input=useRef();
    return(
    <View style={styles.container}>
        <TextInput style={styles.textInput}
        ref={input}
        value={inputValue}
        onChangeText={setValue} placeholder="Input color here"/>
        <Button title="Add"  onPress={()=> {input.current.blur();
        onNewColor(inputValue);
        setValue("");
    }}/>
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