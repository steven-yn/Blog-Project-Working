import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

<<<<<<< HEAD
const PostListPage = ({ permission }) => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer permission={permission} />
=======
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
