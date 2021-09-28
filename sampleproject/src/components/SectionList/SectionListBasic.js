import React, { Component } from 'react';
import { SectionList, Text, View } from 'react-native';
import styles from './SectionListBasic.style';

class SectionListBasic extends Component {
    render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Table', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'name', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
    };
};

export default SectionListBasic;