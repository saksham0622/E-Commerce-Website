import styled from "styled-components"
import { Send } from "@mui/icons-material"

const Container = styled.div`
   height:60vh;
   background-color:lightblue;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column;
`
const Title = styled.h1`
  font-size:70px;
  margin-bottom:20px;
`
const Desc = styled.div`
  font-size:24px;
  font-weight:300;
  margin-bottom:20px;
`
const InfoContainer = styled.div`
  width:50%;
  height:40px;
  background-color:lightblue;
  display:flex;
  justify-content:space-between;
  border:1px solid lightgray;
`
const Input = styled.input`
  border:none;
  flex:8;
  padding-left:20px;
`
const Button = styled.button`
  flex:1;
  border:none;
  background-color:black;
  color:white;
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates about the latest offers on your favorite products.</Desc>
        <InfoContainer>
            <Input placeholder="Your Email"/>
            <Button><Send/></Button>
        </InfoContainer>

    </Container>
  )
}

export default NewsLetter
