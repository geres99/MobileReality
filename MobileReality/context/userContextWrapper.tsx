import React, {useState, FC, PropsWithChildren} from 'react';
import {UserContextProvider} from './index';
import {PostType} from '../api/requests/getPosts';

const UserContextWrapper: FC<PropsWithChildren> = ({children}) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  return (
    <UserContextProvider
      value={{
        posts,
        setPosts,
      }}>
      {children}
    </UserContextProvider>
  );
};

export default UserContextWrapper;
