   
import React from 'react';  
  
interface CheckboxProps {  
  checked: boolean;  
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  
}  
  
const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {  
  return (  
    <div>  
        <input  
          type="checkbox"  
          checked={checked}  
          onChange={onChange}  
          className="mr-2"  
        />  
        <label className="w-full absolute -top-[1px]">I want to protect my data by signing an NDA</label>  
    </div>  
  );  
};  
  
export default Checkbox;
