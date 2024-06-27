import styled from "styled-components";

interface ComboBoxOptionContainerProp {
  $isVisible: boolean;
}

export const ComboBoxContainer = styled.div`
  position: relative;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  padding: 10px 20px;
  &:focus-within {
    border: 1px solid black;
  }
`;

export const ComboBoxContainerCloseIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  padding: 5px;
  cursor: pointer;
`;

export const ComboBoxContainerInput = styled.input`
  border: 0px;
  width: 100%;
  padding-left: 1px;
  &:focus {
    outline: none;
  }
`;

export const ComboBoxOptionContainer = styled.div<ComboBoxOptionContainerProp>`
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
