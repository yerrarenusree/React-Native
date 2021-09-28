import React, { Component} from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};
class FirstClassComponent extends Component {
    render() {
        return (
        <ScrollView>
            <Text style={{ fontSize: 16 }}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
        </ScrollView>
        );
    };
};

export default FirstClassComponent;