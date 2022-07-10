import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import GlobalStyle from '../../utils/GlobalStyle';
import { colors, Colors } from '../../StylesConstants/Colors';

interface buttonProps {
  state?: string;
  text: string;
  onPress?: () => void;
}

const Button: FC<buttonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: colors.buttonActive,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15,
  },
  text: {
    fontSize: 24,
    ...GlobalStyle.Montserrat600Font,
    color: '#222',
  },
});
