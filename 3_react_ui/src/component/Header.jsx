import React from 'react'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';

const StyledAppBar = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;
const Component = styled(Box)`
    margin-left: 12%;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;
const PlusImage = styled('img')({
  width: 10,
});
const CustomButtonWrapper = styled(Box)`
    margin: 0 3% 0 auto;
    `;

const Header = () => {
  const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledAppBar>
      <Toolbar style={{ minHeight: 55 }}> 
        <Component>
          <Box>
            <img src={logoUrl} alt="Flipkart Logo" style={{ width: 75 }} /> 
            <Box style={{ display: 'flex' }}>
              <SubHeading>Explore
                <Box component="span" style={{ color: '#ffe500' }}> Plus</Box>
              </SubHeading>
              <PlusImage src={subUrl} alt="Plus Logo" />
            </Box>
          </Box>
        </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButton />
          </CustomButtonWrapper>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header