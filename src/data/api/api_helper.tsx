import {BASE_URL, POSTS} from '../../utils/api_constant';
import {Post} from '../model/Post';

class _ApiHelper {
  fetchPosts = async () => {
    const url = BASE_URL + POSTS;
    var response = await fetch(url);
    var data = await response.json();
    return data as Post[];
  };
}
const ApiHelper = new _ApiHelper();

export default ApiHelper;
