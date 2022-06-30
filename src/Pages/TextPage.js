import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native'

export default function TextPage() {
  return (
    <ScrollView contentContainerStyle={styles.ccStyle}>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
      <View style={styles.square}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ccStyle: {
    padding: 20,
    paddingTop: 300,
  },
  square: {
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'cyan'
  }
})