import {apiClient} from '../apiClient';
import {PostType} from './getPosts';

export const addPostRequest = (data: Omit<PostType, 'id' | 'createdAt'>) => {
  return apiClient.post<{data: PostType}, {data: PostType}>('/posts', data);
};
