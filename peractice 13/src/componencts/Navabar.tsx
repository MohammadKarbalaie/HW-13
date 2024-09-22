import { useState } from 'react';  

export function Navbar() {  
    const [isMenuOpen, setIsMenuOpen] = useState(false);  

    function Show() {  
        setIsMenuOpen((prev) => !prev);  
    }  

    return (  
        <div className="flex flex-row justify-between bg-[#f9f9f9] py-6 px-28 items-center">  
            <div className="font-bold text-2xl text-[#797878]">  
                <h1>LOGO</h1>  
            </div>  
            <div className="ml-20">   
                <i  
                    id="menu-bars"  
                    onClick={Show}  
                    className="xl:hidden fas fa-bars sm:flex hidden text-2xl hover:bg-sky-400 hover:text-white px-4 py-2 transition rounded-md cursor-pointer"  
                ></i>  
                <ul className={` sm:flex-col sm:rounded-xl sm:absolute sm: sm:right-52 sm:bg-[#c7c3c3] sm:text-white sm:px-4 sm:py-4 xl:flex xl:flex-row xl:relative sm: xl:right-0 xl:bg-[#f9f9f9] xl:text-black xl:px-0 xl:py-0 gap-10 cursor-pointer transition-colors ${isMenuOpen ? 'flex' : 'hidden'}`}>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl xl:rounded-none sm:px-2 sm:py-2 xl:px-0 xl:py-0 hover:border-b-2 border-green-400"><a href="#">Company</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl xl:rounded-none sm:px-2 sm:py-2 xl:px-0 xl:py-0 hover:border-b-2 border-green-400"><a href="#">Services</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl xl:rounded-none sm:px-2 sm:py-2 xl:px-0 xl:py-0 hover:border-b-2 border-green-400"><a href="#">FinTech Solutions</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl xl:rounded-none sm:px-2 sm:py-2 xl:px-0 xl:py-0 hover:border-b-2 border-green-400"><a href="#">Product</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl xl:rounded-none sm:px-2 sm:py-2 xl:px-0 xl:py-0 hover:border-b-2 border-green-400"><a href="#">Portfolio</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl xl:rounded-none sm:px-2 sm:py-2 xl:px-0 xl:py-0 hover:border-b-2 border-green-400"><a href="#">Contact us</a></li>  
                </ul>  
            </div>  
        </div>  
    );  
}