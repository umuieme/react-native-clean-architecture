import React, {Dispatch, useCallback} from 'react';
import {useEffect} from 'react';
import {createContext, useReducer} from 'react';
import {Post} from '../../data/model/Post';
import {PostRepositoryImpl} from '../../data/repository/PostReposiotryImpl';
import {PostUseCase} from '../../domain/usecase/interfaces/post_usecase';
import {PostUseCaseImpl} from '../../domain/usecase/post_usecase';

interface PostAction {
  type: PostActionType;
  payload?: Post[];
}

interface PostState {
  isLoading: boolean;
  posts?: Post[];
}

type PostProviderProps = {
  children: React.ReactNode;
  useCase: PostUseCase;
};

interface PostContextValue {
  state: PostState;
  dispatch: Dispatch<PostAction>;
}

const initialState: PostState = {
  isLoading: false,
  posts: [],
};

enum PostActionType {
  FETCH = 'FETCH',
  FETCHING = 'FETCHING',
}

const reducer = (
  state: PostState = initialState,
  action: PostAction,
): PostState => {
  switch (action.type) {
    case PostActionType.FETCH:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case PostActionType.FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export const PostContext = createContext<PostContextValue>({
  state: initialState,
  dispatch: () => {},
});

export const PostContextProvider = ({children, useCase}: PostProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({type: PostActionType.FETCHING});
    const results = await useCase.getPosts();
    dispatch({type: PostActionType.FETCH, payload: results});
  }, [useCase]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <PostContext.Provider value={{state, dispatch}}>
      {children}
    </PostContext.Provider>
  );
};
