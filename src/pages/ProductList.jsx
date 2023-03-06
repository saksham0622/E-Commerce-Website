import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Product from '../components/Product';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';


const Container = styled.div`
 background-color:lightblue;
`
const Title = styled.h1`
 margin:20px;
`
const FilterContainer = styled.div`
 display:flex;
 justify-content:space-between;
`
const Filter = styled.div`
  margin:20px;
`

const FilterText = styled.span`
  font-szie:30px;
  font-weight:600;
  margin-right:20px;
`

const Select = styled.select`
padding:10px;
margin-right:20px;
 
`
const Option = styled.option`
 
`

const ProductList = () => {
  return (
    <Container>
          <Announcement/>
        <Navbar/>
        <Title>Clothes</Title>
        <FilterContainer>
           <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Yellow</Option>
            </Select>
            <Select>
                <Option disabled selected>Sizes</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
                <Option>Other</Option>
            </Select>
            </Filter>
           <Filter>
            <FilterText>Sorted Products:</FilterText>
            <Select>
                <Option selected>Newest Collections</Option>
                <Option>Price (asc)</Option>
                <Option>Black (desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
    <Product/>
    <NewsLetter/>
    <Footer/>
    </Container>
  )
}

export default ProductList
