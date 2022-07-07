import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import GlobalStyle from '../../utils/GlobalStyle';

import { useDispatch } from 'react-redux';
import { removeTodo } from '../../redux/todoSlice';
import { ITodo } from '../../types/types';
import { FC } from 'react';

interface todoContextProps {
  isVisible: boolean;
  todo: ITodo;
  closeModal: () => void;
}

const TodoContextModal: FC<todoContextProps> = ({ isVisible, todo, closeModal }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log('try delete', todo.id);

    dispatch(removeTodo({ id: todo.id }));
    closeModal();
  };

  return (
    <Modal
      animationIn='zoomIn'
      animationOut='fadeOut'
      animationInTiming={150}
      animationOutTiming={100}
      style={s.outerModal}
      isVisible={isVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropOpacity={0.8}
      useNativeDriver={true}
    >
      <View style={s.innerModal}>
        <View style={s.todo}>
          <Text style={[GlobalStyle.Raleway500Font, s.title]}>{todo.title}</Text>
          {!!todo.desc && <Text style={[GlobalStyle.Raleway400Font, s.desc]}>{todo.desc}</Text>}
        </View>

        <TouchableOpacity onPress={handleDelete} style={s.deleteBtn}>
          <Text style={[GlobalStyle.Montserrat600Font, s.deleteTxt]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const s = StyleSheet.create({
  outerModal: {
    margin: 0,
    marginBottom: 200,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  innerModal: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  deleteBtn: {
    alignSelf: 'flex-end',
    height: 50,
    backgroundColor: '#333',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  deleteTxt: {
    fontSize: 20,
    color: '#f44',
  },
  todo: {
    marginBottom: 10,
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    lineHeight: 23,
    color: '#fff',
  },
  desc: {
    marginTop: 5,
    color: '#aaa',
    fontSize: 16,
  },
});

export default TodoContextModal;
