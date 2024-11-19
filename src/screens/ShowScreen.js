import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Context } from '../context/Blogcontext';

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text> {blogPost.title} </Text>
      <Text> {blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
