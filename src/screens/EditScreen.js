import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/Blogcontext';
import BlogPostForm from '../components/BlogPostForm';
import { useNavigation } from '@react-navigation/native';

const EditScreen = ({ route }) => {
  const { state, editBlogPost } = useContext(Context);
  const { id } = route?.params;
  const navigation = useNavigation();

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
