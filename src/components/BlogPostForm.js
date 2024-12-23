import React, { useState, FC } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({
  onSubmit,
  initialValues = {
    title: '',
    content: '',
  },
}) => {
  const [headerText, setTitle] = useState(initialValues.title);
  const [subTitle, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}> Enter Title: </Text>
      <TextInput
        style={styles.input}
        value={headerText}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}> Enter Content: </Text>
      <TextInput
        style={styles.input}
        value={subTitle}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(headerText, subTitle)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
export default BlogPostForm;
