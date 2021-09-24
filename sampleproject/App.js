import React from 'react';
import { Text, TextInput, View } from 'react-native';
import FirstFunComponent from './src/components/FirstFunComponent';

const App = () => {
  const name = "React";
  return (
    <View style={{paddingTop: 60, paddingLeft: 20, paddingRight: 20}}>
      <Text>Hello, I am {name}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Name me!"
      />
      <FirstFunComponent name={name} />
      <FirstFunComponent name={name}/>
    </View>
  );
}

export default App; 