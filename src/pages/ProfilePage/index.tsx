import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Field from "../../components/field/Field";
import Button from "../../components/button/Button";
import ImageUploadProps from "../../components/image-upload/ImageUpload";
import Close from "../../assets/icons/close.svg";
import Plus from "../../assets/icons/plus.svg";
import Star from "../../assets/icons/star.svg";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileSchema } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { ACCESS_TOKEN } from "../../utils/config";
import { getCookie } from "../../utils/utilMethod";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import DropdownList from "../../components/dropdown/DropdownList";
import DropdownOption from "../../components/dropdown/DropdownOption";
import { District, Province, useAddress, Ward } from "../../hooks/useAddress";
import { useRole } from "../../hooks/useRole";
import useFormattedDate from "../../hooks/useFormattedDate";
import { changePasswordAPI, ChangePasswordType } from "../../redux/reducers/userReducer";

export default function ProfilePage() {
  const { provinces, districts, wards } = useAddress();
  const { sub } = useRole();
  const { userProfile, changePassword } = useSelector(
    (state: RootState) => state.userReducer
  );
  const formattedDate = useFormattedDate(userProfile?.createdDate || "");

  const dispatch: DispatchType = useDispatch();

  const getDataChangePassword = async (payload: ChangePasswordType) => {
    const actionAPI = changePasswordAPI(payload);
    dispatch(actionAPI);
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ProfileSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  useEffect(() => {
    //reset Token
    const Token = getCookie(ACCESS_TOKEN);
    if (!Token) {
      return;
    }

    // if (userProfile) {
    //   setValue("fullname", userProfile?.fullname);
    //   setValue("address", userProfile?.address);
    //   setValue("avatar", userProfile?.avatar);
    //   setValue("email", sub || "");
    //   setValue("createdDate", formattedDate);
    //   // setValue("star", userProfile.star || 0);
    // }

  }, [userProfile]);

  const handleUpdateProfile = async (values: ChangePasswordType) => {
    try {
        const payload = {
          ...values,
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        };

        const response = await dispatch(changePasswordAPI(payload))

        console.log(response);
        

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
  console.log("🚀 ~ useEffect ~ arrErrors:", Object.values(errors));

  return (
    <div className="px-[30px] pb-[66px]">
      <div className="bg-white py-4 shadow-md px-11">
        <div className="mb-5 flex items-start justify-between px-11 pt-10">
          <div>
            <h1 className="text-[40px] font-semibold">Thông tin tài khoản</h1>
            <p className="text-xl font-semibold text-[rgba(10,_22,_41,_0.50)]">
              Cập nhật thông tin tài khoản
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit((handleUpdateProfile))}>
          {/* <div className="w-[244px] h-[244px] rounded-full mx-auto mb-7">
            <ImageUploadProps
              listType="picture-circle"
              name="avatar"
              fileList={
                userProfile?.avatar
                  ? [{ url: userProfile.avatar, name: "Avatar" }]
                  : []
              }
              onFileSelect={(file: File | null) => {
                if (file) {
                  setValue("avatar", file);
                }
              }}
            />
          </div> */}
          {/* <div className="flex items-center justify-center mb-10 gap-3">
            <div className="w-10 h-1w-10">
              <img src={Star} alt="" className="w-full h-full" />
            </div>
            <h1 className="text-4xl font-medium mt-2">4.0</h1>
          </div> */}
          <div className="border border-solid border-[#D5D5D5] rounded-3xl pt-14 px-8 ">
            {/* <div className="form-layout">
              <Field>
                <Label htmlFor="fullname">Họ tên đầy đủ</Label>
                <Input
                  name="fullname"
                  placeholder="Nhập họ tên đầy đủ"
                  control={control}
                />
              </Field>
              <Field>
                <Label htmlFor="date">Ngày sinh</Label>
                <Input
                  type="date"
                  name="date"
                  placeholder="Nhập ngày tháng năm sinh"
                  control={control}
                />
              </Field>
            </div> */}
            {/* <div className="form-layout ">
              <Field>
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  name="phone"
                  type="number"
                  placeholder="Nhập số điện thoại"
                  control={control}
                />
              </Field>
              <Field>
                <Label htmlFor="createdDate">Tham gia từ</Label>
                <Input
                  name="createdDate"
                  placeholder="Thời gian tham gia"
                  className="text-center border-none focus:ring-0 invisible"
                  control={control}
                />
              </Field>
            </div>
            <div className="form-layout ">
              <Field>
                <Label>Tỉnh</Label>
                <Dropdown>
                  <DropdownSelect
                    value={`${provinces[0]?.name || "Tỉnh"}`}
                  ></DropdownSelect>
                  <DropdownList>
                    {(Array.isArray(provinces) ? provinces : []).map(
                      (item: Province) => (
                        <DropdownOption name="province" key={item.id}>
                          {item.name}
                        </DropdownOption>
                      )
                    )}
                  </DropdownList>
                </Dropdown>
              </Field>
              <Field>
                <Label>Quận</Label>
                <Dropdown>
                  <DropdownSelect
                    value={`${districts[0]?.name || "Quận"}`}
                  ></DropdownSelect>
                  <DropdownList>
                    {(Array.isArray(districts) ? districts : []).map(
                      (item: District) => (
                        <DropdownOption name="district" key={item.id}>
                          {item.name}
                        </DropdownOption>
                      )
                    )}
                  </DropdownList>
                </Dropdown>
              </Field>
            </div>
            <div className="form-layout">
              <Field>
                <Label>Phường</Label>
                <Dropdown>
                  <DropdownSelect
                    value={`${wards[0]?.name || "Phường"}`}
                  ></DropdownSelect>
                  <DropdownList>
                    {(Array.isArray(wards) ? wards : []).map((item: Ward) => (
                      <DropdownOption name="ward" key={item.id}>
                        {item.name}
                      </DropdownOption>
                    ))}
                  </DropdownList>
                </Dropdown>
              </Field>
              <Field>
                <Label htmlFor="address">Địa chỉ</Label>
                <Input
                  name="address"
                  placeholder="Nhập địa chỉ"
                  control={control}
                />
              </Field>
            </div>
            <div className="form-layout">
              <Field>
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  placeholder="Nhập email"
                  type="email"
                  control={control}
                  disabled={true}
                />
              </Field>
            </div> */}
            <div className="form-layout">
              <Field>
                <Label htmlFor="oldPassword">Mật khẩu hiện tại</Label>
                <Input
                  type="password"
                  name="oldPassword"
                  placeholder="Nhập mật khẩu hiện tại"
                  control={control}
                />
              </Field>
              <Field>
                <Label htmlFor="newPassword">Mật khẩu mới</Label>
                <Input
                  name="newPassword"
                  placeholder="Nhập mật khẩu mới"
                  control={control}
                />
              </Field>
            </div>
          </div>
          {/* </div> */}

          {/* <div className="mt-24">
            <Label htmlFor="">Tải ảnh CCCD / CMND</Label>
            <div className="border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5">
              <div className="form-layout lg:mb-0">
                <ImageUploadProps
                  name="frontCard"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("frontCard", file);
                    }
                  }}
                />
                <ImageUploadProps
                  name="backCard"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("backCard", file);
                    }
                  }}
                />
              </div>
            </div>
          </div> */}

          {/* <div className="mt-24">
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
          </div> */}
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
