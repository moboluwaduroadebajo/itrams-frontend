import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "greenBordered";
  label?: string;
  width?: number;
  height?: number;
  onClick?: (arg: any) => void;
  type?: "button" | "submit";
}

const Button = ({
  variant,
  width,
  height,
  label,
  onClick = () => {},
  type,
}: ButtonProps) => {
  const computedStyle = () => {
    const style: { width?: string; height?: string; color?: string } = {};

    if (width) {
      style.width = `${width}px`;
    }

    if (height) {
      style.height = `${height}px`;
    }

    return style;
  };
  return (
    <button
      style={computedStyle()}
      onClick={onClick}
      className="bg-black p-2 rounded-md text-white px-28 w-full flex items-center justify-center mt-6">
      {label}
    </button>
  );
};

export default Button;
