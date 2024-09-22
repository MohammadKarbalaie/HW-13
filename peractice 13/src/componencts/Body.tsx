import { Coinput } from "./Coinputs";

export function Body(){
    return(
        <>
        <div className="w-full flex sm:flex-col xl:flex-row lg:flex-row mt-12 mx-auto justify-center items-center">
                <div className="">
                    <Coinput/>
                </div>
                <div className="w-[500px] flex flex-col ml-28 sm:mt-[60px] lg:-mt-[450px] xl:-mt-[450px]">
                        <div className="flex flex-col gap-6 items-start">
                            <h2 className="font-semibold text-xl pb-4">Office</h2>
                            submit
                           
                            <div className="flex flex-col items-start text-gray-500">
                                <p>United States</p>
                                <p>500 5th Avenue Suite 400,NY 1010</p>
                            </div>

                            <div className="flex flex-col items-start text-gray-500">
                                <p>United Kingdom</p>
                                <p>High St ,Bromly BR1 1DN</p>
                            </div>

                            <div className="flex flex-col items-start text-gray-500">
                                <p>France</p>
                                <p>80 Avenue Suite 400,NY 1010</p>
                             </div>

                         </div>


                        <div className="flex flex-col gap-2 items-start mt-12">
                            <h2 className="font-semibold text-lg pb-8">For Quick Inquiries</h2>
                            <div className="flex flex-col items-start text-gray-500">
                                <p className="flex flex-row gap-2"><img src="/src/assets/united-kingdom-flag-icon.png"/>+44 77777777</p>
                                <p className="flex flex-row gap-2 mt-8"><img src="/src/assets/united-states-flag-icon.png"/>+1  33333330</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-12 items-start text-start">
                            <p className="w-full font-semibold text-lg pb-4">Would you like to join our newsietter?</p>
                        <div className="flex flex-row gap-4 mt-6"> <input type="email" placeholder="Email" className="border-b border-black outline-none px-20"/><button><i className="fas fa-check bg-green-600 text-white px-6 py-4"></i></button></div>
                        </div>
                </div> 
        </div>
        </>
    ) 
}