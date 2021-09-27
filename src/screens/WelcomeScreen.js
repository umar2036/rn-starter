import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity, TouchableOpacityBase} from 'react-native';

const WelcomeScreen = ({ navigation}) =>
{ 
    //console.log(props.navigation);
    return(
        <View>
        <Text style={styles.textStyle} > This is the Welcome Sreen </Text>
        <Button 
            onPress={()=> navigation.navigate('Component')}
            title="Go to Component"
        />
        <Button 
            onPress={()=> navigation.navigate('Home')}
            title="Go to Home"
        />
        <Button 
            onPress={()=> navigation.navigate('Image')}
            title="Go to Images"
        />
        <Button 
            onPress={()=> navigation.navigate('Counter')}
            title="Go to Counter"
        />
        <Button 
            onPress={()=> navigation.navigate('Color')}
            title="Go to Color"
        /> 
         <Button 
            onPress={()=> navigation.navigate('Square')}
            title="Go to Square"
        />
          <Button 
            onPress={()=> navigation.navigate('Text')}
            title="Go to Text"
        /> 
         <Button 
            onPress={()=> navigation.navigate('Box')}
            title="Go to BoxScreen"
        />       
        <TouchableOpacity onPress={() => navigation.navigate('List')}>
            <Text> Go to List</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
        
    }
});

export default WelcomeScreen;