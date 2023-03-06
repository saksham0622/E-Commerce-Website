import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.h1`
  opacity:0;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background-color:rgb(0,0,0,0.2);
  z-index:3;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:all 0.5s ease;
  cursor:pointer;
`


const Container = styled.div`
  flex:1;
  margin:5px;
  min-width:280px;
  height:350px;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;

  &:hover ${Info}{
    opacity:1;
  }
`
const Circle = styled.div`
  width:280px;
  height:300px;
  border-radius:50%;
  background-color:white;
  position:absolute;

  
`
const Image = styled.img`
  height:75%;
  z-index:2;
`

const Icon = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:12px;
  transition:all 0.5s ease;

  &:hover{
    background-color:white;
    transform:scale(1.1);
  }
`

const Products = ({item}) => {
  return (
   <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon/>
        </Icon>
        <Icon>
          <SearchOutlinedIcon/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Info>


   </Container>
  )
}

export default Products
