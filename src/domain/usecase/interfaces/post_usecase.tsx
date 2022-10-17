import {Post} from '../../../data/model/Post';

export interface PostUseCase {
  getPosts(): Promise<Array<Post>>;
}
