import React, { useState } from 'react';
import { ScrollView, Text, View, Button, TextInput } from 'react-native';

const FirstFunComponent = (props) => {
    const [isHungry, setIsHungry] = useState(true);
    const [text, setText] = useState('');
  return (
    <ScrollView>
        <View>
            <Text>I am also a {props.name}</Text>
            <Text>
              I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
            </Text>
        </View>
        <Button
            onPress={() => {
            setIsHungry(false);
            }}
            disabled={!isHungry}
            title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
        />
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </ScrollView>
  );
}

export default FirstFunComponent;