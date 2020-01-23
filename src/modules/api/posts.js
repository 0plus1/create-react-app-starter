import Base from './base';

export default class Posts extends Base {
  readAll() {
    return this.instance.get('posts');
  }
}
