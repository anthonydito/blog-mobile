import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <Text>Your Blog</Text>
      <Text>These are you most recent posts</Text>
      <TextInput style={styles.textInput} value={text} onChangeText={setText} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 60,
  },
  textInput: {
    padding: 8,
    borderColor: "black",
    borderWidth: 1
  }
});
