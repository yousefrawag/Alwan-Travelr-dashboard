import React from 'react';
import { SlCloudUpload } from "react-icons/sl";

const UploadImage = ({ images, handelFiles }) => {
 
  
  return (
    <div className="w-full flex items-center justify-center border-t border-[#D0D5DD99]">
    
      <div className="flex flex-col items-center justify-center w-full rounded-[12px] bg-[#F1F1F7] border-dashed border-[#D0D5DD] p-4">
        <label  className='cursor-pointer w-full h-full flex items-center justify-center text-center items-center justify-center'>
          {images.view ? (
            <img
              src={images.view}
              alt="image-upload"
              className='mx-auto max-w-full max-h-[200px] rounded-[10px] object-cover'
            />
          ) : (
            <SlCloudUpload className='text-[#666B71] text-6xl text-center' />
          )}
        </label>
        <input
  type="file"
  name="image"
  id="user-image"

  onChange={handelFiles}
  accept="image/*"
/>

      </div>
    </div>
  );
};

export default UploadImage;