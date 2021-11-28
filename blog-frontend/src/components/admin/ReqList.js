<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9
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

<<<<<<< HEAD
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
=======
const UserItem = ({ userList }) => {
  return (
    <ReqItemBlock>
      <UserList>
        <ul>
          <li>유저이름: {userList.username}</li>
          <li>아이디: {userList._id}</li>
        </ul>
      </UserList>
      <RequestPermitButton>
        <Button cyan>승인</Button>
      </RequestPermitButton>
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9
    </ReqItemBlock>
  );
};

<<<<<<< HEAD
const ReqList = ({ readUser, permission, onPermit }) => {
=======
const ReqList = ({ readUser }) => {
  const array = [readUser];
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9
  return (
    <ReqListBlock>
      <DummyBlock />
      <UserTable>
        <h3>유저정보</h3>
      </UserTable>

<<<<<<< HEAD
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
=======
      <div>
        {array.map((userList) => (
          <UserItem userList={userList} key={userList._id} />
        ))}
      </div>

      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {/*
      {!loading && user && (
        <div>
          {user.map((post) => (
            <ReqItem post={user} key={user._id} />
          ))}
        </div>
      )}
      */}
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9
    </ReqListBlock>
  );
};

export default ReqList;
