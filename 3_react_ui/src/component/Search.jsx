import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBoxContainer = styled(Box)`
    background: #fff;
    width: 38%;
    margin-left: 10px;
    border-radius: 2px;
    display: flex;
`;
const InputSearchBase = styled(InputBase)`
    width: 100%;
    padding-left: 20px;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    padding: 5px;
    color: blue;
`;

const Search = () => {
  return (
    <SearchBoxContainer>
        <InputSearchBase 
            placeholder="Search for products, brands and more"
        />
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>

    </SearchBoxContainer>
  )
}

export default Search