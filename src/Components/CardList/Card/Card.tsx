import { FC } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ICard } from '../../../types/types';
import CardHeader from './CardHeader/CardHeader';
import TodoList from './TodoList/TodoList';

interface cardProps {
  card: ICard;
}

const Card: FC<cardProps> = ({ card, changeCurrentCardId }) => {
  return (
    <View style={s.container}>
      <CardHeader categoryName={card.cardName} />
      <TodoList changeCurrentCardId={changeCurrentCardId} todos={card.todos} />
    </View>
  );
};

const width = Dimensions.get('window').width - 40;
const s = StyleSheet.create({
  container: {
    width,
    backgroundColor: '#222',
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default Card;
