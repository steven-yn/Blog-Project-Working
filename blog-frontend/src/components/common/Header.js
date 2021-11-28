import * as React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 11rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
<<<<<<< HEAD
=======
  overflow: hidden;
>>>>>>> parent of 8892bf4 (ver 1.1.1)
  .logo {
    font-size: 1.7rem;
    font-weight: 750;
    letter-spacing: 2px;
    position: absolute;
    margin-bottom: 1rem;
  }
  .right {
    display: flex;
    position: absolute;
    margin-left: 51rem;
  }
<<<<<<< HEAD
=======
  .left {
    display: flex;
    position: absolute;
    margin-left: 35rem;
  }
>>>>>>> parent of 8892bf4 (ver 1.1.1)
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 3rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
  margin-top: 0.2rem;
`;

const Test = '/@admin/';

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            YXMPORTFOLIO
          </Link>
          <Navbar bg="#ffffff" variant="light" style={{ marginTop: '8rem' }}>
            <Container>
              <Navbar.Brand
                href="/"
                style={{ marginRight: '2rem', marginBottom: '1rem' }}
              >
                포스트
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link
<<<<<<< HEAD
                  href={Test}
=======
                  href={'/@admin/'}
>>>>>>> parent of 8892bf4 (ver 1.1.1)
                  style={{ marginRight: '2rem', marginBottom: '1rem' }}
                >
                  공지사항
                </Nav.Link>
                <Nav.Link href="/home">사이트</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          {user ? (
<<<<<<< HEAD
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
=======
            user.username === 'admin' ? (
              <div className="right">
                <UserInfo>{user.username}</UserInfo>
                <Button to="/admin">관리자 페이지</Button>
                <Button onClick={onLogout}>로그아웃</Button>
              </div>
            ) : (
              <div className="right">
                <UserInfo>{user.username}</UserInfo>
                <Button onClick={onLogout}>로그아웃</Button>
              </div>
            )
>>>>>>> parent of 8892bf4 (ver 1.1.1)
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
