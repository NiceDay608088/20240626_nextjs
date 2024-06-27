import React, { useState } from "react";
import {
  ComboBoxContainer,
  ComboBoxContainerCloseIcon,
  ComboBoxContainerInput,
} from "./ComboBoxStyle";
import { FaAngleDown } from "react-icons/fa";
import ComboBoxList from "./ComboBoxList";

interface IOptions {
  id: number;
  label: string;
  url: string;
}

interface ComboBoxProp {
  options: IOptions[];
  isRemote: boolean;
  onSelect: (id: number) => void;
}

interface ISelected {
  id: number;
  label: string;
}

const ComboBox = () => {
  const [selected, setSelected] = useState({} as ISelected);
  const [isVisible, setVisible] = useState(false);

  return (
    <ComboBoxContainer>
      <ComboBoxContainerInput placeholder="Choose an asset" />
      <ComboBoxContainerCloseIcon
        onClick={() => {
          setVisible(!isVisible);
        }}
      >
        <FaAngleDown size={20} />
      </ComboBoxContainerCloseIcon>
      {isVisible && <ComboBoxList />}
    </ComboBoxContainer>
  );
};

export default ComboBox;
