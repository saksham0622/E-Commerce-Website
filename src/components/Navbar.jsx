import { Search } from '@mui/icons-material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import styled from 'styled-components'


const Container = styled.div`
   height:80px;
`

const Wrapper = styled.div`
  display : flex;
  justify-content:center;
  align-items:center;
  background-color:black;
  color:white;
`

const Left = styled.div`
  flex : 1;
  display:flex;
  align-items: center;
  margin-left:40px;
  margin-top:-10px;
`

const Language = styled.span`
   font-size:14px;
   cursor: pointer;
  margin-right:4px;
`

const SearchContainer = styled.div`
   border : 0.5px solid lightgray;
   display:flex;
   margin-left:25px;

`

const Input = styled.input`
   border:none;
`

const Center = styled.div`
  flex: 1;
  text-align:center;
  margin-top:-10px;
`

const Logo = styled.h1`
  font-weight:bold;
`

const Right = styled.div`
   flex:1;
   display:flex;
   align-items:center;
   justify-content:flex-end;
   margin-right:40px;
  margin-top:-10px;
`

const MenuItem = styled.div`
  font-size : 14px;
  cursor: pointer;
  margin-left:75px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:'gray',fontSize:'16px'}}/>
          
          </SearchContainer>
        </Left>
        <Center><Logo>E-Commerce</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN-IN</MenuItem>
          <MenuItem><Badge badgeContent={3} color="primary">
            <ShoppingCartOutlinedIcon/></Badge></MenuItem>

        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
