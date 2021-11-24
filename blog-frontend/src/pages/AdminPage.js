import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import ReqListContainer from '../containers/admin/ReqListContainer';

<<<<<<< HEAD
const AdminPage = ({ permission }) => {
  return (
    <>
      <HeaderContainer />
      <ReqListContainer permission={permission} />
=======
const AdminPage = () => {
  return (
    <>
      <HeaderContainer />
      <ReqListContainer />
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9
    </>
  );
};

export default AdminPage;
