import Card from "../../../components/card/Card";
import Button from "../../../components/button/Button";
import Ava from "../../../assets/images/ava.jpg";
import logoCheck from "../../../assets/icons/check.svg";
import logoStar from "../../../assets/icons/star.svg";
import Phone from "../../../assets/icons/phone.svg";
import Address from "../../../assets/icons/address.svg";
import Calendar from "../../../assets/icons/calendar.svg";

interface WorkerDetailProps {
    onGoBack: () => void;
}

export const WorkerDetail: React.FC<WorkerDetailProps> = ({ onGoBack }) => {
    return (
        <div className="page-detail-worker w-11/12 bg-white m-auto">
            <div className="content-detail-worker w-full m-auto pt-10 pb-4 flex flex-col gap-5">
                {/* Worker info card */}
                <Card className="w-full h-full border border-[#cacaca] rounded-[12px] p-4">
                    <div className="flex flex-row items-center gap-6">
                        <div className="col1 w-28 h-28 overflow-hidden rounded-full">
                            <img
                                src={Ava}
                                alt="Ảnh đại diện"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col2 flex flex-col gap-2">
                            <h1 className="font-semibold text-3xl">NGUYỄN VĂN A</h1>
                            <div className="flex flex-row gap-2">
                                <img src={logoCheck} alt="Đã xác thực" className="w-6 h-6" />
                                <p className="font-normal text-lg">Đã xác thực</p>
                            </div>
                        </div>
                        <div className="col3 ml-auto mr-4 flex gap-1 px-16 py-4 border rounded-xl shadow-lg shadow-blue-400 cursor-pointer">
                            <img src={Phone} alt="Điện thoại" />
                            <p className="text-xl font-semibold text-gray-600 ">
                                123-456-789
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="w-full h-full border border-[#cacaca] rounded-[12px] p-4">
                    <div className="flex flex-col gap-5">
                        <div className="row1 flex gap-4">
                            <div className="w-1/3">
                                <h3 className="font-semibold text-lg mb-2">Ngày sinh</h3>
                                <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                                    <p className="font-light text-base">10-10-2024</p>
                                </Card>
                            </div>
                            <div className="w-2/3">
                                <h3 className="font-semibold text-lg mb-2">Địa chỉ</h3>
                                <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                                    <p className="font-light text-base">
                                        123 Likelion, Q7, HoChiMinh
                                    </p>
                                </Card>
                            </div>
                        </div>
                        <div className="row2 flex gap-4">
                            <div className="w-1/3">
                                <h3 className="font-semibold text-lg mb-2">Đánh giá</h3>
                                <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                                    <div className="flex flex-row gap-2 items">
                                        <img src={logoStar} alt="Đánh giá" className="w-5 h-5" />
                                        <p className="font-light text-lg">4.0</p>
                                    </div>
                                </Card>
                            </div>
                            <div className="w-2/3">
                                <h3 className="font-semibold text-lg mb-2">Kỹ năng</h3>
                                <Card className="w-full border border-[#cacaca] rounded-[12px] p-2">
                                    <div className="flex flex-row gap-3 flex-wrap">
                                        <p className="font-light text-sm px-3 py-1 border bg-gray-200 rounded-full">
                                            Dọn vệ sinh
                                        </p>
                                        <p className="font-light text-sm px-3 py-1 border bg-gray-200 rounded-full">
                                            Phục vụ
                                        </p>
                                        <p className="font-light text-sm px-3 py-1 border bg-gray-200 rounded-full">
                                            Bảo vệ
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="w-full h-full  border border-[#cacaca] rounded-[12px] p-4">
                    <h3 className="font-semibold text-lg mb-3">Đã hoàn thành</h3>
                    <div className="flex flex-row gap-4 flex-wrap">
                        <Card className="w-[48%] h-full border border-[#cacaca] rounded-[12px] p-4">
                            <div className="title-job flex justify-between">
                                <h1 className="font-semibold text-lg">Giao hàng</h1>
                                <div className="rate-job flex flex-row gap-1 items-baseline">
                                    <img src={logoStar} alt="Đánh giá" className="w-4 h-4" />
                                    <p className="font-semibold text-lg">4.0</p>
                                </div>
                            </div>
                            <hr className="my-1" />
                            <div className="content-job flex flex-col mt-2">
                                <p className="font-light text-base text-center px-4 py-1 border bg-gray-200 rounded-2xl w-2/5 mb-2">
                                    Giao hàng
                                </p>
                                <div className="flex flex-row gap-2 items-baseline">
                                    <img src={Address} alt="" className="w-4 h-4" />
                                    <p className="mb-1">Phường 5, Quận 5</p>
                                </div>
                                <div className="flex flex-row gap-1 items-baseline">
                                    <img src={Calendar} alt="" className="w-4 h-4" />
                                    <p>10/10/2024-11/10/2024</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Card>



                {/* Action buttons */}
                <div className="flex gap-2">
                    <Button
                        title="Quay Lại"
                        className="custom-btn w-2/4 h-10 flex items-center justify-center text-blue-500 "
                        onClick={onGoBack}
                        color="custom"
                    />
                    <Button
                        title="Chọn Ứng Viên"
                        className="custom-btn w-2/4 h-10 flex items-center justify-center"
                    />
                </div>
            </div>
        </div>
    );
};