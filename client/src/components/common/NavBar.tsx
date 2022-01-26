import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Home from '../../pages/Home';

const Wrapper = styled.div`
  width: 100wv;
  height: 20em;
  margin: auto;
  max-width: 70em;
  background-color: #181b1e;
  z-index: 10;
`;

const Logo = styled.img`
  margin-top: 0px;
  width: 100%;
  max-height: 100%;
  background-color: #181b1e;
`;

const NavbarWrapper = styled.nav`
  background-color: #181b1e;
  z-index: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const NavbarA = styled.a`
  flex-grow: 1;
  flex-basis: 0;
`;

const Knapp = styled.div`
  display: inline-block;
  font-size: 1.2em;
  padding: 1em;
  z-index: 1;
  &:hover {
    /*text-decoration: white underline;*/
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const NavbarText = styled.h1`
  color: white;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 1.1em;
  text-align: center;
  font-weight: 900;
`;

const Navbar: FC = () => {
  const NavOptions = [
    {
      id: 'program',
      name: 'Program',
    },
    {
      id: 'about',
      name: 'Om arrangementet',
    },
  ];

  return (
    <NavbarWrapper>
      <Link to={'/'}>{'Home'}
        <Logo src="/logo.svg"/>
      </Link>
      {NavOptions.map(({ id, name }) => (
        <NavbarA key={id} href={`${id}`}>
          <Knapp>
            <Link to={id}>{name}</Link>
          </Knapp>
        </NavbarA>
      ))}
    </NavbarWrapper>
  );
};

export default Navbar;