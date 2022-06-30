import { Dimensions, StyleSheet, View } from 'react-native';
import CardHeader from './CardHeader';
import TodoList from './TodoList';

export default function Card() {
  return (
    <View style={s.container}>
      <CardHeader />
      <TodoList />
    </View>
  );
}

const width = Dimensions.get('window').width-40;
const s = StyleSheet.create({
  container: {
    // flexGrow: 1,
    // flexShrink: 1,
    width: width,
    // width: Dimensions.get('window').width,
    backgroundColor: '#222',
    // margin: 20,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 10,
  },
});
