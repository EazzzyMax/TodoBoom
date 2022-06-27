import { Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import CreateTodoInput from './CreateTodoInput';
import Modal from 'react-native-modal';
import CreateTodoSettings from './CreateTodoSettings';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CreateIcon } from './Icons/CreateIcon';
import { useDispatch } from "react-redux";

export default function CreateTodoModal({ closeModal, modalVisible }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const addTask = () => dispatch();

  const createNewTodo = () => {
    const newTodo = {
      title: title,
      description: description,
      id: Date.now(),
    };
    // addTodo(newTodo);
    setTitle('');
    setDescription('');
  };

  return (
    <Modal
      style={s.outerModal}
      isVisible={modalVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropColor='#222'
      backdropOpacity={0.8}
      useNativeDriver={true}
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={s.innerModal}>
          <CreateTodoInput autoFocus={true} value={title} onChangeText={setTitle} placeholder='Title' />
          <CreateTodoInput
            autoFocus={false}
            value={description}
            onChangeText={setDescription}
            placeholder='Description'
          />
          <TouchableOpacity onPress={createNewTodo} style={s.addBtn}>
            <CreateIcon />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const s = StyleSheet.create({
  outerModal: {
    margin: 0,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  innerModal: {
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  addBtn: {
    alignSelf: 'flex-end',
  },
});
