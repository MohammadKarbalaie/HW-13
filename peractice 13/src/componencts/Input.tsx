import React from 'react';

interface InputProps {
  type: 'text' | 'password' | 'email' | 'phone';
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (value: string) => boolean;
  errorMessage: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  validate,
  errorMessage,
}) => {
  const [isValid, setIsValid] = React.useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (name === "contactPhone" && !/^\d*$/.test(newValue)) {
      setIsValid(false);  
      return;
    }

    onChange(e);
    setIsValid(validate(newValue));
  };

  return (
    <div className="mb-6">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={`w-full py-2 border-b-2 px-20 mb-12 outline-none ${
          isValid ? 'border-gray-300' : 'border-red-500'
        }`}
      />
      {errorMessage && !isValid && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
