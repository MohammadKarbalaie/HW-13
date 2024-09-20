import React from "react";
interface  Inputsvalues{
    password: string
}

type props = {
    type: "password" | "email" | "text";
    placeholder: string;
    
};

export function Input({type,placeholder}:props){
    // const [password , setpassword] = React.useState<String>(""); 
    const [values, setValues] = React.useState<Inputsvalues>({ password: "" }); 
        const inputhandler = (e: React.ChangeEvent<HTMLInputElement>)=>{setValues({ password : e.target.value})
        console.log(e.target.value);
        }


    return(
        <input 
        type={type}
        onChange={inputhandler} 
        value={values.password} 
        placeholder={placeholder}  
        className="w-full py-2 border-b-2 px-20 mb-12 outline-none" />
    )
}

