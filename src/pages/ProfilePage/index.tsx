import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Field from "../../components/field/Field";
import Button from "../../components/button/Button";
import ImageUpload from "../../components/image-upload/ImageUpload";
import Close from "../../assets/icons/close.svg";
import Plus from "../../assets/icons/plus.svg";
import Arrow from "../../assets/icons/double-arrow-right.svg";
import Star from "../../assets/icons/star.svg";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileSchema } from "../../utils/validation";

export default function ProfilePage() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ProfileSchema),
  });

  const handleUpdateProfile = async () => {
    try {
      // console.log("Values:", values);
      toast.success("Đã cập nhật thông tin thành công!");
    } catch (error) {
      toast.error("Cập nhật thất bại!");
      console.error("Update error:", error);
    }
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);
  console.log("🚀 ~ useEffect ~ arrErrors:", Object.values(errors));

  return (
    <div className="py-20 px-[72px]">
      <div className="bg-white py-4 shadow-md px-11">
        <div className="mb-5 flex items-start justify-between px-11 pt-10">
          <div>
            <h1 className="text-[40px] font-semibold">Thông tin tài khoản</h1>
            <p className="text-xl font-semibold text-[rgba(10,_22,_41,_0.50)]">
              Cập nhật thông tin tài khoản
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleUpdateProfile)}>
          <div className="w-[244px] h-[244px] rounded-full mx-auto mb-7">
            <ImageUpload
              listType="picture-circle"
              name="avatar"
              onFileSelect={(file: File | null) => {
                if (file) {
                  setValue("avatar", file);
                }
              }}
            />
          </div>
          <div className="flex items-end justify-center mb-10 pr-5">
            <div className="w-14 h-14">
              <img src={Star} alt="" className="w-full h-full" />
            </div>
            <h1 className="text-4xl font-medium">4.0</h1>
          </div>
          <div className="border border-solid border-[#D5D5D5] rounded-3xl pt-14 px-8 ">
            <div className="form-layout ">
              <Field>
                <Label htmlFor="fullName">Họ tên đầy đủ</Label>
                <Input
                  name="fullName"
                  placeholder="Nhập họ tên đầy đủ"
                  control={control}
                ></Input>
              </Field>
              <Field>
                <Label htmlFor="date">Ngày sinh</Label>
                <Input
                  type="date"
                  name="date"
                  placeholder="Nhập ngày tháng năm sinh"
                  control={control}
                ></Input>
              </Field>
            </div>
            <div className="form-layout ">
              <Field>
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  control={control}
                ></Input>
              </Field>
              <Field>
                <Label htmlFor="join">Tham gia từ</Label>
                <Input
                  name="join"
                  placeholder="Thời gian tham gia"
                  className="text-center border-none focus:ring-0 invisible"
                  control={control}
                ></Input>
              </Field>
            </div>
            <div className="form-layout ">
              <Field>
                <Label htmlFor="address">Địa chỉ</Label>
                <Input
                  name="address"
                  placeholder="Nhập địa chỉ"
                  control={control}
                ></Input>
              </Field>
              <Field>
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  placeholder="Nhập email"
                  type="email"
                  control={control}
                ></Input>
              </Field>
            </div>
          </div>

          <div className="mt-24">
            <Label htmlFor="">Tải ảnh CCCD / CMND</Label>
            <div className="border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5">
              <div className="form-layout lg:mb-0">
                <ImageUpload
                  name="frontCard"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("frontCard", file);
                    }
                  }}
                />
                <ImageUpload
                  name="backCard"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("backCard", file);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-24">
            <Label htmlFor="">Kĩ năng</Label>
            <div className="border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5 flex gap-7">
              <div className="inline-block rounded-[20px] bg-[#E8E8E8] px-7 py-5">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-2xl">Dọn vệ sinh</p>
                  <div className="w-6 h-6">
                    <img
                      src={Close}
                      alt="icon-close"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="inline-block rounded-[20px] bg-[#E8E8E8] px-7 py-5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6">
                    <img src={Plus} alt="" className="w-full h-full" />
                  </div>
                  <p className="font-semibold text-2xl text-[rgba(10,_22,_41,_0.50)]">
                    Thêm kỹ năng
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <Label htmlFor="">Danh sách công việc</Label>
            <div className="flex justify-between">
              <div className="border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5 w-[550px] 2xl:w-[800px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <p className="text-2xl font-bold">Đã hoàn thành</p>
                    <div className="rounded-full w-3 h-3 bg-[#2EE498]"></div>
                    <h1 className="text-2xl font-medium">3</h1>
                  </div>
                  <div className="bg-[#2EE498] rounded-2xl p-3">
                    <NavLink
                      to="/more-card"
                      className="text-white flex items-center justify-between gap-10"
                    >
                      xem thêm
                      <div className="w-6 h-6">
                        <img
                          src={Arrow}
                          alt="icon-arrow"
                          className="w-full h-full"
                        />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5 w-[550px] 2xl:w-[800px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <p className="text-2xl font-bold">Đang nộp</p>
                    <div className="rounded-full w-3 h-3 bg-[#FF5758]"></div>
                    <h1 className="text-2xl font-medium">5</h1>
                  </div>
                  <div className="bg-[#FF5758] rounded-2xl p-3">
                    <NavLink
                      to="/more_card"
                      className="text-white flex items-center justify-between gap-10"
                    >
                      xem thêm
                      <div className="w-6 h-6">
                        <img
                          src={Arrow}
                          alt="icon-arrow"
                          className="w-full h-full"
                        />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            title="Cập Nhật"
            className="w-full mt-20 h-16"
          />
        </form>
      </div>
    </div>
  );
}
