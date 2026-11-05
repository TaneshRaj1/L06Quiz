import React from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';


const Question = ({imageUrl, option1, option2, option3, selected, onSelect}) => {
    return (
        <View>
            <Text style={{fontSize: 18}}>What dinosaur is this?</Text>

            <Image source={{uri: imageUrl}}
                   style={{backgroundColor: 'grey', width: 400, height: 500}}/>

            <View style={{backgroundColor: 'lightgrey'}}>
                <Picker selectedValue={selected}
                        onValueChange={onSelect}>
                    <Picker.Item label="Select..." value=""/>
                    <Picker.Item label={option1} value={option1}/>
                    <Picker.Item label={option2} value={option2}/>
                    <Picker.Item label={option3} value={option3}/>
                </Picker>
            </View>
        </View>
    );
};

export default Question;