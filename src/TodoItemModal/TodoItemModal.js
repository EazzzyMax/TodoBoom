import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import GlobalStyle from '../utils/GlobalStyle';

export default function TodoItemModal({ closeModal, visible }) {
  return (
    <Modal
      style={s.outerModal}
      isVisible={visible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropColor='#222'
      backdropOpacity={0.8}
      useNativeDriver={true}
    >
      <View style={s.innerModal}>
        <Text style={[GlobalStyle.Montserrat600Font, s.closeTxt]}>Delete</Text>
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
