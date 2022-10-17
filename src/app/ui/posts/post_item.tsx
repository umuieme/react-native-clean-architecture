import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Post} from '../../../data/model/Post';

type Props = {
  post: Post;
};

const PostItem = ({post}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{post.title}</Text>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#cccccc',
    marginHorizontal: 16,
    marginVertical: 4,
  },
});
