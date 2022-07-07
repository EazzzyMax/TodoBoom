import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import GlobalStyle from '../../../../utils/GlobalStyle';

let width = Dimensions.get('window').width - 40;

export function EmptyTodoList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All done!</Text>
      <Image style={styles.image} source={require('../../../../../assets/img/EmpyCardPic.png')} />
    </View>
  );
}

width -= 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    ...GlobalStyle.Montserrat600Font,
  },
  image: {
    width,
    height: (width / 24) * 25,
  },
  picContainer: {
    width,
    backgroundColor: 'lightgray',
  },
});
