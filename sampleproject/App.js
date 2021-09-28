import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
// import FirstFunComponent from './src/components/FirstFunComponent';
import SectionListBasic from './src/components/SectionList/SectionListBasic';
// import FirstClassComponent from './src/components/FirstClassComponent';
// import FlatList from './src/components/FlatList/FlatListBasic';

const App = () => {
  const name = "React Native";
  return (
    <ScrollView>
    <View style={{paddingTop: 60, paddingLeft: 20, paddingRight: 20}}>
      <Text
        style={{
         fontSize: 30, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center',}}
        > {name}</Text>
        <View style={{paddingTop: 10, paddingBottom: 10}}>
         <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingLeft: 6,
          }}
          defaultValue="Name"
        />
      </View>
      {/* <FirstFunComponent name={name} /> */}
      {/* <FirstClassComponent /> */}
      {/* <FlatList /> */}
      <SectionListBasic />
    </View>
    </ScrollView>
  );
}

export default App; 