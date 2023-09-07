import {apiClient} from '../apiClient';
import {PostType} from './getPosts';

export const getPostRequest = (id: string) => {
  return apiClient.get<PostType, PostType>(`/posts/${id}`);
};
