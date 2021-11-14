import React from 'react';
import {
  Text,
  View,
 StyleSheet,
 TouchableHighlight
} from 'react-native';

 export default function ColorButton({backgroundColor, onPress=f=>f}){
    return(
    <TouchableHighlight style={styles.button}
          onPress={()=> onPress(backgroundColor)} underlayColor="">
            <View>
            <View style={[styles.sampleColor,{backgroundColor}]}/>
            <Text style={styles.buttonText}>{backgroundColor}</Text>
            </View>
          </TouchableHighlight>
    );
    }

    const styles= StyleSheet.create({
        button:{
          margin:20,
          padding:10,
          borderWidth:2,
        borderRadius:10,
        alignSelf: "stretch",
        backgroundColor:"rgba(255,255,255,8)"
        },
        buttonText:{
          fontSize:30,
          textAlign:"center"
        },
        sampleColor:{
          height: 20,
          width:20,
          borderRadius:50,
          backgroundColor: "white"
        }
        })