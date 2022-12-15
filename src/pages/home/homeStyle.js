import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  color: aliceblue;
  padding: 2rem;
  background: black;
  
    
`
export const MainHome = styled.main`
  padding: 2rem;
  background-color: rgba(232, 229, 226,);

  h1 {
    margin: 2rem 0;
    color: rgba(188, 143, 143);
  }
  h2{
    color: rgba(188, 143, 143);
  }
`

export const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 1rem 0;
  border: solid 1px black;
  border-radius: 5px;
  padding: 5px;

  h2 {
    color: rgba(188, 143, 143);
    font-size: 1.3rem;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    color: rgba(212, 180, 157);
  }

  p {
    font-size: 1.1rem;
  }
`

export const NewReceipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 15px;

    input {
      padding: 10px;
      border-radius: 15px;
      background-color: rgba(0, 0, 0, 0.1);
    }

    button {
      background-color: aquamarine;
      padding: 15px;
      border-radius: 15px;
      font-size:1rem ; 
      font-weight:700;

      :hover {
        cursor: pointer;
        background-color: rgba(127, 255, 212, 0.7);
      }
    }
  }
`

export const HomeContentDescription = styled.div`

`
export const HomeContentButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  button{
    background-color: coral;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: 500ms;
    :hover{
      background-color: darkgoldenrod;
    }
  }
`