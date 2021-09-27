import React, {useState} from 'react';
import { View , Text, StyleSheet, TextInput} from 'react-native';
import ColorScreen from './ColorScreen';

const TextScreen = () => {

    const [name, setName]=useState('');
return(
    <View>
        <Text>      Enter Name</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Enter Name" 
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue)=> setName(newValue) }
        />
             
        <Text> My name is {name}</Text>
        {name.length>5 ? <Text style={styles.right} >That is true</Text> : <Text style={styles.Less}>Must be greater than 5</Text>}
    </View>
);
};

const styles= StyleSheet.create({

    input: {
        margin:15,
        borderColor:'black',
        borderWidth: 2

        //textAlign:'centre'
    },
    Less:{
        color:'red'
    },
    right:{
        color:'green'
    }
});
    


export default TextScreen;

