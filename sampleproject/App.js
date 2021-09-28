import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import styles from './App.style';
// import FirstFunComponent from './src/components/FirstFunComponent';
// import SectionListBasic from './src/components/SectionList/SectionListBasic';
// import FirstClassComponent from './src/components/FirstClassComponent';
// import FlatList from './src/components/FlatList/FlatListBasic';

const App = () => {
  const name = "React Native";
  return (
    <ScrollView style={styles.container}>
      <View style={styles.items}>
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
            <View style={{ flex: 1, height: 40 }}>
              <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
              <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
              <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
            </View>
          </View>
          {/* <FirstFunComponent name={name} /> */}
          {/* <FirstClassComponent /> */}
          {/* <FlatList /> */}
          {/* <SectionListBasic /> */}
      </View>
    </ScrollView>
  );
}

export default App; 