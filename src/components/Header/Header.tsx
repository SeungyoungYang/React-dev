import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../../store/user/user.action'
import { IState } from '../../type';
import styled from 'styled-components';
import { headerHeight } from '../../utils/GlobalStyles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, name } = useSelector((state: IState) => ({
    isLoggedIn: state.user.isLoggedIn,
    name: state.user.name,
  }));

  return (
    <AppHeader>
      <AppTitle to='/'>React-dev</AppTitle>
      {!isLoggedIn ? (
        <AppNav>
          <AppNavLink activeClassName="active" to='/login'>Login</AppNavLink>
          <AppNavLink activeClassName="active" to='/signup'>SignUp</AppNavLink>
        </AppNav>
      ) : (
          <AppNav>
            <AppNavLink activeClassName="active" to='/post'>Post List</AppNavLink>
            <AppNavLink activeClassName="active" to='/user'>{name}</AppNavLink>
            <AppNavItem className='header-nav-item' onClick={() => dispatch(UserAction.logout.index())}>Logout</AppNavItem>
          </AppNav>
        )}
    </AppHeader>
  );
};

const AppHeader = styled.header`
  position: fixed;
  background: #343A40;
  top: 0;
  height: ${headerHeight};
  width: 100%;
  z-index: 9999;
`;

const AppTitle = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  color: white;
`;

const AppNav = styled.nav`
  float: right;
  font-weight: 700;
  right: 20px;
`;

const AppNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 17px;
  color: #8D95A0;
  margin-right: 15px;
  &:hover {
    color: white;
  }
  &.active {
    color: white;
  }
`;

const AppNavItem = styled.a`
  font-size: 17px;
  color: #8D95A0;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export default Header;