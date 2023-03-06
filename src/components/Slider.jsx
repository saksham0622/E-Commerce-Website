import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from "../data.js";
import { useState } from "react";

const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  background-color:lightblue;
  overflow:hidden;

`

const Arrow = styled.div`
  width:50px;
  height:50px;
  background-color:white;
  border-radius:50%; 
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  left:${props=> props.direction === "left" && "10px"};
  right:${props=> props.direction === "right" && "10px"};
  margin:auto;
  cursor : pointer;
  opacity:0.5;
  z-index:2;
`

const Wrapper = styled.div`
   height:100%;
   display:flex;
   transition:all 2s ease-in-out;
   transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
   width:100vw;
   height:100vh;
   display:flex;
   align-items:center;
   background-color: ${props=>props.bg};
`
const ImgContainer = styled.div`
   height:100%
   flex:1;
`

const Image = styled.img`
height:70vh;
width:70%;
object-fit:cover;
margin-left:100px;

`
const InfoContainer = styled.div`
flex: 1;
  padding: 50px;
   
`

const Title = styled.h1`
   font-size:60px;
   
`
const Desc = styled.p`
   margin:50px 0px;
   font-size:30px;
   font-weight:500;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
  
`

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction)=>{
      if(direction === "left"){
           setslideIndex(slideIndex > 0 ? slideIndex-1 :2 )
      }
      else{
        setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
      }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>

        <Wrapper slideIndex = {slideIndex}>
              {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
        </Wrapper>

        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider
