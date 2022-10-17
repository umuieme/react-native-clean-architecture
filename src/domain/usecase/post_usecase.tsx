import {Post} from '../../data/model/Post';
import {PostRepository} from '../../data/repository/PostRepository';
import {PostUseCase} from './interfaces/post_usecase';

export class PostUseCaseImpl implements PostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  getPosts(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
}
