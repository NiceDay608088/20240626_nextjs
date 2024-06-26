import styled from "styled-components";

interface ModalContainerProps {
  $isVisible: boolean;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: white;
  position: relative;
  width: 700px;
  height: 350px;
  border-radius: 10px;
  padding: 10px;
  padding-top: 40px;
`;

export const CloseSpan = styled.span`
  position: absolute;
  top: 0px;
  right: 10px;
  padding: 10px;
  font-size: 20px;
  color: #aaaaaa;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
