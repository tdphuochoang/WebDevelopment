import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
`;

const Annoucement = () => {
  return <Container>Free Shipping on orders over 75$!</Container>;
};

export default Annoucement;
