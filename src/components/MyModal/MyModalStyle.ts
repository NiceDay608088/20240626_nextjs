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

export const ModalBody = styled.div`
  background-color: white;
  position: relative;
`;

export const CloseSpan = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 6px;
  font-size: 16px;
  color: #aaaaaa;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
