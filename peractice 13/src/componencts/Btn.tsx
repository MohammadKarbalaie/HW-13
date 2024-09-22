import React from 'react';  
  
interface BtnProps {  
  disabled: boolean;  
  onClick?: () => void;  
  children: React.ReactNode;  
}  
  
const Btn: React.FC<BtnProps> = ({ disabled, onClick, children }) => {  
  return (  
   <button  
    type="submit"  
    disabled={disabled}  
    onClick={onClick}  
    className={`bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 mt-8 rounded` + `${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}  
   >  
    {children}  
   </button>  
  );  
};  
  
export default Btn;