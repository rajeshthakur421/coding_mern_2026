import { Box, styled } from "@mui/material"
import { navData } from "../../constant/data"

const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`;

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Box)`
    font-size: 14px;
`;
const NavBar = () => {
  return (
    <Component>
        {
            navData.map((data)=>(
                <Container key={data.id}>
                    <img src={data.url} alt="nav"/>
                    <Text>{data.text}</Text>
                </Container>
            ))
        }
    </Component>
  )
}

export default NavBar