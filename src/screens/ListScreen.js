import React from 'react';
import { Text, StyleSheet, Button, FlatList } from 'react-native';

const ListScreen = () =>
{ 
    const friends = [
      { name: 'Friend # 1' , Age: '1' },
      { name: 'Friend # 2' , Age: '2' },
      { name: 'Friend # 3' , Age: '3' },
      { name: 'Friend # 4' , Age: '4' },
      { name: 'Friend # 5' , Age: '5' },
      { name: 'Friend # 6' , Age: '6' },
      { name: 'Friend # 7' , Age: '7' },
      { name: 'Friend # 8' , Age: '8' },
      { name: 'Friend # 9' , Age: '9' }
    ];
    //return<Text style={styles.textStyle} > This is the List Sreen </Text>
    return (
     <FlatList  
     keyExtractor={friend => friend.name}
     data={friends} 
     //horizontal={true}
     
     renderItem={({item}) => {
        return (
        <Text style={styles.textStyle}> 
        {item.name} - Age {item.Age} 
        </Text>
        );
     }} 
     />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30,
        textAlign:'center',
        marginVertical:30
    }
});

export default ListScreen;