import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import CreateTodoInput from './CreateTodoInput';
import Modal from 'react-native-modal';
import { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CreateIcon } from './CreateIcon';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

interface createTodoProps {
  isVisible: boolean;
  closeModal: () => void;
}

const CreateTodoModal: FC<createTodoProps> = ({ isVisible, closeModal }) => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const dispatch = useDispatch();
  const createNewTodo = () => {
    if (title.trim().length) {
      dispatch(addTodo({ title: title.trim(), desc: desc.trim() }));
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
};

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

export default CreateTodoModal;
