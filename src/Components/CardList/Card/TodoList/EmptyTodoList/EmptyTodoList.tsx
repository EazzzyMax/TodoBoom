import { Dimensions, StyleSheet, Text, View, Image, LayoutAnimation } from 'react-native';
import React, { FC } from 'react';
import GlobalStyle from '../../../../../utils/GlobalStyle';
import Button from '../../../../Button/Button';
import { useDispatch } from 'react-redux';
import { archiveCurrentCard } from '../../../../../redux/todoSlice';

let width = Dimensions.get('window').width - 60;

interface EmptyListProps {
  archiveCard: () => void;
}

export const EmptyTodoList: FC<EmptyListProps> = ({ archiveCard }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All done!</Text>
      <Image style={styles.image} source={require('../../../../../../assets/img/EmpyCardPic.png')} />
      <Button onPress={archiveCard} text='Archive card' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 32,
    ...GlobalStyle.Montserrat600Font,
    marginTop: 20,
  },
  image: {
    width,
    height: (width / 24) * 25,
    marginBottom: 20,
  },
});
