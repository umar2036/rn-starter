import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {

    return(
        <View style={styles.viewStyle}>
           <View style={styles.viewStyleOne}/>
           <View style={styles.viewStyleTwo}/>
           <View style={styles.viewStyleThree}/>
        </View>
    );
};

styles=StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        //alignItems:'stretch',
        flexDirection:'row',
        height:200,
       justifyContent:'space-around'
        //margin:30
    },
    textStyle:{
        borderWidth:3,
        borderColor:'red',
        //margin:20
       // marginHorizontal:20
    },
    viewStyleOne:{
        height:50,
        width:50,
        backgroundColor:'red'

    },
    viewStyleTwo:{
        height:50,
        width:50,
        backgroundColor:'green',
        marginTop:50
    },
    viewStyleThree:{
        height:50,
        width:50,
        backgroundColor:'purple'
    }
});

export default BoxScreen;