import React from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  textSize?: string;
  width?: string;
  height?: string;
  radius?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor,
  textSize,
  width,
  height,
  radius,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={` ${textColor} ${textSize} ${width} ${height} ${radius} bg-gradient-to-r from-purple-700 to-pink-500 `}
    >
      {text}
    </button>
  );
};

export default Button;