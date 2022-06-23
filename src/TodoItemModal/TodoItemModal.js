import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import GlobalStyle from '../utils/GlobalStyle';

export default function TodoItemModal({removeTodo, closeModal, visible , currentID}) {
  const handleDelete = () => {
    closeModal();
    removeTodo(currentID);
  }

  return (
    <Modal
      animationIn='fadeIn'
      animationOut='fadeOut'
      style={s.outerModal}
      isVisible={visible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropColor='#222'
      backdropOpacity={0.8}
      useNativeDriver={true}
    >
      <TouchableOpacity onPress={handleDelete} style={s.innerModal}>
        <Text style={[GlobalStyle.Montserrat600Font, s.closeTxt]}>Delete</Text>
      </TouchableOpacity>
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
});
