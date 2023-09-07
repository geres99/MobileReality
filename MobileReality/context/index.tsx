import {createContext, useContext} from 'react';
import {UserContextValues} from './types';
import noop from 'lodash/noop';

export const UserContext = createContext<UserContextValues>({
  posts: [],
  setPosts: noop,
});

export const UserContextProvider = UserContext.Provider;
export const useUserContext = (): UserContextValues => useContext(UserContext);
