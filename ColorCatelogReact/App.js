import React,{useState} from 'react';
import ColorButton from './components/colorButton';
import ColorForm from './components/colorForm';
import {
  View,
 StyleSheet,
 FlatList
} from 'react-native';

export default function App() {
const [backgroundColor,setBackgroundColor] = useState("blue");
  return (
    <>
    <ColorForm/>
    <View style={[styles.container,{backgroundColor}]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="pink"onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="green"onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="purple"onPress={setBackgroundColor}/>
    </View>
   
    </>

  );
}

const styles= StyleSheet.create({

container:{
flex:1,
display:"flex",
justifyContent: 'center',
alignItems: 'center'
}
})