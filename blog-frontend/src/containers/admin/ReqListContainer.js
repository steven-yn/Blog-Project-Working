import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
import { readUser, permitUser } from '../../modules/auth';
import ReqList from '../../components/admin/ReqList';
import { useEffect, useState } from 'react';

const ReqListContainer = () => {
  const dispatch = useDispatch();
  const { userList, loading, permission } = useSelector(
    ({ auth, loading }) => ({
      userList: auth.readUser,
      loading: loading['auth/READ_USER'],
      permission: auth.permitUser,
    }),
  );

  const onPermit = () => {
    dispatch(permitUser());
  };
=======
import { readUser } from '../../modules/auth';
import ReqList from '../../components/admin/ReqList';
import { useEffect } from 'react';

const ReqListContainer = () => {
  const dispatch = useDispatch();
  const { userList, user } = useSelector(({ auth, loading, user }) => ({
    userList: auth.readUser,
    loading: loading['auth/READ_USER'],
    user: user.user,
  }));
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9

  // 처음 마운트될 때 포스트 읽기 API 요청
  useEffect(() => {
    dispatch(readUser());
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기

<<<<<<< HEAD
    return;
  }, []);

  return (
    <ReqList
      loading={loading}
      readUser={userList}
      permission={permission}
      onClick={onPermit}
    />
  );
=======
    return userList;
  }, []);

  return <ReqList readUser={userList} />;
>>>>>>> e4e245786aea6118015bd774ae0b9d66578c42c9
};

export default withRouter(ReqListContainer);

/*
  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

   () => {
      dispatch(unloadPost());
    };
*/
