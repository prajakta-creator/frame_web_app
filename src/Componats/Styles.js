import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  margin-top: 64px;
  overflow: auto;

`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  z-index: 1;
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LeftSide = styled.div`
  width: 80%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  width: 20%;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }
`;

export const RowOne = styled.div`
  border: 1px solid #ccc;
`;

export const RowTwo = styled.div`
  border: 1px solid #ccc;
`;

export const Input = styled.input`
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledInput = styled('input')({
  padding: '2px',
  border: '1px solid #ccc',
  borderRadius: '10px',
});