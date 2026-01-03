import React from 'react'
import NavBar from './NavBar'
import Bannner from './Bannner'
import {styled, Box} from '@mui/material';
import Slide from './Slide';

const Component = styled(Box)({
    padding: '10px 0 0 0',
    background: '#F2F2F2'
});

const Home = () => {
  return (
    <>
        <NavBar />
        <Component>
            <Bannner />
            <Slide />
        </Component>
    </>
  )
}

export default Home