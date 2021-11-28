<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';
import AdminPage from './pages/AdminPage';
import MainPages from './pages/MainPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>YXMPORTFOLIO</title>
      </Helmet>
<<<<<<< HEAD
      <Route component={MainPages} path="/home" />
=======
      <Route component = {MainPages} path = "/home" />
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={AdminPage} path="/admin" />
    </>
  );
};
export default App;
