import React, { useReducer} from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';


const reducer=(state , action) => {

    // state === {count : number}
    // action === {type : 'increment || decrement'}
    switch(action.type)
    {
        case 'increment':
            return  {...state, counter : state.counter + action.payload};
        case 'decrement':
            return {...state, counter : state.counter - action.payload};
        default:
           return state;
    }
}; 

const CounterScreen =() => {

    //let counter = 0;
    
    //const [counter, setCounter]= useState(0);
    //const [state, dispatch] = useReducer(reducer, {red: 0,green: 0,blue: 0});
    const [state , dispatch] = useReducer(reducer, {counter:0});
    const {counter} = state;
    return (
        <View>
            <Button 
            title="Increase"
            onPress={() => {
                //counter++;
                //console.log(counter);
               //setCounter(counter + 1);
               dispatch( {type : 'increment', payload : 1})
            }}/>
            <Button 
            title="Decrease"
            onPress={() => {
                //counter--;
                //console.log(counter);
                //setCounter(counter - 1);
                dispatch( {type : 'decrement', payload : 1})
            }}/>
            <Text> Current Count: {counter}</Text>

        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;