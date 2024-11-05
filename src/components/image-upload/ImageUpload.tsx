import React, { useEffect, useState } from "react";
import upIMG from "../../assets/images/img-upload.png";
import clsx from "clsx";

interface ImageUploadProps extends Partial<HTMLInputElement> {
  listType?: "picture-circle" | "text" | "picture";
  onFileSelect: (file: File | null) => void;
  resetTrigger?: boolean;
  onRemove?: () => void; // Thêm prop để xử lý xóa ảnh
  fileList?: { url: string; name: string }[]; // Thêm prop fileList
  imageSize?: string;
}

export default function ImageUploadProps({
  listType = "picture",
  className,
  name,
  onFileSelect: handleFileSelect,
  resetTrigger, // Prop để trigger reset
  onRemove,
  fileList = [], // Mặc định là mảng rỗng
  imageSize = "w-full h-[300px]",
}: ImageUploadProps) {
  const [imageSelect, setImageSelect] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (resetTrigger) {
      setImageSelect(""); // Clear image on reset
      setImageUrl(""); // Clear image URL on reset
      handleFileSelect(null); // Notify parent to clear the image field
    }
  }, [resetTrigger]);

  // Nếu có fileList được truyền vào, hiển thị ảnh URL từ trước
  useEffect(() => {
    if (fileList.length > 0) {
      setImageSelect(fileList[0].name);
      setImageUrl(fileList[0].url);
    }
  }, [fileList]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setImageSelect(file.name);
      setImageUrl(URL.createObjectURL(file));
      handleFileSelect(file);
    }

    // Reset giá trị của input file để đảm bảo có thể chọn lại cùng tấm hình
    e.target.value = ""; // Reset input file sau khi chọn ảnh
  };

  const handleImageRemove = () => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setImageSelect("");
    setImageUrl("");
    handleFileSelect(null);
    if (onRemove) onRemove(); // Gọi hàm xóa ảnh từ component cha
  };

  return (
    <label
      className={clsx(
        `cursor-pointer flex items-center justify-center bg-gray-100 border border-dashed w-full min-h-[300px] rounded-lg relative overflow-hidden group`,
        className,
        {
          ["!rounded-full !min-h-[250px]"]: listType === "picture-circle",
        }
      )}
    >
      <input
        id={name}
        type="file"
        className="hidden-input"
        onChange={handleImageSelect}
      />
      {!imageSelect ? (
        <div className="flex flex-col items-center text-center pointer-events-none">
          <img
            src={upIMG}
            alt="upload-img"
            className="max-w-[80px] mb-5"
            loading="lazy"
          />
          <p className="font-semibold">Chọn hình ảnh đại diện</p>
        </div>
      ) : (
        <>
          <div className={`${imageSize}`}>
            <img
              src={imageUrl || ""}
              className="w-full h-full object-cover"
              alt=""
              loading="lazy"
            />
          </div>
          <button
            type="button"
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer absolute z-10 text-red-600 opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible "
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
