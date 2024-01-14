import React from "react";

interface TextFieldProps {
  type?: "text" | "email" | "number" | "password";
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  value?: string;
  label: string;
  placeholder: string;
  name: string;
  isRequired?: boolean;
}

const InputField = ({
  type,
  onBlur,
  onChange,
  value,
  label,
  placeholder,
  name,
  isRequired,
}: TextFieldProps) => {
  return (
    <div className="my-6 w-full">
      <label className="mb-2">{label}</label>
      <input
        className="appearance-none border-2 rounded outline-none font-normal p-2 w-full"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
