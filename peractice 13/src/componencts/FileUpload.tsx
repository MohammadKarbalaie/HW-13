import React from 'react';

interface FileProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const File: React.FC<FileProps> = ({ onChange }) => {
    return (
        <div className="">  
        <div className='flex flex-col items-center border-2 border-dashed border-gray-300 p-6 py-10 rounded-lg mt-4'>
            <input
            type="file"
            onChange={onChange}
            className="opacity-0 absolute pt-"
            />
        <label htmlFor="file" className="flex items-center cursor-pointer text-gray-700 text-lg">  
             <span className="text-3xl mr-2"><i className='fas fa-upload  text-gray-400'></i></span>  
             <span>Upload Additional File</span>  
        </label> 
        </div> 
        <p className="text-gray-500 text-sm mt-2 text-start">  
            Attach file. File size of your documents should not exceed 10MB.  
        </p>  
        </div> 
    );
};

export default File;



