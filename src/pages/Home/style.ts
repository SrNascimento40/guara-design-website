import styled from "styled-components";
import bgImage from "../../assets/Images/background-image.png";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  color: #fff;
  /* background: green; */
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
