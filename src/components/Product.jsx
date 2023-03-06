import styled from "styled-components"
import { popularProducts } from "../data"
import Products from "./Products"

const Container = styled.div`
   padding:20px;
   display:flex;
  flex-wrap:wrap;
   justify-content:space-between;
   background-color:lightblue;
`

const Product = () => {
  return (
    <Container>
         {popularProducts.map((item)=>(
            <Products item = {item}/>
         ))}
    </Container>
  )
}

export default Product
