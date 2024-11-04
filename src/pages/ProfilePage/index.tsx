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
import InputPassword from "../../components/input/InputPassword";
import {
  updateProfileUserAPI,
  UserProfileType,
  changePasswordAPI,
  ChangePasswordType,
} from "../../redux/reducers/userReducer";
import { Select } from "antd";
import { District, Province, useAddress } from "../../hooks/useAddress";
import dayjs from "dayjs";
import { useRole } from "../../hooks/useRole";
import { UserRole } from "../../enums/role.enum";
import { JobSkill } from "../../redux/reducers/jobSkillReducer";

export default function ProfilePage() {
  const { role } = useRole();
  const isEmployer = role === UserRole.ROLE_EMPLOYER;
  const [togglePassword, setTogglePassword] = useState(false);
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const { objJobSkill } = useSelector(
    (state: RootState) => state.jobSkillReducer
  );

  const dispatch: DispatchType = useDispatch();
  const { provinces, districts, setProvinceAndFetchDistricts, loading } =
    useAddress();

  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    null
  );
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(
    null
  );

  const options = Array.isArray(objJobSkill)
    ? objJobSkill.map((skill: JobSkill) => ({
        label: skill.skill,
        value: skill.id,
      }))
    : [];

    console.log({objJobSkill});
    

  const [selectedJobSkill, setSelectedJobSkill] = useState([]);

  // Hàm xử lý khi chọn kỹ năng
  const handleChangeJobSkill = (value: any) => {
    setSelectedJobSkill(value); // value là mảng các ID kỹ năng đã chọn
  };
  // Thiết lập selectedProvince và gọi API để lấy danh sách huyện theo userProfile
  useEffect(() => {
    if (userProfile && !loading && provinces.length > 0) {
      const province = provinces.find((p) => ~~p.id === userProfile.provinceId);

      if (province) {
        setSelectedProvince(province);
        setValue("provinceId", province.id);
        setProvinceAndFetchDistricts(province.id); // Gọi API để lấy danh sách huyện
      }
    }
  }, [userProfile, provinces, loading]);

  // Theo dõi khi danh sách districts thay đổi và set lại selectedDistrict theo userProfile
  useEffect(() => {
    if (districts.length > 0 && selectedProvince) {
      const district = districts.find(
        (d) => ~~d.id === userProfile?.districtId
      );
      if (district) {
        setSelectedDistrict(district);
        setValue("districtId", district.id);
      }
    }
  }, [districts, selectedProvince, userProfile]);

  const handleSelectedProvince = (province: Province) => {
    setSelectedProvince(province);
    setSelectedDistrict(null); // Reset selectedDistrict khi chọn tỉnh mới
    setValue("provinceId", province.id);
    setValue("districtId", 0); // Reset districtId trong form
    setProvinceAndFetchDistricts(province.id); // Cập nhật danh sách huyện
  };

  const handleSelectedDistrict = (district: District) => {
    setSelectedDistrict(district);
    setValue("districtId", district.id);
  };

  // Theo dõi khi selectedProvince thay đổi để cập nhật danh sách huyện và reset district
  useEffect(() => {
    if (selectedProvince) {
      setSelectedDistrict(null); // Reset selectedDistrict khi tỉnh mới được chọn
      setProvinceAndFetchDistricts(selectedProvince.id); // Gọi API để lấy huyện mới
    }
  }, [selectedProvince]);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ProfileSchema),
  });

  useEffect(() => {
    console.log("useEffect: ", userProfile);

    //reset Token
    const Token = getCookie(ACCESS_TOKEN);
    if (!Token) {
      return;
    }

    if (userProfile) {
      setValue("fullname", userProfile?.fullname);
      setValue("phone", userProfile?.phone);
      setValue("address", userProfile?.address);
      setValue("dob", dayjs(userProfile?.dob).format("YYYY-MM-DD"));
      setValue("avatar", userProfile?.avatar);
      setValue("email", userProfile?.email);
      setValue(
        "createdDate",
        dayjs(userProfile?.createdDate).format("YYYY-MM-DD")
      );
      setValue("imgFrontOfCard", userProfile?.imgFrontOfCard);
      setValue("imgBackOfCard", userProfile?.imgBackOfCard);
    }
  }, [userProfile]);

  const handleUpdateProfile = async (
    values: UserProfileType & ChangePasswordType
  ) => {
    try {
      console.log("value trc: ", values);

      const profilePayload: UserProfileType = {
        fullname: values.fullname,
        email: values.email,
        phone: values.phone,
        dob: dayjs(values.dob).format("YYYY-MM-DD"),
        avatar: values.avatar,
        address: values.address,
        provinceId: values.provinceId,
        districtId: values.districtId,
        createdDate: values.createdDate,
        imgFrontOfCard: values.imgFrontOfCard,
        imgBackOfCard: values.imgBackOfCard,
        // jobSkills: selectedJobSkill, // Lấy id từ jobSkills
      };

      const passwordPayload: ChangePasswordType | null =
        values.oldPassword && values.newPassword
          ? { oldPassword: values.oldPassword, newPassword: values.newPassword }
          : null;

      if (passwordPayload) {
        try {
          await dispatch(changePasswordAPI(passwordPayload));
        } catch (error) {
          console.error("Error in changePasswordAPI:", error);
          toast.error("Đổi mật khẩu thất bại!");
        }
      }

      await dispatch(updateProfileUserAPI(profilePayload));

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
              imgSize="w-full h-[250px]"
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
                  type="date"
                  dateFormat="YYYY-MM-DD"
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
                    value={
                      selectedProvince
                        ? selectedProvince.name
                        : "Tỉnh / Thành phố"
                    }
                  ></DropdownSelect>
                  <DropdownList>
                    {provinces.map((item: Province) => (
                      <DropdownOption
                        name="provinceId"
                        key={item.id}
                        onClick={() => handleSelectedProvince(item)}
                      >
                        {item.name}
                      </DropdownOption>
                    ))}
                  </DropdownList>
                </Dropdown>
              </Field>
              <Field>
                <Label>Quận / Huyện</Label>
                <Dropdown>
                  <DropdownSelect
                    value={
                      selectedDistrict ? selectedDistrict?.name : "Quận / Huyện"
                    }
                  ></DropdownSelect>
                  <DropdownList>
                    {districts.map((item: District) => (
                      <DropdownOption
                        name="districtId"
                        key={item.id}
                        onClick={() => handleSelectedDistrict(item)}
                      >
                        {item.name}
                      </DropdownOption>
                    ))}
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
          </div>

          {!isEmployer && (
            <div className="border border-solid border-[#D5D5D5] rounded-3xl py-14 px-8 mt-7">
              <Field>
                <Label htmlFor="">Kỹ năng</Label>
                <Select
                  id="jobSkills"
                  style={{
                    width: "100%",
                  }}
                  mode="multiple"
                  placeholder="Chọn kỹ năng"
                  options={options}
                  value={selectedJobSkill} // Lấy ID cho value
                  onChange={handleChangeJobSkill}
                />
              </Field>
            </div>
          )}
          <div className="mt-24">
            <Label htmlFor="">Tải ảnh CCCD / CMND</Label>
            <div className="border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5">
              <div className="form-layout lg:mb-0">
                <ImageUploadProps
                  name="imgFrontOfCard"
                  fileList={
                    userProfile?.imgFrontOfCard
                      ? [
                          {
                            url: userProfile.imgFrontOfCard,
                            name: "imgFrontOfCard",
                          },
                        ]
                      : []
                  }
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("imgFrontOfCard", file);
                    }
                  }}
                />
                <ImageUploadProps
                  name="imgBackOfCard"
                  fileList={
                    userProfile?.imgBackOfCard
                      ? [
                          {
                            url: userProfile.imgBackOfCard,
                            name: "imgBackOfCard",
                          },
                        ]
                      : []
                  }
                  onFileSelect={(file: File | null) => {
                    if (file) {
                      setValue("imgBackOfCard", file);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="border border-solid border-[#D5D5D5] rounded-3xl pt-14 px-8 mt-7">
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
