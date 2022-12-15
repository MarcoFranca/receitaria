import styled from "styled-components";
import {colors} from "../../assets/global/colors";

export const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  img {
    max-width: 100%;
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;

  .error-title{
    font-size: 3rem;
    color: ${colors.colorAlert};
  }

  .error-text{
    margin-top: 0.8rem;
    text-align: center;
    font-size: 1.4rem;
    color: white;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`
