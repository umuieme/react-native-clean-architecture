import React, {useContext} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';

import PostItem from './post_item';
import {
  PostContext,
  PostContextProvider,
} from '../../context_api/post_provider';
import {PostUseCaseImpl} from '../../../domain/usecase/post_usecase';
import PostReposiotryImpl from '../../../data/repository/PostReposiotryImpl';
import AppLoading from '../common/app_loading';

const PostListScreen = () => {
  const useCase = new PostUseCaseImpl(PostReposiotryImpl);
  return (
    <PostContextProvider useCase={useCase}>
      <StatusBar />
      <PostBody />
    </PostContextProvider>
  );
};

const PostBody = () => {
  const {state} = useContext(PostContext);
  console.log(state.isLoading);
  return (
    <View style={styles.container}>
      {state.isLoading && <AppLoading />}
      {state.isLoading || (
        <FlatList
          data={state.posts}
          renderItem={({item}) => <PostItem post={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostListScreen;
