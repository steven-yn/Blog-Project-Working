/****************************************
// Description : Permitted PostList UI Component
// Vision : V1.1.1
// Filename : PostList.js
// Copyright 2021, Sung Yeon Yoon
// Email: steven_yoon1009@naver.com
* ****************************************/

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 10rem;
  margin-bottom: 2rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({
  posts,
  loading,
  error,
  showWriteButton,
  permitUserList,
}) => {
  const [permit, setPermit] = useState(false);

  const checkPermit =
    showWriteButton &&
    permitUserList.find((rtrn) => rtrn.username === showWriteButton.username);

  useEffect(() => {
    checkPermit ? setPermit(true) : setPermit(false);
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [[], permitUserList]);

  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    permitUserList[permitUserList.length - 1]?.username && (
      <PostListBlock>
        <WritePostButtonWrapper>
          {permit && showWriteButton && (
            <Button cyan to="/write">
              새 글 작성하기
            </Button>
          )}
        </WritePostButtonWrapper>
        {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
        {!loading && posts && (
          <div>
            {posts.map((post) => (
              <PostItem post={post} key={post._id} />
            ))}
          </div>
        )}
        {!loading && posts && (
          <div>
            {posts.map((post) => (
              <noticeItem post={post} key={post._id} />
            ))}
          </div>
        )}
      </PostListBlock>
    )
  );
};

export default PostList;
