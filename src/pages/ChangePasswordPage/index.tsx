import { useEffect, useState } from "react";
import Field from "../../components/field/Field";
import InputPassword from "../../components/input/InputPassword";
import Label from "../../components/label/Label";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/configStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangePasswordSchema } from "../../utils/validation";
import {
  changePasswordAPI,
  ChangePasswordType,
} from "../../redux/reducers/userReducer";
import Button from "../../components/button/Button";

export default function ChangePasswordPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ChangePasswordSchema),
  });

  const [togglePassword, setTogglePassword] = useState(false);
  const dispatch: DispatchType = useDispatch();

  const handleUpdateProfile = async (values: ChangePasswordType) => {
    try {
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
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="bg-white shadow-md py-4 px-11 rounded-[20px]">
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
          <Button
            type="submit"
            title="Cập Nhật"
            className="w-full mt-20 h-16"
          />
        </div>
      </form>
    </div>
  );
}
