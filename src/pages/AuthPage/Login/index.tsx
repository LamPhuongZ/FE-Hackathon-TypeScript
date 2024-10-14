import Button from "../../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../../redux/store";
import { Navigate } from "react-router-dom";
import { cleanUpUser, fetchLoginAction } from "../../../redux/slices/userSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  username: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
});

const Login: React.FC = () => {
  const dispatch: DispatchType = useDispatch();
  const { user, isError } = useSelector((state: RootState) => {
    return state.userReducer;
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });


  const onSubmit = (values: { username: string; password: string }) => {
    console.log(values);

    dispatch(fetchLoginAction(values));
  };

  useEffect(() => {
    if (isError) {
      toast.error(
        "Đăng nhập không thành công, vui lòng kiểm tra lại thông tin"
      );
      dispatch(cleanUpUser());
    }
  }, [isError]);

  console.log(user);
  

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <section className="w-1/2 flex flex-col justify-center self-stretch relative text-black">
      <h1 className="heading uppercase font-bold text-3xl flex justify-center text-primary md:text-2xl">
        Sign In
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Đăng nhập</h1>
          <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
        </div>

        <input
          type="text"
          placeholder="Tài Khoản *"
          {...register("username", {
            required: {
              value: true,
              message: "Tài khoản không được để trống",
            },
            pattern: {
              value: /^\S+$/,
              message: "Tài khoản không được chứa khoảng trắng",
            },
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <input
          type={"password"}
          placeholder="Mật Khẩu *"
          {...register("password", {
            required: {
              value: true,
              message: "Mật khẩu không được để trống",
            },
            pattern: {
              value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
              message: "Mật khẩu phải chứa ít nhất 1 chữ cái và 1 chữ số",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button title="Dang nhap" type="submit" />
      </form>
    </section>
  );
};
export default Login;
