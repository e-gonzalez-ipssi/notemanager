import React from 'react';
import {TextInput, FlexStyle, Keyboard} from 'react-native';

export default function SearchBar({style={}, placeholder = "Recherche", setInput = () => {}}:
     {style?:FlexStyle, placeholder?: string, setInput: (input:string) => void}){

    return (
        <TextInput 
        placeholder={placeholder} 
        onChangeText={setInput}
        onSubmitEditing ={Keyboard.dismiss}
        style={{
            backgroundColor:"red",
            textAlign:"center",
            marginLeft:10,
            marginRight:10,
            borderRadius:8,
            width:340,
            ...style
        }}/>
    )
}
