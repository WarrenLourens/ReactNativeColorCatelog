import React,{useState} from 'react';
import ColorButton from './components/colorButton';
import ColorForm from './components/colorForm';
import { generate } from 'shortid';
import {
View,
StyleSheet,
} from 'react-native';

//Custom hook
const useColors =()=>{
  const addColor = color=>{
    const newColor ={id: generate(),color}
    setColors([newColor, ...colors]);
  };
return {colors,addColor}

}

export default function App() {
const [backgroundColor,setBackgroundColor] = useState("blue");
const {colors,addColor}= useColors();


  return (
    <>
    <ColorForm onNewColor={newColor =>addColor(newColor)} />
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