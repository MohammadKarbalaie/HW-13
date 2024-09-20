import { Input } from "./Input";

export function Body(){
    return(
        <>
            <div className="flex flex-row mt-12 mx-auto justify-center items-center">
                <div>
                    <Input type="text" placeholder="Your Company Name"  />
                    <Input type="password" placeholder="Enter Your Password"/>
                </div>
                {/* <div className="flex flex-col">
                        <div>
                            <h2>Office</h2>
                            <p>United States</p>
                            <p>500 5th Avenue Suite 400,NY 1010</p>

                            <p>United Kingdom</p>
                            <p>High St ,Bromly BR1 1DN</p>

                            <p>France</p>
                            <p>80 Avenue Suite 400,NY 1010</p>
                    </div>
                    <div>
                        <h2>For Quick Inquiries</h2>
                        <p>+44 77777777</p>
                        <p>+1  33333330</p>
                    </div>
                    <div>
                        <p>Would you like to join our newsietter?</p>
                        <input type="email" name="" id="" /><button><i className=""></i></button>
                    </div>


                </div> */}
            </div>
        </>
    )}