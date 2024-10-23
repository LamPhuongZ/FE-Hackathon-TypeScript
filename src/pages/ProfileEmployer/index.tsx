import React, { useState } from "react";
import Ava from "../../assets/images/ava.jpg";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Add from "../../assets/icons/add.svg";

export default function ProfileEmployer() {

    const [images, setImages] = useState<File[]>([]);
    const [name, setName] = useState<string>("Dương Văn A");


    const handleImageUpload = (index: number) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (event) => {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (file) {
                const newImages = [...images];
                newImages[index] = file; // Update the specific index with the new image
                setImages(newImages);
            }
        };
        input.click();
    };
    return (
        <div className="w-[850px] ">
            <div className="bg-white py-4 shadow-md px-8 rounded-2xl">
                <div className="flex-col gap-4 m-auto w-11/12">
                    <div>
                        <h1 className=" mb-1 font-medium text-2xl">THÔNG TIN TÀI KHOẢN</h1>
                        <p className="font-semibold text-gray-400">
                            Cập nhật thông tin tài khoản
                        </p>
                    </div>
                    <div className="mb-3">
                        <img
                            src={Ava}
                            alt=""
                            className="h-40 w-40 rounded-full m-auto my-5"
                        />
                        <div className="w-24 m-auto">
                            <Button title="Chọn ảnh" className="btn-choose" circle={false} />
                        </div>
                    </div>
                    <div>
                        <Card className="w-full h-full border border-[#cacaca] rounded-[12px] p-4 my-5">
                            <div className="flex flex-col gap-5">
                                <div className="row1 flex gap-4">
                                    <div className="w-1/2">
                                        <h3 className="font-semibold text-lg mb-2">Họ tên</h3>
                                        <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                                            <input
                                                type="text"
                                                value={name} // Sử dụng giá trị từ state
                                                onChange={(e) => setName(e.target.value)} // Cập nhật state khi người dùng nhập
                                                className="font-light text-base ml-4 w-full border-none outline-none"
                                            />
                                        </Card>
                                    </div>
                                    <div className="w-1/2">
                                        <h3 className="font-semibold text-lg mb-2">Ngày sinh</h3>
                                        <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                                            <p className="font-light text-base ml-4">10/10/2024</p>
                                        </Card>
                                    </div>
                                </div>
                                <div className="row2 flex gap-4">
                                    <div className="w-1/2">
                                        <h3 className="font-semibold text-lg mb-2">
                                            Số điện thoại
                                        </h3>
                                        <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                                            <p className="font-light text-base ml-4">0985617238</p>
                                        </Card>
                                    </div>
                                    <div className="w-1/2">
                                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                                        <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                                            <div className="flex flex-row gap-3 flex-wrap">
                                                <p className="font-light text-base ml-4">
                                                    nguyenvana@gmail.com
                                                </p>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <h1 className="font-semibold text-xl">Tải ảnh CCCD/CMND</h1>
                        <Card className="w-full h-full border border-[#cacaca] rounded-[12px] p-4 mt-2 mb-5">
                            <div className="flex gap-4 ">
                                {Array.from({ length: 2 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center w-1/2 h-40 border border-gray-300 rounded-md cursor-pointer bg-gray-300"
                                        onClick={() => handleImageUpload(index)}
                                    >
                                        {images[index] ? (
                                            <img
                                                src={URL.createObjectURL(images[index])}
                                                alt={`Uploaded ${index + 1}`}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        ) : (
                                            <span className="text-gray-500 flex justify-center items-center gap-1">
                                                <img src={Add} alt="" /> Ảnh {index + 1}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                    <Button
                        title="Cập nhật"
                        className=""
                        circle={false}
                        color="primary"
                    />
                </div>
            </div>
        </div>
    );
}
