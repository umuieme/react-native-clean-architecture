import {Post} from '../model/Post';

export interface PostRepository {
  getPosts(): Promise<Post[]>;
}
