import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () =>
{ 
    
    return<Text style={styles.textStyle} > This is the Home Sreen </Text>

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
    }
});

export default HomeScreen;