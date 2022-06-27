import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import GlobalStyle from '../utils/GlobalStyle';

import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';
import { toggleContextModal } from "../redux/modalSlice";

export default function TodoItemModal() {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todos.currentTodo);
  const isVisible = useSelector(state => state.modals.context)

  const closeModal = () => dispatch(toggleContextModal(false))
  
  const id = todo.id;
  const handleDelete = () => {
    dispatch(removeTodo({ id }));
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
        <View style={s.textContent}>
          <Text style={[GlobalStyle.Raleway500Font, s.title]}>{todo.title}</Text>
          {!!todo.desc && <Text style={[GlobalStyle.Raleway400Font, s.desc]}>{todo.desc}</Text>}
        </View>
        <TouchableOpacity onPress={handleDelete} style={s.deleteBtn}>
          <Text style={[GlobalStyle.Montserrat600Font, s.closeTxt]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  outerModal: {
    margin: 0,
    marginBottom: 100,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  innerModal: {
    alignSelf: 'flex-end',
    margin: 20,
  },

  deleteBtn: {
    alignSelf: 'flex-end',
    height: 50,
    backgroundColor: '#333',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  closeTxt: {
    fontSize: 20,
    color: '#f44',
  },
  textContent: {
    marginBottom: 10,
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 15,
    alignSelf: 'flex-end',
  },
  title: {
    // backgroundColor: 'rgba(0,255,0,0.1)',
    fontSize: 18,
    lineHeight: 24,
    color: '#fff',
    flexShrink: 1,
  },
  desc: {
    marginTop: 5,
    // backgroundColor: 'rgba(0,0,255,0.1)',
    color: '#aaa',
    fontSize: 16,
    textAlignVertical: 'center',
  },
});
