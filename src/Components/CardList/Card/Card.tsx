import { Dimensions, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import CardHeader from './CardHeader/CardHeader';
import TodoList from './TodoList/TodoList';

export default function Card(props) {
  return (
    <View style={s.container}>
      <CardHeader categoryName={props.card.cardName}/>
      <TodoList todos={props.card.todos} />
    </View>
  );
}

const width = Dimensions.get('window').width-40;
const s = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#222',
    borderRadius: 15,
    overflow: 'hidden',
  },
});
