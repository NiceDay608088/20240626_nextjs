"use client";

import React from "react";
import { CloseSpan, ModalBody, ModalContainer } from "./MyModalStyle";

interface MyModalProp {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const MyModal = ({ children, isVisible, onClose }: MyModalProp) => {
  return (
    <ModalContainer $isVisible={isVisible}>
      <ModalBody>
        <CloseSpan onClick={onClose}>x</CloseSpan>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

export default MyModal;
