import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput, Button } from 'react-native';
import BlogPost from "./BlogPost";

export default function App() {

  const [text, setText] = React.useState("");
  const [blogPosts, setBlogPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/blogs")
    .then((data) =>  data.json())
    .then((blogs) => {
      setBlogPosts(blogs)
    })
  }, []);

  const onSubmit = () => {
    var blogSaving = {
      text: text
    };
    fetch("http://localhost:8080/create-blog", {
      method: "POST",
      body: JSON.stringify(blogSaving),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((data) => data.json())
    .then((blogs) => {
      setBlogPosts(blogs)
    })
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Your Blog</Text>
      <Text>These are you most recent posts</Text>
      <TextInput style={styles.textInput} value={text} onChangeText={setText} />
      <Button onPress={onSubmit} title="Submit" />
      {blogPosts.map((blogPost) => (
        <BlogPost
          key={blogPost.id}
          text={blogPost.text} 
          createdAt={new Date(blogPost.createdAt)} />
      ))}
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
