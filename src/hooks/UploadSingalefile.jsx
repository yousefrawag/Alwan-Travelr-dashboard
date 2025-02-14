import React from 'react';
import { SlCloudUpload } from "react-icons/sl";

const UploadSingalefile = ({ images, handelFile, id }) => {
  return (
    <div className="mt-10 w-full h-full flex items-center justify-center">
      <div className="mt-[-10px] flex flex-col items-center justify-center border-[2px] border-[#D0D5DD99] border-dashed min-h-[200px] w-full bg-[#F1F1F7]">
        <label
          htmlFor={`user-image-${id}`}
          className="cursor-pointer p-4 user-image grid grid-cols-1 gap-2 text-center items-center justify-center"
        >
          {images.view ? (
            <img
              width={200}
              height={200}
              src={images.view}
              alt="image-upload"
              className="mx-auto w-[60%] h-[60%] rounded-[10] flex items-center justify-center"
            />
          ) : (
            <SlCloudUpload className="text-[#666B71] text-6xl text-center" />
          )}
        </label>
        <input
          type="file"
          name="image"
          id={`user-image-${id}`}
          hidden
          onChange={handelFile}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default UploadSingalefile;
