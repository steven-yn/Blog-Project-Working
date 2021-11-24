import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
// import palette from '../../lib/styles/palette';
// import SubInfo from '../common/SubInfo';

const UserTable = styled.div`
  display: flex;
  justify-content: flex-start;

  h3 {
    margin-bottom: 2rem;
  }
`;

const UserList = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
`;

const RequestPermitButton = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  width: 50%;
`;

const ReqListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const ReqItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 100%;
  ul {
    margin-top: 2rem;
  }
`;

/*
const ReqItem = ({ users }) => {
  const { user } = users;
  return (
    <ReqItemBlock>
      <SubInfo username={user.username} userid={user._id} />
    </ReqItemBlock>
  );
};
*/

const UserItem = ({ userList, permission, onPermit }) => {
  return (
    <ReqItemBlock>
      <UserList>
        유저이름 : {userList.username}
        <br />
        아이디 : {userList._id}
      </UserList>
      <RequestPermitButton>
        <Button cyan onClick={onPermit}>
          {permission ? '승인확인됨' : '승인대기중'}
        </Button>
      </RequestPermitButton>
      <hr />
    </ReqItemBlock>
  );
};

const ReqList = ({ readUser, permission, onPermit }) => {
  return (
    <ReqListBlock>
      <UserTable>
        <h3>유저정보</h3>
      </UserTable>

      {readUser[0]?.username && 'admin' ? (
        <div>
          {readUser.map((userList) => (
            <UserItem
              key={userList._id}
              userList={userList}
              permission={permission}
              onClick={onPermit}
            />
          ))}
        </div>
      ) : (
        <h1> 유저항목을 불러오지 못했습니다. </h1>
      )}
    </ReqListBlock>
  );
};

export default ReqList;
