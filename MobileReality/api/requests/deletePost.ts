import {apiClient} from '../apiClient';

export const deletePostsRequest = (id: string) => {
  return apiClient.delete<null, null>(`/posts/${id}`);
};
