import styled from 'styled-components';

const Container = styled.div`
   height:30px;
   color:white;
   background-color:blue;
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:17px;
   font-weight:500;
`
const Announcement = () => {
  return (
    <Container>
         Super Deal! Free Shipping Upto Rs.1000
    </Container>
  )
}

export default Announcement
