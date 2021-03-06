import React from 'react';
import { View } from 'react-native';

const CardSection = props => <View style={styles.containerStyle}>{props.children}</View>;

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#bdc3c7',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: '#ddd'
  }
};

export { CardSection };
