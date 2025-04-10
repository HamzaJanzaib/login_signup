import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledWrapper>
      <Link className="link" to="/register">Register</Link>
      <Link className="link" to="/login">Login</Link>
    </StyledWrapper>
  )
}

export default Home

const StyledWrapper = styled.div`
.link{
  color: black;
  text-decoration: none;
  margin: 10px;
}
`
