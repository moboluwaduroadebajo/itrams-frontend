import clsx from "clsx";
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "greenBordered";
  label?: string;
  width?: number;
  height?: number;
  onClick?: (arg: any) => void;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  additionalClassname?: any;
}

const Button = ({
  variant,
  width,
  height,
  label,
  onClick = () => {},
  type,
  icon,
  iconPosition,
  additionalClassname,
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
      type={type}
      style={computedStyle()}
      onClick={onClick}
      className={clsx({
        "flex items-center justify-center rounded-md h-[52px] mt-6": true,
        "bg-[#0066FF] text-white": variant === "primary",
        "bg-white border border-[#0066FF]": variant === "secondary",
        [additionalClassname]: additionalClassname,
      })}>
      {icon && iconPosition === "left" && (
        <>
          {icon}
          <div className="w-2" />
        </>
      )}
      {label}
      {icon && iconPosition === "right" && (
        <>
          <div className="w-2" />
          {icon}
        </>
      )}
    </button>
  );
};

export default Button;
