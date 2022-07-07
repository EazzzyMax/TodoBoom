import { useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CreateTodoInput({ autoFocus, ...props }) {
  const inputRef = useRef();

  return (
    <TextInput
      ref={inputRef}
      onLayout={() => {
        if (autoFocus) setTimeout(() => inputRef.current.focus(), 100);
      }}
      keyboardAppearance='dark'
      multiline={true}
      placeholderTextColor='#aaa'
      style={s.input}
      {...props}
    />
  );
}

const s = StyleSheet.create({
  input: {
    minHeight: 41,
    textAlignVertical: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#222',
    borderRadius: 15,
    fontSize: 18,
    color: '#fff',
    flexShrink: 1,
  },
});
