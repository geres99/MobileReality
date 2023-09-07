/* eslint-disable react/react-in-jsx-scope */
import {FC} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {ButtonProps} from './types';

const Button: FC<ButtonProps> = ({title, ...props}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default Button;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  button: {
    borderColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  text: {color: 'blue'},
});
