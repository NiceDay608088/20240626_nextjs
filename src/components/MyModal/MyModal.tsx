"use client";

import React from "react";
import { CloseSpan, ModalContent, ModalContainer } from "./MyModalStyle";

interface MyModalProp {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const MyModal = ({ children, isVisible, onClose }: MyModalProp) => {
  return (
    <ModalContainer $isVisible={isVisible}>
      <ModalContent>
        <CloseSpan onClick={onClose}>x</CloseSpan>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default MyModal;
