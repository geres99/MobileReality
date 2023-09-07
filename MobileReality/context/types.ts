import {Dispatch, SetStateAction} from 'react';
import {PostType} from '../api/requests/getPosts';

export interface UserContextValues {
  posts: PostType[];
  setPosts: Dispatch<SetStateAction<PostType[]>>;
}
