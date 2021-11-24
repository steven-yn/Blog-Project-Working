import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import ReqListContainer from '../containers/admin/ReqListContainer';

const AdminPage = ({ permission }) => {
  return (
    <>
      <HeaderContainer />
      <ReqListContainer permission={permission} />
    </>
  );
};

export default AdminPage;
