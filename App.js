import React, {useState} from 'react';
import {Text, Button, Alert, ScrollView} from 'react-native';
import Question from './component/Question';

const MyApp = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const submit = () => {
        let score = 0;

        if (answer1 === 'Tyrannosaurus') score = score + 1;
        if (answer2 === 'Triceratops') score = score + 1;
        if (answer3 === 'Stegosaurus') score = score + 1;
        if (answer4 === 'Spinosaurus') score = score + 1;

        Alert.alert('Result', 'You have ' + score + ' correct answers!');
    };

    return (
        <ScrollView>
            <Text></Text>
            <Text style={{fontSize: 40, fontWeight: 'bold'}}> Dinosaur Quiz</Text>

            <Question
                imageUrl="https://play-lh.googleusercontent.com/sEeKcHeIaKZup_WlPTjDJUc5IFOOfCXvlx5FHwWe49J_QwIx-nA5H1nhzzjirxfpANfuS86MBJDgCZdTlx-2xg"
                option1="Triceratops"
                option2="Tyrannosaurus"
                option3="Stegosaurus"
                selected={answer1}
                onSelect={(value) => setAnswer1(value)}/>

            <Question
                imageUrl="https://c.files.bbci.co.uk/d3b5/live/3fde62b0-ec90-11f0-abc2-c92f19f0499a.jpg"
                option1="Triceratops"
                option2="Velociraptor"
                option3="Brachiosaurus"
                selected={answer2}
                onSelect={(value) => setAnswer2(value)}/>

            <Question
                imageUrl="https://cdn.britannica.com/59/242659-050-75430D8A/Outdoor-statue-of-Stegosaurus-dinosaur.jpg"
                option1="Ankylosaurus"
                option2="Stegosaurus"
                option3="Spinosaurus"
                selected={answer3}
                onSelect={(value) => setAnswer3(value)}/>

            <Question
                imageUrl="https://ichef.bbci.co.uk/ace/standard/768/cpsprodpb/8CA6/production/_114560063_mediaitem114559977.jpg"
                option1="Triceratops"
                option2="Tyrannosaurus"
                option3="Spinosaurus"
                selected={answer4}
                onSelect={(value) => setAnswer4(value)}/>

            <Text></Text>
            <Button title="Submit Answers" onPress={submit}/>
        </ScrollView>
    );
};

export default MyApp;