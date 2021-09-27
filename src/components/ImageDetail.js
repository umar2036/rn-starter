import React  from 'react';
import { Text,View,Button,StyleSheet, Image} from 'react-native';

const ImageDetail = ({imageSource,title,score}) => {
//onsole.log(props);
    return (
        <View>
            <Image source={imageSource}/>
            <Text>  {title} </Text>
            <Text> Image Score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;
