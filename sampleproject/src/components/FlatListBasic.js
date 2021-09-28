import React, {Component} from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './FlatListBasic.styles';

class FlatListBasic extends Component {
    render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
        ]}
        renderItem={({item}) =>
        <Text style={styles.item}>{item.key}</Text>
      }
      />
    </View>
  );
};
};

export default FlatListBasic;