export function Navbar(){
    return(
        <div className="flex flex-row justify-between bg-[#f9f9f9] py-6 px-28 items-center">
            <div className="font-bold text-2xl text-[#797878]">
                <h1>LOGO</h1>
            </div>
            <div className="ml-20">
                <ul className="flex gap-10 cursor-pointer transition-colors">
                    <li className="hover:border-b-2 border-green-400"><a href="#">Company</a></li>
                    <li className="hover:border-b-2 border-green-400"><a href="#">Services</a></li>
                    <li className="hover:border-b-2 border-green-400"><a href="#">FinTech Solutions</a></li>
                    <li className="hover:border-b-2 border-green-400"><a href="#">Product</a></li>
                    <li className="hover:border-b-2 border-green-400"><a href="#">Protofilo</a></li>
                    <li className="hover:border-b-2 border-green-400"><a href="#">Contact us</a></li>
                </ul>
            </div>
        </div>
    )
}