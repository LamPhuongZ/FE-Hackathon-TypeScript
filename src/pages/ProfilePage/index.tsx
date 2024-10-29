import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Field from "../../components/field/Field";
import Button from "../../components/button/Button";
import ImageUploadProps from "../../components/image-upload/ImageUpload";
import Star from "../../assets/icons/star.svg";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileSchema } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { ACCESS_TOKEN } from "../../utils/config";
import { getCookie } from "../../utils/utilMethod";
import Dropdown from "../../components/dropdown/Dropdown";
import DropdownSelect from "../../components/dropdown/DropdownSelect";
import DropdownList from "../../components/dropdown/DropdownList";
import DropdownOption from "../../components/dropdown/DropdownOption";
import { District, Province, useAddress } from "../../hooks/useAddress";
import InputPassword from "../../components/input/InputPassword";
import moment, { Moment } from "moment";
import {
  changePasswordAPI,
  ChangePasswordType,
} from "../../redux/reducers/userReducer";

export default function ProfilePage() {
  const { provinces, districts } = useAddress();
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const [selectedProvince, setSelectedProvince] = useState<Province>();
  const [selectedDistrict, setSelectedDistrict] = useState<District>();
  const [togglePassword, setTogglePassword] = useState(false);
  const dispatch = useDispatch<DispatchType>();

  const handleSelectedProvince = (item: Province) => {
    setSelectedProvince(item);
    setValue("provinceId", ~~item.id);
  };

  const handleSelectedDistrict = (item: District) => {
    setSelectedDistrict(item);
    setValue("districtId", ~~item.id);
  };

  const createdDate: Moment | null = userProfile?.createdDate
    ? moment(userProfile.createdDate, "YYYY-MM-DD")
    : null;

  // Xử lý ngày sinh
  const dob: Moment | null = userProfile?.dob
    ? moment(userProfile.dob, "YYYY-MM-DD")
    : null;

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ProfileSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      address: "",
      dob: "",
      avatar: "",
      email: "",
      provinceId: ~~"01",
      districtId: ~~"01",
      createdDate: "",
      imgFrontOfCard: "",
      imgBackOfCard: "",
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

    if (userProfile) {
      setValue("fullname", userProfile?.fullname);
      setValue("phone", userProfile?.phone);
      setValue("address", userProfile?.address);
      setValue("dob", dob ? dob.format("YYYY-MM-DD") : "");
      setValue("avatar", userProfile?.avatar);
      setValue("email", userProfile?.email);
      setValue("provinceId", ~~userProfile?.provinceId);
      setValue("districtId", ~~userProfile?.districtId);
      setValue(
        "createdDate",
        createdDate ? createdDate.format("YYYY-MM-DD") : ""
      );
      setValue("imgFrontOfCard", userProfile?.imgFrontOfCard);
      setValue("imgBackOfCard", userProfile?.imgBackOfCard);
    }
  }, [userProfile]);

  const handleUpdateProfile = async (values: ChangePasswordType) => {
    try {
      const payload = {
        ...values,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };

      const response = await dispatch(changePasswordAPI(payload));

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
    <div className="px-[30px]">
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
          </div>
          <div className="flex items-center justify-center mb-10 gap-3">
            <div className="w-10 h-1w-10">
              <img src={Star} alt="" className="w-full h-full" />
            </div>
            <h1 className="text-4xl font-medium mt-2">4.0</h1>
          </div>
          <div className="border border-solid border-[#D5D5D5] rounded-3xl pt-14 px-8 ">
            <div className="form-layout">
              <Field>
                <Label htmlFor="fullname">Họ tên đầy đủ</Label>
                <Input
                  name="fullname"
                  placeholder="Nhập họ tên đầy đủ"
                  control={control}
                />
              </Field>
              <Field>
                <Label htmlFor="dob">Ngày sinh</Label>
                <Input
                  // type="date"
                  name="dob"
                  placeholder="Nhập ngày tháng năm sinh"
                  control={control}
                />
              </Field>
            </div>
            <div className="form-layout ">
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
                  className="text-center border-none"
                  disabled={true}
                  control={control}
                />
              </Field>
            </div>
            <div className="form-layout ">
              <Field>
                <Label>Tỉnh / Thành phố</Label>
                <Dropdown>
                  <DropdownSelect
                    value={`${selectedProvince?.name || "Tỉnh / Thành phố"}`}
                  ></DropdownSelect>
                  <DropdownList>
                    {(Array.isArray(provinces) ? provinces : []).map(
                      (item: Province) => (
                        <DropdownOption
                          name="provinceId"
                          key={item.id}
                          onClick={() => handleSelectedProvince(item)}
                        >
                          {item.name}
                        </DropdownOption>
                      )
                    )}
                  </DropdownList>
                </Dropdown>
              </Field>
              <Field>
                <Label>Quận / Huyện</Label>
                <Dropdown>
                  <DropdownSelect
                    value={`${selectedDistrict?.name || "Quận / Huyện"}`}
                  ></DropdownSelect>
                  <DropdownList>
                    {(Array.isArray(districts) ? districts : []).map(
                      (item: District) => (
                        <DropdownOption
                          name="districtId"
                          key={item.id}
                          onClick={() => handleSelectedDistrict(item)}
                        >
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
                <Label htmlFor="address">Địa chỉ</Label>
                <Input
                  name="address"
                  placeholder="Nhập địa chỉ"
                  control={control}
                />
              </Field>
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
            </div>
            <div className="form-layout">
              <Field>
                <Label htmlFor="oldPassword">Mật khẩu hiện tại</Label>
                <InputPassword
                  name="oldPassword"
                  placeholder="Nhập mật khẩu hiện tại"
                  control={control}
                  type={togglePassword ? "text" : "password"}
                  togglePassword={togglePassword}
                  setTogglePassword={setTogglePassword}
                />
              </Field>
              <Field>
                <Label htmlFor="newPassword">Mật khẩu mới</Label>
                <InputPassword
                  name="newPassword"
                  placeholder="Nhập mật khẩu mới"
                  control={control}
                  type={togglePassword ? "text" : "password"}
                  togglePassword={togglePassword}
                  setTogglePassword={setTogglePassword}
                />
              </Field>
            </div>
          </div>
          {/* </div> */}

          <div className="mt-24">
            <Label htmlFor="">Tải ảnh CCCD / CMND</Label>
            <div className="border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5">
              <div className="form-layout lg:mb-0">
                <ImageUploadProps
                  name="imgFrontOfCard"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("imgFrontOfCard", file);
                    }
                  }}
                />
                <ImageUploadProps
                  name="imgBackOfCard"
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("imgBackOfCard", file);
                    }
                  }}
                />
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
