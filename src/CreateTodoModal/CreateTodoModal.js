import { Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import CreateTodoInput from './CreateTodoInput';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CreateIcon } from './Icons/CreateIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { toggleCreateModal } from '../redux/modalSlice';

export default function CreateTodoModal({}) {
  const dispatch = useDispatch();

  const isVisible = useSelector((state) => state.modals.create);
  const closeModal = () => dispatch(toggleCreateModal(false));

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const createNewTodo = () => {
    if (title.length > 0) {
      dispatch(addTodo({ title, desc }));
      setTitle('');
      setDesc('');
      closeModal();
    }
  };

  return (
    <Modal
      style={s.outerModal}
      isVisible={isVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropOpacity={0.8}
      useNativeDriver={true}
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={s.innerModal}>
          <CreateTodoInput autoFocus={true} value={title} onChangeText={setTitle} placeholder='Title' />
          <CreateTodoInput autoFocus={false} value={desc} onChangeText={setDesc} placeholder='Description' />
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
