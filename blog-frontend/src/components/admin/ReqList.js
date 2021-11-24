import React from 'react';
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
    </ReqItemBlock>
  );
};

const ReqList = ({ readUser }) => {
  const array = [readUser];
  return (
    <ReqListBlock>
      <UserTable>
        <h3>유저정보</h3>
      </UserTable>

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
    </ReqListBlock>
  );
};

export default ReqList;
