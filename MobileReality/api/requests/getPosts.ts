import {apiClient} from '../apiClient';

export type PostType = {
  title: string;
  description: string;
  createdAt: string;
  id: number;
};

export const getPostsRequest = () => {
  return apiClient.get<PostType[], PostType[]>('/posts');
};
