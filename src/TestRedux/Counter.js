import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={s.container}>
      <TouchableOpacity style={s.button}>
        <Text style={s.btnText}>-</Text>
      </TouchableOpacity>
      <Text style={s.count}>{count}</Text>
      <TouchableOpacity style={s.button}>
        <Text style={s.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
  },
  button: {
    backgroundColor: '#333',
    height: 100,
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
    borderRadius: 15,
  },
  btnText: {
    color: '#fff',
    fontSize: 35,
  },
  count: {
    color: '#fff',
    fontSize: 54,
    marginHorizontal: 20,
  },
});
