import { useState } from 'react';  

export function Navbar() {  
    const [isMenuOpen, setIsMenuOpen] = useState(false);  

    function Show() {  
        setIsMenuOpen((prev) => !prev);  
    }  

    return (  
        <div className="w-full flex flex-row justify-between bg-[#f9f9f9] py-6 px-28  items-center relative z-10">
            {/* w-full flex flex-row justify-between bg-[#f9f9f9] py-6 px-28 items-center z-10 */}
            <div className="font-bold text-2xl text-[#797878] ">  
                <h1>LOGO</h1>  
            </div>  
            <div className="ml-20">   
                <i  
                    id="menu-bars"  
                    onClick={Show}  
                    className="xl:hidden delay-100 fas fa-bars sm:flex hidden text-2xl hover:bg-sky-400 hover:text-white px-4 py-2 transition rounded-md cursor-pointer"  
                ></i>  
                <ul className={` sm:flex-col sm:rounded-xl sm:absolute sm:top-16 xl:top-0 sm:right-40 sm:bg-opacity-80 sm:bg-black sm:text-white sm:px-4 sm:py-4 xl:flex xl:flex-row xl:relative sm: xl:right-0 xl:bg-[#f9f9f9] xl:text-black xl:px-0 xl:py-0 gap-10 cursor-pointer transition-colors ${isMenuOpen ? 'flex' : 'hidden'}`}>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl sm:hover:border-b-0 xl:rounded-none sm:px-2 sm:py-3 xl:px-0 xl:py-0 xl:hover:border-b-2 border-green-400 delay-75"><a href="#">Company</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl sm:hover:border-b-0 xl:rounded-none sm:px-2 sm:py-3 xl:px-0 xl:py-0 xl:hover:border-b-2 border-green-400 delay-75"><a href="#">Services</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl sm:hover:border-b-0 xl:rounded-none sm:px-2 sm:py-3 xl:px-0 xl:py-0 xl:hover:border-b-2 border-green-400 delay-75"><a href="#">FinTech Solutions</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl sm:hover:border-b-0 xl:rounded-none sm:px-2 sm:py-3 xl:px-0 xl:py-0 xl:hover:border-b-2 border-green-400 delay-75"><a href="#">Product</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl sm:hover:border-b-0 xl:rounded-none sm:px-2 sm:py-3 xl:px-0 xl:py-0 xl:hover:border-b-2 border-green-400 delay-75"><a href="#">Portfolio</a></li>  
                    <li className="sm:hover:bg-white sm:hover:text-black xl:hover:bg-[#f9f9f9] sm:rounded-xl sm:hover:border-b-0 xl:rounded-none sm:px-2 sm:py-3 xl:px-0 xl:py-0 xl:hover:border-b-2 border-green-400 delay-75"><a href="#">Contact us</a></li>  
                </ul>  
            </div>  
        </div>  
    );  
}