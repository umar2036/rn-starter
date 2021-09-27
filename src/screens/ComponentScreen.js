import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () =>
{ 
    return(
        <View>
        <Text style={styles.textStyle} > This is the components Sreen </Text>
        <Text style={styles.subHeading} >SubHeading</Text>
        </View>
        );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
    },
    subHeading:{
        fontSize:20
    }
});

export default ComponentScreen;