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
  error?: string;
}

const InputField = ({
  type,
  onChange = () => {},
  onBlur = () => {},
  value,
  label,
  placeholder,
  name,
  error,
  isRequired,
}: TextFieldProps) => {
  return (
    <div className="my-6 w-full font-mulish">
      <label className="mb-2 font-semibold text-[#6B7588] capitalize">
        {label}
      </label>
      <input
        className="appearance-none placeholder:text-[#8F90A6] border border-[#C7C9D9] md:indent-8 indent-4 rounded-md outline-none font-normal p-2 w-full h-[60px]"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />

      {error && (
        <p className="mt-2 font-mulish text-xs text-[#FF3B3B]">{error}</p>
      )}
    </div>
  );
};

export default InputField;
