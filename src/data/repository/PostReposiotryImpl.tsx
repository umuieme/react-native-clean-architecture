import ApiHelper from '../api/api_helper';
import {Post} from '../model/Post';
import {PostRepository} from './PostRepository';

class PostRepositoryImpl implements PostRepository {
  async getPosts(): Promise<Post[]> {
    var response = await ApiHelper.fetchPosts();
    return response;
  }
}

export default new PostRepositoryImpl();
