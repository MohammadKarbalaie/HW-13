import React, { useState } from "react";

interface FileProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const File: React.FC<FileProps> = ({ onChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
    onChange(e);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="">
      {selectedFile ? (
        <div className="flex flex-col items-center border-2 border-dashed border-gray-300 p-6 py-10 rounded-lg mt-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-gray-700 text-lg">
              Uploaded File: {selectedFile.name}
            </span>
            <button
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center border-2 border-dashed border-gray-300 p-6 py-10 rounded-lg mt-4">
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="opacity-0 absolute w-full h-full cursor-pointer"
          />
          <label
            htmlFor="file"
            className="flex items-center cursor-pointer text-gray-700 text-lg"
          >
            <span className="text-3xl mr-2">
              <i className="fas fa-upload text-gray-400"></i>
            </span>
            <span>Upload Additional File</span>
          </label>
        </div>
      )}
      <p className="text-gray-500 text-sm mt-2 text-start">
        Attach file. File size of your documents should not exceed 10MB.
      </p>
    </div>
  );
};

export default File;
