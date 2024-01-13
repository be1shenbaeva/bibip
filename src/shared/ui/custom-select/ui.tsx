import { FC, useState } from "react";
import { CustomSelectProps } from "./type";

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  placeholder,
  containerStyles,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(`${placeholder}`);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange && onChange(option);
  };

  return (
    <div className={`custom-select ${isOpen ? "open" : ""}`}>
      <div
        className={`${containerStyles} selected-option`}
        onClick={toggleDropdown}
      >
        {selectedOption}
        <div className="arrow">
          <img src="/arrow-down-select.svg" alt="" />
        </div>
      </div>
      <ul className="options">
        {options &&
          options.map((option, index) => (
            <li
              key={index}
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
