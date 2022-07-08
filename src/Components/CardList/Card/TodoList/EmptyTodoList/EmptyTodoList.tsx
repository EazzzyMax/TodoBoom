import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import GlobalStyle from '../../../../../utils/GlobalStyle';
import Button from '../../../../Button/Button';
import { useDispatch } from 'react-redux';
import { archiveCurrentCard } from '../../../../../redux/todoSlice';

let width = Dimensions.get('window').width - 60;

export function EmptyTodoList() {
  const dispatch = useDispatch();

  const archiveCard = () => dispatch(archiveCurrentCard());

  return (
    <View style={styles.container}>
      <View style={styles.upperBlock}>
        <Text style={styles.text}>All done!</Text>
        <Image style={styles.image} source={require('../../../../../../assets/img/EmpyCardPic.png')} />
      </View>
      <Button onPress={archiveCard} text='Archive card' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  upperBlock: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    ...GlobalStyle.Montserrat600Font,
    marginTop: 20,
    marginBottom: 30,
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
