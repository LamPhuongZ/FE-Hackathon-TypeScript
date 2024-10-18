import Button from "../../../components/button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerAPI } from "../../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../redux/configStore";
import { RegisterSchema } from "../../../utils/validation";
import Card from "../../../components/card/Card";

export type UserRegisterType = {
  fullname: string;
  email: string;
  password: string;
  role: string;
};

const Register: React.FC = () => {
  const dispatch: DispatchType = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterType>({
    mode: "onChange",
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<UserRegisterType> = (UserRegisterType) => {
    const actionAsync = registerAPI(UserRegisterType);
    dispatch(actionAsync);
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Card className="items-center self-stretch">
        <h1 className="heading uppercase font-bold text-3xl flex justify-center text-primary md:text-2xl">
          Đăng ký
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <h1>Đăng ký</h1>
            <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
          </div>

          <input
            type="text"
            placeholder="Tài Khoản *"
            {...register("username")}
          />
          {errors.username && <p>{errors.username.message}</p>}

          <input
            type="password"
            placeholder="Mật Khẩu *"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <Button title="Đăng nhập" type="submit" />
        </form>
      </Card>
    </div>
  );
};
export default Register;
