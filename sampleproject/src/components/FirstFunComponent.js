import React, { useState } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';

const FirstFunComponent = (props) => {
    const [isHungry, setIsHungry] = useState(true);
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
    </ScrollView>
  );
}

export default FirstFunComponent;