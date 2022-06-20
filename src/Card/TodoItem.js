import { StyleSheet, Text, View } from 'react-native';
import TodoCheckBox from './TodoCheckBox';

export default function TodoItem({ title }) {
  return (
    <View style={s.container}>
      <View style={s.content}>
        <TodoCheckBox />
        <Text style={s.title}>{title}</Text>
      </View>
      <View style={s.line} />
    </View>
  );
}
const s = StyleSheet.create({
  container: {
    // backgroundColor: 'rgba(255,0,0,0.1)',
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    backgroundColor: 'rgba(0,255,0,0.1)',
    fontSize: 18,
    color: '#fff',
    flexShrink: 1,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#383838',
  },
});
