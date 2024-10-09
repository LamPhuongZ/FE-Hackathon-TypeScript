import React, { useState } from "react";
import upIMG from "../../assets/images/img-upload.png";

type Props = {
  className?: string;
};

export default function ImageUpload({ className }: Props) {
  const [imageSelect, setImageSelect] = useState<File>();
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageSelect(file);
    }
  };

  const handleImageRemove = () => {
    setImageSelect(undefined);
  };
  
  return (
    <label
      className={`cursor-pointer flex items-center justify-center bg-gray-100 border border-dashed w-full min-h-[200px] rounded-lg ${className} relative overflow-hidden group`}
    >
      <input
        type="file"
        className="hidden-input"
        onChange={handleImageSelect}
      />
      {!imageSelect && (
        <div className="flex flex-col items-center text-center pointer-events-none">
          <img src={upIMG} alt="upload-img" className="max-w-[80px] mb-5" />
          <p className="font-semibold">Chọn hình ảnh đại diện</p>
        </div>
      )}

      {imageSelect && (
        <>
          <img
            src={URL.createObjectURL(imageSelect)}
            className="w-full h-full object-cover"
            alt=""
          />
          <button
            type="button"
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer absolute z-10 text-red-500 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible"
            onClick={handleImageRemove}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </>
      )}
    </label>
  );
}
